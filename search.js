// 検索は資格の正式名称だけでなく、略称・別名・関心のある分野でも探せます。
// 掲載資格の共通データ（sikakucard.js）を基準に、検索用の呼び名のみ追加しています。
const searchInput = document.getElementById("keyword");
const searchList = document.getElementById("qualification-list");
const searchMessage = document.getElementById("search-result-message");
const params = new URLSearchParams(window.location.search);
const keyword = params.get("q") || "";
searchInput.value = keyword;

const genreTagClasses = {
  "IT・情報": "tag-genre-it", "ビジネス・会計": "tag-genre-business",
  "語学": "tag-genre-language", "法律・不動産": "tag-genre-law",
  "技術・工業": "tag-genre-industrial", "医療・福祉": "tag-genre-medical",
  "旅行・観光": "tag-genre-travel", "デザイン・色彩": "tag-genre-design"
};

// 最初に思い浮かぶ言葉や、資格を知らない人が使う目的語。
// 不正確な別名で関係のない資格を出さないように、関連性のある語に限定しています。
const searchAliases = {
  "it-passport.html": ["itパス", "iパス", "ip", "it基礎"],
  "fe.html": ["基本情報", "基本情報技術者", "fe"],
  "ap.html": ["応用情報", "ap"],
  "sg.html": ["セキュマネ", "sg", "情報セキュリティ"],
  "sc.html": ["登録セキスペ", "セキスペ", "sc", "サイバーセキュリティ"],
  "au.html": ["システム監査", "au"],
  "db.html": ["データベース", "db"],
  "es.html": ["組込み", "組み込み", "es", "iot"],
  "nw.html": ["ネスペ", "nw", "ネットワーク"],
  "pm.html": ["プロマネ", "pm", "プロジェクト管理"],
  "sa.html": ["システム設計", "sa"],
  "sm.html": ["itサービス管理", "sm"],
  "st.html": ["it戦略", "st"],
  "g-kentei.html": ["g検", "ジェネラリスト検定", "ai", "人工知能", "ディープラーニング"],
  "html5-level1.html": ["html5", "html", "web制作", "webデザイン", "フロントエンド"],
  "mos-excel.html": ["mos", "mosエクセル", "エクセル", "excel", "表計算", "事務"],
  "mos-word.html": ["mos", "mosワード", "ワード", "word", "文書作成", "事務"],
  "nissho-pc-data3.html": ["日商pc", "パソコン検定", "データ活用", "エクセル", "excel", "事務"],
  "python3-basic.html": ["python", "パイソン", "プログラミング"],
  "toukei2.html": ["統計", "統計学", "データ分析", "データサイエンス"],
  "boki2.html": ["簿記", "日商簿記", "経理", "会計", "事務"],
  "boki3.html": ["簿記", "日商簿記", "経理", "会計", "事務"],
  "business-accounting3.html": ["ビジネス会計", "財務諸表", "決算書", "会計"],
  "business-law2.html": ["ビジ法", "企業法務", "法務", "契約"],
  "business-law3.html": ["ビジ法", "企業法務", "法務", "契約"],
  "fp2.html": ["fp", "fp2級", "ファイナンシャルプランナー", "ファイナンシャルプランニング", "お金", "家計", "資産運用"],
  "fp3.html": ["fp", "fp3級", "ファイナンシャルプランナー", "ファイナンシャルプランニング", "お金", "家計", "資産運用"],
  "retail2.html": ["販売士", "リテールマーケティング", "販売", "小売", "店舗運営"],
  "retail3.html": ["販売士", "リテールマーケティング", "販売", "小売", "接客"],
  "secretary2.html": ["秘書", "ビジネスマナー", "マナー", "事務"],
  "eiken-pre1.html": ["英検", "英語検定", "英語", "英検準1級", "準1級"],
  "eiken-pre2plus.html": ["英検", "英語検定", "英語", "英検準2級プラス", "準2級プラス"],
  "eiken2.html": ["英検", "英語検定", "英語", "英検2級"],
  "ielts-academic.html": ["ielts", "アイエルツ", "英語", "英語留学", "留学"],
  "jlpt-n2.html": ["jlpt", "日本語", "日本語能力", "日本語検定"],
  "kanken2.html": ["漢検", "漢字検定", "漢字"],
  "toeic-lr.html": ["toeic", "トーイック", "トイック", "英語", "ビジネス英語"],
  "chintai.html": ["賃管", "賃貸管理士", "賃貸管理", "不動産管理"],
  "gyosei.html": ["行政書士", "行政法", "法律"],
  "kanrigyomu.html": ["管業", "管理業務主任者", "マンション管理"],
  "kanteishi.html": ["不動産鑑定士", "不動産鑑定", "不動産評価"],
  "mankan.html": ["マン管", "マンション管理士", "マンション管理"],
  "shihoshoshi.html": ["司法書士", "登記", "法律"],
  "takken.html": ["宅建", "宅建士", "宅地建物", "宅地建物取引士", "不動産"],
  "care-worker.html": ["介護福祉士", "介護", "福祉"],
  "color3.html": ["色彩", "色彩検定", "カラー", "配色", "デザイン"],
  "domestic-travel.html": ["旅行業務", "国内旅行", "観光", "旅行", "旅行業務取扱管理者"],
  "electrician2.html": ["電工2種", "電工二種", "電気工事", "電気"],
  "hazard4.html": ["乙4", "乙四", "危険物乙4", "危険物取扱者", "ガソリン", "危険物"],
  "registered-seller.html": ["登録販売者", "医薬品販売", "ドラッグストア", "薬"]
};

