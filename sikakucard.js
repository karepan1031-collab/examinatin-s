// 資格図鑑：全50資格の共通データ
// 追加・修正はこのファイルで管理します。
const qualifications = [
  {
    "category": "it",
    "name": "ITパスポート",
    "description": "IT・経営・情報セキュリティなどの基礎知識を問う試験です。",
    "url": "it-passport.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）",
      "通年実施"
    ]
  },
  {
    "category": "it",
    "name": "基本情報技術者試験",
    "description": "プログラミングや情報セキュリティなど、ITエンジニアに必要な基礎知識を問う試験です。",
    "url": "fe.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）",
      "通年実施"
    ]
  },
  {
    "category": "it",
    "name": "応用情報技術者試験",
    "description": "システム開発や情報セキュリティなど、ITの応用的な知識や技能を問う試験です。",
    "url": "ap.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "it",
    "name": "情報セキュリティマネジメント試験",
    "description": "組織の情報セキュリティを管理・運用するための知識を問う試験です。",
    "url": "sg.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）",
      "通年実施"
    ]
  },
  {
    "category": "it",
    "name": "情報処理安全確保支援士試験",
    "description": "サイバー攻撃への対策やリスク管理など、情報セキュリティの専門知識や技能を問う試験です。",
    "url": "sc.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "it",
    "name": "システム監査技術者試験",
    "description": "情報システムのリスクや管理状況を独立した立場で点検・評価する専門知識・技能を問う試験です。",
    "url": "au.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "it",
    "name": "データベーススペシャリスト試験",
    "description": "データベースの設計・構築・運用と、データを安全かつ効率的に管理する専門知識・技能を問う試験です。",
    "url": "db.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "it",
    "name": "エンベデッドシステムスペシャリスト試験",
    "description": "機器に組み込まれるシステムやIoT機器の設計・開発に関する専門知識・技能を問う試験です。",
    "url": "es.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "it",
    "name": "ネットワークスペシャリスト試験",
    "description": "ネットワークの設計・構築・運用や、安全性・信頼性を確保するための専門知識・技能を問う試験です。",
    "url": "nw.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "it",
    "name": "プロジェクトマネージャ試験",
    "description": "ITプロジェクトの計画や進捗、品質、リスクを管理し、目標達成に導く専門知識・技能を問う試験です。",
    "url": "pm.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "it",
    "name": "システムアーキテクト試験",
    "description": "情報システムの要件を整理し、業務に適したシステム全体を設計する専門知識・技能を問う試験です。",
    "url": "sa.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "it",
    "name": "ITサービスマネージャ試験",
    "description": "ITサービスを安定して提供するための運用管理、品質改善、障害対応などの専門知識・技能を問う試験です。",
    "url": "sm.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "it",
    "name": "ITストラテジスト試験",
    "description": "経営戦略を踏まえてIT戦略を立案し、事業改革や新たなサービスの創出を推進する専門知識・技能を問う試験です。",
    "url": "st.html",
    "tags": [
      "IT・情報",
      "国家試験",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "it",
    "name": "G検定",
    "description": "AI・ディープラーニングの仕組みや活用、法律・倫理などの知識を問う試験です。",
    "url": "g-kentei.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ]
  },
  {
    "category": "it",
    "name": "HTML5プロフェッショナル認定試験 レベル1",
    "description": "HTML・CSSやレスポンシブWebデザインなど、Web制作の基礎知識を問う試験です。",
    "url": "html5-level1.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ]
  },
  {
    "category": "it",
    "name": "MOS Excel 365（一般）",
    "description": "Excelの表作成、関数、グラフなどの基本操作を実技で評価する試験です。",
    "url": "mos-excel.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ]
  },
  {
    "category": "it",
    "name": "MOS Word 365（一般）",
    "description": "Wordの文書編集、表の作成、書式設定などの基本操作を実技で評価する試験です。",
    "url": "mos-word.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ]
  },
  {
    "category": "it",
    "name": "日商PC検定（データ活用）3級",
    "description": "Excelによる業務データの集計、計算、グラフ作成などの実務能力を問う検定です。",
    "url": "nissho-pc-data3.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ]
  },
  {
    "category": "it",
    "name": "Python 3 エンジニア認定基礎試験",
    "description": "Pythonの文法、データ構造、制御構文などの基礎知識を問う試験です。",
    "url": "python3-basic.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ]
  },
  {
    "category": "it",
    "name": "統計検定2級",
    "description": "確率、統計的推定、仮説検定、回帰分析などの大学基礎レベルの統計知識を問う試験です。",
    "url": "toukei2.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ]
  },
  {
    "category": "business",
    "name": "日商簿記検定2級",
    "description": "商業簿記と工業簿記を通じて、企業の財務状況や原価を把握する知識を問う検定です。",
    "url": "boki2.html",
    "tags": [
      "ビジネス・会計",
      "民間資格・検定",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "business",
    "name": "日商簿記検定3級",
    "description": "企業のお金の流れを記録する簿記の基本知識と、帳簿・決算書を作成する力を問う検定です。",
    "url": "boki3.html",
    "tags": [
      "ビジネス・会計",
      "民間資格・検定",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "business",
    "name": "ビジネス会計検定試験3級",
    "description": "貸借対照表や損益計算書など、企業の財務諸表を読み取る基礎知識を問う検定です。",
    "url": "business-accounting3.html",
    "tags": [
      "ビジネス・会計",
      "民間資格・検定"
    ]
  },
  {
    "category": "business",
    "name": "ビジネス実務法務検定試験2級",
    "description": "契約、債権・債務、企業活動のリスクなど、実務に必要な法律知識を問う検定です。",
    "url": "business-law2.html",
    "tags": [
      "ビジネス・会計",
      "民間資格・検定",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "business",
    "name": "ビジネス実務法務検定試験3級",
    "description": "契約や取引、個人情報の扱いなど、仕事で必要となる法律の基礎知識を問う検定です。",
    "url": "business-law3.html",
    "tags": [
      "ビジネス・会計",
      "民間資格・検定",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "business",
    "name": "2級ファイナンシャル・プランニング技能検定",
    "description": "保険・税金・資産運用などを総合的に扱い、生活設計に関する実践的な知識を問う国家検定です。",
    "url": "fp2.html",
    "tags": [
      "ビジネス・会計",
      "国家資格",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "business",
    "name": "3級ファイナンシャル・プランニング技能検定",
    "description": "家計管理、保険、税金、年金、資産運用など、お金に関する基礎知識を問う国家検定です。",
    "url": "fp3.html",
    "tags": [
      "ビジネス・会計",
      "国家資格",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "business",
    "name": "リテールマーケティング（販売士）検定2級",
    "description": "店舗運営や販売戦略、商品管理など、販売現場の管理に必要な知識を問う検定です。",
    "url": "retail2.html",
    "tags": [
      "ビジネス・会計",
      "民間資格・検定",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "business",
    "name": "リテールマーケティング（販売士）検定3級",
    "description": "接客、売場づくり、販売管理など、小売業や販売の基本知識を問う検定です。",
    "url": "retail3.html",
    "tags": [
      "ビジネス・会計",
      "民間資格・検定",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "business",
    "name": "秘書検定2級",
    "description": "敬語、電話対応、文書作成、来客対応など、社会人としての実務マナーを問う検定です。",
    "url": "secretary2.html",
    "tags": [
      "ビジネス・会計",
      "民間資格・検定"
    ]
  },
  {
    "category": "language",
    "name": "実用英語技能検定準1級",
    "description": "大学中級程度の英語力を測り、社会的な話題について理解・表現する4技能を評価する検定です。",
    "url": "eiken-pre1.html",
    "tags": [
      "語学",
      "民間資格・検定",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "language",
    "name": "実用英語技能検定準2級プラス",
    "description": "高校上級程度を目安とし、身近な話題から社会的な話題までの英語4技能を評価する検定です。",
    "url": "eiken-pre2plus.html",
    "tags": [
      "語学",
      "民間資格・検定",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "language",
    "name": "実用英語技能検定2級",
    "description": "高校卒業程度の英語力を測り、読む・聞く・書く・話すの4技能を評価する検定です。",
    "url": "eiken2.html",
    "tags": [
      "語学",
      "民間資格・検定",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "language",
    "name": "IELTS Academic",
    "description": "海外の大学・大学院への進学などに必要な英語の4技能を、バンドスコアで評価するテストです。",
    "url": "ielts-academic.html",
    "tags": [
      "語学",
      "資格・検定"
    ]
  },
  {
    "category": "language",
    "name": "日本語能力試験 N2",
    "description": "日本語を母語としない人を主な対象に、日常や幅広い場面の日本語を理解する力を測る試験です。",
    "url": "jlpt-n2.html",
    "tags": [
      "語学",
      "資格・検定"
    ]
  },
  {
    "category": "language",
    "name": "日本漢字能力検定2級",
    "description": "常用漢字を中心に、漢字の読み書きや熟語、誤字訂正などの運用能力を測る検定です。",
    "url": "kanken2.html",
    "tags": [
      "語学",
      "民間資格・検定",
      "CBT（パソコン受験）"
    ]
  },
  {
    "category": "language",
    "name": "TOEIC Listening & Reading Test",
    "description": "日常生活や仕事で使う英語の聞く力・読む力を、10〜990点のスコアで測るテストです。",
    "url": "toeic-lr.html",
    "tags": [
      "語学",
      "民間資格・検定"
    ]
  },
  {
    "category": "law",
    "name": "賃貸不動産経営管理士試験",
    "description": "賃貸住宅の管理受託や建物の維持保全などの知識を問う国家試験です。",
    "url": "chintai.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ]
  },
  {
    "category": "law",
    "name": "行政書士試験",
    "description": "行政手続や民法など、行政書士の業務に必要な法律知識を問う国家試験です。",
    "url": "gyosei.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ]
  },
  {
    "category": "law",
    "name": "管理業務主任者試験",
    "description": "マンション管理業者による管理受託業務や重要事項説明などの知識を問う国家試験です。",
    "url": "kanrigyomu.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ]
  },
  {
    "category": "law",
    "name": "不動産鑑定士試験",
    "description": "土地や建物の経済価値を評価するための専門知識を問う国家試験です。",
    "url": "kanteishi.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ]
  },
  {
    "category": "law",
    "name": "マンション管理士試験",
    "description": "マンションの管理組合運営や建物・設備の管理に関する知識を問う国家試験です。",
    "url": "mankan.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ]
  },
  {
    "category": "law",
    "name": "司法書士試験",
    "description": "不動産登記や商業登記、民法・会社法などの専門知識を問う国家試験です。",
    "url": "shihoshoshi.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ]
  },
  {
    "category": "law",
    "name": "宅地建物取引士資格試験",
    "description": "不動産取引に関する法律や重要事項説明などの知識を問う国家試験です。",
    "url": "takken.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ]
  },
  {
    "category": "medical",
    "name": "介護福祉士国家試験",
    "description": "介護を必要とする人の生活支援や介護技術、関連制度などの専門知識を問う国家試験です。",
    "url": "care-worker.html",
    "tags": [
      "医療・福祉",
      "国家試験"
    ]
  },
  {
    "category": "design",
    "name": "色彩検定3級",
    "description": "色の性質や配色、色彩心理など、色を活用するための基礎知識を問う検定です。",
    "url": "color3.html",
    "tags": [
      "デザイン・色彩",
      "資格・検定"
    ]
  },
  {
    "category": "travel",
    "name": "国内旅行業務取扱管理者試験",
    "description": "国内旅行の取引に関する法律、旅行業約款、交通・宿泊などの実務知識を問う国家試験です。",
    "url": "domestic-travel.html",
    "tags": [
      "旅行・観光",
      "国家試験"
    ]
  },
  {
    "category": "industrial",
    "name": "第二種電気工事士",
    "description": "住宅や小規模な店舗などの電気工事に必要な知識と技能を問う国家試験です。",
    "url": "electrician2.html",
    "tags": [
      "技術・工業",
      "国家試験"
    ]
  },
  {
    "category": "industrial",
    "name": "危険物取扱者 乙種第4類",
    "description": "ガソリンや灯油など、引火性液体の危険物を取り扱うための知識を問う国家試験です。",
    "url": "hazard4.html",
    "tags": [
      "技術・工業",
      "国家試験"
    ]
  },
  {
    "category": "medical",
    "name": "登録販売者試験",
    "description": "一般用医薬品の販売に必要な医薬品の知識や法律、安全対策などを問う試験です。",
    "url": "registered-seller.html",
    "tags": [
      "医療・福祉",
      "資格・検定"
    ]
  }
];
