// ジャンルページ用：共通資格データからカードを表示
const genreCategory = document.body.dataset.category;
const genreList = document.getElementById("qualification-list");
const genreItems = qualifications.filter(item => item.category === genreCategory);
const genreCount = document.getElementById("qualification-count");
if (genreCount) genreCount.textContent = genreItems.length;

genreItems.forEach(item => {
  const card = document.createElement("a");
  card.className = "qualification-card exam-card";
  card.href = item.url;
  const name = document.createElement("h3");
  name.textContent = item.name;
  const desc = document.createElement("p");
  desc.className = "card-description";
  desc.textContent = item.description;
  const tags = document.createElement("div");
  tags.className = "qualification-tags card-tags";
  item.tags.filter(tag => tag !== item.tags[0]).forEach(tag => {
    const label = document.createElement("span");
    label.textContent = tag;
    const colors = {
      "IT・情報": "tag-genre-it",
      "ビジネス・会計": "tag-genre-business",
      "語学": "tag-genre-language",
      "医療・福祉": "tag-genre-medical",
      "法律・不動産": "tag-genre-law",
      "技術・工業": "tag-genre-industrial",
      "旅行・観光": "tag-genre-travel",
      "デザイン・色彩": "tag-genre-design"
    };
    if (colors[tag]) label.classList.add(colors[tag]);
    if (tag === "国家試験" || tag === "国家資格") label.classList.add("tag-national");
    tags.appendChild(label);
  });
  card.append(name, desc, tags);
  if (item.feeSummary) {
    const fee = document.createElement("p");
    fee.className = "card-fee";
    fee.textContent = "受験料 " + item.feeSummary;
    if (item.feeNote) {
      const note = document.createElement("small");
      note.textContent = item.feeNote;
      fee.appendChild(note);
    }
    card.appendChild(fee);
  }
  genreList.appendChild(card);
});
