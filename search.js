
// 検索欄と結果表示エリア
const searchInput = document.getElementById("keyword");
const searchList = document.getElementById("qualification-list");
const searchMessage = document.getElementById("search-result-message");

// URLから検索キーワードを取得
const params = new URLSearchParams(window.location.search);
const keyword = params.get("q") || "";

// 検索欄にキーワードを表示
searchInput.value = keyword;

// ジャンル別タグの色
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

// 検索用に文字を整える
function normalizeText(text) {
  return String(text)
    .normalize("NFKC")
    .toLowerCase()
    .trim();
}

// 資格カードを作成
function createSearchCard(qualification) {
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

    if (genreTagClasses[tag]) {
      label.classList.add(genreTagClasses[tag]);
    }

    if (tag === "国家試験" || tag === "国家資格") {
      label.classList.add("tag-national");
    }

    tags.appendChild(label);
  });

  card.append(name, description, tags);
  return card;
}

// 検索処理
const normalizedKeyword = normalizeText(keyword);

if (normalizedKeyword === "") {
  searchMessage.textContent = "資格名を入力すると検索できます。";
} else {
  const results = qualifications.filter((qualification) => {
    return normalizeText(qualification.name).includes(normalizedKeyword);
  });

  if (results.length === 0) {
    searchMessage.textContent = "該当する資格はありません。";
  } else {
    searchMessage.textContent =
      results.length + "件の資格が見つかりました。";

    results.forEach((qualification) => {
      searchList.appendChild(createSearchCard(qualification));
    });
  }
}
