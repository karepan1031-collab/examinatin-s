
// ========================================
// 資格検索
// ========================================

// 検索欄
const searchInput = document.getElementById("keyword");

// 検索結果を表示する場所
const searchList = document.getElementById("qualification-list");

// 検索結果の件数・メッセージ
const searchMessage = document.getElementById("search-result-message");

// URLから検索キーワードを取得する
// 例：search.html?q=基本
const parameters = new URLSearchParams(window.location.search);
const keyword = parameters.get("q") || "";

// 入力欄に検索した言葉を表示する
searchInput.value = keyword;

// 比較しやすいように文字を整える
function normalizeText(text) {
  return String(text)
    .normalize("NFKC")
    .toLowerCase()
    .trim();
}

// 資格カードを作成する
function createSearchCard(qualification) {

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

  // タグの入れ物
  const tags = document.createElement("div");
  tags.className = "qualification-tags card-tags";

  // タグを1つずつ作成
  (qualification.tags || []).forEach((tag) => {

    const label = document.createElement("span");
    label.textContent = tag;

    // ジャンルごとの色
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
      label.classList.add("tag-national");
    }

    tags.appendChild(label);
  });

  // 資格名 → 説明 → タグ
  card.append(name, description, tags);

  return card;
}

// 検索キーワードを整える
const normalizedKeyword = normalizeText(keyword);

// キーワードが入力されているか
if (normalizedKeyword === "") {

  searchMessage.textContent =
    "資格名を入力すると検索できます。";

} else {

  // 資格名にキーワードが含まれるか調べる
  const results = qualifications.filter((qualification) => {
    const name = normalizeText(qualification.name);
    return name.includes(normalizedKeyword);
  });

  // 検索結果がなかった場合
  if (results.length === 0) {

    searchMessage.textContent =
      "該当する資格はありません。";

  } else {

    // 件数を表示
    searchMessage.textContent =
      results.length + "件の資格が見つかりました。";

    // 検索結果のカードを表示
    results.forEach((qualification) => {
      const card = createSearchCard(qualification);
      searchList.appendChild(card);
    });

  }
}
