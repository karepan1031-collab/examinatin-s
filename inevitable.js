
// 日付取得
const today = new Date().toLocaleDateString("sv-SE", {
  timeZone: "Asia/Tokyo"
});

// 日付から、毎日同じ結果になる数を作る
const seed = Number(today.replaceAll("-", ""));
const value = Math.sin(seed) * 10000;
const random = value - Math.floor(value);

// 候補から1つ選ぶ
const index = Math.floor(random * qualifications.length);
const selected = qualifications[index];

// カードの資格名・説明・リンク先を変更する
document.getElementById("daily-name").textContent = selected.name;
document.getElementById("daily-description").textContent =
  selected.description;
document.getElementById("daily-qualification").href = selected.url;
// タグを表示する場所を取得する
const tagsContainer = document.getElementById("daily-tags");

// 中身を空にしてから、選ばれた資格のタグを入れる
tagsContainer.replaceChildren();

selected.tags.forEach((tag) => {
  const span = document.createElement("span");
  span.textContent = tag;
  tagsContainer.appendChild(span);
});