// NFKC は「ＦＰ」「乙４」などの全角英数を半角に揃える。
// 空白や中黒の揺れも吸収し、英字は大文字・小文字を区別しない。
function normalizeText(value) {
  return String(value).normalize("NFKC").toLowerCase()
    .replace(/[\s\u3000・･_\-‐‑–—－]/g, "")
    .trim();
}

function matchScore(q, item) {
  if (!q) return 0;
  const name = normalizeText(item.name);
  const aliases = (searchAliases[item.url] || []).map(normalizeText);
  if (name === q || aliases.some((alias) => alias === q)) return 4;
  if (name.includes(q) || aliases.some((alias) => alias.includes(q))) return 3;
  if (normalizeText(item.description).includes(q)) return 2;
  // タグには「国家試験」など全資格共通の属性があるため検索対象にしない。
  return 0;
}

function createSearchCard(item) {
  const card = document.createElement("a");
  card.className = "qualification-card exam-card";
  card.href = item.url;
  const name = document.createElement("h3");
  name.textContent = item.name;
  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = item.description;
  const tags = document.createElement("div");
  tags.className = "qualification-tags card-tags";
  (item.tags || []).forEach((tag) => {
    const label = document.createElement("span");
    label.textContent = tag;
    if (genreTagClasses[tag]) label.classList.add(genreTagClasses[tag]);
    if (tag === "国家試験" || tag === "国家資格") label.classList.add("tag-national");
    tags.appendChild(label);
  });
  card.append(name, description, tags);
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
  return card;
}

const searchTerms = keyword.normalize("NFKC").trim().split(/\s+/).map(normalizeText).filter(Boolean);
const normalizedKeyword = normalizeText(keyword);
if (!normalizedKeyword) {
  searchMessage.textContent = "資格名・略称や、興味のある分野を入力してください。";
} else {
  const results = qualifications
    .map((item, index) => {
      const scores = searchTerms.map(term => matchScore(term, item));
      const score = scores.every(value => value > 0) ? scores.reduce((sum, value) => sum + value, 0) : 0;
      return {item, index, score};
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index);
  searchMessage.textContent = results.length
    ? `${results.length}件の資格が見つかりました。`
    : "一致する資格は見つかりませんでした。別の呼び名や、ジャンルからも探せます。";
  results.forEach(({item}) => searchList.appendChild(createSearchCard(item)));
  if (!results.length) {
    const guide = document.createElement("p");
    guide.className = "search-empty-actions";
    for (const [label, href] of [["資格一覧を見る", "all.html"], ["ジャンルから探す", "genres.html"]]) {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = label;
      guide.appendChild(link);
    }
    searchList.appendChild(guide);
  }
}
