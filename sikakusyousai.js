// 詳細ページの見出しとタグは、一覧と同じ資格データを使用する。
const currentPage = window.location.pathname.split('/').pop();
const qualification = qualifications.find(item => item.url === currentPage);

if (qualification) {
  const name = document.getElementById('qualification-name');
  if (name) name.textContent = qualification.name;

  const tagsContainer = document.getElementById('qualification-tags');
  if (tagsContainer) {
    const tagColorClasses = {
      'IT・情報': 'tag-genre-it',
      'ビジネス・会計': 'tag-genre-business',
      '語学': 'tag-genre-language',
      '法律・不動産': 'tag-genre-law',
      '技術・工業': 'tag-genre-industrial',
      '医療・福祉': 'tag-genre-medical',
      '旅行・観光': 'tag-genre-travel',
      'デザイン・色彩': 'tag-genre-design'
    };
    tagsContainer.replaceChildren();
    (qualification.tags || []).forEach(tag => {
      const label = document.createElement('span');
      label.textContent = tag;
      if (tagColorClasses[tag]) label.classList.add(tagColorClasses[tag]);
      if (tag === '国家試験' || tag === '国家資格') label.classList.add('tag-national');
      tagsContainer.appendChild(label);
    });
  }
}
