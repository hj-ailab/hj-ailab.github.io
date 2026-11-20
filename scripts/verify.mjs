import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { spawn, spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const report = ['# Build report', '', `Generated: ${new Date().toISOString()}`, '', 'Pages deployment is configured for `https://hj-ailab.github.io/`, base `/`. Set repository Settings → Pages → Source to **GitHub Actions** before deployment. No remote settings, repositories, commits, or pushes are changed by this check.', '', 'Implementation follows [Astro’s GitHub Pages deployment guide](https://docs.astro.build/en/guides/deploy/github/).', '', 'The four publications without a mapped theme remain in the full library with their original tags. No additional themes, abstracts, collaborators, or paper illustrations are inferred. BibTeX uses the supplied venue: arXiv venue entries become articles; accepted venue entries become proceedings even when their paper URL points to arXiv.', ''];
let passed = true;
function section(title, output) {
  report.push(`## ${title}`, '', '```text', output.trim(), '```', '');
  console.log(`${title}\n${output.trim()}\n`);
}
function command(cmd, args = []) {
  const result = spawnSync(cmd, args, {encoding:'utf8', env:{...process.env, ASTRO_TELEMETRY_DISABLED:'1'}, maxBuffer:10*1024*1024});
  return {code:result.error ? 1 : result.status ?? 1, output:`${result.stdout ?? ''}${result.stderr ?? ''}${result.error ? String(result.error) : ''}\nexit code: ${result.status ?? 1}`};
}
function htmlFiles(dir) {
  return readdirSync(dir,{withFileTypes:true}).flatMap(entry => entry.isDirectory() ? htmlFiles(`${dir}/${entry.name}`) : entry.name.endsWith('.html') ? [`${dir}/${entry.name}`] : []);
}
mkdirSync('.verification', {recursive:true});
const build = command('bash', ['-c', 'npm ci && npm run build']);
section('Clean install and build', `$ npm ci && npm run build\n${build.output}`);
if (build.code !== 0) {
  passed = false;
  section('Blocked acceptance checks', 'NOT RUN: generated HTML listing, schema negative builds, screenshots, overflow, dist link parity, and rendered TODO checks. A successful dependency install and build are required.');
} else {
  section('Generated HTML', `$ find dist -name '*.html'\n${htmlFiles('dist').sort().join('\n')}`);
  const source = 'src/data/publications.yaml';
  const original = readFileSync(source, 'utf8');
  writeFileSync('.verification/publications.original.yaml', original);
  for (const [name, mutate, expected] of [
    ['Unknown topic', value => value.replace(/topics:\n\s+- [a-z]+/, 'topics:\n    - unknown-topic'), 'unknown-topic'],
    ['Missing venue', value => value.replace(/^  venue:.*\n/m, ''), 'venue'],
  ]) {
    try {
      const mutated = mutate(original);
      assert.notEqual(mutated, original, 'Negative fixture was not mutated');
      writeFileSync(source, mutated);
      const result = command('npm', ['run','build']);
      section(`Negative build: ${name}`, `$ npm run build\n${result.output}`);
      if (result.code === 0 || !result.output.includes(expected)) passed = false;
    } finally { writeFileSync(source, original); }
  }
  assert.equal(readFileSync(source,'utf8'), original);
  const restored = command('npm',['run','build']);
  section('Restored data build', `$ npm run build\n${restored.output}`);
  if (restored.code !== 0) passed = false;
  else {
    let preview;
    let browser;
    try {
      const require = createRequire(import.meta.url);
      const puppeteer = (await import('/home2/r7play/.npm/_npx/7d92d9a2d2ccc630/node_modules/puppeteer/lib/puppeteer/puppeteer.js')).default;
      const chromePath = require('/home2/r7play/.claude/skills/manim-reveal/chrome.js');
      preview = spawn(process.execPath, ['node_modules/astro/astro.js','preview','--host','127.0.0.1','--port','4321'], {stdio:['ignore','pipe','pipe'],env:{...process.env,ASTRO_TELEMETRY_DISABLED:'1'}});
      await new Promise((done, reject) => {
        const timeout = setTimeout(() => reject(new Error('Preview did not start within 15 seconds')), 15000);
        preview.on('error', error => {clearTimeout(timeout); reject(error);});
        preview.on('exit', code => {clearTimeout(timeout); reject(new Error(`Preview exited: ${code}`));});
        preview.stdout.on('data', chunk => {if (String(chunk).includes('127.0.0.1:4321')) {clearTimeout(timeout); done();}});
      });
      browser = await puppeteer.launch({executablePath:chromePath(),headless:true,userDataDir:resolve('.verification/chrome-profile'),args:['--no-sandbox','--disable-dev-shm-usage']});
      const page = await browser.newPage();
      const errors=[];
      page.on('pageerror', error => errors.push(String(error)));
      const base='http://127.0.0.1:4321';
      const routes = [['home','/'],['research','/research/'],['publications','/publications/'],['people','/people/'],['news','/news/'],['contact','/contact/'],['404','/404.html']];
      mkdirSync('docs/screens',{recursive:true});
      const screenshots=[];
      for (const theme of ['light','dark']) {
        await page.emulateMediaFeatures([{name:'prefers-color-scheme',value:theme}]);
        for (const [width,height] of [[1280,800],[390,844]]) {
          await page.setViewport({width,height});
          for (const [name,path] of routes.filter(([name])=>theme==='light'||['home','publications'].includes(name))) {
            await page.goto(`${base}${path}`,{waitUntil:'networkidle0'});
            await page.evaluate(()=>document.fonts.ready);
            const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth);
            if(overflow) passed=false;
            const file=`docs/screens/${name}-${width}-${theme}.png`;
            await page.screenshot({path:file});
            screenshots.push(`${path} ${width}x${height} ${theme}: overflow=${overflow}; ${file}`);
          }
        }
      }
      for (const [,path] of routes) {
        await page.setViewport({width:360,height:800});
        await page.goto(`${base}${path}`,{waitUntil:'networkidle0'});
        const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth);
        if(overflow) passed=false;
        screenshots.push(`${path} 360x800: overflow=${overflow}`);
      }
      section('Screenshots and horizontal overflow', '$ node scripts/verify.mjs (Puppeteer browser checks)\n'+screenshots.join('\n'));
      const raw=JSON.parse(readFileSync('data/publications.json','utf8'));
      let checked=0;
      for (const [,path] of routes) {
        await page.goto(`${base}${path}`,{waitUntil:'networkidle0'});
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
      await page.goto(`${base}/publications/?member=joint`,{waitUntil:'networkidle0'});
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
        await page.goto(`${base}/publications/?${query}`,{waitUntil:'networkidle0'});
        assert.deepEqual((await visible()).sort(),raw.filter(predicate).map(p=>p.title).sort(),query);
      }
      // Headless Chrome denies the real clipboard here; stub it to test the handler and the copied text.
      await page.evaluateOnNewDocument(()=>{window.__copied='';Object.defineProperty(navigator,'clipboard',{value:{writeText:async t=>{window.__copied=t;}}});});
      await page.goto(`${base}/publications/`,{waitUntil:'networkidle0'});
      await page.click('.citation summary');
      await page.click('[data-copy]');
      await page.waitForFunction(()=>document.querySelector('.copy-status').textContent.trim()!=='');
      assert.match(await page.$eval('.copy-status',el=>el.textContent),/Copied/);
      assert.match(await page.evaluate(()=>window.__copied),/@article\{/);
      await page.emulateMediaFeatures([{name:'prefers-color-scheme',value:'light'}]);
      await page.click('.theme-toggle');
      assert.equal(await page.evaluate(()=>document.documentElement.dataset.theme),'dark');
      await page.reload({waitUntil:'networkidle0'});
      assert.equal(await page.evaluate(()=>document.documentElement.dataset.theme),'dark');
      await page.evaluate(()=>localStorage.removeItem('theme'));
      await page.setJavaScriptEnabled(false);
      await page.goto(`${base}/publications/?member=joint`,{waitUntil:'networkidle0'});
      assert.equal((await visible()).length,22);
      assert.deepEqual(errors,[]);
      section('Interaction checks','PASS: theme/year/type/member filters and combined query; title search; URL sync; clear/empty state; BibTeX clipboard; theme override persistence; all 22 papers readable without JavaScript; no browser runtime errors.');
    } catch(error) {passed=false;section('Browser verification failure',String(error.stack ?? error));}
    finally {if(browser) await browser.close(); if(preview) {preview.kill('SIGTERM'); await new Promise(done=>{if(preview.exitCode!==null) done(); else preview.once('exit',done);});}}
  }
}
report.push(passed?'BUILD: PASS':'BUILD: FAIL');
writeFileSync('docs/build_report.md',report.join('\n')+'\n');
console.log(report.at(-1));
process.exitCode=passed?0:1;
