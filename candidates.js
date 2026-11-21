(() => {
  const key = 'qualificationCandidates';
  const page = location.pathname.split('/').pop();
  const detailButton = document.getElementById('candidate-button');
  const form = document.getElementById('candidate-form');
  const select = document.getElementById('candidate-select');
  const output = document.getElementById('comparison');
  if (!detailButton && !form) return;
  let selected = read().slice(0, 3);

  function read() {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || '[]');
      return Array.isArray(saved) ? [...new Set(saved)].filter(url => qualifications.some(q => q.url === url)) : [];
    } catch {
      return [];
    }
  }

  function toggle(url) {
    const saved = read();
    const removing = saved.includes(url);
    const updated = removing ? saved.filter(item => item !== url) : [...saved, url];
    try {
      localStorage.setItem(key, JSON.stringify(updated));
      selected = selected.filter(item => updated.includes(item));
      if (!removing && selected.length < 3) selected.push(url);
    } catch {
      alert('候補を保存できませんでした。ブラウザの保存設定を確認してください。');
    }
    render();
  }

  function element(tag, text) {
    const node = document.createElement(tag);
    node.textContent = text;
    return node;
  }

  function renderComparison() {
    output.replaceChildren();
    const status = document.getElementById('comparison-status');
    output.hidden = selected.length < 2;
    document.querySelector('.comparison-scroll-hint').hidden = selected.length < 2;
    status.textContent = !read().length ? '' : selected.length < 2 ? '比較する資格を2〜3件選んでください。' : selected.length + '件を比較しています。確認日は項目ごとに表示しています。';
    if (selected.length < 2) return;
    const table = document.createElement('table');
    table.className = 'candidate-table';
    table.append(element('caption', '受験条件・費用・用途の比較'));
    const head = table.createTHead().insertRow();
    const corner = element('th', '比較項目');
    corner.scope = 'col';
    head.append(corner);
    const body = table.createTBody();
    for (const label of Object.keys(compareFacts[selected[0]])) {
      const row = body.insertRow();
      const heading = element('th', label);
      heading.scope = 'row';
      row.append(heading);
    }
    for (const url of selected) {
      const q = qualifications.find(item => item.url === url);
      const heading = element('th', '');
      heading.scope = 'col';
      const link = element('a', q.name);
      link.href = url;
      heading.append(link);
      head.append(heading);
      for (const row of body.rows) {
        const label = row.cells[0].textContent;
        const cell = row.insertCell();
        cell.append(element('p', compareFacts[url][label]));
        const date = comparisonDates[url][label];
        const age = (Date.now() - Date.parse(date + 'T00:00:00+09:00')) / 86400000;
        const note = date === '未確認' ? '受付状況は未確認です。' : '記録上の確認日 ' + date;
        cell.append(element('small', note));
        if (age > 45) cell.append(element('p', '確認から45日以上経過しています。最新情報は詳細ページの公式案内をご確認ください。'));
      }
    }
    output.append(table);
  }

  function render() {
    const saved = read();
    if (detailButton) {
      detailButton.setAttribute('aria-pressed', String(saved.includes(page)));
      detailButton.textContent = saved.includes(page) ? '候補から外す' : '候補に保存';
      return;
    }
    selected = selected.filter(url => saved.includes(url));
    const choices = qualifications.filter(q => !saved.includes(q.url));
    select.replaceChildren(new Option('資格を選んでください', ''), ...choices.map(q => new Option(q.name, q.url)));
    form.querySelector('button').disabled = !choices.length;
    document.getElementById('candidate-status').textContent = saved.length ? '保存した候補 ' + saved.length + '件。比較には最大3件を選べます。' : 'まだ候補がありません。';
    const list = document.getElementById('candidate-list');
    list.hidden = !saved.length;
    list.replaceChildren(element('legend', '比較する資格を2〜3件選ぶ'));
    for (const url of saved) {
      const q = qualifications.find(item => item.url === url);
      const row = element('div', '');
      const label = element('label', '');
      const box = document.createElement('input');
      box.type = 'checkbox';
      box.checked = selected.includes(url);
      box.disabled = !box.checked && selected.length >= 3;
      box.addEventListener('change', () => {
        selected = box.checked ? [...selected, url] : selected.filter(item => item !== url);
        for (const input of list.querySelectorAll('input')) input.disabled = !input.checked && selected.length >= 3;
        renderComparison();
      });
      label.append(box, document.createTextNode(q.name));
      const remove = element('button', '候補から外す');
      remove.type = 'button';
      remove.setAttribute('aria-label', q.name + 'を候補から外す');
      remove.onclick = () => { toggle(url); select.focus(); };
      row.append(label, remove);
      list.append(row);
    }
    renderComparison();
  }

  detailButton?.addEventListener('click', () => toggle(page));
  document.querySelectorAll('[data-compare]').forEach(button => {
    button.addEventListener('click', () => {
      const urls = button.dataset.compare.split(',').filter(url => qualifications.some(q => q.url === url));
      if (urls.length < 2 || urls.length > 3) return;
      try {
        localStorage.setItem(key, JSON.stringify([...new Set([...read(), ...urls])]));
        selected = urls;
      } catch {
        alert('候補を保存できませんでした。ブラウザの保存設定を確認してください。');
        return;
      }
      render();
      output.focus({ preventScroll: true });
      document.querySelector('.comparison-scroll-hint').scrollIntoView({ block: 'start' });
    });
  });
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (select.value && !read().includes(select.value)) toggle(select.value);
  });
  window.addEventListener('storage', render);
  window.addEventListener('pageshow', render);
  render();
})();
