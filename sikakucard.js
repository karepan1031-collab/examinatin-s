// 掲載資格の共通データ
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
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
    ],
    "feeSummary": "7,500円",
    "feeNote": ""
  },
  {
    "category": "it",
    "name": "G検定",
    "description": "AI・ディープラーニングの仕組みや活用、法律・倫理などの知識を問う試験です。",
    "url": "g-kentei.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ],
    "feeSummary": "一般 13,200円",
    "feeNote": "学生5,500円。再受験・講座修了割引の金額は基本情報に掲載"
  },
  {
    "category": "it",
    "name": "HTML5プロフェッショナル認定試験 レベル1",
    "description": "HTML・CSSやレスポンシブWebデザインなど、Web制作の基礎知識を問う試験です。",
    "url": "html5-level1.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ],
    "feeSummary": "16,500円",
    "feeNote": ""
  },
  {
    "category": "it",
    "name": "MOS Excel 365（一般）",
    "description": "Excelの表作成、関数、グラフなどの基本操作を実技で評価する試験です。",
    "url": "mos-excel.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ],
    "feeSummary": "一般 12,980円",
    "feeNote": "学割 9,680円"
  },
  {
    "category": "it",
    "name": "MOS Word 365（一般）",
    "description": "Wordの文書編集、表の作成、書式設定などの基本操作を実技で評価する試験です。",
    "url": "mos-word.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ],
    "feeSummary": "一般 12,980円",
    "feeNote": "学割 9,680円"
  },
  {
    "category": "it",
    "name": "日商PC検定（データ活用）3級",
    "description": "Excelによる業務データの集計、計算、グラフ作成などの実務能力を問う検定です。",
    "url": "nissho-pc-data3.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ],
    "feeSummary": "5,500円",
    "feeNote": ""
  },
  {
    "category": "it",
    "name": "Python 3 エンジニア認定基礎試験",
    "description": "Pythonの文法、データ構造、制御構文などの基礎知識を問う試験です。",
    "url": "python3-basic.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ],
    "feeSummary": "一般 11,000円",
    "feeNote": "学割 5,500円"
  },
  {
    "category": "it",
    "name": "統計検定2級",
    "description": "確率、統計的推定、仮説検定、回帰分析などの大学基礎レベルの統計知識を問う試験です。",
    "url": "toukei2.html",
    "tags": [
      "IT・情報",
      "民間資格・検定"
    ],
    "feeSummary": "一般 7,000円",
    "feeNote": "学割 5,000円"
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
    ],
    "feeSummary": "5,500円",
    "feeNote": "ネットで申込：手数料込み6,050円"
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
    ],
    "feeSummary": "3,300円",
    "feeNote": "ネットで申込：手数料込み3,850円"
  },
  {
    "category": "business",
    "name": "ビジネス会計検定試験3級",
    "description": "貸借対照表や損益計算書など、企業の財務諸表を読み取る基礎知識を問う検定です。",
    "url": "business-accounting3.html",
    "tags": [
      "ビジネス・会計",
      "民間資格・検定"
    ],
    "feeSummary": "4,950円",
    "feeNote": ""
  },
  {
    "category": "business",
    "name": "ビジネス実務法務検定試験2級",
    "description": "契約、債権・債務、企業活動のリスクなど、実務に必要な法律知識を問う検定です。",
    "url": "business-law2.html",
    "tags": [
      "ビジネス・会計",
      "民間資格・検定",
      "IBT・CBT（パソコン受験）"
    ],
    "feeSummary": "IBT 7,700円",
    "feeNote": "CBT 9,900円（利用料を含む）"
  },
  {
    "category": "business",
    "name": "ビジネス実務法務検定試験3級",
    "description": "契約や取引、個人情報の扱いなど、仕事で必要となる法律の基礎知識を問う検定です。",
    "url": "business-law3.html",
    "tags": [
      "ビジネス・会計",
      "民間資格・検定",
      "IBT・CBT（パソコン受験）"
    ],
    "feeSummary": "IBT 5,500円",
    "feeNote": "CBT 7,700円（利用料を含む）"
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
    ],
    "feeSummary": "学科・実技 11,700円",
    "feeNote": "学科5,700円／実技6,000円。支払方法別の総額は基本情報に掲載"
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
    ],
    "feeSummary": "学科・実技 8,000円",
    "feeNote": "各4,000円。支払方法別の総額は基本情報に掲載"
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
    ],
    "feeSummary": "6,600円",
    "feeNote": "事務手数料込み7,150円"
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
    ],
    "feeSummary": "4,400円",
    "feeNote": "事務手数料込み4,950円"
  },
  {
    "category": "business",
    "name": "秘書検定2級",
    "description": "敬語、電話対応、文書作成、来客対応など、社会人としての実務マナーを問う検定です。",
    "url": "secretary2.html",
    "tags": [
      "ビジネス・会計",
      "民間資格・検定"
    ],
    "feeSummary": "紙 5,200円",
    "feeNote": "CBT4,900円（事務手数料を含む）"
  },
  {
    "category": "language",
    "name": "実用英語技能検定準1級",
    "description": "大学中級程度の英語力を測り、社会的な話題について理解・表現する4技能を評価する検定です。",
    "url": "eiken-pre1.html",
    "tags": [
      "語学",
      "民間資格・検定",
      "従来型（筆記・面接）",
      "S-CBT"
    ],
    "feeSummary": "本会場 10,400円",
    "feeNote": "S-CBT 10,500円（2026年度）"
  },
  {
    "category": "language",
    "name": "実用英語技能検定準2級プラス",
    "description": "高校上級程度を目安とし、身近な話題から社会的な話題までの英語4技能を評価する検定です。",
    "url": "eiken-pre2plus.html",
    "tags": [
      "語学",
      "民間資格・検定",
      "従来型（筆記・面接）",
      "S-CBT"
    ],
    "feeSummary": "本会場 8,600円",
    "feeNote": "準会場 6,300円 ／ S-CBT 9,200円（2026年度）"
  },
  {
    "category": "language",
    "name": "実用英語技能検定2級",
    "description": "高校卒業程度の英語力を測り、読む・聞く・書く・話すの4技能を評価する検定です。",
    "url": "eiken2.html",
    "tags": [
      "語学",
      "民間資格・検定",
      "従来型（筆記・面接）",
      "S-CBT"
    ],
    "feeSummary": "本会場 9,000円",
    "feeNote": "準会場 6,800円 ／ S-CBT 9,600円（2026年度）"
  },
  {
    "category": "language",
    "name": "IELTS Academic",
    "description": "海外の大学・大学院への進学などに必要な英語の4技能を、バンドスコアで評価するテストです。",
    "url": "ielts-academic.html",
    "tags": [
      "語学",
      "資格・検定"
    ],
    "feeSummary": "通常版 29,700円",
    "feeNote": "UKVI版34,430円。1技能再受験の料金は基本情報に掲載"
  },
  {
    "category": "language",
    "name": "日本語能力試験 N2",
    "description": "日本語を母語としない人を主な対象に、日常や幅広い場面の日本語を理解する力を測る試験です。",
    "url": "jlpt-n2.html",
    "tags": [
      "語学",
      "資格・検定"
    ],
    "feeSummary": "7,500円（2026年国内受験）",
    "feeNote": "2026年第2回（国内）"
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
    ],
    "feeSummary": "公開会場 5,200円",
    "feeNote": "CBT4,800円／準会場4,200円／団体オンライン3,800円"
  },
  {
    "category": "language",
    "name": "TOEIC Listening & Reading Test",
    "description": "日常生活や仕事で使う英語の聞く力・読む力を、10〜990点のスコアで測るテストです。",
    "url": "toeic-lr.html",
    "tags": [
      "語学",
      "民間資格・検定"
    ],
    "feeSummary": "紙なし 7,700円",
    "feeNote": "紙あり7,810円。リピート割引の金額は基本情報に掲載"
  },
  {
    "category": "law",
    "name": "賃貸不動産経営管理士試験",
    "description": "賃貸住宅の管理受託や建物の維持保全などの知識を問う国家試験です。",
    "url": "chintai.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ],
    "feeSummary": "12,000円",
    "feeNote": "Web申込は手数料込み12,400円"
  },
  {
    "category": "law",
    "name": "行政書士試験",
    "description": "行政手続や民法など、行政書士の業務に必要な法律知識を問う国家試験です。",
    "url": "gyosei.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ],
    "feeSummary": "10,400円",
    "feeNote": "ネット申込は手数料込み10,770円"
  },
  {
    "category": "law",
    "name": "管理業務主任者試験",
    "description": "マンション管理業者による管理受託業務や重要事項説明などの知識を問う国家試験です。",
    "url": "kanrigyomu.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ],
    "feeSummary": "8,900円",
    "feeNote": "Web申込は手数料込み9,197円"
  },
  {
    "category": "law",
    "name": "不動産鑑定士試験",
    "description": "土地や建物の経済価値を評価するための専門知識を問う国家試験です。",
    "url": "kanteishi.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ],
    "feeSummary": "電子申請 12,800円",
    "feeNote": "書面申請13,000円（2026年試験）"
  },
  {
    "category": "law",
    "name": "マンション管理士試験",
    "description": "マンションの管理組合運営や建物・設備の管理に関する知識を問う国家試験です。",
    "url": "mankan.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ],
    "feeSummary": "9,400円",
    "feeNote": "Web申込は手数料込み9,717円"
  },
  {
    "category": "law",
    "name": "司法書士試験",
    "description": "不動産登記や商業登記、民法・会社法などの専門知識を問う国家試験です。",
    "url": "shihoshoshi.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ],
    "feeSummary": "8,000円",
    "feeNote": "2026年度・収入印紙で納付"
  },
  {
    "category": "law",
    "name": "宅地建物取引士資格試験",
    "description": "不動産取引に関する法律や重要事項説明などの知識を問う国家試験です。",
    "url": "takken.html",
    "tags": [
      "法律・不動産",
      "国家試験"
    ],
    "feeSummary": "8,200円",
    "feeNote": "2026年度"
  },
  {
    "category": "medical",
    "name": "介護福祉士国家試験",
    "description": "介護を必要とする人の生活支援や介護技術、関連制度などの専門知識を問う国家試験です。",
    "url": "care-worker.html",
    "tags": [
      "医療・福祉",
      "国家試験"
    ],
    "feeSummary": "20,510円",
    "feeNote": ""
  },
  {
    "category": "design",
    "name": "色彩検定3級",
    "description": "色の性質や配色、色彩心理など、色を活用するための基礎知識を問う検定です。",
    "url": "color3.html",
    "tags": [
      "デザイン・色彩",
      "資格・検定"
    ],
    "feeSummary": "7,000円",
    "feeNote": ""
  },
  {
    "category": "travel",
    "name": "国内旅行業務取扱管理者試験",
    "description": "国内旅行の取引に関する法律、旅行業約款、交通・宿泊などの実務知識を問う国家試験です。",
    "url": "domestic-travel.html",
    "tags": [
      "旅行・観光",
      "国家試験"
    ],
    "feeSummary": "8,000円",
    "feeNote": "システム利用料込み8,660円"
  },
  {
    "category": "industrial",
    "name": "第二種電気工事士",
    "description": "住宅や小規模な店舗などの電気工事に必要な知識と技能を問う国家試験です。",
    "url": "electrician2.html",
    "tags": [
      "技術・工業",
      "国家試験"
    ],
    "feeSummary": "ネット 11,100円",
    "feeNote": "郵送12,500円。支払時の事務手数料は別途"
  },
  {
    "category": "industrial",
    "name": "危険物取扱者 乙種第4類",
    "description": "ガソリンや灯油など、引火性液体の危険物を取り扱うための知識を問う国家試験です。",
    "url": "hazard4.html",
    "tags": [
      "技術・工業",
      "国家試験"
    ],
    "feeSummary": "5,300円",
    "feeNote": ""
  },
  {
    "category": "medical",
    "name": "登録販売者試験",
    "description": "一般用医薬品の販売に必要な医薬品の知識や法律、安全対策などを問う試験です。",
    "url": "registered-seller.html",
    "tags": [
      "医療・福祉",
      "資格・検定"
    ],
    "feeSummary": "都道府県ごとに異なります。",
    "feeNote": ""
  },
  {
    "category": "design",
    "name": "色彩検定2級",
    "description": "配色技法、色彩調和、照明と色の見え方など、色を実務で活用するための知識を問う検定です。",
    "url": "color2.html",
    "tags": [
      "デザイン・色彩",
      "民間検定",
      "年2回"
    ],
    "feeSummary": "10,000円",
    "feeNote": ""
  },
  {
    "category": "design",
    "name": "色彩検定UC級",
    "description": "色覚の多様性や加齢による見え方の変化を踏まえ、伝わりやすい配色を考える検定です。",
    "url": "color-uc.html",
    "tags": [
      "デザイン・色彩",
      "民間検定",
      "年2回"
    ],
    "feeSummary": "6,000円",
    "feeNote": ""
  },
  {
    "category": "travel",
    "name": "世界遺産検定3級",
    "description": "日本と世界の主な世界遺産を題材に、歴史・文化・自然と保護の仕組みを学ぶ検定です。",
    "url": "sekaken3.html",
    "tags": [
      "旅行・観光",
      "民間検定",
      "CBT対応"
    ],
    "feeSummary": "公開会場 5,400円",
    "feeNote": "CBT 6,200円"
  },
  {
    "category": "travel",
    "name": "総合旅行業務取扱管理者試験",
    "description": "国内・海外の旅行取引、旅行業法、約款、運賃計算などを問う国家試験です。",
    "url": "general-travel.html",
    "tags": [
      "旅行・観光",
      "国家試験",
      "年1回"
    ],
    "feeSummary": "13,000円",
    "feeNote": "申請システム利用料等は別途の場合あり"
  },
  {
    "category": "medical",
    "name": "保育士試験",
    "description": "保育所などで働く保育士の資格取得に必要な筆記・実技試験です。",
    "url": "hoikushi.html",
    "tags": [
      "医療・福祉",
      "国家資格",
      "年2回"
    ],
    "feeSummary": "2026年：12,700円＋決済手数料",
    "feeNote": "免除区分で異なる場合あり"
  },
  {
    "category": "medical",
    "name": "社会福祉士国家試験",
    "description": "相談援助の専門職である社会福祉士の知識を問う国家試験です。",
    "url": "social-worker.html",
    "tags": [
      "医療・福祉",
      "国家試験",
      "年1回"
    ],
    "feeSummary": "24,300円",
    "feeNote": "同時受験・共通科目免除で異なる"
  },
  {
    "category": "industrial",
    "name": "第一種電気工事士試験",
    "description": "高圧で受電する設備などの工事に必要な知識と技能を問う国家試験です。",
    "url": "electrician1.html",
    "tags": [
      "技術・工業",
      "国家試験",
      "年2回"
    ],
    "feeSummary": "ネット 13,000円",
    "feeNote": "書面14,400円"
  },
  {
    "category": "industrial",
    "name": "第三種電気主任技術者試験",
    "description": "工場やビルの電気設備の保安監督に必要な電気理論・電力・機械・法規を問う国家試験です。",
    "url": "electrical-chief3.html",
    "tags": [
      "技術・工業",
      "国家試験",
      "年2回"
    ],
    "feeSummary": "ネット 7,700円",
    "feeNote": "書面8,100円"
  },
{
  "category": "design",
  "name": "色彩検定1級",
  "description": "色彩設計・測色・配色提案などを一次・二次試験で評価する検定です。",
  "url": "color1.html",
  "tags": [
    "デザイン・色彩",
    "民間検定",
    "年1回",
    "筆記・記述"
  ],
  "feeSummary": "15,000円",
  "feeNote": ""
},
{
  "category": "design",
  "name": "カラーコーディネーター検定試験 スタンダードクラス",
  "description": "配色の基礎や色彩の効果をビジネスに生かす知識を問う東京商工会議所の検定です。",
  "url": "color-coordinator-standard.html",
  "tags": [
    "デザイン・色彩",
    "民間検定",
    "IBT・CBT",
    "年2期"
  ],
  "feeSummary": "5,500円",
  "feeNote": "CBTは利用料2,200円追加"
},
{
  "category": "travel",
  "name": "世界遺産検定2級",
  "description": "日本の全遺産と世界の代表的な遺産について、登録理念や特徴を問う検定です。",
  "url": "sekaken2.html",
  "tags": [
    "旅行・観光",
    "民間検定",
    "CBT・会場受検",
    "年複数回"
  ],
  "feeSummary": "公開会場6,500円",
  "feeNote": "CBTは7,300円"
},
{
  "category": "travel",
  "name": "全国通訳案内士試験",
  "description": "訪日客へ外国語で日本の地理・歴史・文化を案内するための国家試験です。",
  "url": "national-guide-interpreter.html",
  "tags": [
    "旅行・観光",
    "国家資格",
    "年1回",
    "筆記・口述"
  ],
  "feeSummary": "14,850円",
  "feeNote": "2か国語受験は29,700円"
},
{
  "category": "medical",
  "name": "看護師国家試験",
  "description": "看護師養成課程を修了した人などを対象に、看護の知識と判断力を問う国家試験です。",
  "url": "nurse.html",
  "tags": [
    "医療・福祉",
    "国家試験",
    "受験資格あり",
    "年1回"
  ],
  "feeSummary": "5,400円",
  "feeNote": ""
},
{
  "category": "medical",
  "name": "福祉住環境コーディネーター検定試験2級",
  "description": "高齢者・障害者の住まいを安全にするため、介護・医療・建築を横断する知識を問う検定です。",
  "url": "fukushi-jukankyo2.html",
  "tags": [
    "医療・福祉",
    "民間検定",
    "IBT・CBT",
    "年2期"
  ],
  "feeSummary": "7,700円",
  "feeNote": "CBTは利用料2,200円追加"
},
{
  "category": "industrial",
  "name": "第一種衛生管理者免許試験",
  "description": "職場の衛生管理や健康障害の防止について、有害業務を含む知識を問う国家試験です。",
  "url": "eisei1.html",
  "tags": [
    "技術・工業",
    "国家資格",
    "受験資格あり",
    "会場受験"
  ],
  "feeSummary": "8,800円",
  "feeNote": ""
},
{
  "category": "industrial",
  "name": "消防設備士 乙種第6類",
  "description": "消火器の点検・整備に必要な知識と技能を問う国家試験です。",
  "url": "shobo6.html",
  "tags": [
    "技術・工業",
    "国家資格",
    "受験資格なし",
    "会場受験"
  ],
  "feeSummary": "4,400円",
  "feeNote": ""
},
{
  "category": "design",
  "name": "カラーコーディネーター検定試験 アドバンスクラス",
  "description": "色彩計画や配色の専門知識を、商品開発・広告・空間デザインの事例で問う検定です。",
  "url": "color-coordinator-advance.html",
  "tags": [
    "デザイン・色彩",
    "IBT・CBT",
    "年2期",
    "民間検定"
  ],
  "feeSummary": "7,700円",
  "feeNote": "CBTは利用料2,200円追加"
},
{
  "category": "design",
  "name": "ウェブデザイン技能検定3級",
  "description": "HTML・CSSなどの知識とWebページ制作の作業技能を測る国家検定です。",
  "url": "webdesign3.html",
  "tags": [
    "デザイン・色彩",
    "国家資格",
    "技能検定",
    "学科・実技",
    "年4回"
  ],
  "feeSummary": "学科6,000円",
  "feeNote": "実技9,000円。23歳未満は減免区分あり"
},
{
  "category": "travel",
  "name": "世界遺産検定1級",
  "description": "日本・世界の全世界遺産と世界遺産条約の仕組みを深く問う検定です。",
  "url": "sekaken1.html",
  "tags": [
    "旅行・観光",
    "民間検定",
    "2級認定必須",
    "年2回"
  ],
  "feeSummary": "公開会場10,900円",
  "feeNote": "CBT 11,800円"
},
{
  "category": "travel",
  "name": "世界遺産検定4級",
  "description": "世界遺産条約の基本と日本の世界遺産を中心に問う検定です。",
  "url": "sekaken4.html",
  "tags": [
    "旅行・観光",
    "民間検定",
    "50問・50分",
    "年複数回"
  ],
  "feeSummary": "公開会場3,800円",
  "feeNote": "CBT 4,600円"
},
{
  "category": "medical",
  "name": "福祉住環境コーディネーター検定試験3級",
  "description": "高齢者や障害者の住まいを整えるための福祉・建築の基礎を問う検定です。",
  "url": "fukushi-jukankyo3.html",
  "tags": [
    "医療・福祉",
    "民間検定",
    "IBT・CBT",
    "年2期"
  ],
  "feeSummary": "5,500円",
  "feeNote": "CBTは利用料2,200円追加"
},
{
  "category": "medical",
  "name": "精神保健福祉士国家試験",
  "description": "精神保健の相談援助などに関する国家資格の試験です。",
  "url": "psychiatric-social-worker.html",
  "tags": [
    "医療・福祉",
    "国家資格",
    "受験資格あり",
    "年1回"
  ],
  "feeSummary": "28,910円",
  "feeNote": "共通科目免除・同時受験で別料金"
},
{
  "category": "industrial",
  "name": "第二種衛生管理者免許試験",
  "description": "事業場の健康管理や労働衛生に関する知識を問う免許試験です。",
  "url": "eisei2.html",
  "tags": [
    "技術・工業",
    "国家資格",
    "国家免許",
    "受験資格あり",
    "通年"
  ],
  "feeSummary": "8,800円",
  "feeNote": "法定の受験資格が必要"
},
{
  "category": "industrial",
  "name": "消防設備士 乙種第4類",
  "description": "自動火災報知設備などの点検・整備に関する知識を問う資格試験です。",
  "url": "shobo4.html",
  "tags": [
    "技術・工業",
    "国家資格",
    "乙種",
    "地域別日程"
  ],
  "feeSummary": "4,400円",
  "feeNote": "乙種は受験資格の制限なし"
},
{
  "category": "language",
  "name": "実用英語技能検定 準2級",
  "description": "身近な話題の英文を読み、英語で自分の考えを伝える力を測る検定です。",
  "url": "eiken-pre2.html",
  "tags": [
    "語学",
    "民間検定",
    "筆記・面接",
    "年3回"
  ],
  "feeSummary": "8,400円",
  "feeNote": "2026年度・従来型本会場。準会場は6,000円"
},
{
  "category": "language",
  "name": "日本語能力試験 N3（JLPT）",
  "description": "日常的な場面で使われる日本語の理解力を、語彙・読解・聴解で測る検定です。",
  "url": "jlpt-n3.html",
  "tags": [
    "語学",
    "語学認定",
    "年2回",
    "国内受験条件あり"
  ],
  "feeSummary": "7,500円",
  "feeNote": "2026年国内受験・税込。海外は地域で異なる"
},
{
  "category": "law",
  "name": "社会保険労務士試験",
  "description": "労働法・社会保険制度に関する専門知識を問う国家試験です。",
  "url": "sharoshi.html",
  "tags": [
    "法律・不動産",
    "国家資格",
    "受験資格あり",
    "年1回"
  ],
  "feeSummary": "15,000円",
  "feeNote": "払込手数料は別途"
},
{
  "category": "law",
  "name": "土地家屋調査士試験",
  "description": "土地・建物の表示登記に必要な測量・法律・図面作成の能力を問う国家試験です。",
  "url": "tochi-chosashi.html",
  "tags": [
    "法律・不動産",
    "国家資格",
    "試験は受験資格なし",
    "年1回"
  ],
  "feeSummary": "8,300円",
  "feeNote": "2026年度の受験手数料"
},
{
  "category": "design",
  "name": "CGクリエイター検定 ベーシック",
  "description": "CG映像・3DCG制作に必要な表現と制作技術の基礎を問う検定です。",
  "url": "cg-creator-basic.html",
  "tags": [
    "デザイン・色彩",
    "民間検定",
    "年2回",
    "CG制作"
  ],
  "feeSummary": "6,050円",
  "feeNote": "2026年度・税込"
},
{
  "category": "travel",
  "name": "観光英語検定2級",
  "description": "ホテル・航空・旅行業などで使う観光英語の読解と聞き取りを測る検定です。",
  "url": "tourism-english2.html",
  "tags": [
    "旅行・観光",
    "民間検定",
    "筆記・聴解",
    "年複数回"
  ],
  "feeSummary": "6,500円",
  "feeNote": "協会会員は5,600円"
},
{
  "category": "medical",
  "name": "理学療法士国家試験",
  "description": "身体機能の評価・運動療法・リハビリテーションの専門知識を問う国家試験です。",
  "url": "physical-therapist.html",
  "tags": [
    "医療・福祉",
    "国家資格",
    "受験資格あり",
    "年1回"
  ],
  "feeSummary": "10,100円",
  "feeNote": "受験願書に収入印紙を貼付"
},
{
  "category": "industrial",
  "name": "二級ボイラー技士免許試験",
  "description": "ボイラーの構造・取扱い・燃焼・関係法令を問う国家免許試験です。",
  "url": "boiler2.html",
  "tags": [
    "技術・工業",
    "国家免許",
    "筆記は受験資格なし",
    "通年"
  ],
  "feeSummary": "8,800円",
  "feeNote": "学科試験手数料・非課税"
}
];
