
(() => {
  // 資格データと表示先を確認
  if (typeof qualifications === "undefined" ||
      !Array.isArray(qualifications) ||
      qualifications.length === 0) {
    return;
  }

  const originalCard = document.getElementById("daily-qualification");

  if (!originalCard) {
    return;
  }

  const grid = originalCard.parentElement;

  // 日本時間の日付を取得
  const today = new Date().toLocaleDateString("sv-SE", {
    timeZone: "Asia/Tokyo"
  });

  // 日付を乱数の種にする
  let seed = Number(today.replaceAll("-", ""));

  function random() {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  }

  // 資格を日付に応じて並べ替える
  const shuffled = [...qualifications];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // 最大10件選択（同じ資格は選ばない）
  const selectedQualifications = shuffled.slice(0, 10);

  // 一覧ページと同じルールでタグの色を決める。
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

  const fragment = document.createDocumentFragment();

  selectedQualifications.forEach((qualification) => {
    // 既存のカードデザインを複製する
    const card = originalCard.cloneNode(true);

    const name = card.querySelector("#daily-name");
    const description = card.querySelector("#daily-description");
    const tagsContainer = card.querySelector("#daily-tags");

    // リンク先
    card.href = qualification.url;

    // 名前
    if (name) {
      name.textContent = qualification.name;
    }

    // 説明
    if (description) {
      description.textContent = qualification.description || "";
    }

    // タグ
    if (tagsContainer) {
      tagsContainer.replaceChildren();

      (qualification.tags || []).forEach((tag) => {
        const span = document.createElement("span");
        span.textContent = tag;
        if (tagColorClasses[tag]) span.classList.add(tagColorClasses[tag]);
        if (tag === '国家資格' || tag === '国家試験') span.classList.add('tag-national');
        tagsContainer.appendChild(span);
      });
    }

    // 複製によるIDの重複を防止する
    card.removeAttribute("id");

    card.querySelectorAll("[id]").forEach((element) => {
      element.removeAttribute("id");
    });

    // 一覧と同じ受験料の目安を表示する。細かな条件は詳細ページで確認する。
    if (qualification.feeSummary) {
      const fee = document.createElement('p');
      fee.className = 'card-fee';
      fee.textContent = '受験料 ' + qualification.feeSummary;
      if (qualification.feeNote) {
        const note = document.createElement('small');
        note.textContent = qualification.feeNote;
        fee.appendChild(note);
      }
      card.appendChild(fee);
    }

    fragment.appendChild(card);
  });

  // 1件表示を10件表示に変更
  grid.replaceChildren(fragment);
})();
