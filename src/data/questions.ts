import { Question, QuestionCategory } from "@/types";

/**
 * PSM I 模擬試験の問題データ
 * スクラムガイド2020に準拠
 * 
 * 問題を追加する際は、以下の形式で追加してください：
 * {
 *   id: 一意の番号,
 *   type: "single"（単一選択）または "multiple"（複数選択）,
 *   question: 問題文,
 *   choices: [{ id: "a", text: "選択肢のテキスト" }, ...],
 *   correctAnswers: ["正解の選択肢ID"],
 *   explanation: "解説文"
 * }
 */
export const questions: Question[] = [
  // ===== スクラムの基礎（柱・価値基準）=====
  {
    id: 1,
    type: "multiple",
    category: "basics",
    question: {
      ja: "スクラムの3つの柱（Three Pillars）として正しいものを全て選んでください。",
      en: "Select all that correctly represent the three pillars of Scrum.",
    },
    choices: [
      { id: "a", text: { ja: "透明性（Transparency）", en: "Transparency" } },
      { id: "b", text: { ja: "検査（Inspection）", en: "Inspection" } },
      { id: "c", text: { ja: "適応（Adaptation）", en: "Adaptation" } },
      { id: "d", text: { ja: "予測可能性（Predictability）", en: "Predictability" } },
      { id: "e", text: { ja: "効率性（Efficiency）", en: "Efficiency" } },
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: {
      ja: "スクラムは経験主義に基づいており、その3つの柱は「透明性（Transparency）」「検査（Inspection）」「適応（Adaptation）」です。透明性により作業が見える化され、検査によって問題を早期発見し、適応によって継続的に改善を行います。",
      en: "Scrum is founded on empiricism, and its three pillars are Transparency, Inspection, and Adaptation. Transparency makes work visible, Inspection enables early detection of issues, and Adaptation allows for continuous improvement.",
    },
  },
  {
    id: 2,
    type: "multiple",
    category: "basics",
    question: {
      ja: "スクラムの5つの価値基準として正しいものを全て選んでください。（5つ選択）",
      en: "Select all that correctly represent the five Scrum values. (Select 5)",
    },
    choices: [
      { id: "a", text: { ja: "確約（Commitment）", en: "Commitment" } },
      { id: "b", text: { ja: "集中（Focus）", en: "Focus" } },
      { id: "c", text: { ja: "公開（Openness）", en: "Openness" } },
      { id: "d", text: { ja: "尊敬（Respect）", en: "Respect" } },
      { id: "e", text: { ja: "勇気（Courage）", en: "Courage" } },
      { id: "f", text: { ja: "協調（Collaboration）", en: "Collaboration" } },
      { id: "g", text: { ja: "自律（Autonomy）", en: "Autonomy" } },
    ],
    correctAnswers: ["a", "b", "c", "d", "e"],
    explanation: {
      ja: "スクラムの5つの価値基準は「確約」「集中」「公開」「尊敬」「勇気」です。「協調」や「自律」はスクラムで重要な概念ですが、公式の5つの価値基準には含まれていません。スクラムチームがこれらの価値基準を体現することで、経験主義の3つの柱（透明性、検査、適応）が実現されます。",
      en: "The five Scrum values are Commitment, Focus, Openness, Respect, and Courage. While Collaboration and Autonomy are important concepts in Scrum, they are not part of the official five values. When the Scrum Team embodies these values, the three pillars of empiricism (Transparency, Inspection, and Adaptation) come to life.",
    },
  },
  {
    id: 3,
    type: "single",
    category: "basics",
    question: {
      ja: "スクラムが基づいている理論は何ですか？",
      en: "What theory is Scrum founded on?",
    },
    choices: [
      { id: "a", text: { ja: "ウォーターフォール理論", en: "Waterfall theory" } },
      { id: "b", text: { ja: "経験主義（Empiricism）とリーン思考", en: "Empiricism and Lean thinking" } },
      { id: "c", text: { ja: "予測主義（Predictivism）", en: "Predictivism" } },
      { id: "d", text: { ja: "決定論的プロセス制御", en: "Deterministic process control" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムガイド2020では、スクラムは「経験主義（Empiricism）」と「リーン思考」に基づいていると明記されています。経験主義は知識が経験から生まれることを主張し、リーン思考はムダを省き本質に集中することを重視します。",
      en: "The Scrum Guide 2020 states that Scrum is founded on empiricism and Lean thinking. Empiricism asserts that knowledge comes from experience, and Lean thinking reduces waste and focuses on the essentials.",
    },
  },
  {
    id: 4,
    type: "single",
    category: "basics",
    question: {
      ja: "スクラムにおいて「透明性」が重要な理由として最も適切なものはどれですか？",
      en: "What is the most appropriate reason why Transparency is important in Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "管理者がチームの作業を監視できるようにするため", en: "To allow managers to monitor the team's work" } },
      { id: "b", text: { ja: "検査を可能にし、適切な意思決定の基盤となるため", en: "To enable inspection and serve as a basis for proper decision-making" } },
      { id: "c", text: { ja: "チームメンバーの業績評価を容易にするため", en: "To make performance evaluation of team members easier" } },
      { id: "d", text: { ja: "顧客への報告を効率化するため", en: "To streamline reporting to customers" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "透明性は検査を可能にします。透明性のないものを検査することは、無駄で誤解を招きます。意思決定を最適化するには、作成物に透明性が必要です。",
      en: "Transparency enables inspection. Inspecting something without transparency is wasteful and misleading. Artifacts need to be transparent to optimize decision-making.",
    },
  },
  {
    id: 5,
    type: "single",
    category: "basics",
    question: {
      ja: "スクラムの価値基準において、「確約」とは何を意味しますか？",
      en: "What does 'Commitment' mean in the context of Scrum values?",
    },
    choices: [
      { id: "a", text: { ja: "スプリントで計画した全ての作業を完了することを約束する", en: "Promising to complete all planned work in the Sprint" } },
      { id: "b", text: { ja: "スクラムチームがゴールを達成し、お互いをサポートすることに確約する", en: "The Scrum Team commits to achieving its goals and supporting each other" } },
      { id: "c", text: { ja: "ステークホルダーに対して期日を守ることを保証する", en: "Guaranteeing deadlines to stakeholders" } },
      { id: "d", text: { ja: "見積もった工数を超えないことを約束する", en: "Promising not to exceed estimated effort" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "「確約」は、スクラムチームがゴールを達成し、お互いをサポートすることへの確約を意味します。これは特定の作業量や期日を保証することではなく、チームとしてゴールに向かって全力を尽くすことへのコミットメントです。",
      en: "Commitment means the Scrum Team commits to achieving its goals and supporting each other. It is not about guaranteeing specific amounts of work or deadlines, but about the team's dedication to doing their best toward their goals.",
    },
  },
  {
    id: 6,
    type: "single",
    category: "basics",
    question: {
      ja: "スクラムにおいて「検査」を行う際に最も重要なことは何ですか？",
      en: "What is most important when performing Inspection in Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "できるだけ頻繁に検査を行うこと", en: "Inspecting as frequently as possible" } },
      { id: "b", text: { ja: "外部の監査人が検査を行うこと", en: "Having external auditors perform the inspection" } },
      { id: "c", text: { ja: "検査を行うスキルを持った人が熱心に行うこと", en: "Having skilled inspectors perform diligent inspection" } },
      { id: "d", text: { ja: "詳細な文書を作成すること", en: "Creating detailed documentation" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スクラムガイド2020では、「作成物と進捗は頻繁かつ熱心に検査しなければならない」とあります。検査を行う人はスキルを持ち、熱心に行う必要があります。",
      en: "The Scrum Guide 2020 states that artifacts and progress must be inspected frequently and diligently. Inspectors need to have the skills and be diligent in performing inspections.",
    },
  },
  {
    id: 7,
    type: "single",
    category: "basics",
    question: {
      ja: "スクラムの「適応」について正しい説明はどれですか？",
      en: "Which statement correctly describes Adaptation in Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "プロセスの側面が許容範囲を逸脱した場合、できるだけ早く調整する", en: "Adjust as soon as possible when aspects of the process deviate outside acceptable limits" } },
      { id: "b", text: { ja: "スプリント終了後にのみ適応を行う", en: "Adaptation only occurs after the Sprint ends" } },
      { id: "c", text: { ja: "適応は必ずスクラムマスターの承認が必要である", en: "Adaptation always requires Scrum Master approval" } },
      { id: "d", text: { ja: "適応は年に一度の計画会議で行う", en: "Adaptation is done at annual planning meetings" } },
    ],
    correctAnswers: ["a"],
    explanation: {
      ja: "プロセスの側面が許容範囲を逸脱した場合、または成果となるプロダクトが受け入れられない場合は、適用しているプロセスや製造している構成要素をできるだけ早く調整する必要があります。",
      en: "If any aspects of a process deviate outside acceptable limits or if the resulting product is unacceptable, the process being applied or the materials being produced must be adjusted as soon as possible.",
    },
  },
  {
    id: 8,
    type: "single",
    category: "basics",
    question: {
      ja: "スクラムの価値基準における「公開」とは何を意味しますか？",
      en: "What does 'Openness' mean in the context of Scrum values?",
    },
    choices: [
      { id: "a", text: { ja: "全ての情報をインターネット上で公開すること", en: "Publishing all information on the internet" } },
      { id: "b", text: { ja: "スクラムチームとステークホルダーが作業や課題を公開すること", en: "The Scrum Team and stakeholders are open about the work and challenges" } },
      { id: "c", text: { ja: "ソースコードをオープンソースとして公開すること", en: "Publishing source code as open source" } },
      { id: "d", text: { ja: "チームメンバーの給与を公開すること", en: "Publishing team members' salaries" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "「公開」は、スクラムチームとステークホルダーが作業や課題について公開することを意味します。これにより透明性が確保され、適切な意思決定と改善が可能になります。",
      en: "Openness means the Scrum Team and stakeholders are open about the work and challenges. This ensures transparency and enables proper decision-making and improvement.",
    },
  },
  {
    id: 9,
    type: "single",
    category: "basics",
    question: {
      ja: "スクラムの価値基準における「勇気」について正しい説明はどれですか？",
      en: "Which statement correctly describes 'Courage' in the context of Scrum values?",
    },
    choices: [
      { id: "a", text: { ja: "リスクの高いプロジェクトに挑戦すること", en: "Taking on high-risk projects" } },
      { id: "b", text: { ja: "正しいことをする勇気、困難な問題に取り組む勇気を持つこと", en: "Having the courage to do the right thing and work on tough problems" } },
      { id: "c", text: { ja: "上司の指示に逆らうこと", en: "Going against the boss's instructions" } },
      { id: "d", text: { ja: "失敗を恐れずに無謀な判断をすること", en: "Making reckless decisions without fear of failure" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "「勇気」は、正しいことをする勇気、困難な問題に取り組む勇気を持つことを意味します。これは無謀な行動ではなく、誠実さを持って難しい課題に立ち向かうことです。",
      en: "Courage means having the courage to do the right thing and work on tough problems. It is not about reckless behavior but about facing difficult challenges with integrity.",
    },
  },
  {
    id: 10,
    type: "single",
    category: "basics",
    question: {
      ja: "スクラムは何と定義されていますか？",
      en: "How is Scrum defined?",
    },
    choices: [
      { id: "a", text: { ja: "ソフトウェア開発のためのプロセス", en: "A process for software development" } },
      { id: "b", text: { ja: "複雑な問題に対応する適応型のソリューションを通じて価値を生み出すための軽量フレームワーク", en: "A lightweight framework for generating value through adaptive solutions for complex problems" } },
      { id: "c", text: { ja: "プロジェクト管理の方法論", en: "A project management methodology" } },
      { id: "d", text: { ja: "アジャイル開発のベストプラクティス集", en: "A collection of best practices for agile development" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムガイド2020では、スクラムは「複雑な問題に対応する適応型のソリューションを通じて、人々、チーム、組織が価値を生み出すための軽量フレームワーク」と定義されています。",
      en: "The Scrum Guide 2020 defines Scrum as 'a lightweight framework that helps people, teams, and organizations generate value through adaptive solutions for complex problems.'",
    },
  },

  // ===== スクラムチームの役割 =====
  {
    id: 11,
    type: "single",
    category: "roles",
    question: {
      ja: "スクラムチームにおいて、スプリントバックログの所有者は誰ですか？",
      en: "Who owns the Sprint Backlog in the Scrum Team?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナー", en: "Product Owner" } },
      { id: "b", text: { ja: "スクラムマスター", en: "Scrum Master" } },
      { id: "c", text: { ja: "開発者（Developers）", en: "Developers" } },
      { id: "d", text: { ja: "ステークホルダー", en: "Stakeholders" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリントバックログは開発者（Developers）が所有します。開発者はスプリント中に行う作業を計画し、スプリントバックログを管理する責任があります。プロダクトオーナーはプロダクトバックログの所有者です。",
      en: "The Sprint Backlog is owned by the Developers. They are responsible for planning the work during the Sprint and managing the Sprint Backlog. The Product Owner owns the Product Backlog.",
    },
  },
  {
    id: 12,
    type: "single",
    category: "roles",
    question: {
      ja: "プロダクトバックログの並び順を最終的に決定する責任を持つのは誰ですか？",
      en: "Who is responsible for finally deciding the ordering of the Product Backlog?",
    },
    choices: [
      { id: "a", text: { ja: "スクラムマスター", en: "Scrum Master" } },
      { id: "b", text: { ja: "開発者", en: "Developers" } },
      { id: "c", text: { ja: "プロダクトオーナー", en: "Product Owner" } },
      { id: "d", text: { ja: "ステークホルダー", en: "Stakeholders" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "プロダクトオーナーはプロダクトバックログの管理に責任を持ち、その並び順を決定する唯一の責任者です。ステークホルダーの意見を聞くことはあっても、最終決定はプロダクトオーナーが行います。",
      en: "The Product Owner is responsible for managing the Product Backlog and is the sole person responsible for its ordering. While stakeholders may provide input, the final decision is made by the Product Owner.",
    },
  },
  {
    id: 13,
    type: "multiple",
    category: "roles",
    question: {
      ja: "スクラムマスターの責務として正しいものを全て選んでください。",
      en: "Select all that are correct responsibilities of the Scrum Master.",
    },
    choices: [
      { id: "a", text: { ja: "スクラムの理論とプラクティスを全員に理解してもらう", en: "Helping everyone understand Scrum theory and practice" } },
      { id: "b", text: { ja: "スクラムチームの有効性を改善するコーチングを行う", en: "Coaching the team to improve effectiveness" } },
      { id: "c", text: { ja: "スプリントバックログの作業を開発者に割り当てる", en: "Assigning Sprint Backlog work to Developers" } },
      { id: "d", text: { ja: "組織においてスクラムの採用を支援・主導する", en: "Leading and supporting Scrum adoption within the organization" } },
      { id: "e", text: { ja: "プロダクトバックログの優先順位を決定する", en: "Deciding the priority of the Product Backlog" } },
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: {
      ja: "スクラムマスターはスクラムの理論とプラクティスの理解促進、チームの有効性改善のコーチング、組織でのスクラム採用支援を行います。作業の割り当ては開発者の自己管理に委ね、プロダクトバックログの優先順位はプロダクトオーナーが決定します。",
      en: "The Scrum Master helps everyone understand Scrum theory and practice, coaches the team to improve effectiveness, and supports Scrum adoption in the organization. Work assignment is left to the self-managing Developers, and Product Backlog priority is decided by the Product Owner.",
    },
  },
  {
    id: 14,
    type: "single",
    category: "roles",
    question: {
      ja: "スクラムチームの最適な人数は何人ですか？",
      en: "What is the optimal size of a Scrum Team?",
    },
    choices: [
      { id: "a", text: { ja: "3人以下", en: "3 or fewer" } },
      { id: "b", text: { ja: "通常10人以下（小さなチーム）", en: "Typically 10 or fewer (small team)" } },
      { id: "c", text: { ja: "15〜20人", en: "15-20 people" } },
      { id: "d", text: { ja: "人数に制限はない", en: "No limit on size" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムガイド2020では、スクラムチームは「小さなチーム」であり、通常10人以下とされています。チームが大きすぎると、コミュニケーションの複雑さが増し、生産性が低下する傾向があります。",
      en: "The Scrum Guide 2020 states that Scrum Teams are 'small teams' of typically 10 or fewer people. Larger teams tend to have more communication complexity and lower productivity.",
    },
  },
  {
    id: 15,
    type: "single",
    category: "roles",
    question: {
      ja: "スクラムチームにおいて、開発者（Developers）の特徴として正しいものはどれですか？",
      en: "Which is a correct characteristic of Developers in a Scrum Team?",
    },
    choices: [
      { id: "a", text: { ja: "テスターやプログラマーなど、専門の役職に分かれている", en: "They are divided into specialized roles like testers and programmers" } },
      { id: "b", text: { ja: "スクラムマスターの指示に従って作業を行う", en: "They work according to the Scrum Master's instructions" } },
      { id: "c", text: { ja: "スプリントの作業について自己管理を行う", en: "They are self-managing regarding Sprint work" } },
      { id: "d", text: { ja: "プロダクトオーナーの承認なしには作業を開始できない", en: "They cannot start work without Product Owner approval" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "開発者は自己管理を行うチームです。スクラムでは開発者内での役職やサブチームは存在せず、各スプリントでインクリメントを作成するために必要な全ての作業に対して責任を持ちます。",
      en: "Developers are a self-managing team. In Scrum, there are no titles or sub-teams within Developers, and they are accountable for all work needed to create an Increment each Sprint.",
    },
  },
  {
    id: 16,
    type: "multiple",
    category: "roles",
    question: {
      ja: "開発者（Developers）の責務として正しいものを全て選んでください。",
      en: "Select all that are correct responsibilities of Developers.",
    },
    choices: [
      { id: "a", text: { ja: "スプリントの計画（スプリントバックログ）を作成する", en: "Creating the plan for the Sprint (Sprint Backlog)" } },
      { id: "b", text: { ja: "完成の定義を忠実に守ることで品質を確保する", en: "Instilling quality by adhering to the Definition of Done" } },
      { id: "c", text: { ja: "スプリントゴールに向けて毎日計画を適応させる", en: "Adapting their plan each day toward the Sprint Goal" } },
      { id: "d", text: { ja: "プロダクトバックログの優先順位を決定する", en: "Deciding the priority of the Product Backlog" } },
      { id: "e", text: { ja: "専門家としてお互いに責任を持つ", en: "Holding each other accountable as professionals" } },
    ],
    correctAnswers: ["a", "b", "c", "e"],
    explanation: {
      ja: "開発者はスプリントバックログの作成、完成の定義の遵守、毎日の計画適応、お互いへの責任を持ちます。プロダクトバックログの優先順位決定はプロダクトオーナーの責務です。",
      en: "Developers are responsible for creating the Sprint Backlog, adhering to the Definition of Done, adapting their plan daily, and holding each other accountable. Product Backlog priority is the Product Owner's responsibility.",
    },
  },
  {
    id: 17,
    type: "single",
    category: "roles",
    question: {
      ja: "プロダクトオーナーが不在の場合、プロダクトバックログアイテムの優先順位は誰が決定できますか？",
      en: "Who can decide the priority of Product Backlog items when the Product Owner is absent?",
    },
    choices: [
      { id: "a", text: { ja: "スクラムマスター", en: "Scrum Master" } },
      { id: "b", text: { ja: "開発者", en: "Developers" } },
      { id: "c", text: { ja: "ステークホルダー", en: "Stakeholders" } },
      { id: "d", text: { ja: "プロダクトオーナー以外は決定できない", en: "No one except the Product Owner can decide" } },
    ],
    correctAnswers: ["d"],
    explanation: {
      ja: "プロダクトバックログの管理と優先順位付けはプロダクトオーナーの専属の責務です。プロダクトオーナーは一人の人間であり、委員会ではありません。不在の場合でも、他の誰かが代わりに決定することはできません。",
      en: "Managing and prioritizing the Product Backlog is the exclusive responsibility of the Product Owner. The Product Owner is one person, not a committee. Even when absent, no one else can make decisions on their behalf.",
    },
  },
  {
    id: 18,
    type: "single",
    category: "roles",
    question: {
      ja: "スクラムマスターがチームに対して行うべきことは何ですか？",
      en: "What should the Scrum Master do for the team?",
    },
    choices: [
      { id: "a", text: { ja: "開発者に作業を割り当て、進捗を管理する", en: "Assign work to Developers and manage progress" } },
      { id: "b", text: { ja: "チームを自己管理型に成長させ、障害物を取り除く支援をする", en: "Help the team become self-managing and remove impediments" } },
      { id: "c", text: { ja: "プロダクトバックログの詳細を記述する", en: "Write the details of the Product Backlog" } },
      { id: "d", text: { ja: "ステークホルダーへの進捗報告を作成する", en: "Create progress reports for stakeholders" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターはサーバントリーダーとして、チームが自己管理できるように成長を支援し、障害物を取り除くことに注力します。作業の割り当てや進捗管理は行いません。",
      en: "As a servant-leader, the Scrum Master focuses on helping the team become self-managing and removing impediments. They do not assign work or manage progress.",
    },
  },
  {
    id: 19,
    type: "single",
    category: "roles",
    question: {
      ja: "スクラムガイド2020において「開発チーム」という用語はどのように変更されましたか？",
      en: "How was the term 'Development Team' changed in the Scrum Guide 2020?",
    },
    choices: [
      { id: "a", text: { ja: "「実装チーム」に変更された", en: "Changed to 'Implementation Team'" } },
      { id: "b", text: { ja: "「開発者（Developers）」に変更された", en: "Changed to 'Developers'" } },
      { id: "c", text: { ja: "変更されていない", en: "No change was made" } },
      { id: "d", text: { ja: "「エンジニアリングチーム」に変更された", en: "Changed to 'Engineering Team'" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムガイド2020では「開発チーム」という用語が廃止され、「開発者（Developers）」という用語に変更されました。これは、チーム内チームの概念を排除し、スクラムチーム全体としての一体感を強調するためです。",
      en: "The Scrum Guide 2020 replaced 'Development Team' with 'Developers'. This was to eliminate the concept of a team within a team and emphasize unity of the entire Scrum Team.",
    },
  },
  {
    id: 20,
    type: "multiple",
    category: "roles",
    question: {
      ja: "プロダクトオーナーの責務として正しいものを全て選んでください。",
      en: "Select all that are correct responsibilities of the Product Owner.",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトゴールを策定し、明示的に伝える", en: "Developing and explicitly communicating the Product Goal" } },
      { id: "b", text: { ja: "プロダクトバックログアイテムを作成し、明確に伝える", en: "Creating and clearly communicating Product Backlog items" } },
      { id: "c", text: { ja: "プロダクトバックログアイテムを並び替える", en: "Ordering Product Backlog items" } },
      { id: "d", text: { ja: "開発者の作業を日々監督する", en: "Supervising Developers' work daily" } },
      { id: "e", text: { ja: "プロダクトバックログが透明で、見える化され、理解されていることを確実にする", en: "Ensuring the Product Backlog is transparent, visible, and understood" } },
    ],
    correctAnswers: ["a", "b", "c", "e"],
    explanation: {
      ja: "プロダクトオーナーはプロダクトゴールの策定、バックログアイテムの作成・伝達・並び替え、バックログの透明性確保に責任を持ちます。開発者の作業の監督はプロダクトオーナーの役割ではなく、開発者は自己管理を行います。",
      en: "The Product Owner is responsible for developing the Product Goal, creating and communicating backlog items, ordering them, and ensuring transparency. Supervising Developers is not the Product Owner's role; Developers are self-managing.",
    },
  },
  {
    id: 21,
    type: "single",
    category: "roles",
    question: {
      ja: "スクラムチームは何に対して説明責任を持ちますか？",
      en: "What is the Scrum Team accountable for?",
    },
    choices: [
      { id: "a", text: { ja: "プロジェクト計画の遵守", en: "Adhering to the project plan" } },
      { id: "b", text: { ja: "価値のあるインクリメントを毎スプリント作成すること", en: "Creating a valuable Increment every Sprint" } },
      { id: "c", text: { ja: "予算内でプロジェクトを完了すること", en: "Completing the project within budget" } },
      { id: "d", text: { ja: "全てのバグを修正すること", en: "Fixing all bugs" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムチームは、各スプリントで価値のある使用可能なインクリメントを作成することに対して説明責任を持ちます。これがスクラムの根幹であり、経験主義の実践につながります。",
      en: "The Scrum Team is accountable for creating a valuable, usable Increment every Sprint. This is the core of Scrum and enables empiricism in practice.",
    },
  },
  {
    id: 22,
    type: "single",
    category: "roles",
    question: {
      ja: "スクラムマスターが組織に対して行うサービスとして最も適切なものはどれですか？",
      en: "What is the most appropriate service the Scrum Master provides to the organization?",
    },
    choices: [
      { id: "a", text: { ja: "プロジェクトの進捗レポートを作成する", en: "Creating project progress reports" } },
      { id: "b", text: { ja: "スクラムの採用を主導・計画・助言する", en: "Leading, planning, and advising on Scrum adoption" } },
      { id: "c", text: { ja: "人事評価のためのデータを収集する", en: "Collecting data for performance reviews" } },
      { id: "d", text: { ja: "予算管理を行う", en: "Managing budgets" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターは組織に対して、スクラムの採用を主導・計画・助言し、スクラムの理解と実践を支援します。進捗レポートや人事評価、予算管理はスクラムマスターの責務ではありません。",
      en: "The Scrum Master leads, plans, and advises on Scrum adoption for the organization and supports understanding and practice of Scrum. Progress reports, performance reviews, and budget management are not Scrum Master responsibilities.",
    },
  },
  {
    id: 23,
    type: "single",
    category: "roles",
    question: {
      ja: "プロダクトオーナーは委員会やチームとして機能できますか？",
      en: "Can the Product Owner function as a committee or team?",
    },
    choices: [
      { id: "a", text: { ja: "はい、複数人で責任を分担できる", en: "Yes, responsibilities can be shared among multiple people" } },
      { id: "b", text: { ja: "いいえ、一人の人間でなければならない", en: "No, it must be one person" } },
      { id: "c", text: { ja: "スクラムマスターと共同で機能できる", en: "Can function jointly with the Scrum Master" } },
      { id: "d", text: { ja: "組織の規模によって決まる", en: "It depends on the organization's size" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "プロダクトオーナーは一人の人間であり、委員会ではありません。プロダクトオーナーは多くのステークホルダーのニーズを代表することもありますが、変更したい場合はプロダクトオーナー一人に働きかける必要があります。",
      en: "The Product Owner is one person, not a committee. The Product Owner may represent the needs of many stakeholders, but those wanting changes must address the Product Owner directly.",
    },
  },
  {
    id: 24,
    type: "single",
    category: "roles",
    question: {
      ja: "スクラムチームにサブチームや階層構造は存在しますか？",
      en: "Do sub-teams or hierarchies exist within the Scrum Team?",
    },
    choices: [
      { id: "a", text: { ja: "はい、QAチームや設計チームなどのサブチームがある", en: "Yes, there are sub-teams like QA and design teams" } },
      { id: "b", text: { ja: "はい、シニアとジュニアの階層がある", en: "Yes, there are senior and junior hierarchies" } },
      { id: "c", text: { ja: "いいえ、サブチームや階層は存在しない", en: "No, there are no sub-teams or hierarchies" } },
      { id: "d", text: { ja: "プロジェクトの規模によって決まる", en: "It depends on the project size" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スクラムガイド2020では明確に「スクラムチーム内にサブチームや階層は存在しない」と記載されています。これは凝集性のある専門家の単位であり、一度に一つの目標（プロダクトゴール）に集中します。",
      en: "The Scrum Guide 2020 clearly states 'there are no sub-teams or hierarchies within a Scrum Team.' It is a cohesive unit of professionals focused on one objective at a time, the Product Goal.",
    },
  },
  {
    id: 25,
    type: "single",
    category: "roles",
    question: {
      ja: "スクラムにおいて、誰がスプリント中の作業の進め方を決定しますか？",
      en: "In Scrum, who decides how to do the work during the Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナー", en: "Product Owner" } },
      { id: "b", text: { ja: "スクラムマスター", en: "Scrum Master" } },
      { id: "c", text: { ja: "開発者", en: "Developers" } },
      { id: "d", text: { ja: "ステークホルダー", en: "Stakeholders" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "開発者はスプリント中の作業の進め方について自己管理を行います。誰も開発者に何をすべきか指示することはできません。スクラムマスターやプロダクトオーナーが作業の進め方を指示することはありません。",
      en: "Developers are self-managing in how they do their work during the Sprint. No one tells Developers what to do. Neither the Scrum Master nor Product Owner directs how work is done.",
    },
  },

  // ===== スクラムイベント =====
  {
    id: 26,
    type: "single",
    category: "events",
    question: {
      ja: "スプリントの最大期間として正しいものはどれですか？",
      en: "What is the maximum duration of a Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "2週間", en: "2 weeks" } },
      { id: "b", text: { ja: "1ヶ月（4週間）", en: "1 month (4 weeks)" } },
      { id: "c", text: { ja: "6週間", en: "6 weeks" } },
      { id: "d", text: { ja: "制限はない", en: "No limit" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムガイド2020では、スプリントの期間は1ヶ月以下の固定の長さと定められています。一般的に短い期間のスプリントが推奨されますが、最大は1ヶ月（4週間）です。",
      en: "The Scrum Guide 2020 states that Sprints are fixed length events of one month or less. Shorter Sprints are generally recommended, but the maximum is one month (4 weeks).",
    },
  },
  {
    id: 27,
    type: "single",
    category: "events",
    question: {
      ja: "スプリントプランニングの主な成果物は何ですか？",
      en: "What are the main outputs of Sprint Planning?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトバックログ", en: "Product Backlog" } },
      { id: "b", text: { ja: "インクリメント", en: "Increment" } },
      { id: "c", text: { ja: "スプリントゴールとスプリントバックログ", en: "Sprint Goal and Sprint Backlog" } },
      { id: "d", text: { ja: "完成の定義", en: "Definition of Done" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリントプランニングでは、スプリントゴールを設定し、それを達成するためのスプリントバックログを作成します。これらがスプリントプランニングの主な成果物です。",
      en: "Sprint Planning establishes the Sprint Goal and creates the Sprint Backlog to achieve it. These are the main outputs of Sprint Planning.",
    },
  },
  {
    id: 28,
    type: "single",
    category: "events",
    question: {
      ja: "スプリントプランニングで最初に取り組むトピックは何ですか？",
      en: "What is the first topic addressed in Sprint Planning?",
    },
    choices: [
      { id: "a", text: { ja: "このスプリントで完了できる作業量の見積もり", en: "Estimating how much work can be completed in this Sprint" } },
      { id: "b", text: { ja: "このスプリントはなぜ価値があるのか", en: "Why is this Sprint valuable?" } },
      { id: "c", text: { ja: "選択した作業をどのように達成するか", en: "How will the chosen work get done?" } },
      { id: "d", text: { ja: "どのプロダクトバックログアイテムを含めるか", en: "Which Product Backlog items to include" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムガイド2020では、スプリントプランニングで最初に取り組むトピックは「このスプリントはなぜ価値があるのか」です。プロダクトオーナーがスプリントでプロダクトの価値と有用性をどのように高めるかを提案します。",
      en: "The Scrum Guide 2020 states that the first topic in Sprint Planning is 'Why is this Sprint valuable?' The Product Owner proposes how the product could increase its value and utility in the Sprint.",
    },
  },
  {
    id: 29,
    type: "single",
    category: "events",
    question: {
      ja: "デイリースクラムの目的として最も適切なものはどれですか？",
      en: "What is the most appropriate purpose of the Daily Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "開発者がスクラムマスターに進捗を報告する", en: "For Developers to report progress to the Scrum Master" } },
      { id: "b", text: { ja: "スプリントゴールに向けた進捗を検査し、必要に応じてスプリントバックログを適応させる", en: "To inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary" } },
      { id: "c", text: { ja: "プロダクトオーナーが開発者の作業を承認する", en: "For the Product Owner to approve Developers' work" } },
      { id: "d", text: { ja: "ステークホルダーにデモを行う", en: "To demo to stakeholders" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "デイリースクラムの目的は、スプリントゴールに向けた進捗を検査し、必要に応じてスプリントバックログを適応させることで、計画した今後の作業を調整することです。報告会ではありません。",
      en: "The purpose of the Daily Scrum is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary, adjusting the upcoming planned work. It is not a status meeting.",
    },
  },
  {
    id: 30,
    type: "single",
    category: "events",
    question: {
      ja: "デイリースクラムの制限時間は何分ですか？",
      en: "What is the time-box for the Daily Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "15分", en: "15 minutes" } },
      { id: "b", text: { ja: "30分", en: "30 minutes" } },
      { id: "c", text: { ja: "60分", en: "60 minutes" } },
      { id: "d", text: { ja: "スプリントの長さによって変わる", en: "It varies based on Sprint length" } },
    ],
    correctAnswers: ["a"],
    explanation: {
      ja: "デイリースクラムのタイムボックスは15分です。これはスプリントの長さに関係なく固定です。短時間で済ませることで、複雑さを軽減し、集中を維持します。",
      en: "The Daily Scrum is time-boxed to 15 minutes. This is fixed regardless of Sprint length. Keeping it short reduces complexity and maintains focus.",
    },
  },
  {
    id: 31,
    type: "single",
    category: "events",
    question: {
      ja: "デイリースクラムで「3つの質問」について正しい説明はどれですか？",
      en: "Which statement about the 'three questions' in Daily Scrum is correct?",
    },
    choices: [
      { id: "a", text: { ja: "必ず使用しなければならない", en: "They must be used" } },
      { id: "b", text: { ja: "スクラムガイド2020では必須ではなく、開発者が構造と手法を選択できる", en: "Not required in the Scrum Guide 2020; Developers choose their own structure and techniques" } },
      { id: "c", text: { ja: "スクラムマスターが質問する", en: "The Scrum Master asks the questions" } },
      { id: "d", text: { ja: "プロダクトオーナーへの報告のために使用する", en: "Used for reporting to the Product Owner" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムガイド2020では、デイリースクラムで「3つの質問」を使用することは必須ではありません。開発者は、スプリントゴールに集中し、自己管理を促進する限り、好きな構造と手法を選択できます。",
      en: "The Scrum Guide 2020 does not require using the 'three questions' in Daily Scrum. Developers can choose any structure and techniques they prefer, as long as they focus on the Sprint Goal and promote self-management.",
    },
  },
  {
    id: 32,
    type: "single",
    category: "events",
    question: {
      ja: "スプリントレビューの主な目的は何ですか？",
      en: "What is the main purpose of the Sprint Review?",
    },
    choices: [
      { id: "a", text: { ja: "チームのパフォーマンスを評価する", en: "To evaluate team performance" } },
      { id: "b", text: { ja: "スプリントの成果を検査し、今後の適応を決定する", en: "To inspect the outcome of the Sprint and determine future adaptations" } },
      { id: "c", text: { ja: "次のスプリントの計画を立てる", en: "To plan the next Sprint" } },
      { id: "d", text: { ja: "開発者の技術力を評価する", en: "To evaluate Developers' technical skills" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントレビューの目的は、スプリントの成果を検査し、今後の適応を決定することです。作業セッションであり、単なる報告会やプレゼンテーションではありません。",
      en: "The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations. It is a working session, not just a presentation or status meeting.",
    },
  },
  {
    id: 33,
    type: "single",
    category: "events",
    question: {
      ja: "スプリントレトロスペクティブの主な目的は何ですか？",
      en: "What is the main purpose of the Sprint Retrospective?",
    },
    choices: [
      { id: "a", text: { ja: "次のスプリントの作業を計画する", en: "To plan work for the next Sprint" } },
      { id: "b", text: { ja: "完成したインクリメントをレビューする", en: "To review the completed Increment" } },
      { id: "c", text: { ja: "品質と効果を高める方法を計画する", en: "To plan ways to increase quality and effectiveness" } },
      { id: "d", text: { ja: "プロダクトバックログを洗練する", en: "To refine the Product Backlog" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリントレトロスペクティブの目的は、品質と効果を高める方法を計画することです。チームは前回のスプリントを振り返り、うまくいったこと、問題点、そしてそれらの問題をどのように解決できるかを検討します。",
      en: "The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness. The team reflects on the previous Sprint, discussing what went well, problems encountered, and how to solve them.",
    },
  },
  {
    id: 34,
    type: "multiple",
    category: "events",
    question: {
      ja: "スプリントレトロスペクティブで議論される内容として正しいものを全て選んでください。（5つ選択）",
      en: "Select all topics that are discussed in the Sprint Retrospective. (Select 5)",
    },
    choices: [
      { id: "a", text: { ja: "個人に関すること", en: "Individuals" } },
      { id: "b", text: { ja: "相互作用に関すること", en: "Interactions" } },
      { id: "c", text: { ja: "プロセスに関すること", en: "Processes" } },
      { id: "d", text: { ja: "ツールに関すること", en: "Tools" } },
      { id: "e", text: { ja: "完成の定義に関すること", en: "Definition of Done" } },
      { id: "f", text: { ja: "個人の業績評価に関すること", en: "Individual performance reviews" } },
      { id: "g", text: { ja: "次のスプリントで実装する機能の詳細設計", en: "Detailed design of features for the next Sprint" } },
    ],
    correctAnswers: ["a", "b", "c", "d", "e"],
    explanation: {
      ja: "スプリントレトロスペクティブでは、個人、相互作用、プロセス、ツール、完成の定義に関して、うまくいったこと、問題点、そしてそれらの問題をどのように解決できるかを検討します。「個人の業績評価」は人事評価のためのものであり、レトロスペクティブの目的ではありません。「次のスプリントの詳細設計」はスプリントプランニングで行う内容です。",
      en: "The Sprint Retrospective discusses individuals, interactions, processes, tools, and Definition of Done, focusing on what went well, problems, and solutions. Individual performance reviews are for HR purposes, not retrospectives. Detailed design for the next Sprint is done in Sprint Planning.",
    },
  },
  {
    id: 35,
    type: "single",
    category: "events",
    question: {
      ja: "スプリント中にスプリントゴールが陳腐化した場合、何が起こりますか？",
      en: "What happens if the Sprint Goal becomes obsolete during the Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "スプリントは継続しなければならない", en: "The Sprint must continue" } },
      { id: "b", text: { ja: "スプリントは中止される可能性がある", en: "The Sprint could be cancelled" } },
      { id: "c", text: { ja: "スプリントゴールを変更する", en: "Change the Sprint Goal" } },
      { id: "d", text: { ja: "開発者がスコープを調整する", en: "Developers adjust the scope" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントゴールが陳腐化した場合、スプリントは中止される可能性があります。スプリントを中止できるのはプロダクトオーナーのみです。これは例外的な状況であり、通常は避けるべきです。",
      en: "If the Sprint Goal becomes obsolete, the Sprint could be cancelled. Only the Product Owner can cancel a Sprint. This is an exceptional situation and should normally be avoided.",
    },
  },
  {
    id: 36,
    type: "single",
    category: "events",
    question: {
      ja: "1ヶ月のスプリントの場合、スプリントプランニングのタイムボックスは最大何時間ですか？",
      en: "What is the maximum time-box for Sprint Planning for a one-month Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "4時間", en: "4 hours" } },
      { id: "b", text: { ja: "6時間", en: "6 hours" } },
      { id: "c", text: { ja: "8時間", en: "8 hours" } },
      { id: "d", text: { ja: "制限なし", en: "No limit" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリントプランニングのタイムボックスは、1ヶ月のスプリントで最大8時間です。短いスプリントでは、スプリントプランニングの時間も短くなります。",
      en: "Sprint Planning is time-boxed to a maximum of 8 hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.",
    },
  },
  {
    id: 37,
    type: "single",
    category: "events",
    question: {
      ja: "1ヶ月のスプリントの場合、スプリントレビューのタイムボックスは最大何時間ですか？",
      en: "What is the maximum time-box for Sprint Review for a one-month Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "2時間", en: "2 hours" } },
      { id: "b", text: { ja: "4時間", en: "4 hours" } },
      { id: "c", text: { ja: "6時間", en: "6 hours" } },
      { id: "d", text: { ja: "8時間", en: "8 hours" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントレビューのタイムボックスは、1ヶ月のスプリントで最大4時間です。短いスプリントでは、スプリントレビューの時間も短くなります。",
      en: "The Sprint Review is time-boxed to a maximum of 4 hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.",
    },
  },
  {
    id: 38,
    type: "single",
    category: "events",
    question: {
      ja: "1ヶ月のスプリントの場合、スプリントレトロスペクティブのタイムボックスは最大何時間ですか？",
      en: "What is the maximum time-box for Sprint Retrospective for a one-month Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "1時間", en: "1 hour" } },
      { id: "b", text: { ja: "2時間", en: "2 hours" } },
      { id: "c", text: { ja: "3時間", en: "3 hours" } },
      { id: "d", text: { ja: "4時間", en: "4 hours" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリントレトロスペクティブのタイムボックスは、1ヶ月のスプリントで最大3時間です。短いスプリントでは、スプリントレトロスペクティブの時間も短くなります。",
      en: "The Sprint Retrospective is time-boxed to a maximum of 3 hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.",
    },
  },
  {
    id: 39,
    type: "single",
    category: "events",
    question: {
      ja: "スプリントを中止できるのは誰ですか？",
      en: "Who can cancel a Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "スクラムマスター", en: "Scrum Master" } },
      { id: "b", text: { ja: "開発者", en: "Developers" } },
      { id: "c", text: { ja: "プロダクトオーナー", en: "Product Owner" } },
      { id: "d", text: { ja: "ステークホルダー", en: "Stakeholders" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリントを中止できるのはプロダクトオーナーのみです。スプリントゴールが陳腐化した場合に中止される可能性がありますが、これは例外的な状況です。",
      en: "Only the Product Owner can cancel a Sprint. A Sprint may be cancelled if the Sprint Goal becomes obsolete, but this is an exceptional situation.",
    },
  },
  {
    id: 40,
    type: "multiple",
    category: "events",
    question: {
      ja: "スクラムの5つのイベントとして正しいものを全て選んでください。",
      en: "Select all that are the five Scrum events.",
    },
    choices: [
      { id: "a", text: { ja: "スプリント", en: "Sprint" } },
      { id: "b", text: { ja: "スプリントプランニング", en: "Sprint Planning" } },
      { id: "c", text: { ja: "デイリースクラム", en: "Daily Scrum" } },
      { id: "d", text: { ja: "バックログリファインメント", en: "Backlog Refinement" } },
      { id: "e", text: { ja: "スプリントレビュー", en: "Sprint Review" } },
      { id: "f", text: { ja: "スプリントレトロスペクティブ", en: "Sprint Retrospective" } },
    ],
    correctAnswers: ["a", "b", "c", "e", "f"],
    explanation: {
      ja: "スクラムの5つのイベントは、スプリント、スプリントプランニング、デイリースクラム、スプリントレビュー、スプリントレトロスペクティブです。バックログリファインメントは継続的な活動であり、公式のイベントではありません。",
      en: "The five Scrum events are Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. Backlog Refinement is an ongoing activity and not a formal event.",
    },
  },
  {
    id: 41,
    type: "single",
    category: "events",
    question: {
      ja: "スプリントレビューに参加すべき人は誰ですか？",
      en: "Who should participate in the Sprint Review?",
    },
    choices: [
      { id: "a", text: { ja: "開発者のみ", en: "Developers only" } },
      { id: "b", text: { ja: "スクラムチームと主要なステークホルダー", en: "The Scrum Team and key stakeholders" } },
      { id: "c", text: { ja: "スクラムマスターとプロダクトオーナーのみ", en: "Scrum Master and Product Owner only" } },
      { id: "d", text: { ja: "経営層のみ", en: "Management only" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントレビューには、スクラムチーム全体（プロダクトオーナー、スクラムマスター、開発者）と、プロダクトオーナーが招待した主要なステークホルダーが参加します。",
      en: "The Sprint Review includes the entire Scrum Team (Product Owner, Scrum Master, Developers) and key stakeholders invited by the Product Owner.",
    },
  },
  {
    id: 42,
    type: "single",
    category: "events",
    question: {
      ja: "デイリースクラムに参加する必要があるのは誰ですか？",
      en: "Who is required to attend the Daily Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "スクラムチーム全員", en: "The entire Scrum Team" } },
      { id: "b", text: { ja: "開発者", en: "Developers" } },
      { id: "c", text: { ja: "開発者とスクラムマスター", en: "Developers and Scrum Master" } },
      { id: "d", text: { ja: "開発者とプロダクトオーナー", en: "Developers and Product Owner" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "デイリースクラムは開発者のためのイベントです。プロダクトオーナーやスクラムマスターがスプリントバックログの作業に積極的に取り組んでいる場合は、開発者として参加します。",
      en: "The Daily Scrum is for the Developers. If the Product Owner or Scrum Master are actively working on Sprint Backlog items, they participate as Developers.",
    },
  },
  {
    id: 43,
    type: "single",
    category: "events",
    question: {
      ja: "スプリントのスコープは誰が変更できますか？",
      en: "Who can change the scope of the Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナーのみ", en: "Product Owner only" } },
      { id: "b", text: { ja: "スクラムマスターのみ", en: "Scrum Master only" } },
      { id: "c", text: { ja: "開発者とプロダクトオーナーの交渉によって", en: "Through negotiation between Developers and Product Owner" } },
      { id: "d", text: { ja: "ステークホルダー", en: "Stakeholders" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリント中にスコープを明確にしたり再交渉したりする場合は、プロダクトオーナーと開発者が交渉します。ただし、スプリントゴールに悪影響を与える変更は行いません。",
      en: "Scope may be clarified or renegotiated between the Product Owner and Developers during the Sprint. However, no changes that endanger the Sprint Goal are made.",
    },
  },
  {
    id: 44,
    type: "single",
    category: "events",
    question: {
      ja: "スプリント中に品質を下げることは許容されますか？",
      en: "Is lowering quality acceptable during a Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "はい、スケジュールを守るためなら許容される", en: "Yes, if it helps meet the schedule" } },
      { id: "b", text: { ja: "はい、プロダクトオーナーが承認すれば許容される", en: "Yes, if the Product Owner approves" } },
      { id: "c", text: { ja: "いいえ、品質は決して下げない", en: "No, quality is never compromised" } },
      { id: "d", text: { ja: "スクラムマスターの判断による", en: "It depends on the Scrum Master's judgment" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スクラムガイド2020では「品質は決して下げない」と明記されています。スコープを明確にしたり再交渉したりすることはあっても、品質を犠牲にすることは許容されません。",
      en: "The Scrum Guide 2020 clearly states 'quality does not decrease.' While scope may be clarified or renegotiated, sacrificing quality is never acceptable.",
    },
  },
  {
    id: 45,
    type: "single",
    category: "events",
    question: {
      ja: "スプリントとスプリントの間に休憩期間はありますか？",
      en: "Is there a break period between Sprints?",
    },
    choices: [
      { id: "a", text: { ja: "はい、1〜2日の休憩期間がある", en: "Yes, there is a 1-2 day break period" } },
      { id: "b", text: { ja: "いいえ、新しいスプリントは前のスプリント終了後すぐに開始される", en: "No, a new Sprint starts immediately after the previous Sprint ends" } },
      { id: "c", text: { ja: "チームの判断による", en: "It depends on the team's decision" } },
      { id: "d", text: { ja: "プロダクトオーナーが決定する", en: "The Product Owner decides" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "新しいスプリントは、前のスプリントの終了後すぐに開始されます。スプリント間に休憩期間やギャップはありません。",
      en: "A new Sprint starts immediately after the conclusion of the previous Sprint. There is no break or gap between Sprints.",
    },
  },

  // ===== 作成物とコミットメント =====
  {
    id: 46,
    type: "single",
    category: "artifacts",
    question: {
      ja: "プロダクトバックログに対するコミットメントは何ですか？",
      en: "What is the commitment for the Product Backlog?",
    },
    choices: [
      { id: "a", text: { ja: "完成の定義", en: "Definition of Done" } },
      { id: "b", text: { ja: "スプリントゴール", en: "Sprint Goal" } },
      { id: "c", text: { ja: "プロダクトゴール", en: "Product Goal" } },
      { id: "d", text: { ja: "リリース計画", en: "Release Plan" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "プロダクトバックログに対するコミットメントは「プロダクトゴール」です。プロダクトゴールはプロダクトの将来の状態を表し、スクラムチームの長期的な目標となります。",
      en: "The commitment for the Product Backlog is the Product Goal. The Product Goal describes a future state of the product and serves as the Scrum Team's long-term objective.",
    },
  },
  {
    id: 47,
    type: "single",
    category: "artifacts",
    question: {
      ja: "スプリントバックログに対するコミットメントは何ですか？",
      en: "What is the commitment for the Sprint Backlog?",
    },
    choices: [
      { id: "a", text: { ja: "完成の定義", en: "Definition of Done" } },
      { id: "b", text: { ja: "スプリントゴール", en: "Sprint Goal" } },
      { id: "c", text: { ja: "プロダクトゴール", en: "Product Goal" } },
      { id: "d", text: { ja: "バーンダウンチャート", en: "Burndown Chart" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントバックログに対するコミットメントは「スプリントゴール」です。スプリントゴールはスプリントの単一の目的であり、開発者が一貫した方向性を持って作業できるようにします。",
      en: "The commitment for the Sprint Backlog is the Sprint Goal. The Sprint Goal is the single objective for the Sprint, providing coherent direction for the Developers.",
    },
  },
  {
    id: 48,
    type: "single",
    category: "artifacts",
    question: {
      ja: "インクリメントに対するコミットメントは何ですか？",
      en: "What is the commitment for the Increment?",
    },
    choices: [
      { id: "a", text: { ja: "完成の定義", en: "Definition of Done" } },
      { id: "b", text: { ja: "スプリントゴール", en: "Sprint Goal" } },
      { id: "c", text: { ja: "プロダクトゴール", en: "Product Goal" } },
      { id: "d", text: { ja: "受け入れ基準", en: "Acceptance Criteria" } },
    ],
    correctAnswers: ["a"],
    explanation: {
      ja: "インクリメントに対するコミットメントは「完成の定義（Definition of Done）」です。完成の定義は、インクリメントが品質基準を満たしているかどうかを判断するための正式な説明です。",
      en: "The commitment for the Increment is the Definition of Done. The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product.",
    },
  },
  {
    id: 49,
    type: "single",
    category: "artifacts",
    question: {
      ja: "完成の定義（Definition of Done）を作成する責任は誰にありますか？",
      en: "Who is responsible for creating the Definition of Done?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナー", en: "Product Owner" } },
      { id: "b", text: { ja: "スクラムマスター", en: "Scrum Master" } },
      { id: "c", text: { ja: "開発者", en: "Developers" } },
      { id: "d", text: { ja: "スクラムチーム全体", en: "The entire Scrum Team" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スクラムガイド2020では、完成の定義は開発者が作成する責任があります。組織の標準がある場合は、それを最低限として従い、それを超える場合は開発者が追加の基準を設けることができます。",
      en: "The Scrum Guide 2020 states that Developers are responsible for creating the Definition of Done. If organizational standards exist, they must follow them at minimum, and may add stricter criteria.",
    },
  },
  {
    id: 50,
    type: "single",
    category: "artifacts",
    question: {
      ja: "プロダクトバックログアイテムが「完成の定義」を満たさない場合、どうなりますか？",
      en: "What happens if a Product Backlog item does not meet the Definition of Done?",
    },
    choices: [
      { id: "a", text: { ja: "スプリントレビューでステークホルダーに提示される", en: "It is presented to stakeholders at Sprint Review" } },
      { id: "b", text: { ja: "リリースされるが、後で修正される", en: "It is released but fixed later" } },
      { id: "c", text: { ja: "インクリメントの一部にならず、リリースできない", en: "It cannot be part of the Increment and cannot be released" } },
      { id: "d", text: { ja: "プロダクトオーナーの判断で承認される可能性がある", en: "It may be approved at the Product Owner's discretion" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "プロダクトバックログアイテムが完成の定義を満たさない場合、インクリメントの一部にはなりません。リリースすることも、スプリントレビューで提示することもできません。",
      en: "If a Product Backlog item does not meet the Definition of Done, it cannot be part of the Increment. It cannot be released or presented at the Sprint Review.",
    },
  },
  {
    id: 51,
    type: "multiple",
    category: "artifacts",
    question: {
      ja: "スクラムの3つの作成物として正しいものを全て選んでください。",
      en: "Select all that are the three Scrum artifacts.",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトバックログ", en: "Product Backlog" } },
      { id: "b", text: { ja: "スプリントバックログ", en: "Sprint Backlog" } },
      { id: "c", text: { ja: "インクリメント", en: "Increment" } },
      { id: "d", text: { ja: "バーンダウンチャート", en: "Burndown Chart" } },
      { id: "e", text: { ja: "リリースバックログ", en: "Release Backlog" } },
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: {
      ja: "スクラムの3つの作成物は、プロダクトバックログ、スプリントバックログ、インクリメントです。バーンダウンチャートやリリースバックログはスクラムの公式な作成物ではありません。",
      en: "The three Scrum artifacts are Product Backlog, Sprint Backlog, and Increment. Burndown charts and Release Backlogs are not official Scrum artifacts.",
    },
  },
  {
    id: 52,
    type: "single",
    category: "artifacts",
    question: {
      ja: "プロダクトバックログの特徴として正しいものはどれですか？",
      en: "Which is a correct characteristic of the Product Backlog?",
    },
    choices: [
      { id: "a", text: { ja: "プロジェクト開始時に完全に定義される", en: "It is fully defined at project start" } },
      { id: "b", text: { ja: "創発的で、常に進化し続ける", en: "It is emergent and constantly evolving" } },
      { id: "c", text: { ja: "スプリントごとに固定される", en: "It is fixed per Sprint" } },
      { id: "d", text: { ja: "一度作成されたら変更できない", en: "Once created, it cannot be changed" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "プロダクトバックログは創発的であり、プロダクトや環境の変化に応じて常に進化し続けます。最初から完全に定義されることはなく、継続的に洗練されます。",
      en: "The Product Backlog is emergent and constantly evolves as the product and environment change. It is never fully defined from the start and is continuously refined.",
    },
  },
  {
    id: 53,
    type: "single",
    category: "artifacts",
    question: {
      ja: "スプリントバックログに含まれるものとして正しいものはどれですか？",
      en: "What is correctly included in the Sprint Backlog?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトゴール、選択したPBI、それらを達成するための計画", en: "Product Goal, selected PBIs, and a plan to achieve them" } },
      { id: "b", text: { ja: "スプリントゴール、選択したPBI、それらを達成するための計画", en: "Sprint Goal, selected PBIs, and a plan to deliver the Increment" } },
      { id: "c", text: { ja: "全てのプロダクトバックログアイテム", en: "All Product Backlog items" } },
      { id: "d", text: { ja: "完了した作業のリスト", en: "A list of completed work" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントバックログは、スプリントゴール（なぜ）、選択されたプロダクトバックログアイテム（何を）、そしてインクリメントを提供するための計画（どのように）で構成されます。",
      en: "The Sprint Backlog consists of the Sprint Goal (why), selected Product Backlog items (what), and a plan for delivering the Increment (how).",
    },
  },
  {
    id: 54,
    type: "single",
    category: "artifacts",
    question: {
      ja: "インクリメントについて正しい説明はどれですか？",
      en: "Which statement about the Increment is correct?",
    },
    choices: [
      { id: "a", text: { ja: "スプリントの最後にのみ作成される", en: "It is only created at the end of the Sprint" } },
      { id: "b", text: { ja: "スプリント内で複数のインクリメントを作成できる", en: "Multiple Increments can be created within a Sprint" } },
      { id: "c", text: { ja: "プロダクトオーナーの承認がないと作成できない", en: "It cannot be created without Product Owner approval" } },
      { id: "d", text: { ja: "次のスプリントで完成させることができる", en: "It can be completed in the next Sprint" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "インクリメントはスプリント内で複数作成できます。各インクリメントは以前の全てのインクリメントに追加され、検証されて、全てのインクリメントが連携して機能することを確実にします。",
      en: "Multiple Increments may be created within a Sprint. Each Increment is additive to all prior Increments and thoroughly verified, ensuring all Increments work together.",
    },
  },
  {
    id: 55,
    type: "single",
    category: "artifacts",
    question: {
      ja: "プロダクトゴールについて正しい説明はどれですか？",
      en: "Which statement about the Product Goal is correct?",
    },
    choices: [
      { id: "a", text: { ja: "スプリントごとに変更される短期的な目標", en: "A short-term goal that changes every Sprint" } },
      { id: "b", text: { ja: "プロダクトの将来の状態を表す長期的な目標", en: "A long-term objective describing the future state of the product" } },
      { id: "c", text: { ja: "複数のプロダクトゴールを同時に追求できる", en: "Multiple Product Goals can be pursued simultaneously" } },
      { id: "d", text: { ja: "ステークホルダーが定義する", en: "Stakeholders define it" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "プロダクトゴールはプロダクトの将来の状態を表し、スクラムチームの長期的な目標となります。スクラムチームは一度に一つのプロダクトゴールに集中し、達成または放棄するまで次のプロダクトゴールに取り組みません。",
      en: "The Product Goal describes a future state of the product and serves as the Scrum Team's long-term objective. The team focuses on one Product Goal at a time and does not take on another until it is achieved or abandoned.",
    },
  },
  {
    id: 56,
    type: "single",
    category: "artifacts",
    question: {
      ja: "スプリントゴールについて正しい説明はどれですか？",
      en: "Which statement about the Sprint Goal is correct?",
    },
    choices: [
      { id: "a", text: { ja: "選択したプロダクトバックログアイテムの合計である", en: "It is the sum of selected Product Backlog items" } },
      { id: "b", text: { ja: "スプリント中に変更可能である", en: "It can be changed during the Sprint" } },
      { id: "c", text: { ja: "スプリントの単一の目的であり、柔軟性のある一貫した目標を提供する", en: "It is the single objective for the Sprint, providing flexibility with coherent direction" } },
      { id: "d", text: { ja: "プロダクトオーナーが単独で決定する", en: "The Product Owner alone decides it" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリントゴールはスプリントの単一の目的です。開発者に柔軟性を提供しながら、一貫した方向性を与えます。スプリント中にスプリントゴールを変更することはできません。",
      en: "The Sprint Goal is the single objective for the Sprint. It provides flexibility for Developers while giving coherent direction. The Sprint Goal cannot be changed during the Sprint.",
    },
  },
  {
    id: 57,
    type: "single",
    category: "artifacts",
    question: {
      ja: "プロダクトバックログリファインメントについて正しい説明はどれですか？",
      en: "Which statement about Product Backlog refinement is correct?",
    },
    choices: [
      { id: "a", text: { ja: "スクラムの公式イベントの一つである", en: "It is one of the official Scrum events" } },
      { id: "b", text: { ja: "プロダクトバックログアイテムを分解・定義する継続的な活動", en: "An ongoing activity to break down and define Product Backlog items" } },
      { id: "c", text: { ja: "スプリントレビュー中に行われる", en: "It is done during the Sprint Review" } },
      { id: "d", text: { ja: "プロダクトオーナーのみが行う", en: "Only the Product Owner does it" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "プロダクトバックログリファインメントは、プロダクトバックログアイテムを分解・定義する継続的な活動です。公式のスクラムイベントではなく、必要に応じて行われます。",
      en: "Product Backlog refinement is an ongoing activity to break down and further define Product Backlog items. It is not an official Scrum event and is done as needed.",
    },
  },
  {
    id: 58,
    type: "single",
    category: "artifacts",
    question: {
      ja: "完成の定義がプロダクトバックログアイテムに適用されるとどうなりますか？",
      en: "What happens when a Product Backlog item meets the Definition of Done?",
    },
    choices: [
      { id: "a", text: { ja: "開発者が作業を開始できる", en: "Developers can start working on it" } },
      { id: "b", text: { ja: "プロダクトオーナーがレビューできる", en: "The Product Owner can review it" } },
      { id: "c", text: { ja: "インクリメントが生まれる", en: "An Increment is born" } },
      { id: "d", text: { ja: "スプリントが終了する", en: "The Sprint ends" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "プロダクトバックログアイテムが完成の定義を満たすと、インクリメントが生まれます。完成の定義を満たさない限り、その作業はインクリメントの一部にはなりません。",
      en: "When a Product Backlog item meets the Definition of Done, an Increment is born. Until the Definition of Done is met, the work is not part of the Increment.",
    },
  },
  {
    id: 59,
    type: "single",
    category: "artifacts",
    question: {
      ja: "組織に完成の定義の標準がある場合、スクラムチームはどうすべきですか？",
      en: "What should the Scrum Team do if the organization has a Definition of Done standard?",
    },
    choices: [
      { id: "a", text: { ja: "組織の標準を無視して独自の定義を作成する", en: "Ignore the organizational standard and create their own" } },
      { id: "b", text: { ja: "組織の標準を最低限として従い、必要に応じてより厳格な基準を追加できる", en: "Follow the organizational standard as a minimum and add stricter criteria as needed" } },
      { id: "c", text: { ja: "組織の標準を緩和することができる", en: "They can relax the organizational standard" } },
      { id: "d", text: { ja: "スクラムマスターが判断する", en: "The Scrum Master decides" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "組織に完成の定義の標準がある場合、スクラムチームは最低限それに従わなければなりません。より厳格な基準を追加することは可能ですが、緩和することはできません。",
      en: "If the organization has a Definition of Done standard, the Scrum Team must follow it at minimum. They may add stricter criteria but cannot relax it.",
    },
  },
  {
    id: 60,
    type: "multiple",
    category: "artifacts",
    question: {
      ja: "スプリントバックログについて正しいものを全て選んでください。",
      en: "Select all that are correct about the Sprint Backlog.",
    },
    choices: [
      { id: "a", text: { ja: "開発者によって作成・管理される", en: "Created and managed by the Developers" } },
      { id: "b", text: { ja: "スプリント中に更新される", en: "Updated during the Sprint" } },
      { id: "c", text: { ja: "スプリントゴールを含む", en: "Contains the Sprint Goal" } },
      { id: "d", text: { ja: "プロダクトオーナーが最終承認する", en: "Requires final approval from the Product Owner" } },
      { id: "e", text: { ja: "開発者にとってリアルタイムの作業の絵である", en: "It is a real-time picture of work for the Developers" } },
    ],
    correctAnswers: ["a", "b", "c", "e"],
    explanation: {
      ja: "スプリントバックログは開発者によって作成・管理され、スプリント中に継続的に更新されます。スプリントゴールを含み、開発者にとってリアルタイムの作業の絵となります。プロダクトオーナーの承認は不要です。",
      en: "The Sprint Backlog is created and managed by Developers and continuously updated during the Sprint. It contains the Sprint Goal and serves as a real-time picture of work. Product Owner approval is not required.",
    },
  },

  // ===== シチュエーション問題 =====
  {
    id: 61,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリント中に開発者が計画した全ての作業を完了できないことが明らかになりました。最も適切な対応はどれですか？",
      en: "During the Sprint, it becomes clear that Developers cannot complete all planned work. What is the most appropriate response?",
    },
    choices: [
      { id: "a", text: { ja: "品質を下げて全ての作業を完了する", en: "Lower quality to complete all work" } },
      { id: "b", text: { ja: "スプリントを延長する", en: "Extend the Sprint" } },
      { id: "c", text: { ja: "プロダクトオーナーと協力してスコープを調整する", en: "Work with the Product Owner to adjust scope" } },
      { id: "d", text: { ja: "スプリントを中止する", en: "Cancel the Sprint" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリント中に全ての作業を完了できない場合、プロダクトオーナーと開発者が協力してスコープを調整します。品質を下げたり、スプリントを延長したりすることは許容されません。",
      en: "When all work cannot be completed during the Sprint, the Product Owner and Developers work together to adjust scope. Lowering quality or extending the Sprint is not acceptable.",
    },
  },
  {
    id: 62,
    type: "single",
    category: "situation",
    question: {
      ja: "プロダクトオーナーがステークホルダーから新しい緊急の要件を受けました。スプリント中にこの要件を追加するにはどうすべきですか？",
      en: "The Product Owner receives a new urgent requirement from stakeholders. How should this requirement be added during the Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナーが直接スプリントバックログに追加する", en: "Product Owner directly adds it to the Sprint Backlog" } },
      { id: "b", text: { ja: "まずプロダクトバックログに追加し、開発者と交渉してスコープを調整する", en: "First add to Product Backlog, then negotiate with Developers to adjust scope" } },
      { id: "c", text: { ja: "スクラムマスターが判断して追加する", en: "Scrum Master decides and adds it" } },
      { id: "d", text: { ja: "次のスプリントまで待つ必要がある", en: "Must wait until the next Sprint" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "新しい要件はまずプロダクトバックログに追加されます。スプリント中に追加する必要がある場合は、プロダクトオーナーと開発者が交渉してスコープを調整しますが、スプリントゴールに悪影響を与えないようにします。",
      en: "New requirements are first added to the Product Backlog. If they need to be added during the Sprint, the Product Owner and Developers negotiate to adjust scope while not endangering the Sprint Goal.",
    },
  },
  {
    id: 63,
    type: "single",
    category: "situation",
    question: {
      ja: "スクラムマスターがチームのために行うべき最も重要なことは何ですか？",
      en: "What is the most important thing the Scrum Master should do for the team?",
    },
    choices: [
      { id: "a", text: { ja: "開発者に作業を割り当てる", en: "Assign work to Developers" } },
      { id: "b", text: { ja: "障害物を取り除き、チームが自己管理できるように支援する", en: "Remove impediments and help the team become self-managing" } },
      { id: "c", text: { ja: "プロダクトバックログを管理する", en: "Manage the Product Backlog" } },
      { id: "d", text: { ja: "ステークホルダーへの進捗報告を作成する", en: "Create progress reports for stakeholders" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターはサーバントリーダーとして、チームの障害物を取り除き、自己管理できるように成長を支援することが最も重要な役割です。",
      en: "As a servant-leader, the Scrum Master's most important role is removing impediments and helping the team grow to become self-managing.",
    },
  },
  {
    id: 64,
    type: "single",
    category: "situation",
    question: {
      ja: "開発者がスプリントプランニングで選択できるプロダクトバックログアイテムの量を最終的に決定するのは誰ですか？",
      en: "Who finally decides how much Product Backlog Developers can select in Sprint Planning?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナー", en: "Product Owner" } },
      { id: "b", text: { ja: "スクラムマスター", en: "Scrum Master" } },
      { id: "c", text: { ja: "開発者", en: "Developers" } },
      { id: "d", text: { ja: "ステークホルダー", en: "Stakeholders" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリントで実行できる作業量を選択するのは開発者だけです。プロダクトオーナーは優先順位を示しますが、開発者が自分たちのキャパシティに基づいて選択します。",
      en: "Only Developers select how much work can be done in a Sprint. The Product Owner indicates priorities, but Developers choose based on their capacity.",
    },
  },
  {
    id: 65,
    type: "single",
    category: "situation",
    question: {
      ja: "ステークホルダーがスプリント中に開発者に直接作業を依頼しました。開発者はどう対応すべきですか？",
      en: "A stakeholder directly asks Developers for work during the Sprint. How should Developers respond?",
    },
    choices: [
      { id: "a", text: { ja: "ステークホルダーの依頼を即座に実行する", en: "Immediately fulfill the stakeholder's request" } },
      { id: "b", text: { ja: "スクラムマスターに報告して対処を任せる", en: "Report to the Scrum Master and let them handle it" } },
      { id: "c", text: { ja: "プロダクトオーナーに相談するよう案内する", en: "Direct them to consult with the Product Owner" } },
      { id: "d", text: { ja: "依頼を無視する", en: "Ignore the request" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "ステークホルダーからの要求はプロダクトオーナーを通じて行われるべきです。開発者はステークホルダーをプロダクトオーナーに案内し、プロダクトバックログの優先順位付けを通じて対応します。",
      en: "Stakeholder requests should go through the Product Owner. Developers direct stakeholders to the Product Owner, who handles prioritization through the Product Backlog.",
    },
  },
  {
    id: 66,
    type: "single",
    category: "situation",
    question: {
      ja: "デイリースクラムで開発者の一人が、ある技術的な問題について長時間議論を始めました。スクラムマスターはどう対応すべきですか？",
      en: "During the Daily Scrum, one Developer starts a lengthy discussion about a technical issue. How should the Scrum Master respond?",
    },
    choices: [
      { id: "a", text: { ja: "議論が終わるまで待つ", en: "Wait until the discussion finishes" } },
      { id: "b", text: { ja: "議論を中断させ、デイリースクラム後に続けるよう提案する", en: "Interrupt the discussion and suggest continuing after the Daily Scrum" } },
      { id: "c", text: { ja: "その開発者を叱責する", en: "Reprimand that Developer" } },
      { id: "d", text: { ja: "プロダクトオーナーに報告する", en: "Report to the Product Owner" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "デイリースクラムは15分のタイムボックスを守る必要があります。詳細な議論はデイリースクラム後に関係者のみで行うよう提案し、イベントを効率的に進めます。",
      en: "The Daily Scrum must respect its 15-minute time-box. Detailed discussions should be held after the Daily Scrum with only relevant parties to keep the event efficient.",
    },
  },
  {
    id: 67,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリントレビューで、ステークホルダーから多くの変更要求が出ました。プロダクトオーナーはどう対応すべきですか？",
      en: "At the Sprint Review, stakeholders made many change requests. How should the Product Owner respond?",
    },
    choices: [
      { id: "a", text: { ja: "全ての変更要求を即座に承認する", en: "Immediately approve all change requests" } },
      { id: "b", text: { ja: "変更要求を記録し、プロダクトバックログに追加して優先順位を検討する", en: "Record change requests, add to Product Backlog, and consider prioritization" } },
      { id: "c", text: { ja: "変更要求を拒否する", en: "Reject the change requests" } },
      { id: "d", text: { ja: "開発者に直接変更を依頼する", en: "Directly ask Developers to make changes" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "ステークホルダーからのフィードバックは重要です。プロダクトオーナーは変更要求を記録し、プロダクトバックログに追加して、他のアイテムとの優先順位を検討します。",
      en: "Stakeholder feedback is valuable. The Product Owner records change requests, adds them to the Product Backlog, and considers their priority against other items.",
    },
  },
  {
    id: 68,
    type: "single",
    category: "situation",
    question: {
      ja: "新しいスクラムチームが、完成の定義をまだ持っていません。どうすべきですか？",
      en: "A new Scrum Team doesn't have a Definition of Done yet. What should they do?",
    },
    choices: [
      { id: "a", text: { ja: "スクラムマスターが完成の定義を作成する", en: "The Scrum Master creates the Definition of Done" } },
      { id: "b", text: { ja: "プロダクトオーナーが完成の定義を作成する", en: "The Product Owner creates the Definition of Done" } },
      { id: "c", text: { ja: "開発者が完成の定義を作成する", en: "The Developers create the Definition of Done" } },
      { id: "d", text: { ja: "完成の定義なしで開始し、後で作成する", en: "Start without a Definition of Done and create it later" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "完成の定義は開発者が作成する責任があります。組織の標準がある場合はそれを最低限として従い、必要に応じてより厳格な基準を追加します。",
      en: "Developers are responsible for creating the Definition of Done. If organizational standards exist, they follow them at minimum and may add stricter criteria as needed.",
    },
  },
  {
    id: 69,
    type: "single",
    category: "situation",
    question: {
      ja: "プロダクトオーナーが忙しく、スプリントプランニングに参加できないと言っています。どうすべきですか？",
      en: "The Product Owner says they are too busy to attend Sprint Planning. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナーなしでスプリントプランニングを行う", en: "Conduct Sprint Planning without the Product Owner" } },
      { id: "b", text: { ja: "スクラムマスターがプロダクトオーナーの代わりを務める", en: "The Scrum Master acts as the Product Owner" } },
      { id: "c", text: { ja: "プロダクトオーナーの参加が必要であることを説明し、参加を促す", en: "Explain that Product Owner participation is necessary and encourage them to attend" } },
      { id: "d", text: { ja: "開発者だけでプロダクトバックログから選択する", en: "Have Developers select from Product Backlog alone" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリントプランニングにはスクラムチーム全員の参加が必要です。プロダクトオーナーは「このスプリントはなぜ価値があるのか」を説明し、選択されるアイテムについて議論する重要な役割があります。",
      en: "Sprint Planning requires the entire Scrum Team. The Product Owner has a critical role explaining 'Why is this Sprint valuable?' and discussing which items to select.",
    },
  },
  {
    id: 70,
    type: "single",
    category: "situation",
    question: {
      ja: "経営層がスクラムチームに、見積もりの精度を上げるためにガントチャートの作成を要求しています。スクラムマスターはどう対応すべきですか？",
      en: "Management asks the Scrum Team to create Gantt charts to improve estimation accuracy. How should the Scrum Master respond?",
    },
    choices: [
      { id: "a", text: { ja: "要求に従いガントチャートを作成する", en: "Comply and create Gantt charts" } },
      { id: "b", text: { ja: "経験主義に基づくスクラムの価値を説明し、代替のアプローチを提案する", en: "Explain the empirical values of Scrum and propose alternative approaches" } },
      { id: "c", text: { ja: "開発者にガントチャートの作成を指示する", en: "Instruct Developers to create Gantt charts" } },
      { id: "d", text: { ja: "要求を無視する", en: "Ignore the request" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターは組織に対してスクラムの理解を促進する責任があります。経験主義に基づく見積もりと計画の方法を説明し、透明性の高い代替アプローチ（プロダクトバックログやバーンダウンチャートなど）を提案します。",
      en: "The Scrum Master is responsible for promoting Scrum understanding in the organization. They explain empirical estimation and planning methods and propose transparent alternatives like Product Backlog and burndown charts.",
    },
  },
  {
    id: 71,
    type: "multiple",
    category: "situation",
    question: {
      ja: "スプリントゴールについて正しいものを全て選んでください。",
      en: "Select all that are correct about the Sprint Goal.",
    },
    choices: [
      { id: "a", text: { ja: "スプリントプランニングで作成される", en: "Created during Sprint Planning" } },
      { id: "b", text: { ja: "開発者に柔軟性を提供する", en: "Provides flexibility to Developers" } },
      { id: "c", text: { ja: "スプリント中に変更できる", en: "Can be changed during the Sprint" } },
      { id: "d", text: { ja: "一貫した方向性を提供する", en: "Provides coherent direction" } },
      { id: "e", text: { ja: "プロダクトオーナーが単独で決定する", en: "Decided by the Product Owner alone" } },
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: {
      ja: "スプリントゴールはスプリントプランニングで作成され、開発者に柔軟性を提供し、一貫した方向性を提供します。スプリント中に変更することはできず、スクラムチーム全体で決定します。",
      en: "The Sprint Goal is created during Sprint Planning, provides flexibility to Developers, and gives coherent direction. It cannot be changed during the Sprint and is decided by the entire Scrum Team.",
    },
  },
  {
    id: 72,
    type: "single",
    category: "situation",
    question: {
      ja: "チームメンバーの一人が、スクラムマスターに「プロダクトオーナーが技術的な決定に介入しすぎている」と相談しました。スクラムマスターはどう対応すべきですか？",
      en: "A team member tells the Scrum Master that the Product Owner is interfering too much in technical decisions. How should the Scrum Master respond?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナーを叱責する", en: "Reprimand the Product Owner" } },
      { id: "b", text: { ja: "開発者とプロダクトオーナーの間でコーチングを行い、役割と責任を明確にする", en: "Coach both Developers and Product Owner to clarify roles and responsibilities" } },
      { id: "c", text: { ja: "経営層に報告する", en: "Report to management" } },
      { id: "d", text: { ja: "問題を無視する", en: "Ignore the problem" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターはチーム内の役割と責任について理解を促進する役割があります。開発者とプロダクトオーナーの両方にコーチングを行い、それぞれの役割の境界を明確にします。",
      en: "The Scrum Master promotes understanding of roles and responsibilities within the team. They coach both Developers and the Product Owner to clarify role boundaries.",
    },
  },
  {
    id: 73,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリントレトロスペクティブで特定した改善アクションは、いつ実施されるべきですか？",
      en: "When should improvement actions identified in Sprint Retrospective be implemented?",
    },
    choices: [
      { id: "a", text: { ja: "次のスプリントで改善する機会を探す", en: "Look for opportunities to improve in the next Sprint" } },
      { id: "b", text: { ja: "全てのスプリントが終了してから実施する", en: "Implement after all Sprints are finished" } },
      { id: "c", text: { ja: "プロダクトオーナーが承認してから実施する", en: "Implement after Product Owner approval" } },
      { id: "d", text: { ja: "経営層に報告してから実施する", en: "Implement after reporting to management" } },
    ],
    correctAnswers: ["a"],
    explanation: {
      ja: "スプリントレトロスペクティブで特定した改善アクションは、次のスプリントで実施する機会を探します。最も有効な改善をできるだけ早く実施することが重要です。",
      en: "Improvement actions identified in the Retrospective should be implemented as soon as possible, looking for opportunities in the next Sprint. The most effective improvements should be acted upon quickly.",
    },
  },
  {
    id: 74,
    type: "single",
    category: "situation",
    question: {
      ja: "開発者が「この機能は技術的に実現不可能だ」と判断しました。どうすべきですか？",
      en: "Developers determine that a feature is technically impossible. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナーと代替案を検討し、プロダクトバックログを調整する", en: "Discuss alternatives with the Product Owner and adjust the Product Backlog" } },
      { id: "b", text: { ja: "スクラムマスターが最終決定する", en: "The Scrum Master makes the final decision" } },
      { id: "c", text: { ja: "外部の専門家を雇う", en: "Hire external experts" } },
      { id: "d", text: { ja: "機能を諦めて次の機能に移る", en: "Give up on the feature and move to the next one" } },
    ],
    correctAnswers: ["a"],
    explanation: {
      ja: "技術的な課題が発見された場合、開発者とプロダクトオーナーが協力して代替案を検討します。プロダクトバックログを調整し、価値を提供できる方法を探します。",
      en: "When technical challenges are discovered, Developers and the Product Owner work together to explore alternatives. They adjust the Product Backlog to find ways to deliver value.",
    },
  },
  {
    id: 75,
    type: "single",
    category: "situation",
    question: {
      ja: "複数のスクラムチームが同じプロダクトに取り組んでいます。完成の定義はどうあるべきですか？",
      en: "Multiple Scrum Teams work on the same product. What should the Definition of Done be?",
    },
    choices: [
      { id: "a", text: { ja: "各チームが独自の完成の定義を持つ", en: "Each team has its own Definition of Done" } },
      { id: "b", text: { ja: "全てのチームが同じ完成の定義を共有する", en: "All teams share the same Definition of Done" } },
      { id: "c", text: { ja: "プロダクトオーナーが各チームの完成の定義を決める", en: "The Product Owner decides each team's Definition of Done" } },
      { id: "d", text: { ja: "スクラムマスターが統一の完成の定義を作成する", en: "The Scrum Master creates a unified Definition of Done" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "複数のスクラムチームが同じプロダクトに取り組む場合、全てのチームが同じ完成の定義を共有し、相互運用可能なインクリメントを作成する必要があります。",
      en: "When multiple Scrum Teams work on the same product, all teams must share the same Definition of Done to create interoperable Increments.",
    },
  },
  {
    id: 76,
    type: "multiple",
    category: "situation",
    question: {
      ja: "スプリントについて正しいものを全て選んでください。",
      en: "Select all that are correct about the Sprint.",
    },
    choices: [
      { id: "a", text: { ja: "他の全てのイベントのコンテナである", en: "It is a container for all other events" } },
      { id: "b", text: { ja: "期間は固定で一貫性がある", en: "Its length is fixed and consistent" } },
      { id: "c", text: { ja: "スプリントゴールが陳腐化した場合、中止される可能性がある", en: "It could be cancelled if the Sprint Goal becomes obsolete" } },
      { id: "d", text: { ja: "スクラムマスターがスプリントを延長できる", en: "The Scrum Master can extend the Sprint" } },
      { id: "e", text: { ja: "新しいスプリントは前のスプリント終了後すぐに開始される", en: "A new Sprint starts immediately after the previous Sprint ends" } },
    ],
    correctAnswers: ["a", "b", "c", "e"],
    explanation: {
      ja: "スプリントは他の全てのイベントのコンテナであり、期間は固定です。スプリントゴールが陳腐化した場合は中止される可能性があり、新しいスプリントは前のスプリント終了後すぐに開始されます。延長は許可されません。",
      en: "The Sprint is a container for all other events with fixed length. It could be cancelled if the Sprint Goal becomes obsolete. A new Sprint starts immediately after the previous one. Extensions are not allowed.",
    },
  },
  {
    id: 77,
    type: "single",
    category: "situation",
    question: {
      ja: "スクラムチームが初めてスプリントを開始します。最初のスプリントで必ず行うべきことは何ですか？",
      en: "A Scrum Team starts its first Sprint. What must they do in the first Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "要件定義を完了する", en: "Complete requirements definition" } },
      { id: "b", text: { ja: "使用可能なインクリメントを作成する", en: "Create a usable Increment" } },
      { id: "c", text: { ja: "アーキテクチャ設計を完了する", en: "Complete architecture design" } },
      { id: "d", text: { ja: "プロジェクト計画を作成する", en: "Create a project plan" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムでは最初のスプリントから使用可能なインクリメントを作成することが期待されます。要件定義やアーキテクチャ設計のための別フェーズは設けません。",
      en: "In Scrum, creating a usable Increment is expected from the first Sprint. There are no separate phases for requirements definition or architecture design.",
    },
  },
  {
    id: 78,
    type: "single",
    category: "situation",
    question: {
      ja: "スクラムマスターがチームを離れ、新しいスクラムマスターが就任しました。最初に行うべきことは何ですか？",
      en: "A Scrum Master leaves the team and a new one is appointed. What should they do first?",
    },
    choices: [
      { id: "a", text: { ja: "すぐにプロセスを変更する", en: "Immediately change processes" } },
      { id: "b", text: { ja: "チームの状況を観察し、スクラムの理論とプラクティスの理解を確認する", en: "Observe the team and verify understanding of Scrum theory and practice" } },
      { id: "c", text: { ja: "新しいルールを導入する", en: "Introduce new rules" } },
      { id: "d", text: { ja: "チームメンバーを再評価する", en: "Re-evaluate team members" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "新しいスクラムマスターは、まずチームの状況を観察し、スクラムの理論とプラクティスが正しく理解・実践されているかを確認します。急激な変更は避け、チームとの信頼関係を構築します。",
      en: "A new Scrum Master should first observe the team and verify that Scrum theory and practice are being correctly understood and implemented. Avoid sudden changes and build trust with the team.",
    },
  },
  {
    id: 79,
    type: "single",
    category: "situation",
    question: {
      ja: "開発者が見積もりを行う際、プロダクトオーナーの役割は何ですか？",
      en: "What is the Product Owner's role when Developers are estimating?",
    },
    choices: [
      { id: "a", text: { ja: "見積もりを承認する", en: "Approve estimates" } },
      { id: "b", text: { ja: "見積もりを行う", en: "Do the estimating" } },
      { id: "c", text: { ja: "選択されたアイテムを明確にし、トレードオフを行う", en: "Clarify selected items and make trade-offs" } },
      { id: "d", text: { ja: "見積もりに関与しない", en: "Not be involved in estimation" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "見積もりは開発者が行いますが、プロダクトオーナーは選択されたプロダクトバックログアイテムを明確にし、必要に応じてトレードオフを行う役割があります。",
      en: "Developers do the estimating, but the Product Owner's role is to clarify selected Product Backlog items and make trade-offs as needed.",
    },
  },
  {
    id: 80,
    type: "multiple",
    category: "situation",
    question: {
      ja: "スクラムの経験主義の3つの柱を支えるために必要なことを全て選んでください。",
      en: "Select all that are necessary to support the three pillars of empiricism in Scrum.",
    },
    choices: [
      { id: "a", text: { ja: "スクラムの価値基準を体現する", en: "Embody Scrum values" } },
      { id: "b", text: { ja: "詳細なプロジェクト計画を作成する", en: "Create detailed project plans" } },
      { id: "c", text: { ja: "信頼関係を構築する", en: "Build trust" } },
      { id: "d", text: { ja: "頻繁な検査と適応を行う", en: "Perform frequent inspection and adaptation" } },
      { id: "e", text: { ja: "作成物の透明性を確保する", en: "Ensure transparency of artifacts" } },
    ],
    correctAnswers: ["a", "c", "d", "e"],
    explanation: {
      ja: "経験主義の3つの柱（透明性、検査、適応）を支えるには、スクラムの価値基準の体現、信頼関係の構築、頻繁な検査と適応、作成物の透明性確保が必要です。詳細なプロジェクト計画は経験主義とは相反します。",
      en: "Supporting the three pillars of empiricism (transparency, inspection, adaptation) requires embodying Scrum values, building trust, frequent inspection and adaptation, and artifact transparency. Detailed project plans contradict empiricism.",
    },
  },

  // ===== PSM I シチュエーション問題（81-105）=====
  {
    id: 81,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリントレビュー中、ステークホルダーが「この機能は私たちが求めていたものとは違う」と言いました。プロダクトオーナーはどう対応すべきですか？",
      en: "During Sprint Review, a stakeholder says 'This feature is not what we wanted.' How should the Product Owner respond?",
    },
    choices: [
      { id: "a", text: { ja: "ステークホルダーの要望を無視して次に進む", en: "Ignore the stakeholder's feedback and move on" } },
      { id: "b", text: { ja: "フィードバックを収集し、プロダクトバックログの調整を検討する", en: "Collect feedback and consider adjusting the Product Backlog" } },
      { id: "c", text: { ja: "開発者を叱責する", en: "Reprimand the Developers" } },
      { id: "d", text: { ja: "スプリントを最初からやり直す", en: "Redo the Sprint from the beginning" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントレビューはフィードバックを収集する重要な機会です。ステークホルダーの意見を聞き、プロダクトバックログを調整して今後のスプリントで価値を提供できるようにします。",
      en: "Sprint Review is an important opportunity to collect feedback. Listen to stakeholder opinions and adjust the Product Backlog to deliver value in future Sprints.",
    },
  },
  {
    id: 82,
    type: "single",
    category: "situation",
    question: {
      ja: "開発者の一人が病気で1週間欠勤することになりました。スクラムマスターはどう対応すべきですか？",
      en: "One Developer will be absent for a week due to illness. How should the Scrum Master respond?",
    },
    choices: [
      { id: "a", text: { ja: "欠勤した開発者の代わりを即座に雇う", en: "Immediately hire a replacement" } },
      { id: "b", text: { ja: "スプリントを中止する", en: "Cancel the Sprint" } },
      { id: "c", text: { ja: "チームが自己管理できるよう支援し、必要に応じてスコープの再交渉を促す", en: "Support the team to self-manage and encourage scope renegotiation if needed" } },
      { id: "d", text: { ja: "欠勤した開発者のタスクを自分で代行する", en: "Take over the absent Developer's tasks themselves" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スクラムマスターはチームが自己管理できるよう支援します。チームはキャパシティの変化に対応し、必要に応じてプロダクトオーナーとスコープを再交渉できます。",
      en: "The Scrum Master supports the team to self-manage. The team can respond to capacity changes and renegotiate scope with the Product Owner if needed.",
    },
  },
  {
    id: 83,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリント中、開発者が重大なセキュリティ脆弱性を発見しました。どう対応すべきですか？",
      en: "During the Sprint, Developers discover a critical security vulnerability. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "次のスプリントで対応するためにプロダクトバックログに追加する", en: "Add it to the Product Backlog for the next Sprint" } },
      { id: "b", text: { ja: "プロダクトオーナーに報告し、スプリントバックログに追加するか即座に判断を仰ぐ", en: "Report to Product Owner and get immediate decision on adding to Sprint Backlog" } },
      { id: "c", text: { ja: "スプリントレビューまで報告を待つ", en: "Wait until Sprint Review to report" } },
      { id: "d", text: { ja: "スクラムマスターが対応方法を決定する", en: "The Scrum Master decides how to respond" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "重大なセキュリティ問題は即座に対応が必要です。プロダクトオーナーと開発者が協力して、スプリントバックログに追加するかどうかを判断します。",
      en: "Critical security issues require immediate attention. The Product Owner and Developers collaborate to decide whether to add it to the Sprint Backlog.",
    },
  },
  {
    id: 84,
    type: "single",
    category: "situation",
    question: {
      ja: "プロダクトオーナーが「開発者に直接要件を伝えたい」と言うビジネスアナリストがいます。どう対応すべきですか？",
      en: "A business analyst wants to communicate requirements directly to Developers. How should this be handled?",
    },
    choices: [
      { id: "a", text: { ja: "ビジネスアナリストに自由に開発者と話させる", en: "Let the business analyst speak freely with Developers" } },
      { id: "b", text: { ja: "プロダクトオーナーを通じてコミュニケーションを取るよう説明する", en: "Explain that communication should go through the Product Owner" } },
      { id: "c", text: { ja: "スクラムマスターが仲介役となる", en: "The Scrum Master becomes an intermediary" } },
      { id: "d", text: { ja: "ビジネスアナリストをスクラムチームに加える", en: "Add the business analyst to the Scrum Team" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "プロダクトバックログの優先順位付けと要件の決定はプロダクトオーナーの責務です。ステークホルダーはプロダクトオーナーを通じて要件を伝えるべきです。",
      en: "Prioritizing the Product Backlog and deciding requirements is the Product Owner's responsibility. Stakeholders should communicate requirements through the Product Owner.",
    },
  },
  {
    id: 85,
    type: "single",
    category: "situation",
    question: {
      ja: "デイリースクラムで、ある開発者が「昨日は何もしていない」と報告しました。スクラムマスターはどう対応すべきですか？",
      en: "During Daily Scrum, a Developer reports 'I did nothing yesterday.' How should the Scrum Master respond?",
    },
    choices: [
      { id: "a", text: { ja: "その開発者を叱責する", en: "Reprimand that Developer" } },
      { id: "b", text: { ja: "デイリースクラム後に個別に話を聞き、障害がないか確認する", en: "Speak privately after Daily Scrum to check for impediments" } },
      { id: "c", text: { ja: "プロダクトオーナーに報告する", en: "Report to the Product Owner" } },
      { id: "d", text: { ja: "何もしない、デイリースクラムは報告会ではないため", en: "Do nothing, as Daily Scrum is not a status meeting" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターは障害を取り除く支援をします。開発者が作業できなかった理由を理解し、必要に応じて支援を提供します。公の場での叱責は避けるべきです。",
      en: "The Scrum Master helps remove impediments. Understand why the Developer couldn't work and provide support as needed. Public reprimand should be avoided.",
    },
  },
  {
    id: 86,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリントの途中で、プロダクトオーナーが「市場の変化により、現在のスプリントゴールは無意味になった」と言いました。どうすべきですか？",
      en: "Mid-Sprint, the Product Owner says 'Due to market changes, the current Sprint Goal is now meaningless.' What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "スプリントゴールを変更して続ける", en: "Change the Sprint Goal and continue" } },
      { id: "b", text: { ja: "プロダクトオーナーがスプリントを中止することを検討する", en: "The Product Owner considers cancelling the Sprint" } },
      { id: "c", text: { ja: "スクラムマスターがスプリントを中止する", en: "The Scrum Master cancels the Sprint" } },
      { id: "d", text: { ja: "スプリント終了まで現在のゴールを追い続ける", en: "Continue pursuing the current goal until Sprint end" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントゴールが陳腐化した場合、プロダクトオーナーのみがスプリントを中止できます。スプリントゴールの変更は許可されていません。",
      en: "If the Sprint Goal becomes obsolete, only the Product Owner can cancel the Sprint. Changing the Sprint Goal is not permitted.",
    },
  },
  {
    id: 87,
    type: "single",
    category: "situation",
    question: {
      ja: "新しく参加した開発者が、スクラムのプロセスを理解していません。誰が教育を担当すべきですか？",
      en: "A newly joined Developer doesn't understand Scrum processes. Who should be responsible for training?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナー", en: "Product Owner" } },
      { id: "b", text: { ja: "スクラムマスター", en: "Scrum Master" } },
      { id: "c", text: { ja: "人事部門", en: "HR department" } },
      { id: "d", text: { ja: "他の開発者のみ", en: "Other Developers only" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターはスクラムの理論とプラクティスを全員に理解してもらう責任があります。新メンバーへの教育もスクラムマスターの重要な役割です。",
      en: "The Scrum Master is responsible for helping everyone understand Scrum theory and practice. Training new members is an important part of the Scrum Master's role.",
    },
  },
  {
    id: 88,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリントレトロスペクティブで、開発者が「プロダクトオーナーの要件説明が不十分だ」と不満を述べました。スクラムマスターはどう対応すべきですか？",
      en: "At Sprint Retrospective, a Developer complains that Product Owner's requirements explanations are insufficient. How should the Scrum Master respond?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナーを擁護する", en: "Defend the Product Owner" } },
      { id: "b", text: { ja: "建設的な議論を促し、具体的な改善策を検討するよう導く", en: "Facilitate constructive discussion and guide toward specific improvements" } },
      { id: "c", text: { ja: "プロダクトオーナーを叱責する", en: "Reprimand the Product Owner" } },
      { id: "d", text: { ja: "議論を打ち切る", en: "End the discussion" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターはレトロスペクティブで建設的な議論を促進します。問題を特定し、具体的な改善策を見つけることに焦点を当てます。",
      en: "The Scrum Master facilitates constructive discussion in the Retrospective. Focus on identifying problems and finding specific improvements.",
    },
  },
  {
    id: 89,
    type: "multiple",
    category: "situation",
    question: {
      ja: "スプリントプランニングで考慮すべき要素を全て選んでください。",
      en: "Select all factors that should be considered in Sprint Planning.",
    },
    choices: [
      { id: "a", text: { ja: "チームのキャパシティ", en: "Team capacity" } },
      { id: "b", text: { ja: "過去のパフォーマンス", en: "Past performance" } },
      { id: "c", text: { ja: "経営層の期待", en: "Management expectations" } },
      { id: "d", text: { ja: "プロダクトバックログの優先順位", en: "Product Backlog priority" } },
      { id: "e", text: { ja: "完成の定義", en: "Definition of Done" } },
    ],
    correctAnswers: ["a", "b", "d", "e"],
    explanation: {
      ja: "スプリントプランニングでは、チームのキャパシティ、過去のパフォーマンス、プロダクトバックログの優先順位、完成の定義を考慮します。経営層の期待は直接の考慮事項ではありません。",
      en: "Sprint Planning considers team capacity, past performance, Product Backlog priority, and Definition of Done. Management expectations are not a direct consideration.",
    },
  },
  {
    id: 90,
    type: "single",
    category: "situation",
    question: {
      ja: "開発者が「このタスクは私の専門外だ」と言って作業を拒否しました。どう対応すべきですか？",
      en: "A Developer refuses to work on a task saying 'This is outside my expertise.' What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "その開発者を別のチームに移動させる", en: "Move that Developer to another team" } },
      { id: "b", text: { ja: "スクラムマスターがそのタスクを代行する", en: "The Scrum Master takes over the task" } },
      { id: "c", text: { ja: "チームとして協力し、知識共有やペアプログラミングを促す", en: "Encourage team collaboration, knowledge sharing, and pair programming" } },
      { id: "d", text: { ja: "外部の専門家を雇う", en: "Hire external experts" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スクラムチームは機能横断的であり、必要なスキルを持つべきです。チーム内での知識共有やペアプログラミングを通じて、全員が成長できるよう支援します。",
      en: "Scrum Teams are cross-functional and should have the necessary skills. Support everyone's growth through knowledge sharing and pair programming within the team.",
    },
  },
  {
    id: 91,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリント中に開発者同士で意見の対立が起きました。スクラムマスターはどう対応すべきですか？",
      en: "During the Sprint, Developers have a disagreement. How should the Scrum Master respond?",
    },
    choices: [
      { id: "a", text: { ja: "どちらが正しいか判断を下す", en: "Judge who is right" } },
      { id: "b", text: { ja: "対立を無視する", en: "Ignore the conflict" } },
      { id: "c", text: { ja: "自己管理を促し、チームが自分たちで解決できるよう支援する", en: "Encourage self-management and help the team resolve it themselves" } },
      { id: "d", text: { ja: "プロダクトオーナーに報告して決定を任せる", en: "Report to Product Owner and let them decide" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スクラムマスターは自己管理型チームを育成します。対立の解決方法を教え、チームが自分たちで問題を解決できるよう支援します。",
      en: "The Scrum Master develops self-managing teams. They teach conflict resolution methods and help the team solve problems themselves.",
    },
  },
  {
    id: 92,
    type: "single",
    category: "situation",
    question: {
      ja: "プロダクトオーナーが長期休暇を取ることになりました。どう対応すべきですか？",
      en: "The Product Owner is going on an extended leave. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "スクラムマスターがプロダクトオーナーの代理を務める", en: "The Scrum Master acts as Product Owner" } },
      { id: "b", text: { ja: "開発者がプロダクトバックログの優先順位を決める", en: "Developers decide Product Backlog priority" } },
      { id: "c", text: { ja: "プロダクトオーナーが代理人を指名し、決定権を委譲する", en: "The Product Owner designates a proxy and delegates decision authority" } },
      { id: "d", text: { ja: "スプリントを一時停止する", en: "Pause the Sprint" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "プロダクトオーナーは一人の人間ですが、不在の場合は代理人に決定権を委譲できます。ただし、責任は依然としてプロダクトオーナーにあります。",
      en: "The Product Owner is one person, but can delegate decision authority to a proxy when absent. However, accountability remains with the Product Owner.",
    },
  },
  {
    id: 93,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリントレビューで、プロダクトオーナーがインクリメントを「受け入れない」と言いました。どうすべきですか？",
      en: "At Sprint Review, the Product Owner says they 'don't accept' the Increment. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "スプリントを失敗とみなす", en: "Consider the Sprint a failure" } },
      { id: "b", text: { ja: "完成の定義を満たしていれば、インクリメントはすでに「完成」している", en: "If Definition of Done is met, the Increment is already 'Done'" } },
      { id: "c", text: { ja: "開発者を叱責する", en: "Reprimand the Developers" } },
      { id: "d", text: { ja: "スクラムマスターが仲裁する", en: "The Scrum Master mediates" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "完成の定義を満たしたインクリメントは「完成」です。プロダクトオーナーの「受け入れ」は公式のスクラムプロセスではありません。追加の要求はプロダクトバックログに追加されます。",
      en: "An Increment meeting the Definition of Done is 'Done.' Product Owner 'acceptance' is not an official Scrum process. Additional requests are added to the Product Backlog.",
    },
  },
  {
    id: 94,
    type: "single",
    category: "situation",
    question: {
      ja: "開発者が「デイリースクラムは時間の無駄だ」と言っています。スクラムマスターはどう対応すべきですか？",
      en: "A Developer says 'Daily Scrum is a waste of time.' How should the Scrum Master respond?",
    },
    choices: [
      { id: "a", text: { ja: "デイリースクラムを廃止する", en: "Abolish Daily Scrum" } },
      { id: "b", text: { ja: "デイリースクラムの目的と価値を説明し、効果的な運用方法を探る", en: "Explain the purpose and value of Daily Scrum and explore effective ways to run it" } },
      { id: "c", text: { ja: "その開発者をデイリースクラムから除外する", en: "Exclude that Developer from Daily Scrum" } },
      { id: "d", text: { ja: "プロダクトオーナーに報告する", en: "Report to the Product Owner" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターはスクラムの価値を説明し、チームがイベントの恩恵を受けられるよう支援します。デイリースクラムの運用方法を改善することを検討します。",
      en: "The Scrum Master explains Scrum's value and helps the team benefit from events. Consider improving how the Daily Scrum is run.",
    },
  },
  {
    id: 95,
    type: "single",
    category: "situation",
    question: {
      ja: "複数のステークホルダーがそれぞれ異なる機能を最優先にするよう要求しています。どう対応すべきですか？",
      en: "Multiple stakeholders each request different features be top priority. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "全ての要求を同時に進める", en: "Work on all requests simultaneously" } },
      { id: "b", text: { ja: "スクラムマスターが優先順位を決める", en: "The Scrum Master decides priority" } },
      { id: "c", text: { ja: "プロダクトオーナーが価値に基づいて優先順位を決定する", en: "The Product Owner decides priority based on value" } },
      { id: "d", text: { ja: "開発者が技術的な難易度で優先順位を決める", en: "Developers decide priority based on technical difficulty" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "プロダクトオーナーは多くのステークホルダーのニーズを代表し、価値に基づいてプロダクトバックログの優先順位を決定する唯一の責任者です。",
      en: "The Product Owner represents the needs of many stakeholders and is the sole person responsible for prioritizing the Product Backlog based on value.",
    },
  },
  {
    id: 96,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリント中に技術的負債が発見されました。どう対応すべきですか？",
      en: "Technical debt is discovered during the Sprint. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "無視して機能開発を優先する", en: "Ignore it and prioritize feature development" } },
      { id: "b", text: { ja: "プロダクトバックログに追加し、プロダクトオーナーと優先順位を検討する", en: "Add to Product Backlog and discuss priority with Product Owner" } },
      { id: "c", text: { ja: "スクラムマスターが対応を決定する", en: "The Scrum Master decides how to handle it" } },
      { id: "d", text: { ja: "スプリント終了後に別のチームで対応する", en: "Have another team handle it after Sprint end" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "技術的負債はプロダクトバックログアイテムとして追加し、プロダクトオーナーと開発者が協力して優先順位を検討します。",
      en: "Technical debt is added as a Product Backlog item, and the Product Owner and Developers collaborate to consider its priority.",
    },
  },
  {
    id: 97,
    type: "multiple",
    category: "situation",
    question: {
      ja: "スクラムマスターがプロダクトオーナーを支援する方法として正しいものを全て選んでください。",
      en: "Select all correct ways the Scrum Master serves the Product Owner.",
    },
    choices: [
      { id: "a", text: { ja: "効果的なプロダクトバックログ管理の方法を見つける支援", en: "Helping find techniques for effective Product Backlog management" } },
      { id: "b", text: { ja: "プロダクトゴールとプロダクトバックログアイテムを理解してもらう支援", en: "Helping the team understand Product Goal and Product Backlog items" } },
      { id: "c", text: { ja: "プロダクトバックログの優先順位を決定する", en: "Deciding Product Backlog priority" } },
      { id: "d", text: { ja: "ステークホルダーとの効果的なコラボレーション支援", en: "Facilitating effective stakeholder collaboration" } },
      { id: "e", text: { ja: "経験主義に基づくプロダクト計画の支援", en: "Helping with empirical product planning" } },
    ],
    correctAnswers: ["a", "b", "d", "e"],
    explanation: {
      ja: "スクラムマスターはプロダクトオーナーを様々な方法で支援しますが、プロダクトバックログの優先順位決定はプロダクトオーナーの専属の責務です。",
      en: "The Scrum Master serves the Product Owner in various ways, but deciding Product Backlog priority is exclusively the Product Owner's responsibility.",
    },
  },
  {
    id: 98,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリント終了時に、一部のプロダクトバックログアイテムが完成の定義を満たしませんでした。どうすべきですか？",
      en: "At Sprint end, some Product Backlog items don't meet Definition of Done. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "完成の定義を緩和して完了とみなす", en: "Relax Definition of Done and consider them complete" } },
      { id: "b", text: { ja: "未完了のアイテムをプロダクトバックログに戻す", en: "Return incomplete items to the Product Backlog" } },
      { id: "c", text: { ja: "スプリントを延長して完了させる", en: "Extend the Sprint to complete them" } },
      { id: "d", text: { ja: "次のスプリントに自動的に引き継ぐ", en: "Automatically carry over to the next Sprint" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "完成の定義を満たさないアイテムはインクリメントの一部にはなりません。プロダクトバックログに戻し、今後のスプリントで取り組むかどうかをプロダクトオーナーが判断します。",
      en: "Items not meeting Definition of Done are not part of the Increment. They return to the Product Backlog, and the Product Owner decides whether to work on them in future Sprints.",
    },
  },
  {
    id: 99,
    type: "single",
    category: "situation",
    question: {
      ja: "経営層がスプリント期間を2週間から1週間に短縮するよう要求しています。どう対応すべきですか？",
      en: "Management requests shortening Sprint length from 2 weeks to 1 week. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "即座に要求に従う", en: "Immediately comply" } },
      { id: "b", text: { ja: "スクラムチームとしてメリット・デメリットを検討し、チームが決定する", en: "The Scrum Team considers pros and cons and makes the decision" } },
      { id: "c", text: { ja: "スクラムマスターが拒否する", en: "The Scrum Master refuses" } },
      { id: "d", text: { ja: "プロダクトオーナーが決定する", en: "The Product Owner decides" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリント期間の変更はスクラムチーム全体で検討すべきです。短いスプリントのメリット・デメリットを評価し、チームとして最適な長さを決定します。",
      en: "Sprint length changes should be considered by the entire Scrum Team. Evaluate the pros and cons of shorter Sprints and decide as a team on the optimal length.",
    },
  },
  {
    id: 100,
    type: "single",
    category: "situation",
    question: {
      ja: "開発者が「プロダクトオーナーの要求が曖昧すぎる」と訴えています。どう対応すべきですか？",
      en: "Developers complain that the Product Owner's requirements are too vague. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "開発者が自分で要件を解釈する", en: "Developers interpret requirements themselves" } },
      { id: "b", text: { ja: "プロダクトバックログリファインメントを通じて、アイテムを明確にする活動を促す", en: "Encourage Product Backlog refinement activities to clarify items" } },
      { id: "c", text: { ja: "スクラムマスターが要件を明確にする", en: "The Scrum Master clarifies requirements" } },
      { id: "d", text: { ja: "曖昧なアイテムは削除する", en: "Delete vague items" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "プロダクトバックログリファインメントは、アイテムを分解し、詳細を追加する継続的な活動です。プロダクトオーナーと開発者が協力して要件を明確にします。",
      en: "Product Backlog refinement is an ongoing activity to break down and add details to items. The Product Owner and Developers collaborate to clarify requirements.",
    },
  },
  {
    id: 101,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリントレトロスペクティブで同じ問題が繰り返し議論されています。どう対応すべきですか？",
      en: "The same problem is repeatedly discussed in Sprint Retrospectives. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "レトロスペクティブを廃止する", en: "Abolish Retrospectives" } },
      { id: "b", text: { ja: "問題を無視する", en: "Ignore the problem" } },
      { id: "c", text: { ja: "改善アクションが実際に実行されているか確認し、根本原因を特定する", en: "Verify improvement actions are being implemented and identify root causes" } },
      { id: "d", text: { ja: "経営層に報告する", en: "Report to management" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "同じ問題が繰り返される場合、改善アクションが実行されていない可能性があります。根本原因を特定し、実効性のある改善策を実施することが重要です。",
      en: "When the same problem recurs, improvement actions may not be implemented. It's important to identify root causes and implement effective improvements.",
    },
  },
  {
    id: 102,
    type: "single",
    category: "situation",
    question: {
      ja: "新しいスクラムチームがベロシティを測定し始めました。最初の数スプリントでベロシティが不安定です。どう対応すべきですか？",
      en: "A new Scrum Team starts measuring velocity. Velocity is unstable in the first few Sprints. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "ベロシティを安定させるために残業を強制する", en: "Force overtime to stabilize velocity" } },
      { id: "b", text: { ja: "新しいチームでは当然のことと理解し、時間をかけてチームが安定することを待つ", en: "Understand it's normal for new teams and allow time for stabilization" } },
      { id: "c", text: { ja: "チームメンバーを入れ替える", en: "Replace team members" } },
      { id: "d", text: { ja: "ベロシティの測定を止める", en: "Stop measuring velocity" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "新しいチームがベロシティを安定させるには時間がかかります。チームがまとまり、プロセスを改善するにつれて、自然と安定していきます。",
      en: "New teams take time to stabilize velocity. As the team gels and improves processes, it will naturally stabilize.",
    },
  },
  {
    id: 103,
    type: "single",
    category: "situation",
    question: {
      ja: "スプリント中に、完成の定義に含まれるテストの一部が実施できないことが判明しました。どうすべきですか？",
      en: "During the Sprint, it's discovered that some tests in Definition of Done cannot be performed. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "その部分のテストをスキップして完了とみなす", en: "Skip that testing and consider it done" } },
      { id: "b", text: { ja: "完成の定義を満たさないため、インクリメントとしてリリースしない", en: "Don't release as Increment since it doesn't meet Definition of Done" } },
      { id: "c", text: { ja: "プロダクトオーナーの承認を得てリリースする", en: "Get Product Owner approval and release" } },
      { id: "d", text: { ja: "スクラムマスターが例外を認める", en: "The Scrum Master grants an exception" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "完成の定義を満たさないアイテムはインクリメントの一部にはなりません。品質を下げることは許容されません。",
      en: "Items not meeting Definition of Done are not part of the Increment. Lowering quality is not acceptable.",
    },
  },
  {
    id: 104,
    type: "single",
    category: "situation",
    question: {
      ja: "開発者が自分たちでタスクを選べるようになったものの、難しいタスクが残り続けています。どう対応すべきですか？",
      en: "Developers can choose their own tasks, but difficult tasks keep being left undone. What should be done?",
    },
    choices: [
      { id: "a", text: { ja: "スクラムマスターがタスクを割り当てる", en: "The Scrum Master assigns tasks" } },
      { id: "b", text: { ja: "スプリントレトロスペクティブで問題を取り上げ、チームで解決策を検討する", en: "Raise the issue in Sprint Retrospective and explore solutions as a team" } },
      { id: "c", text: { ja: "難しいタスクを削除する", en: "Delete difficult tasks" } },
      { id: "d", text: { ja: "外部のコンサルタントを雇う", en: "Hire external consultants" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "チームのプロセスに関する問題はスプリントレトロスペクティブで取り上げます。チームとして解決策を検討し、自己管理能力を高めます。",
      en: "Team process issues are raised in the Sprint Retrospective. The team explores solutions together and improves self-management.",
    },
  },
  {
    id: 105,
    type: "single",
    category: "situation",
    question: {
      ja: "プロダクトオーナーがスプリント中に頻繁にスコープを追加しようとします。スクラムマスターはどう対応すべきですか？",
      en: "The Product Owner frequently tries to add scope during the Sprint. How should the Scrum Master respond?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナーの全ての要求を受け入れる", en: "Accept all Product Owner requests" } },
      { id: "b", text: { ja: "スプリントゴールの安定性の重要性を説明し、プロダクトバックログへの追加を促す", en: "Explain the importance of Sprint Goal stability and encourage adding to Product Backlog" } },
      { id: "c", text: { ja: "プロダクトオーナーをスプリントから排除する", en: "Exclude the Product Owner from the Sprint" } },
      { id: "d", text: { ja: "開発者に無視するよう指示する", en: "Instruct Developers to ignore them" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターはスプリントゴールの安定性を守る支援をします。新しい要件はプロダクトバックログに追加し、次のスプリントで検討するよう促します。",
      en: "The Scrum Master helps protect Sprint Goal stability. New requirements should be added to the Product Backlog for consideration in the next Sprint.",
    },
  },

  // ===== PSM I 引っかけ問題（106-120）=====
  {
    id: 106,
    type: "single",
    category: "tricky",
    question: {
      ja: "スプリントバックログは誰が変更できますか？",
      en: "Who can change the Sprint Backlog?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナーのみ", en: "Product Owner only" } },
      { id: "b", text: { ja: "開発者のみ", en: "Developers only" } },
      { id: "c", text: { ja: "スクラムマスターのみ", en: "Scrum Master only" } },
      { id: "d", text: { ja: "スクラムチーム全員", en: "The entire Scrum Team" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントバックログは開発者が所有し、開発者のみが変更できます。スプリント中に計画を調整するのは開発者の責任です。",
      en: "The Sprint Backlog is owned by and can only be changed by Developers. Adjusting the plan during the Sprint is the Developers' responsibility.",
    },
  },
  {
    id: 107,
    type: "single",
    category: "tricky",
    question: {
      ja: "デイリースクラムはどこで開催すべきですか？",
      en: "Where should the Daily Scrum be held?",
    },
    choices: [
      { id: "a", text: { ja: "必ず対面で同じ場所で行う", en: "Always in person at the same location" } },
      { id: "b", text: { ja: "スクラムマスターが決めた場所で行う", en: "At a location decided by the Scrum Master" } },
      { id: "c", text: { ja: "開発者が選択する。同じ時刻・同じ場所が推奨される", en: "Developers choose. Same time and place is recommended" } },
      { id: "d", text: { ja: "プロダクトオーナーのオフィスで行う", en: "At the Product Owner's office" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "デイリースクラムは複雑さを軽減するため、同じ時刻・同じ場所で開催することが推奨されますが、開発者が構造と手法を選択できます。",
      en: "Daily Scrum is recommended at the same time and place to reduce complexity, but Developers choose the structure and techniques.",
    },
  },
  {
    id: 108,
    type: "single",
    category: "tricky",
    question: {
      ja: "プロダクトバックログリファインメントに費やす時間の目安はどれくらいですか？",
      en: "What is the recommended time to spend on Product Backlog refinement?",
    },
    choices: [
      { id: "a", text: { ja: "スプリントの50%以上", en: "More than 50% of the Sprint" } },
      { id: "b", text: { ja: "スプリントの10%以下を目安とすることが多い", en: "Often 10% or less of the Sprint as a guideline" } },
      { id: "c", text: { ja: "スクラムガイドで厳密に定義されている", en: "Strictly defined in the Scrum Guide" } },
      { id: "d", text: { ja: "リファインメントは不要である", en: "Refinement is not needed" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "プロダクトバックログリファインメントは通常、開発者のキャパシティの10%以下を消費しますが、スクラムガイドでは厳密に定義されていません。",
      en: "Product Backlog refinement usually consumes 10% or less of Developer capacity, but is not strictly defined in the Scrum Guide.",
    },
  },
  {
    id: 109,
    type: "single",
    category: "tricky",
    question: {
      ja: "スクラムマスターは管理職（マネージャー）ですか？",
      en: "Is the Scrum Master a manager?",
    },
    choices: [
      { id: "a", text: { ja: "はい、チームを管理する責任がある", en: "Yes, they are responsible for managing the team" } },
      { id: "b", text: { ja: "いいえ、リーダーではあるが管理職ではない", en: "No, they are a leader but not a manager" } },
      { id: "c", text: { ja: "プロジェクトの規模による", en: "It depends on project size" } },
      { id: "d", text: { ja: "組織の方針による", en: "It depends on organizational policy" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターはサーバントリーダーであり、真のリーダーですが、チームを管理する従来の管理職ではありません。チームの自己管理を支援します。",
      en: "The Scrum Master is a servant-leader and true leader, but not a traditional manager who manages the team. They support the team's self-management.",
    },
  },
  {
    id: 110,
    type: "single",
    category: "tricky",
    question: {
      ja: "スプリント中に「完成の定義」を変更することはできますか？",
      en: "Can the Definition of Done be changed during a Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "はい、いつでも変更できる", en: "Yes, it can be changed anytime" } },
      { id: "b", text: { ja: "はい、ただし基準を厳格化する方向でのみ", en: "Yes, but only to make criteria stricter" } },
      { id: "c", text: { ja: "いいえ、スプリント中は変更できない", en: "No, it cannot be changed during the Sprint" } },
      { id: "d", text: { ja: "プロダクトオーナーの承認があれば変更できる", en: "Yes, with Product Owner approval" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリント中に完成の定義を変更することは避けるべきです。変更はスプリントレトロスペクティブで検討し、次のスプリントから適用します。",
      en: "Changing the Definition of Done during a Sprint should be avoided. Changes are considered in the Sprint Retrospective and applied from the next Sprint.",
    },
  },
  {
    id: 111,
    type: "single",
    category: "tricky",
    question: {
      ja: "スクラムでは見積もりは必須ですか？",
      en: "Is estimation mandatory in Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "はい、ストーリーポイントでの見積もりが必須", en: "Yes, story point estimation is mandatory" } },
      { id: "b", text: { ja: "はい、時間での見積もりが必須", en: "Yes, time-based estimation is mandatory" } },
      { id: "c", text: { ja: "いいえ、スクラムガイドでは見積もりの手法を規定していない", en: "No, the Scrum Guide does not prescribe estimation techniques" } },
      { id: "d", text: { ja: "スクラムマスターが見積もり方法を決定する", en: "The Scrum Master decides the estimation method" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スクラムガイドでは見積もりの手法（ストーリーポイント、時間など）を規定していません。チームが適切と判断する方法を選択できます。",
      en: "The Scrum Guide does not prescribe estimation techniques (story points, time, etc.). Teams can choose methods they find appropriate.",
    },
  },
  {
    id: 112,
    type: "single",
    category: "tricky",
    question: {
      ja: "スプリントゴールはスプリント中に変更できますか？",
      en: "Can the Sprint Goal be changed during the Sprint?",
    },
    choices: [
      { id: "a", text: { ja: "はい、プロダクトオーナーの承認があれば変更できる", en: "Yes, with Product Owner approval" } },
      { id: "b", text: { ja: "はい、チーム全員の合意があれば変更できる", en: "Yes, with team consensus" } },
      { id: "c", text: { ja: "いいえ、スプリントゴールは不変である", en: "No, the Sprint Goal is immutable" } },
      { id: "d", text: { ja: "スクラムマスターの判断で変更できる", en: "Yes, at the Scrum Master's discretion" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スプリントゴールはスプリント中に変更できません。スコープの調整は可能ですが、ゴール自体は固定されます。",
      en: "The Sprint Goal cannot be changed during the Sprint. Scope can be adjusted, but the goal itself is fixed.",
    },
  },
  {
    id: 113,
    type: "single",
    category: "tricky",
    question: {
      ja: "スクラムチームのサイズが大きくなりすぎた場合、どうすべきですか？",
      en: "What should be done if a Scrum Team becomes too large?",
    },
    choices: [
      { id: "a", text: { ja: "一つの大きなチームとして維持する", en: "Maintain as one large team" } },
      { id: "b", text: { ja: "複数の小さなスクラムチームに再編成することを検討する", en: "Consider reorganizing into multiple smaller Scrum Teams" } },
      { id: "c", text: { ja: "スクラムマスターを増やして対応する", en: "Add more Scrum Masters" } },
      { id: "d", text: { ja: "サブチームを作成する", en: "Create sub-teams" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムチームは通常10人以下が推奨されます。大きくなりすぎた場合は、複数の凝集性のあるスクラムチームに再編成することを検討します。サブチームの作成は避けるべきです。",
      en: "Scrum Teams are typically 10 or fewer. If too large, consider reorganizing into multiple cohesive Scrum Teams. Creating sub-teams should be avoided.",
    },
  },
  {
    id: 114,
    type: "single",
    category: "tricky",
    question: {
      ja: "インクリメントは必ずスプリント終了時に作成されますか？",
      en: "Is an Increment always created at Sprint end?",
    },
    choices: [
      { id: "a", text: { ja: "はい、スプリントレビューの直前に作成される", en: "Yes, just before Sprint Review" } },
      { id: "b", text: { ja: "いいえ、スプリント中に複数のインクリメントが作成されることもある", en: "No, multiple Increments may be created during a Sprint" } },
      { id: "c", text: { ja: "プロダクトオーナーの判断による", en: "It depends on the Product Owner" } },
      { id: "d", text: { ja: "スプリント終了後に作成される", en: "It is created after the Sprint ends" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "インクリメントはスプリント中に複数作成されることもあります。アイテムが完成の定義を満たすたびにインクリメントが生まれます。",
      en: "Multiple Increments may be created during a Sprint. An Increment is born whenever an item meets the Definition of Done.",
    },
  },
  {
    id: 115,
    type: "single",
    category: "tricky",
    question: {
      ja: "スプリントレビューとデモは同じものですか？",
      en: "Are Sprint Review and demo the same thing?",
    },
    choices: [
      { id: "a", text: { ja: "はい、同じイベントの別名である", en: "Yes, they are different names for the same event" } },
      { id: "b", text: { ja: "いいえ、スプリントレビューはデモだけでなく、協働の作業セッションである", en: "No, Sprint Review is not just a demo but a collaborative working session" } },
      { id: "c", text: { ja: "デモはスプリントレビューの後に別途行われる", en: "Demo is held separately after Sprint Review" } },
      { id: "d", text: { ja: "プロダクトオーナーの判断による", en: "It depends on the Product Owner" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントレビューは単なるデモではありません。スプリントの成果を検査し、ステークホルダーと協働して今後の適応を決定する作業セッションです。",
      en: "Sprint Review is not just a demo. It is a working session to inspect Sprint outcomes and collaborate with stakeholders to determine future adaptations.",
    },
  },
  {
    id: 116,
    type: "single",
    category: "tricky",
    question: {
      ja: "バーンダウンチャートはスクラムの必須の作成物ですか？",
      en: "Is a burndown chart a mandatory Scrum artifact?",
    },
    choices: [
      { id: "a", text: { ja: "はい、スプリントごとに作成が必須", en: "Yes, required for every Sprint" } },
      { id: "b", text: { ja: "いいえ、スクラムガイドでは規定されていない", en: "No, not specified in the Scrum Guide" } },
      { id: "c", text: { ja: "はい、進捗の透明性のために必須", en: "Yes, required for progress transparency" } },
      { id: "d", text: { ja: "スクラムマスターが必要と判断した場合のみ", en: "Only if the Scrum Master deems it necessary" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "バーンダウンチャートはスクラムガイドで規定されていません。有用なツールですが、必須の作成物ではありません。",
      en: "Burndown charts are not specified in the Scrum Guide. They are useful tools but not mandatory artifacts.",
    },
  },
  {
    id: 117,
    type: "single",
    category: "tricky",
    question: {
      ja: "スクラムマスターは開発者を兼任できますか？",
      en: "Can the Scrum Master also be a Developer?",
    },
    choices: [
      { id: "a", text: { ja: "いいえ、役割は完全に分離すべき", en: "No, roles must be completely separate" } },
      { id: "b", text: { ja: "はい、特に小さなチームでは可能だが、両方の責任を果たす必要がある", en: "Yes, especially in small teams, but must fulfill both responsibilities" } },
      { id: "c", text: { ja: "プロダクトオーナーの承認が必要", en: "Product Owner approval is needed" } },
      { id: "d", text: { ja: "組織の方針による", en: "Depends on organizational policy" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターは開発者を兼任できますが、両方の責任を果たす必要があります。ただし、利益相反に注意が必要です。",
      en: "The Scrum Master can also be a Developer but must fulfill both responsibilities. However, be aware of potential conflicts of interest.",
    },
  },
  {
    id: 118,
    type: "single",
    category: "tricky",
    question: {
      ja: "プロダクトオーナーはステークホルダーからの要求を全て受け入れるべきですか？",
      en: "Should the Product Owner accept all stakeholder requests?",
    },
    choices: [
      { id: "a", text: { ja: "はい、顧客満足のために全て受け入れるべき", en: "Yes, all should be accepted for customer satisfaction" } },
      { id: "b", text: { ja: "いいえ、価値に基づいて優先順位を判断し、取捨選択する", en: "No, prioritize based on value and make selections" } },
      { id: "c", text: { ja: "スクラムマスターと相談して決める", en: "Consult with the Scrum Master to decide" } },
      { id: "d", text: { ja: "開発者が実現可能なもののみ受け入れる", en: "Accept only what Developers can implement" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "プロダクトオーナーはステークホルダーのニーズを代表しますが、全てを受け入れる必要はありません。価値に基づいて優先順位を判断し、プロダクトの成功に貢献する決定を行います。",
      en: "The Product Owner represents stakeholder needs but doesn't have to accept everything. They prioritize based on value and make decisions that contribute to product success.",
    },
  },
  {
    id: 119,
    type: "single",
    category: "tricky",
    question: {
      ja: "スプリントレトロスペクティブの参加者として正しいのは誰ですか？",
      en: "Who are the correct participants for Sprint Retrospective?",
    },
    choices: [
      { id: "a", text: { ja: "開発者のみ", en: "Developers only" } },
      { id: "b", text: { ja: "スクラムチーム全員（プロダクトオーナー、スクラムマスター、開発者）", en: "The entire Scrum Team (Product Owner, Scrum Master, Developers)" } },
      { id: "c", text: { ja: "開発者とスクラムマスターのみ", en: "Developers and Scrum Master only" } },
      { id: "d", text: { ja: "ステークホルダーを含む全員", en: "Everyone including stakeholders" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントレトロスペクティブにはスクラムチーム全員（プロダクトオーナー、スクラムマスター、開発者）が参加します。ステークホルダーは参加しません。",
      en: "The entire Scrum Team (Product Owner, Scrum Master, Developers) participates in Sprint Retrospective. Stakeholders do not participate.",
    },
  },
  {
    id: 120,
    type: "single",
    category: "tricky",
    question: {
      ja: "「完了（Done）」と「完成の定義」の違いは何ですか？",
      en: "What is the difference between 'Done' and 'Definition of Done'?",
    },
    choices: [
      { id: "a", text: { ja: "同じ意味である", en: "They mean the same thing" } },
      { id: "b", text: { ja: "「完了」は個々のタスクの状態、「完成の定義」はインクリメントの品質基準", en: "'Done' is a state of individual tasks, 'Definition of Done' is quality criteria for Increments" } },
      { id: "c", text: { ja: "「完成の定義」は任意、「完了」は必須", en: "'Definition of Done' is optional, 'Done' is mandatory" } },
      { id: "d", text: { ja: "プロダクトオーナーが区別を決める", en: "The Product Owner decides the distinction" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "「完成の定義」はインクリメントが満たすべき品質基準の正式な説明です。「完了」はその基準を満たした状態を指します。",
      en: "The Definition of Done is a formal description of quality standards the Increment must meet. 'Done' refers to the state of meeting those standards.",
    },
  },

  // ===== PSM I 深掘り問題（121-135）=====
  {
    id: 121,
    type: "multiple",
    category: "deep",
    question: {
      ja: "スクラムの経験主義において「透明性」が重要な理由を全て選んでください。",
      en: "Select all reasons why Transparency is important in Scrum's empiricism.",
    },
    choices: [
      { id: "a", text: { ja: "検査を可能にする", en: "Enables inspection" } },
      { id: "b", text: { ja: "意思決定を最適化する", en: "Optimizes decision-making" } },
      { id: "c", text: { ja: "管理者による監視を容易にする", en: "Makes monitoring by managers easier" } },
      { id: "d", text: { ja: "信頼関係の基盤となる", en: "Forms the foundation of trust" } },
      { id: "e", text: { ja: "誤解を招く検査を防ぐ", en: "Prevents misleading inspection" } },
    ],
    correctAnswers: ["a", "b", "d", "e"],
    explanation: {
      ja: "透明性は検査を可能にし、意思決定を最適化し、信頼関係の基盤となり、誤解を招く検査を防ぎます。管理者による監視のためではありません。",
      en: "Transparency enables inspection, optimizes decision-making, forms the foundation of trust, and prevents misleading inspection. It is not for manager monitoring.",
    },
  },
  {
    id: 122,
    type: "single",
    category: "deep",
    question: {
      ja: "スクラムガイド2020で「自己組織化」から変更された用語は何ですか？",
      en: "What term replaced 'self-organizing' in the Scrum Guide 2020?",
    },
    choices: [
      { id: "a", text: { ja: "自己管理（Self-managing）", en: "Self-managing" } },
      { id: "b", text: { ja: "自己指導（Self-directing）", en: "Self-directing" } },
      { id: "c", text: { ja: "自律（Autonomous）", en: "Autonomous" } },
      { id: "d", text: { ja: "独立（Independent）", en: "Independent" } },
    ],
    correctAnswers: ["a"],
    explanation: {
      ja: "スクラムガイド2020では「自己組織化（Self-organizing）」から「自己管理（Self-managing）」に用語が変更されました。これは、チームが誰が、いつ、どのように作業を行うかを自分たちで決定することを強調しています。",
      en: "The Scrum Guide 2020 changed 'Self-organizing' to 'Self-managing.' This emphasizes that teams decide who, when, and how to do the work themselves.",
    },
  },
  {
    id: 123,
    type: "multiple",
    category: "deep",
    question: {
      ja: "スクラムチームが「機能横断的（Cross-functional）」であることの意味として正しいものを全て選んでください。",
      en: "Select all correct meanings of a Scrum Team being 'Cross-functional.'",
    },
    choices: [
      { id: "a", text: { ja: "各メンバーが全てのスキルを持っている", en: "Each member has all skills" } },
      { id: "b", text: { ja: "チームとして必要な全てのスキルを持っている", en: "The team collectively has all necessary skills" } },
      { id: "c", text: { ja: "外部への依存なしに価値を創出できる", en: "Can create value without external dependencies" } },
      { id: "d", text: { ja: "メンバーが複数のプロジェクトで働く", en: "Members work on multiple projects" } },
      { id: "e", text: { ja: "専門家としてお互いに責任を持つ", en: "Hold each other accountable as professionals" } },
    ],
    correctAnswers: ["b", "c", "e"],
    explanation: {
      ja: "機能横断的とは、チーム全体として必要なスキルを持ち、外部依存なしに価値を創出できることを意味します。各メンバーが全スキルを持つ必要はありません。",
      en: "Cross-functional means the team collectively has all necessary skills and can create value without external dependencies. Not every member needs all skills.",
    },
  },
  {
    id: 124,
    type: "single",
    category: "deep",
    question: {
      ja: "スクラムガイド2020で追加された「コミットメント」の概念において、各作成物に対するコミットメントの目的は何ですか？",
      en: "What is the purpose of Commitments for each artifact added in Scrum Guide 2020?",
    },
    choices: [
      { id: "a", text: { ja: "作業の完了を保証する", en: "To guarantee work completion" } },
      { id: "b", text: { ja: "透明性を高め、進捗を測定するための焦点を提供する", en: "To enhance transparency and provide focus for measuring progress" } },
      { id: "c", text: { ja: "チームを評価するための基準を設ける", en: "To establish criteria for evaluating the team" } },
      { id: "d", text: { ja: "ステークホルダーへの報告を容易にする", en: "To facilitate reporting to stakeholders" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "各作成物に対するコミットメント（プロダクトゴール、スプリントゴール、完成の定義）は、透明性を高め、進捗を測定するための焦点を提供します。",
      en: "Commitments for each artifact (Product Goal, Sprint Goal, Definition of Done) enhance transparency and provide focus for measuring progress.",
    },
  },
  {
    id: 125,
    type: "single",
    category: "deep",
    question: {
      ja: "スクラムにおいて「タイムボックス」の主な目的は何ですか？",
      en: "What is the main purpose of time-boxing in Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "作業を急がせてプレッシャーを与える", en: "To rush work and create pressure" } },
      { id: "b", text: { ja: "リスクを制限し、集中を促し、検査と適応の機会を確保する", en: "To limit risk, encourage focus, and ensure opportunities for inspection and adaptation" } },
      { id: "c", text: { ja: "正確な見積もりを可能にする", en: "To enable accurate estimation" } },
      { id: "d", text: { ja: "経営層への報告を容易にする", en: "To facilitate reporting to management" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "タイムボックスはリスクを制限し、集中を促し、定期的な検査と適応の機会を確保するために設けられています。プレッシャーを与えることが目的ではありません。",
      en: "Time-boxes limit risk, encourage focus, and ensure regular opportunities for inspection and adaptation. Creating pressure is not the purpose.",
    },
  },
  {
    id: 126,
    type: "multiple",
    category: "deep",
    question: {
      ja: "スプリントがスクラムの心臓部である理由を全て選んでください。",
      en: "Select all reasons why the Sprint is the heartbeat of Scrum.",
    },
    choices: [
      { id: "a", text: { ja: "アイデアを価値に変換する", en: "Turns ideas into value" } },
      { id: "b", text: { ja: "予測可能性を実現する", en: "Enables predictability" } },
      { id: "c", text: { ja: "検査と適応の機会を確保する", en: "Ensures opportunities for inspection and adaptation" } },
      { id: "d", text: { ja: "リスクを最小化する", en: "Minimizes risk" } },
      { id: "e", text: { ja: "詳細な計画を可能にする", en: "Enables detailed planning" } },
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: {
      ja: "スプリントはアイデアを価値に変換し、予測可能性を実現し、検査と適応の機会を確保し、リスクを最小化します。詳細な計画は経験主義とは相反します。",
      en: "Sprints turn ideas into value, enable predictability, ensure inspection and adaptation opportunities, and minimize risk. Detailed planning contradicts empiricism.",
    },
  },
  {
    id: 127,
    type: "single",
    category: "deep",
    question: {
      ja: "スクラムガイドが「軽量フレームワーク」と称する理由として最も適切なものはどれですか？",
      en: "What is the most appropriate reason why the Scrum Guide calls Scrum a 'lightweight framework'?",
    },
    choices: [
      { id: "a", text: { ja: "少ない人数で実践できるから", en: "Because it can be practiced with few people" } },
      { id: "b", text: { ja: "意図的に不完全であり、必要最小限の要素のみを定義しているから", en: "Because it is intentionally incomplete and defines only minimum necessary elements" } },
      { id: "c", text: { ja: "短期間のプロジェクトに適しているから", en: "Because it is suitable for short-term projects" } },
      { id: "d", text: { ja: "ドキュメントが少ないから", en: "Because there is little documentation" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムは意図的に不完全であり、スクラムの理論を実現するために必要な部分のみを定義しています。これにより様々な状況に適応できます。",
      en: "Scrum is intentionally incomplete and defines only the parts necessary to implement Scrum theory. This allows it to adapt to various situations.",
    },
  },
  {
    id: 128,
    type: "single",
    category: "deep",
    question: {
      ja: "スクラムにおける「経験主義」と「リーン思考」の関係として正しいものはどれですか？",
      en: "What is correct about the relationship between 'empiricism' and 'lean thinking' in Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "経験主義はリーン思考の一部である", en: "Empiricism is part of lean thinking" } },
      { id: "b", text: { ja: "スクラムは経験主義とリーン思考の両方に基づいている", en: "Scrum is founded on both empiricism and lean thinking" } },
      { id: "c", text: { ja: "リーン思考は経験主義を置き換えるものである", en: "Lean thinking replaces empiricism" } },
      { id: "d", text: { ja: "両者は相反する考え方である", en: "They are conflicting concepts" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムガイド2020では、スクラムは「経験主義」と「リーン思考」の両方に基づいていると明記されています。経験主義は知識が経験から生まれることを、リーン思考はムダを省くことを重視します。",
      en: "The Scrum Guide 2020 states that Scrum is founded on 'empiricism' and 'lean thinking.' Empiricism emphasizes knowledge from experience; lean thinking focuses on reducing waste.",
    },
  },
  {
    id: 129,
    type: "single",
    category: "deep",
    question: {
      ja: "スクラムの「適応」が最も困難になる状況はどれですか？",
      en: "In which situation does 'adaptation' in Scrum become most difficult?",
    },
    choices: [
      { id: "a", text: { ja: "関係者に権限が与えられていない場合", en: "When those involved are not empowered" } },
      { id: "b", text: { ja: "チームが大きすぎる場合", en: "When the team is too large" } },
      { id: "c", text: { ja: "スプリントが長すぎる場合", en: "When Sprints are too long" } },
      { id: "d", text: { ja: "ステークホルダーが多すぎる場合", en: "When there are too many stakeholders" } },
    ],
    correctAnswers: ["a"],
    explanation: {
      ja: "スクラムガイドでは「関係者に権限が与えられていなかったり、自己管理がなされていなかったりすれば、適応はより困難になる」と記載されています。",
      en: "The Scrum Guide states that 'adaptation becomes more difficult when the people involved are not empowered or self-managing.'",
    },
  },
  {
    id: 130,
    type: "multiple",
    category: "deep",
    question: {
      ja: "プロダクトゴールの特徴として正しいものを全て選んでください。",
      en: "Select all correct characteristics of the Product Goal.",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトの将来の状態を表す", en: "Describes a future state of the product" } },
      { id: "b", text: { ja: "スクラムチームの長期的な目標", en: "A long-term objective for the Scrum Team" } },
      { id: "c", text: { ja: "プロダクトバックログに存在する", en: "Exists in the Product Backlog" } },
      { id: "d", text: { ja: "複数のプロダクトゴールを同時に追求できる", en: "Multiple Product Goals can be pursued simultaneously" } },
      { id: "e", text: { ja: "達成または放棄するまで次のゴールに取り組まない", en: "Don't take on another goal until achieved or abandoned" } },
    ],
    correctAnswers: ["a", "b", "c", "e"],
    explanation: {
      ja: "プロダクトゴールはプロダクトの将来の状態を表し、長期的な目標であり、プロダクトバックログに存在します。同時に複数のゴールは追求しません。",
      en: "The Product Goal describes a future state, is a long-term objective, exists in the Product Backlog. Multiple goals are not pursued simultaneously.",
    },
  },
  {
    id: 131,
    type: "single",
    category: "deep",
    question: {
      ja: "スクラムガイド2020において、スクラムチームが「価値を創出する」とはどういう意味ですか？",
      en: "What does it mean for a Scrum Team to 'create value' in the Scrum Guide 2020?",
    },
    choices: [
      { id: "a", text: { ja: "利益を最大化すること", en: "Maximizing profit" } },
      { id: "b", text: { ja: "毎スプリント、使用可能なインクリメントを作成すること", en: "Creating a usable Increment every Sprint" } },
      { id: "c", text: { ja: "コストを最小化すること", en: "Minimizing costs" } },
      { id: "d", text: { ja: "ドキュメントを作成すること", en: "Creating documentation" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムにおいて価値を創出するとは、毎スプリント使用可能で価値のあるインクリメントを作成することを意味します。",
      en: "Creating value in Scrum means producing a usable, valuable Increment every Sprint.",
    },
  },
  {
    id: 132,
    type: "single",
    category: "deep",
    question: {
      ja: "スクラムガイドにおいて「スプリント中にスプリントゴールに悪影響を与える変更を行わない」とはどういう意味ですか？",
      en: "What does 'no changes are made that would endanger the Sprint Goal' mean in the Scrum Guide?",
    },
    choices: [
      { id: "a", text: { ja: "スプリントバックログを一切変更しない", en: "Never change the Sprint Backlog" } },
      { id: "b", text: { ja: "ゴール達成を危うくする変更は避け、スコープは調整可能", en: "Avoid changes that endanger the goal; scope can be adjusted" } },
      { id: "c", text: { ja: "完成の定義を変更しない", en: "Don't change the Definition of Done" } },
      { id: "d", text: { ja: "開発者の構成を変更しない", en: "Don't change Developer composition" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリント中にスコープを明確化したり再交渉したりすることは可能ですが、スプリントゴールの達成を危うくするような変更は避けるべきです。",
      en: "Scope can be clarified and renegotiated during the Sprint, but changes that endanger the Sprint Goal should be avoided.",
    },
  },
  {
    id: 133,
    type: "single",
    category: "deep",
    question: {
      ja: "スクラムガイド2020で「検査」について強調されていることは何ですか？",
      en: "What is emphasized about 'inspection' in the Scrum Guide 2020?",
    },
    choices: [
      { id: "a", text: { ja: "検査は毎日行う必要がある", en: "Inspection must be done daily" } },
      { id: "b", text: { ja: "検査を行う人はスキルを持ち、熱心に行う必要がある", en: "Those inspecting must be skilled and diligent" } },
      { id: "c", text: { ja: "検査は外部の監査人が行うべき", en: "Inspection should be done by external auditors" } },
      { id: "d", text: { ja: "検査は詳細なドキュメントを作成すること", en: "Inspection means creating detailed documentation" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムガイド2020では「作成物と進捗は頻繁かつ熱心に検査しなければならない」とあり、検査を行う人はスキルと熱意が必要です。",
      en: "The Scrum Guide 2020 states artifacts and progress must be inspected 'frequently and diligently,' requiring skill and dedication.",
    },
  },
  {
    id: 134,
    type: "single",
    category: "deep",
    question: {
      ja: "スクラムにおいて「完成の定義」が満たす要件として最も重要なものはどれですか？",
      en: "What is the most important requirement the Definition of Done must meet in Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナーの期待を満たすこと", en: "Meeting Product Owner expectations" } },
      { id: "b", text: { ja: "作業が使用可能なインクリメントの一部になるための正式な状態の説明であること", en: "A formal description of state for work to be part of a usable Increment" } },
      { id: "c", text: { ja: "ステークホルダーの全ての要求を含むこと", en: "Including all stakeholder requirements" } },
      { id: "d", text: { ja: "チーム全員が同意していること", en: "Having entire team agreement" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "完成の定義は、作業がインクリメントの一部になるために満たすべき品質基準の正式な説明です。これにより透明性が確保されます。",
      en: "The Definition of Done is a formal description of quality standards work must meet to be part of the Increment. This ensures transparency.",
    },
  },
  {
    id: 135,
    type: "multiple",
    category: "deep",
    question: {
      ja: "スクラムにおいて、スプリントプランニングで回答すべき3つのトピックは何ですか？",
      en: "What are the three topics to be addressed in Sprint Planning in Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "このスプリントはなぜ価値があるのか", en: "Why is this Sprint valuable?" } },
      { id: "b", text: { ja: "このスプリントで何ができるのか", en: "What can be done this Sprint?" } },
      { id: "c", text: { ja: "誰が何のタスクを担当するのか", en: "Who is assigned to which tasks?" } },
      { id: "d", text: { ja: "選択した作業をどのように成し遂げるのか", en: "How will the chosen work get done?" } },
      { id: "e", text: { ja: "いつリリースするのか", en: "When will it be released?" } },
    ],
    correctAnswers: ["a", "b", "d"],
    explanation: {
      ja: "スプリントプランニングの3つのトピックは「なぜ価値があるのか」「何ができるのか」「どのように成し遂げるのか」です。誰がタスクを担当するかは開発者の自己管理に委ねられます。",
      en: "Sprint Planning addresses 'Why valuable,' 'What can be done,' and 'How to accomplish it.' Task assignments are left to Developer self-management.",
    },
  },

  // ===== PSM I 総合問題（136-150）=====
  {
    id: 136,
    type: "multiple",
    category: "comprehensive",
    question: {
      ja: "スクラムフレームワークの構成要素を全て選んでください。",
      en: "Select all components of the Scrum framework.",
    },
    choices: [
      { id: "a", text: { ja: "スクラムチーム（3つの責任）", en: "Scrum Team (3 accountabilities)" } },
      { id: "b", text: { ja: "イベント（5つ）", en: "Events (5)" } },
      { id: "c", text: { ja: "作成物（3つ）", en: "Artifacts (3)" } },
      { id: "d", text: { ja: "コミットメント（3つ）", en: "Commitments (3)" } },
      { id: "e", text: { ja: "バーンダウンチャート", en: "Burndown chart" } },
      { id: "f", text: { ja: "ストーリーポイント", en: "Story points" } },
    ],
    correctAnswers: ["a", "b", "c", "d"],
    explanation: {
      ja: "スクラムフレームワークはスクラムチーム、イベント、作成物、コミットメントで構成されます。バーンダウンチャートやストーリーポイントはスクラムガイドで規定されていません。",
      en: "The Scrum framework consists of Scrum Team, Events, Artifacts, and Commitments. Burndown charts and story points are not specified in the Scrum Guide.",
    },
  },
  {
    id: 137,
    type: "single",
    category: "comprehensive",
    question: {
      ja: "スクラムの全ての要素を組み合わせることで得られる最大の価値は何ですか？",
      en: "What is the greatest value obtained by combining all elements of Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "正確な予測と計画", en: "Accurate prediction and planning" } },
      { id: "b", text: { ja: "経験主義の実践と自己管理", en: "Practicing empiricism and self-management" } },
      { id: "c", text: { ja: "効率的なドキュメント管理", en: "Efficient documentation management" } },
      { id: "d", text: { ja: "コスト削減", en: "Cost reduction" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムの全ての要素は経験主義と自己管理を実践するために設計されています。これにより複雑な問題に適応的に対応できます。",
      en: "All Scrum elements are designed for practicing empiricism and self-management. This enables adaptive response to complex problems.",
    },
  },
  {
    id: 138,
    type: "single",
    category: "comprehensive",
    question: {
      ja: "スクラムチームがスプリントごとに使用可能なインクリメントを作成できない場合、最初に確認すべきことは何ですか？",
      en: "If a Scrum Team cannot create a usable Increment each Sprint, what should be checked first?",
    },
    choices: [
      { id: "a", text: { ja: "開発者のスキル不足", en: "Developer skill deficiency" } },
      { id: "b", text: { ja: "完成の定義が適切かどうか", en: "Whether the Definition of Done is appropriate" } },
      { id: "c", text: { ja: "プロダクトオーナーの要求の妥当性", en: "Validity of Product Owner requirements" } },
      { id: "d", text: { ja: "スプリント期間の長さ", en: "Sprint length" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "使用可能なインクリメントを作成できない場合、まず完成の定義が現実的で適切かどうかを確認します。完成の定義が厳しすぎるか、または曖昧な可能性があります。",
      en: "First check if the Definition of Done is realistic and appropriate. It may be too strict or ambiguous.",
    },
  },
  {
    id: 139,
    type: "multiple",
    category: "comprehensive",
    question: {
      ja: "スクラムにおいて、透明性を高めるための方法を全て選んでください。",
      en: "Select all methods to increase transparency in Scrum.",
    },
    choices: [
      { id: "a", text: { ja: "明確な完成の定義を持つ", en: "Having a clear Definition of Done" } },
      { id: "b", text: { ja: "プロダクトバックログを可視化する", en: "Making the Product Backlog visible" } },
      { id: "c", text: { ja: "スプリントゴールを設定する", en: "Setting a Sprint Goal" } },
      { id: "d", text: { ja: "詳細なプロジェクト計画を作成する", en: "Creating detailed project plans" } },
      { id: "e", text: { ja: "スクラムの価値基準を体現する", en: "Embodying Scrum values" } },
    ],
    correctAnswers: ["a", "b", "c", "e"],
    explanation: {
      ja: "透明性は完成の定義、プロダクトバックログの可視化、スプリントゴール、価値基準の体現によって高められます。詳細な計画は経験主義とは相反します。",
      en: "Transparency is enhanced by Definition of Done, Product Backlog visibility, Sprint Goal, and embodying values. Detailed planning contradicts empiricism.",
    },
  },
  {
    id: 140,
    type: "single",
    category: "comprehensive",
    question: {
      ja: "スクラムチームが取り組んでいるプロダクトにおいて、ステークホルダーの関与が低い場合、最も適切なアプローチはどれですか？",
      en: "If stakeholder involvement is low for a product the Scrum Team is working on, what is the most appropriate approach?",
    },
    choices: [
      { id: "a", text: { ja: "ステークホルダーなしで進める", en: "Proceed without stakeholders" } },
      { id: "b", text: { ja: "スクラムマスターがステークホルダーとの協働を促進する", en: "Scrum Master facilitates collaboration with stakeholders" } },
      { id: "c", text: { ja: "プロダクトオーナーがステークホルダーの役割も担う", en: "Product Owner takes on stakeholder role" } },
      { id: "d", text: { ja: "開発者がステークホルダーに直接働きかける", en: "Developers approach stakeholders directly" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターは組織に対してスクラムの採用を支援し、ステークホルダーとスクラムチームの協働を促進する役割があります。",
      en: "The Scrum Master supports Scrum adoption in the organization and facilitates collaboration between stakeholders and the Scrum Team.",
    },
  },
  {
    id: 141,
    type: "single",
    category: "comprehensive",
    question: {
      ja: "複数のスクラムチームが同じプロダクトに取り組む場合、プロダクトオーナーは何人必要ですか？",
      en: "When multiple Scrum Teams work on the same product, how many Product Owners are needed?",
    },
    choices: [
      { id: "a", text: { ja: "チームごとに一人", en: "One per team" } },
      { id: "b", text: { ja: "一つのプロダクトに一人", en: "One per product" } },
      { id: "c", text: { ja: "スクラムマスターが兼任する", en: "Scrum Master takes on the role" } },
      { id: "d", text: { ja: "組織の方針による", en: "Depends on organizational policy" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "一つのプロダクトには一人のプロダクトオーナーがいます。複数のチームが同じプロダクトに取り組む場合も、プロダクトバックログは一つであり、プロダクトオーナーも一人です。",
      en: "One product has one Product Owner. Even with multiple teams on the same product, there is one Product Backlog and one Product Owner.",
    },
  },
  {
    id: 142,
    type: "multiple",
    category: "comprehensive",
    question: {
      ja: "スクラムにおいて、チームが自己管理を実践するために必要なことを全て選んでください。",
      en: "Select all things needed for a team to practice self-management in Scrum.",
    },
    choices: [
      { id: "a", text: { ja: "誰が作業を行うかを自分たちで決定する", en: "Deciding who does the work themselves" } },
      { id: "b", text: { ja: "何の作業を行うかを自分たちで決定する", en: "Deciding what work to do themselves" } },
      { id: "c", text: { ja: "どのように作業を行うかを自分たちで決定する", en: "Deciding how to do the work themselves" } },
      { id: "d", text: { ja: "プロダクトバックログの優先順位を決定する", en: "Deciding Product Backlog priority" } },
      { id: "e", text: { ja: "スプリントの長さを決定する", en: "Deciding Sprint length" } },
    ],
    correctAnswers: ["a", "b", "c", "e"],
    explanation: {
      ja: "自己管理チームは誰が、何を、どのように作業を行うかを決定します。スプリントの長さもチームが決定できます。ただし、プロダクトバックログの優先順位はプロダクトオーナーの責務です。",
      en: "Self-managing teams decide who, what, and how to do work. They can also decide Sprint length. However, Product Backlog priority is the Product Owner's accountability.",
    },
  },
  {
    id: 143,
    type: "single",
    category: "comprehensive",
    question: {
      ja: "スクラムにおいて「予測可能性」はどのように実現されますか？",
      en: "How is 'predictability' achieved in Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "詳細な計画と見積もりによって", en: "Through detailed planning and estimation" } },
      { id: "b", text: { ja: "固定されたスプリント期間と継続的な検査と適応によって", en: "Through fixed Sprint duration and continuous inspection and adaptation" } },
      { id: "c", text: { ja: "経験豊富なプロジェクトマネージャーによって", en: "Through experienced project managers" } },
      { id: "d", text: { ja: "厳格なプロセス遵守によって", en: "Through strict process compliance" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムでは固定されたスプリント期間と継続的な検査と適応によって予測可能性を実現します。経験主義に基づく適応的なアプローチです。",
      en: "Scrum achieves predictability through fixed Sprint duration and continuous inspection and adaptation. It's an adaptive approach based on empiricism.",
    },
  },
  {
    id: 144,
    type: "single",
    category: "comprehensive",
    question: {
      ja: "スクラムを採用する組織において、マネージャーの役割はどうあるべきですか？",
      en: "What should a manager's role be in an organization adopting Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "チームの作業を監督し、指示を出す", en: "Supervise team work and give directions" } },
      { id: "b", text: { ja: "チームが自己管理できる環境を整える", en: "Create an environment where the team can self-manage" } },
      { id: "c", text: { ja: "スクラムマスターの役割を担う", en: "Take on the Scrum Master role" } },
      { id: "d", text: { ja: "スクラムには関与しない", en: "Not get involved with Scrum" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムを採用する組織では、マネージャーはチームが自己管理できる環境を整え、障害を取り除く支援をすべきです。直接的な監督や指示は避けます。",
      en: "In Scrum-adopting organizations, managers should create environments for self-management and help remove impediments. Avoid direct supervision and directions.",
    },
  },
  {
    id: 145,
    type: "multiple",
    category: "comprehensive",
    question: {
      ja: "スクラムが「シンプルだが習得が困難」と言われる理由を全て選んでください。",
      en: "Select all reasons why Scrum is said to be 'simple but difficult to master.'",
    },
    choices: [
      { id: "a", text: { ja: "ルールは少ないが、価値観の変化が必要", en: "Few rules but requires value changes" } },
      { id: "b", text: { ja: "理論は単純だが、実践には組織文化の変革が必要", en: "Simple theory but practice requires organizational culture change" } },
      { id: "c", text: { ja: "フレームワークは軽量だが、自己管理には規律が必要", en: "Lightweight framework but self-management requires discipline" } },
      { id: "d", text: { ja: "ドキュメントが不十分", en: "Insufficient documentation" } },
      { id: "e", text: { ja: "技術的なスキルが高度に必要", en: "Requires advanced technical skills" } },
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: {
      ja: "スクラムは理論・ルールはシンプルですが、価値観の変化、組織文化の変革、自己管理の規律など、人と組織の変化が必要なため習得が困難です。",
      en: "Scrum's theory and rules are simple, but mastery is difficult because it requires value changes, organizational culture transformation, and discipline for self-management.",
    },
  },
  {
    id: 146,
    type: "single",
    category: "comprehensive",
    question: {
      ja: "スクラムにおいて、スプリントの成功を測る最も重要な指標は何ですか？",
      en: "What is the most important metric for measuring Sprint success in Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "計画したストーリーポイントの達成率", en: "Achievement rate of planned story points" } },
      { id: "b", text: { ja: "スプリントゴールの達成と価値のあるインクリメントの作成", en: "Achieving Sprint Goal and creating valuable Increment" } },
      { id: "c", text: { ja: "開発者の稼働率", en: "Developer utilization rate" } },
      { id: "d", text: { ja: "バグの発生数", en: "Number of bugs" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントの成功はスプリントゴールの達成と価値のあるインクリメントの作成で測られます。ストーリーポイントや稼働率はスクラムの公式な指標ではありません。",
      en: "Sprint success is measured by achieving the Sprint Goal and creating a valuable Increment. Story points and utilization are not official Scrum metrics.",
    },
  },
  {
    id: 147,
    type: "single",
    category: "comprehensive",
    question: {
      ja: "スクラムにおいて、技術的な決定を行う最終的な責任は誰にありますか？",
      en: "Who has final accountability for technical decisions in Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "テックリード", en: "Tech Lead" } },
      { id: "b", text: { ja: "アーキテクト", en: "Architect" } },
      { id: "c", text: { ja: "開発者", en: "Developers" } },
      { id: "d", text: { ja: "スクラムマスター", en: "Scrum Master" } },
    ],
    correctAnswers: ["c"],
    explanation: {
      ja: "スクラムにはテックリードやアーキテクトという役割は定義されていません。技術的な決定は開発者が自己管理の一環として行います。",
      en: "Scrum doesn't define Tech Lead or Architect roles. Technical decisions are made by Developers as part of self-management.",
    },
  },
  {
    id: 148,
    type: "multiple",
    category: "comprehensive",
    question: {
      ja: "スクラムチームが新しいプロダクトを開始する際に最初に行うべきことを全て選んでください。",
      en: "Select all things a Scrum Team should do first when starting a new product.",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトゴールを設定する", en: "Set a Product Goal" } },
      { id: "b", text: { ja: "初期のプロダクトバックログを作成する", en: "Create an initial Product Backlog" } },
      { id: "c", text: { ja: "完成の定義を確立する", en: "Establish a Definition of Done" } },
      { id: "d", text: { ja: "詳細なプロジェクト計画を作成する", en: "Create detailed project plans" } },
      { id: "e", text: { ja: "全ての要件を文書化する", en: "Document all requirements" } },
    ],
    correctAnswers: ["a", "b", "c"],
    explanation: {
      ja: "新しいプロダクトを開始する際は、プロダクトゴール、初期のプロダクトバックログ、完成の定義を確立します。詳細な計画や全要件の文書化は不要です。",
      en: "When starting a new product, establish Product Goal, initial Product Backlog, and Definition of Done. Detailed plans and full requirements documentation are unnecessary.",
    },
  },
  {
    id: 149,
    type: "single",
    category: "comprehensive",
    question: {
      ja: "スクラムにおいて、「スプリントゴール」と「プロダクトゴール」の関係として正しいものはどれですか？",
      en: "What is the correct relationship between 'Sprint Goal' and 'Product Goal' in Scrum?",
    },
    choices: [
      { id: "a", text: { ja: "両者は同じレベルの目標である", en: "Both are goals at the same level" } },
      { id: "b", text: { ja: "スプリントゴールはプロダクトゴールに向かう一歩となる", en: "Sprint Goal is a step toward the Product Goal" } },
      { id: "c", text: { ja: "プロダクトゴールはスプリントゴールの合計である", en: "Product Goal is the sum of Sprint Goals" } },
      { id: "d", text: { ja: "両者は独立しており関係がない", en: "Both are independent and unrelated" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スプリントゴールはプロダクトゴールに向かう一歩です。各スプリントでスプリントゴールを達成することで、長期的なプロダクトゴールに近づきます。",
      en: "The Sprint Goal is a step toward the Product Goal. Achieving Sprint Goals moves the team closer to the long-term Product Goal.",
    },
  },
  {
    id: 150,
    type: "multiple",
    category: "comprehensive",
    question: {
      ja: "スクラムを正しく実践しているチームの特徴を全て選んでください。",
      en: "Select all characteristics of a team correctly practicing Scrum.",
    },
    choices: [
      { id: "a", text: { ja: "毎スプリント価値のあるインクリメントを作成している", en: "Creates valuable Increment every Sprint" } },
      { id: "b", text: { ja: "継続的に検査と適応を行っている", en: "Continuously inspects and adapts" } },
      { id: "c", text: { ja: "全ての計画を事前に詳細化している", en: "Details all plans in advance" } },
      { id: "d", text: { ja: "スクラムの価値基準を体現している", en: "Embodies Scrum values" } },
      { id: "e", text: { ja: "自己管理を実践している", en: "Practices self-management" } },
    ],
    correctAnswers: ["a", "b", "d", "e"],
    explanation: {
      ja: "正しくスクラムを実践しているチームは、価値のあるインクリメントの作成、継続的な検査と適応、価値基準の体現、自己管理を行っています。詳細な事前計画は経験主義とは相反します。",
      en: "Teams correctly practicing Scrum create valuable Increments, continuously inspect and adapt, embody values, and practice self-management. Detailed advance planning contradicts empiricism.",
    },
  },

  // ===== PSM II 問題（151-160）=====
  {
    id: 151,
    type: "single",
    category: "psm2",
    question: {
      ja: "【PSM II】スクラムマスターがチームに対してコーチングを行う際、最も効果的なアプローチはどれですか？",
      en: "[PSM II] What is the most effective approach when a Scrum Master coaches the team?",
    },
    choices: [
      { id: "a", text: { ja: "問題が発生したら即座に解決策を提示する", en: "Immediately provide solutions when problems occur" } },
      { id: "b", text: { ja: "質問を通じてチームが自ら気づきを得られるよう導く", en: "Guide the team to gain insights themselves through questions" } },
      { id: "c", text: { ja: "経験に基づいて正しい方法を指示する", en: "Instruct the correct method based on experience" } },
      { id: "d", text: { ja: "外部のコンサルタントを紹介する", en: "Introduce external consultants" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "効果的なコーチングは、答えを与えるのではなく、質問を通じてチームが自ら気づきを得られるよう導くことです。これにより持続的な学習と成長が促進されます。",
      en: "Effective coaching guides teams to gain insights through questions rather than giving answers. This promotes sustainable learning and growth.",
    },
  },
  {
    id: 152,
    type: "multiple",
    category: "psm2",
    question: {
      ja: "【PSM II】サーバントリーダーとしてのスクラムマスターの行動として正しいものを全て選んでください。",
      en: "[PSM II] Select all correct behaviors of a Scrum Master as a servant-leader.",
    },
    choices: [
      { id: "a", text: { ja: "チームの障害を取り除く", en: "Remove team impediments" } },
      { id: "b", text: { ja: "チームに代わって意思決定を行う", en: "Make decisions on behalf of the team" } },
      { id: "c", text: { ja: "チームの成長を支援する", en: "Support team growth" } },
      { id: "d", text: { ja: "チームの自己管理を促進する", en: "Promote team self-management" } },
      { id: "e", text: { ja: "チームのパフォーマンスを評価する", en: "Evaluate team performance" } },
    ],
    correctAnswers: ["a", "c", "d"],
    explanation: {
      ja: "サーバントリーダーは障害を取り除き、チームの成長を支援し、自己管理を促進します。意思決定の代行やパフォーマンス評価は行いません。",
      en: "Servant-leaders remove impediments, support team growth, and promote self-management. They don't make decisions for the team or evaluate performance.",
    },
  },
  {
    id: 153,
    type: "single",
    category: "psm2",
    question: {
      ja: "【PSM II】組織がスクラムを導入しようとしていますが、既存の組織文化が大きな障壁となっています。スクラムマスターとして最初に取るべきアプローチはどれですか？",
      en: "[PSM II] An organization is trying to adopt Scrum but existing culture is a major barrier. What approach should the Scrum Master take first?",
    },
    choices: [
      { id: "a", text: { ja: "組織文化を無視してスクラムを強制する", en: "Ignore organizational culture and force Scrum" } },
      { id: "b", text: { ja: "現状を理解し、小さな変化から始めて段階的に文化を変革する", en: "Understand the current state and gradually transform culture starting with small changes" } },
      { id: "c", text: { ja: "経営層に組織改革を要求する", en: "Demand organizational reform from management" } },
      { id: "d", text: { ja: "スクラムの導入を諦める", en: "Give up on Scrum adoption" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "組織変革は段階的に行うべきです。現状を理解し、小さな成功を積み重ねることで、徐々に組織文化を変革していきます。",
      en: "Organizational change should be gradual. Understand the current state and accumulate small successes to gradually transform the culture.",
    },
  },
  {
    id: 154,
    type: "single",
    category: "psm2",
    question: {
      ja: "【PSM II】チームの信頼関係が低下している場合、スクラムマスターが取るべき最初のステップは何ですか？",
      en: "[PSM II] When team trust is declining, what is the first step the Scrum Master should take?",
    },
    choices: [
      { id: "a", text: { ja: "信頼関係の低下の原因を特定するために、安全な場を設けて対話を促進する", en: "Create a safe space and facilitate dialogue to identify causes of trust decline" } },
      { id: "b", text: { ja: "チームメンバーを入れ替える", en: "Replace team members" } },
      { id: "c", text: { ja: "経営層に報告する", en: "Report to management" } },
      { id: "d", text: { ja: "チームビルディングイベントを企画する", en: "Organize a team building event" } },
    ],
    correctAnswers: ["a"],
    explanation: {
      ja: "信頼関係の問題に対処するには、まず原因を理解する必要があります。安全な場を設けて対話を促進し、チームが問題を認識し解決できるよう支援します。",
      en: "To address trust issues, first understand the causes. Create a safe space for dialogue and help the team recognize and solve problems.",
    },
  },
  {
    id: 155,
    type: "single",
    category: "psm2",
    question: {
      ja: "【PSM II】スクラムマスターがファシリテーションを行う際、最も重要なスキルは何ですか？",
      en: "[PSM II] What is the most important skill when a Scrum Master facilitates?",
    },
    choices: [
      { id: "a", text: { ja: "議論をリードして結論に導く能力", en: "Ability to lead discussions to conclusions" } },
      { id: "b", text: { ja: "中立的な立場を維持し、全員が参加できる環境を作る能力", en: "Ability to maintain neutrality and create an environment where everyone can participate" } },
      { id: "c", text: { ja: "技術的な知識", en: "Technical knowledge" } },
      { id: "d", text: { ja: "プレゼンテーション能力", en: "Presentation skills" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "効果的なファシリテーションには、中立的な立場を維持し、全員が参加できる安全な環境を作ることが重要です。結論に導くのではなく、チームが自ら結論に到達できるよう支援します。",
      en: "Effective facilitation requires maintaining neutrality and creating a safe environment for everyone to participate. Support the team in reaching conclusions themselves rather than leading them there.",
    },
  },
  {
    id: 156,
    type: "multiple",
    category: "psm2",
    question: {
      ja: "【PSM II】複数のスクラムチームがスケーリングする際に考慮すべきことを全て選んでください。",
      en: "[PSM II] Select all considerations when scaling multiple Scrum Teams.",
    },
    choices: [
      { id: "a", text: { ja: "チーム間の依存関係の管理", en: "Managing dependencies between teams" } },
      { id: "b", text: { ja: "共通の完成の定義の維持", en: "Maintaining a common Definition of Done" } },
      { id: "c", text: { ja: "統合されたインクリメントの作成", en: "Creating an integrated Increment" } },
      { id: "d", text: { ja: "各チームに個別のプロダクトバックログを持たせる", en: "Giving each team a separate Product Backlog" } },
      { id: "e", text: { ja: "チーム間のコミュニケーションの促進", en: "Promoting communication between teams" } },
    ],
    correctAnswers: ["a", "b", "c", "e"],
    explanation: {
      ja: "スケーリングでは依存関係の管理、共通の完成の定義、統合されたインクリメント、チーム間コミュニケーションが重要です。同じプロダクトには一つのプロダクトバックログを使用します。",
      en: "When scaling, managing dependencies, common Definition of Done, integrated Increment, and inter-team communication are important. Use one Product Backlog for the same product.",
    },
  },
  {
    id: 157,
    type: "single",
    category: "psm2",
    question: {
      ja: "【PSM II】スクラムマスターが組織のアジャイル変革を支援する際、最も効果的なアプローチはどれですか？",
      en: "[PSM II] What is the most effective approach when a Scrum Master supports organizational agile transformation?",
    },
    choices: [
      { id: "a", text: { ja: "トップダウンで変革を強制する", en: "Force change top-down" } },
      { id: "b", text: { ja: "成功事例を作り、その影響を組織全体に広げる", en: "Create success stories and spread their influence throughout the organization" } },
      { id: "c", text: { ja: "全従業員に一斉にトレーニングを行う", en: "Train all employees simultaneously" } },
      { id: "d", text: { ja: "外部のコンサルタントに任せる", en: "Leave it to external consultants" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "組織変革は成功事例を作り、その影響を広げることで効果的に進められます。小さな成功を積み重ね、その価値を示すことで自然と広がっていきます。",
      en: "Organizational change is effective by creating success stories and spreading their influence. Accumulate small successes and demonstrate their value for natural spread.",
    },
  },
  {
    id: 158,
    type: "single",
    category: "psm2",
    question: {
      ja: "【PSM II】プロダクトオーナーがビジネスの優先順位とステークホルダーの期待の間で板挟みになっています。スクラムマスターはどう支援すべきですか？",
      en: "[PSM II] The Product Owner is caught between business priorities and stakeholder expectations. How should the Scrum Master help?",
    },
    choices: [
      { id: "a", text: { ja: "プロダクトオーナーに代わって決定する", en: "Make decisions on behalf of the Product Owner" } },
      { id: "b", text: { ja: "プロダクトオーナーがステークホルダーと効果的にコラボレーションできるよう支援する", en: "Help the Product Owner collaborate effectively with stakeholders" } },
      { id: "c", text: { ja: "ステークホルダーの期待を無視するよう助言する", en: "Advise ignoring stakeholder expectations" } },
      { id: "d", text: { ja: "経営層にエスカレーションする", en: "Escalate to management" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "スクラムマスターはプロダクトオーナーがステークホルダーとの効果的なコラボレーションを行えるよう支援します。決定を代行するのではなく、プロダクトオーナーの能力を高めます。",
      en: "The Scrum Master helps the Product Owner collaborate effectively with stakeholders. Rather than making decisions for them, enhance the Product Owner's capabilities.",
    },
  },
  {
    id: 159,
    type: "multiple",
    category: "psm2",
    question: {
      ja: "【PSM II】チームの持続可能なペースを維持するためにスクラムマスターが行うべきことを全て選んでください。",
      en: "[PSM II] Select all things the Scrum Master should do to maintain a sustainable pace for the team.",
    },
    choices: [
      { id: "a", text: { ja: "残業を禁止する規則を作る", en: "Create rules prohibiting overtime" } },
      { id: "b", text: { ja: "チームのキャパシティを尊重し、オーバーコミットを防ぐ", en: "Respect team capacity and prevent over-commitment" } },
      { id: "c", text: { ja: "チームの疲労や燃え尽きの兆候に注意を払う", en: "Pay attention to signs of fatigue and burnout" } },
      { id: "d", text: { ja: "休暇を取ることを奨励する", en: "Encourage taking time off" } },
      { id: "e", text: { ja: "スプリント期間を短くする", en: "Shorten Sprint duration" } },
    ],
    correctAnswers: ["b", "c", "d"],
    explanation: {
      ja: "持続可能なペースはキャパシティの尊重、疲労への注意、適切な休暇によって維持されます。規則による禁止ではなく、文化として根付かせることが重要です。",
      en: "Sustainable pace is maintained by respecting capacity, watching for fatigue, and encouraging time off. It's important to establish this as culture, not prohibit by rules.",
    },
  },
  {
    id: 160,
    type: "single",
    category: "psm2",
    question: {
      ja: "【PSM II】スクラムマスターが「真のリーダー」として組織に影響を与えるために最も重要なことは何ですか？",
      en: "[PSM II] What is most important for a Scrum Master to influence the organization as a 'true leader'?",
    },
    choices: [
      { id: "a", text: { ja: "権威と肩書き", en: "Authority and title" } },
      { id: "b", text: { ja: "行動で示し、スクラムの価値基準を体現すること", en: "Leading by example and embodying Scrum values" } },
      { id: "c", text: { ja: "技術的な専門知識", en: "Technical expertise" } },
      { id: "d", text: { ja: "経営層との良好な関係", en: "Good relationships with management" } },
    ],
    correctAnswers: ["b"],
    explanation: {
      ja: "真のリーダーシップは権威や肩書きではなく、行動で示すことで発揮されます。スクラムの価値基準を自ら体現し、周囲に影響を与えることが重要です。",
      en: "True leadership is demonstrated through actions, not authority or title. It's important to embody Scrum values and influence those around you.",
    },
  },
];

/**
 * 問題をシャッフルして返す関数
 * 本番試験では問題の順序をランダムにしたい場合に使用
 */
export function getShuffledQuestions(): Question[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * 指定された数の問題を取得する関数
 * 問題数が足りない場合は全問題を返す
 */
export function getQuestions(count: number): Question[] {
  const shuffled = getShuffledQuestions();
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * 指定されたカテゴリーの問題を取得する関数
 * 問題はシャッフルされた状態で返される
 */
export function getQuestionsByCategories(categories: QuestionCategory[]): Question[] {
  const filteredQuestions = questions.filter((q) => categories.includes(q.category));
  
  // シャッフル
  const shuffled = [...filteredQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

/**
 * 指定された問題IDの問題を取得する関数
 * 問題はシャッフルされた状態で返される
 */
export function getQuestionsByIds(ids: number[]): Question[] {
  const filteredQuestions = questions.filter((q) => ids.includes(q.id));
  
  // シャッフル
  const shuffled = [...filteredQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}
