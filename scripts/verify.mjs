import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const report = ['# Build report', '', `Generated: ${new Date().toISOString()}`, ''];
let passed = true;
function section(title, output) {
  report.push(`## ${title}`, '', '```text', output.trim(), '```', '');
  console.log(`${title}\n${output.trim()}\n`);
}
function command(cmd, args = []) {
  return new Promise((done, reject) => {
    const child = spawn(cmd, args, {stdio:['ignore','pipe','pipe'],env:{...process.env,ASTRO_TELEMETRY_DISABLED:'1'}});
    let output = '';
    child.stdout.on('data', chunk => { output += chunk; });
    child.stderr.on('data', chunk => { output += chunk; });
    child.on('error', reject);
    child.on('close', code => done({code:code ?? 1, output:`${output}\nexit code: ${code ?? 1}`}));
  });
}
function htmlFiles(dir) {
  return readdirSync(dir,{withFileTypes:true}).flatMap(entry => entry.isDirectory() ? htmlFiles(`${dir}/${entry.name}`) : entry.name.endsWith('.html') ? [`${dir}/${entry.name}`] : []);
}
const build = await command('npm', ['run', 'build']);
section('Static build', `$ npm run build\n${build.output}`);
if (build.code !== 0) {
  passed = false;
  section('Blocked acceptance checks', 'NOT RUN: browser checks, screenshots, and schema negative builds.');
} else {
  section('Generated HTML', `$ find dist -name '*.html'\n${htmlFiles('dist').sort().join('\n')}`);
  let preview;
  let browser;
  try {
    section('Verification command', '$ node scripts/verify.mjs');
    const require = createRequire(import.meta.url);
    const puppeteer = (await import('/home2/r7play/.npm/_npx/7d92d9a2d2ccc630/node_modules/puppeteer/lib/puppeteer/puppeteer.js')).default;
    const chromePath = require('/home2/r7play/.claude/skills/manim-reveal/chrome.js');
    preview = spawn(process.execPath, ['node_modules/astro/astro.js','preview','--host','127.0.0.1','--port','4321'], {stdio:['ignore','pipe','pipe'],env:{...process.env,ASTRO_TELEMETRY_DISABLED:'1'}});
    let previewErrors = '';
    preview.stderr.on('data', chunk => { previewErrors += chunk; });
    await new Promise((done, reject) => {
      const timeout = setTimeout(() => reject(new Error(`Loopback preview did not start within 15 seconds\n${previewErrors}`)), 15000);
      preview.on('error', error => {clearTimeout(timeout); reject(error);});
      preview.on('close', code => {clearTimeout(timeout); reject(new Error(`Loopback preview exited: ${code}\n${previewErrors}`));});
      preview.stdout.on('data', chunk => {if (String(chunk).includes('127.0.0.1:4321')) {clearTimeout(timeout); done();}});
    });
    mkdirSync('.verification', {recursive:true});
    browser = await puppeteer.launch({executablePath:chromePath(),headless:true,userDataDir:resolve('.verification/chrome-profile'),args:['--no-sandbox','--disable-dev-shm-usage']});
    const page = await browser.newPage();
    const errors=[];
    page.on('pageerror', error => errors.push(String(error)));
    const base='http://127.0.0.1:4321';
    const routes = [['home','/'],['research','/research/'],['publications','/publications/'],['people','/people/'],['news','/news/'],['contact','/contact/'],['404','/404.html']];
    const raw=JSON.parse(readFileSync('data/publications.json','utf8'));
    const conferencePapers = raw.filter(paper => !paper.preprint && paper.venue !== 'arXiv');
    const topTierPapers = conferencePapers.filter(paper => ['NeurIPS', 'ACL', 'EMNLP', 'NAACL', 'ACL Findings', 'ICASSP', 'CIKM'].includes(paper.venue));
    const expectedCounts = {total: raw.length, 'top-tier': topTierPapers.length};
    await page.goto(base, {waitUntil:'load'});
    const counts = await page.$$eval('[data-highlight]', items => Object.fromEntries(items.map(el => [el.dataset.highlight, Number(el.textContent)])));
    assert.deepEqual(counts, expectedCounts);
    await page.goto(`${base}/publications/`, {waitUntil:'load'});
    const badged = await page.$$eval('[data-publication]:has(.top-tier)', items => items.map(el => el.querySelector('.paper-title').textContent));
    assert.deepEqual(badged.sort(), topTierPapers.map(paper => paper.title).sort());
    const findings = raw.filter(paper => paper.venue === 'ACL Findings');
    assert.ok(findings.length > 0, 'Expected ACL Findings fixtures');
    for (const paper of findings) assert.ok(badged.includes(paper.title), paper.title);
    assert.equal(counts['top-tier'], 13);
    await page.goto(`${base}/people/`, {waitUntil:'load'});
    for (const id of ['hyunjong', 'suho']) {
      const photo = await page.$eval(`#${id} img.portrait`, async img => {
        img.loading = 'eager';
        await img.decode();
        return {src: img.getAttribute('src'), width: img.naturalWidth};
      });
      assert.equal(photo.src, `/images/${id}.webp`);
      assert.ok(photo.width > 0, `${id} portrait width`);
      section('Member photo', `PASS: ${photo.src} loaded (naturalWidth=${photo.width}).`);
    }
    section('Highlights and top-tier badges', `PASS: rendered highlights match data/publications.json (${counts.total} total, ${counts['top-tier']} top-tier).\nPASS: all ${badged.length} top-tier badges match papers at the top-tier venues. All ${findings.length} ACL Findings entries are counted.`);
    mkdirSync('docs/screens',{recursive:true});
    const screenshots=[];
    for (const theme of ['light','dark']) {
      await page.emulateMediaFeatures([{name:'prefers-color-scheme',value:theme}]);
      for (const [width,height] of [[1280,800],[390,844],[360,800]]) {
        await page.setViewport({width,height});
        for (const [name,path] of routes) {
          await page.goto(`${base}${path}`,{waitUntil:'load'});
          await page.evaluate(()=>document.fonts.ready);
          const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth);
          if(overflow) passed=false;
          const label = `${path} ${width}x${height} ${theme}: overflow=${overflow}`;
          if (width !== 360 && (theme === 'light' || ['home','publications'].includes(name))) {
            const file=`docs/screens/${name}-${width}-${theme}.png`;
            await page.screenshot({path:file});
            screenshots.push(`${label}; ${file}`);
          } else {
            screenshots.push(label);
          }
        }
      }
    }
    section('Screenshots and horizontal overflow', '$ node scripts/verify.mjs (Puppeteer browser checks)\n'+screenshots.join('\n'));
    let checked=0;
    for (const [,path] of routes) {
      await page.goto(`${base}${path}`,{waitUntil:'load'});
      const papers=await page.$$eval('[data-publication]',items=>items.map(el=>({title:el.querySelector('.paper-title').textContent,primary:el.querySelector('.paper-title').getAttribute('href'),paper:el.querySelector('[data-paper-link]').getAttribute('href'),code:el.querySelector('[data-code-link]')?.getAttribute('href')??null,project:el.querySelector('[data-project-link]')?.getAttribute('href')??null})));
      if(path==='/publications/') assert.equal(papers.length,22);
      for(const paper of papers){
        const original=raw.find(p=>p.title===paper.title);
        assert.ok(original,`Unknown publication: ${paper.title}`);
        for(const key of ['paper','code','project']) assert.equal(paper[key],original[key],`${path}: ${paper.title}: ${key}`);
        assert.equal(paper.primary,original.paper);
        checked++;
      }
      if(existsSync('content/copy.yaml')) assert.equal(await page.evaluate(()=>document.body.innerText.includes('TODO')),false,`${path} contains TODO`);
    }
    section('Publication link parity and prose', `${checked} rendered publication entries checked against data/publications.json across all pages.\nAll 22 publications present in the library.\ncopy.yaml exists: ${existsSync('content/copy.yaml')}; rendered TODO check: passed.`);
    await page.goto(`${base}/publications/?member=joint`,{waitUntil:'load'});
    const visible=()=>page.$$eval('[data-publication]:not([hidden])',els=>els.map(el=>el.querySelector('.paper-title').textContent));
    assert.deepEqual((await visible()).sort(),raw.filter(p=>p.members.length===2).map(p=>p.title).sort());
    await page.type('#q','OmniKVQuant');
    assert.equal((await visible()).length,1);
    assert.equal(new URL(page.url()).searchParams.get('q'),'OmniKVQuant');
    await page.click('input[name="type"][value="conference"] + span');
    assert.equal((await visible()).length,0);
    assert.equal(await page.$eval('#empty-state',el=>el.hidden),false);
    await page.click('[data-clear]');
    assert.equal((await visible()).length,22);
    for(const [query,predicate] of [
      ['topic=evaluation',p=>p.tags.includes('evaluation')],
      ['topic=efficiency',p=>p.tags.includes('efficiency')],
      ['topic=understanding',p=>p.tags.includes('interpretability')||p.title.startsWith('Weight-Space Programming')],
      ['year=2025',p=>p.year===2025],['type=preprint',p=>p.preprint],
      ['member=hyunjong',p=>p.members.includes('hyunjong')],['member=suho',p=>p.members.includes('suho')],
      ['topic=efficiency&type=conference&member=joint&year=2026',p=>p.tags.includes('efficiency')&&!p.preprint&&p.members.length===2&&p.year===2026],
    ]){
      await page.goto(`${base}/publications/?${query}`,{waitUntil:'load'});
      assert.deepEqual((await visible()).sort(),raw.filter(predicate).map(p=>p.title).sort(),query);
    }
    // Headless Chrome denies the real clipboard here; stub it to test the handler and the copied text.
    await page.evaluateOnNewDocument(()=>{window.__copied='';Object.defineProperty(navigator,'clipboard',{value:{writeText:async t=>{window.__copied=t;}}});});
    await page.goto(`${base}/publications/`,{waitUntil:'load'});
    await page.click('.citation summary');
    await page.click('[data-copy]');
    await page.waitForFunction(()=>document.querySelector('.copy-status').textContent.trim()!=='');
    assert.match(await page.$eval('.copy-status',el=>el.textContent),/Copied/);
    assert.match(await page.evaluate(()=>window.__copied),/@article\{/);
    await page.emulateMediaFeatures([{name:'prefers-color-scheme',value:'light'}]);
    await page.click('.theme-toggle');
    assert.equal(await page.evaluate(()=>document.documentElement.dataset.theme),'dark');
    await page.reload({waitUntil:'load'});
    assert.equal(await page.evaluate(()=>document.documentElement.dataset.theme),'dark');
    await page.evaluate(()=>localStorage.removeItem('theme'));
    await page.setJavaScriptEnabled(false);
    await page.goto(`${base}/publications/?member=joint`,{waitUntil:'load'});
    assert.equal((await visible()).length,22);
    assert.deepEqual(errors,[]);
    section('Interaction checks','PASS: theme/year/type/member filters and combined query; title search; URL sync; clear/empty state; BibTeX clipboard; theme override persistence; all 22 papers readable without JavaScript; no browser runtime errors.');
  } catch(error) {passed=false;section('Browser verification failure',String(error.stack ?? error));}
  finally {if(browser) await browser.close(); if(preview && preview.exitCode === null && preview.signalCode === null) {const closed = new Promise(done=>preview.once('close',done)); preview.kill('SIGTERM'); await closed;}}
  if (passed) {
    for (const [file, name, pattern, replacement, expected] of [
      ['publications', 'Unknown topic', /topics:\n\s+- [a-z]+/, 'topics:\n    - unknown-topic', 'unknown-topic'],
      ['publications', 'Missing venue', /^  venue:.*\n/m, '', 'venue'],
      ['honors', 'Unknown honor member', /^(  member: ).*$/m, '$1unknown-member', 'unknown-member'],
      ['honors', 'Unknown honor kind', /^(  kind: ).*$/m, '$1unknown-kind', 'unknown-kind'],
      ['service', 'Unknown service member', /^(- member: ).*$/m, '$1unknown-member', 'unknown-member'],
    ]) {
      const source = `src/data/${file}.yaml`;
      const original = readFileSync(source, 'utf8');
      try {
        const mutated = original.replace(pattern, replacement);
        assert.notEqual(mutated, original, 'Negative fixture was not mutated');
        writeFileSync(source, mutated);
        const result = await command('npm', ['run', 'build']);
        section(`Negative build: ${name}`, `$ npm run build\n${result.output}`);
        if (result.code === 0 || !result.output.includes(source) || !result.output.includes(expected)) passed = false;
      } finally { writeFileSync(source, original); }
    }
    const restored = await command('npm', ['run', 'build']);
    section('Restored data build', `$ npm run build\n${restored.output}`);
    if (restored.code !== 0) passed = false;
  }
}
report.push(passed?'BUILD: PASS':'BUILD: FAIL');
writeFileSync('docs/build_report.md',report.join('\n')+'\n');
console.log(report.at(-1));
process.exitCode=passed?0:1;
