
 // カードを並べる場所
const list = document.getElementById("qualification-list");

// IT・情報の資格を取り出す
const itQualifications = qualifications.filter((qualification) => {
  return qualification.category === "it";
});

// 資格ごとにカードを作成する
itQualifications.forEach((qualification) => {

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

    // ジャンルごとに色を分ける
    if (tag === "IT・情報") {
      label.classList.add("tag-genre-it");
    } else if (tag === "ビジネス") {
      label.classList.add("tag-genre-business");
    } else if (tag === "語学") {
      label.classList.add("tag-genre-language");
    } else if (tag === "医療・福祉") {
      label.classList.add("tag-genre-medical");
    } else if (
      tag === "国家試験" ||
      tag === "国家資格"
    ) {
      // 国家試験・国家資格は赤色
      label.classList.add("tag-national");
    }

    tags.appendChild(label);
  });

  // 資格名 → 説明 → タグ
  card.append(name, description, tags);

  // カードを一覧に追加
  list.appendChild(card);

});
