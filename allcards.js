
// 資格一覧を表示する場所
const allList = document.getElementById("qualification-list");

// ジャンルごとのタグの色
const genreTagClasses = {
  "IT・情報": "tag-genre-it",
  "ビジネス・会計": "tag-genre-business",
  "語学": "tag-genre-language",
  "法律・不動産": "tag-genre-law",
  "技術・工業": "tag-genre-industrial",
  "医療・福祉": "tag-genre-medical",
  "旅行・観光": "tag-genre-travel",
  "デザイン・色彩": "tag-genre-design"
};

// 登録されている資格を1つずつ表示
qualifications.forEach((qualification) => {

  // カード全体をリンクにする
  const card = document.createElement("a");
  card.className = "qualification-card exam-card";
  card.href = qualification.url;

  // 資格名
  const name = document.createElement("h3");
  name.textContent = qualification.name;

  // 説明文
  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = qualification.description;

  // タグ
  const tags = document.createElement("div");
  tags.className = "qualification-tags card-tags";

  (qualification.tags || []).forEach((tag) => {
    const label = document.createElement("span");
    label.textContent = tag;

    // ジャンル別の色を付ける
    if (genreTagClasses[tag]) {
      label.classList.add(genreTagClasses[tag]);
    }

    // 国家試験・国家資格は赤色
    if (tag === "国家試験" || tag === "国家資格") {
      label.classList.add("tag-national");
    }

    tags.appendChild(label);
  });

  // 資格名 → 説明 → タグの順に並べる
  card.append(name, description, tags);

  // 一覧に追加
  allList.appendChild(card);

});
