// カードを並べる場所
const list = document.getElementById("qualification-list");

// 資格を1つずつ取り出してカードを作る
qualifications.forEach((qualification) => {
  const card = document.createElement("a");
  card.className = "qualification-card exam-card";
  card.href = qualification.url;

  const name = document.createElement("h3");
  name.textContent = qualification.name;

  const description = document.createElement("p");
  description.textContent = qualification.description;

  const tags = document.createElement("div");
  tags.className = "qualification-tags";

  qualification.tags.forEach((tag) => {
    const label = document.createElement("span");
    label.textContent = tag;
    tags.appendChild(label);
  });

  const more = document.createElement("span");
  more.className = "card-more";
  more.textContent = "詳細を見る →";

  card.append(name, description, tags, more);
  list.appendChild(card);
});
