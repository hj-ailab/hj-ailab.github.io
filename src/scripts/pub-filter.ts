const form = document.querySelector<HTMLFormElement>('#publication-filters')!;
const entries = [...document.querySelectorAll<HTMLElement>('[data-publication]')];
const keys = ['q', 'topic', 'year', 'type', 'member'];
form.hidden = false;

function applyFilters() {
  const values = new FormData(form);
  const q = String(values.get('q') ?? '').trim().toLowerCase();
  const topic = String(values.get('topic'));
  const year = String(values.get('year'));
  const type = String(values.get('type'));
  const member = String(values.get('member'));
  let count = 0;
  for (const entry of entries) {
    const members = entry.dataset.members!.split(' ');
    const visible = entry.dataset.search!.includes(q)
      && (!topic || entry.dataset.topics!.split(' ').includes(topic))
      && (!year || entry.dataset.year === year)
      && (!type || entry.dataset.type === type)
      && (!member || (member === 'joint' ? members.includes('hyunjong') && members.includes('suho') : members.includes(member)));
    entry.hidden = !visible;
    if (visible) count++;
  }
  document.querySelectorAll<HTMLElement>('[data-year-group]').forEach(group => {
    group.hidden = !group.querySelector('[data-publication]:not([hidden])');
  });
  document.querySelector('#result-count')!.textContent = `${count} publication${count === 1 ? '' : 's'} · newest first`;
  document.querySelector<HTMLElement>('#empty-state')!.hidden = count !== 0;
}
function readURL() {
  const params = new URLSearchParams(location.search);
  form.reset();
  form.querySelector<HTMLInputElement>('#q')!.value = params.get('q') ?? '';
  for (const name of keys.slice(1)) {
    const input = [...form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]`)].find(input => input.value === params.get(name));
    if (input) input.checked = true;
  }
  applyFilters();
}
function writeURL() {
  const url = new URL(location.href);
  const values = new FormData(form);
  for (const key of keys) {
    const value = String(values.get(key) ?? '').trim();
    if (value) url.searchParams.set(key, value); else url.searchParams.delete(key);
  }
  history.replaceState(null, '', url);
  applyFilters();
}
form.addEventListener('input', writeURL);
form.addEventListener('submit', event => { event.preventDefault(); writeURL(); });
document.querySelectorAll('[data-clear]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  form.reset();
  writeURL();
}));
window.addEventListener('popstate', readURL);
readURL();
