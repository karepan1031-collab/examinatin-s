// 表示する資格の候補
const qualifications = [
  {
    name: "ITパスポート",
    description: "ITや仕事に関する基礎知識を扱う試験です。",
    url: "it-passport.html",
    tags: ["IT・情報", "国家試験", "CBT（パソコン受験）", "通年実施"]
  },
  {
    name: "基本情報技術者試験",
    description: "説明は後で入力",
    url: "fe.html",
    tags: ["IT・情報"]
  },
  {
    name: "応用情報技術者試験",
    description: "説明は後で入力",
    url: "ap.html",
    tags: ["IT・情報"]
  }
];

// 日本時間の日付を取得する
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
