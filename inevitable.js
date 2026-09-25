// 表示する資格の候補
const qualifications = [
  {
    name: "ITパスポート",
    description: "ITや仕事に関する基礎知識を扱う試験です。",
    url: "it-passport.html"
  },
  {
    name: "基本情報技術者試験",
    description: "説明は後で入力",
    url: "fe.html"
  },
  {
    name: "応用情報技術者試験",
    description: "説明は後で入力",
    url: "ap.html"
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
