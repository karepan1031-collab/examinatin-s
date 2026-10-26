
// 全資格一覧のカードを表示する

// カードを並べる場所
const allList = document.getElementById("qualification-list");

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

  // タグをまとめる場所
  const tags = document.createElement("div");
  tags.className = "qualification-tags card-tags";

  // タグを1つずつ作る
  qualification.tags.forEach((tag) => {

    const label = document.createElement("span");
    label.textContent = tag;

    // ジャンルごとの色
    
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

if (genreTagClasses[tag]) {
  label.classList.add(genreTagClasses[tag]);
} else if (tag === "国家試験" || tag === "国家資格") {
  label.classList.add("tag-national");
}


  // 資格名 → 説明 → タグ
  card.append(name, description, tags);

  // 一覧に追加
  allList.appendChild(card);

});
