const stateKey = "individualEnglishPlatformState";
let selectedCategory = "all";
let currentQuizIndex = 0;
let timerId = null;
let timerSeconds = 120;
let availableVoices = [];

const vocabularyItems = [
  { id: "v001", word: "academic", phonetic: "/ˌækəˈdemɪk/", zh: "学术的；学习成绩的", example: "Academic results should not be the only measure of a student.", exampleZh: "学习成绩不应该是衡量学生的唯一标准。", category: "大学英语", tags: ["education", "writing"] },
  { id: "v002", word: "assignment", phonetic: "/əˈsaɪnmənt/", zh: "作业；任务", example: "I need to finish a writing assignment before Friday.", exampleZh: "我需要在周五前完成一份写作作业。", category: "大学英语", tags: ["campus"] },
  { id: "v003", word: "deadline", phonetic: "/ˈdedlaɪn/", zh: "截止日期", example: "The deadline pushed me to manage my time better.", exampleZh: "截止日期促使我更好地管理时间。", category: "大学英语", tags: ["study"] },
  { id: "v004", word: "lecture", phonetic: "/ˈlektʃə/", zh: "讲座；课堂授课", example: "The lecture gave us a clear introduction to medical English.", exampleZh: "这节课让我们清楚了解医学英语。", category: "大学英语", tags: ["campus"] },
  { id: "v005", word: "seminar", phonetic: "/ˈsemɪnɑː/", zh: "研讨课", example: "Students are expected to speak actively in the seminar.", exampleZh: "学生需要在研讨课中积极发言。", category: "大学英语", tags: ["campus"] },
  { id: "v006", word: "efficient", phonetic: "/ɪˈfɪʃnt/", zh: "高效的", example: "An efficient plan makes daily study less stressful.", exampleZh: "高效计划能减轻每天学习压力。", category: "大学英语", tags: ["writing"] },
  { id: "v007", word: "priority", phonetic: "/praɪˈɒrəti/", zh: "优先事项", example: "For me, GPA and English are the top priorities.", exampleZh: "对我来说，GPA 和英语是最高优先级。", category: "大学英语", tags: ["planning"] },
  { id: "v008", word: "evidence", phonetic: "/ˈevɪdəns/", zh: "证据", example: "Good writing needs evidence, not just opinion.", exampleZh: "好文章需要证据，而不只是观点。", category: "大学英语", tags: ["writing"] },
  { id: "v009", word: "argument", phonetic: "/ˈɑːɡjumənt/", zh: "论点；争论", example: "A strong argument is clear and easy to follow.", exampleZh: "有力的论点清楚且容易理解。", category: "大学英语", tags: ["writing"] },
  { id: "v010", word: "improve", phonetic: "/ɪmˈpruːv/", zh: "改善；提高", example: "I want to improve my speaking fluency.", exampleZh: "我想提高口语流利度。", category: "大学英语", tags: ["basic"] },
  { id: "v011", word: "pressure", phonetic: "/ˈpreʃə/", zh: "压力", example: "Teenagers face pressure from exams and parents.", exampleZh: "青少年面对考试和父母带来的压力。", category: "高考英语", tags: ["template"] },
  { id: "v012", word: "teenager", phonetic: "/ˈtiːneɪdʒə/", zh: "青少年", example: "Teenagers need time to sleep and play.", exampleZh: "青少年需要时间睡觉和玩耍。", category: "高考英语", tags: ["life"] },
  { id: "v013", word: "result", phonetic: "/rɪˈzʌlt/", zh: "结果；成绩", example: "Schools focus too much on exam results.", exampleZh: "学校太重视考试成绩。", category: "高考英语", tags: ["education"] },
  { id: "v014", word: "habit", phonetic: "/ˈhæbɪt/", zh: "习惯", example: "A good reading habit can improve vocabulary.", exampleZh: "好的阅读习惯可以提高词汇量。", category: "高考英语", tags: ["basic"] },
  { id: "v015", word: "responsibility", phonetic: "/rɪˌspɒnsəˈbɪləti/", zh: "责任", example: "Students should learn to take responsibility for their study.", exampleZh: "学生应该学会对自己的学习负责。", category: "高考英语", tags: ["writing"] },
  { id: "v016", word: "environment", phonetic: "/ɪnˈvaɪrənmənt/", zh: "环境", example: "A quiet environment helps students focus.", exampleZh: "安静环境有助学生集中注意力。", category: "高考英语", tags: ["topic"] },
  { id: "v017", word: "communicate", phonetic: "/kəˈmjuːnɪkeɪt/", zh: "沟通", example: "Parents should communicate with teenagers patiently.", exampleZh: "父母应该耐心和青少年沟通。", category: "高考英语", tags: ["speaking"] },
  { id: "v018", word: "challenge", phonetic: "/ˈtʃælɪndʒ/", zh: "挑战", example: "Learning English is a long-term challenge.", exampleZh: "学英语是长期挑战。", category: "高考英语", tags: ["basic"] },
  { id: "v019", word: "opportunity", phonetic: "/ˌɒpəˈtjuːnəti/", zh: "机会", example: "English gives me more academic opportunities.", exampleZh: "英语给我更多学术机会。", category: "高考英语", tags: ["writing"] },
  { id: "v020", word: "benefit", phonetic: "/ˈbenɪfɪt/", zh: "好处；受益", example: "Students benefit from regular practice.", exampleZh: "学生能从规律练习中受益。", category: "高考英语", tags: ["writing"] },
  { id: "v021", word: "acupuncture", phonetic: "/ˈækjupʌŋktʃə/", zh: "针灸", example: "Acupuncture is widely used in traditional Chinese medicine.", exampleZh: "针灸广泛用于中医。", category: "中医英语", tags: ["TCM"] },
  { id: "v022", word: "meridian", phonetic: "/məˈrɪdiən/", zh: "经络", example: "A meridian is a pathway related to qi and blood.", exampleZh: "经络是与气血相关的通路。", category: "中医英语", tags: ["TCM"] },
  { id: "v023", word: "qi", phonetic: "/tʃiː/", zh: "气", example: "Qi is a core concept in Chinese medicine.", exampleZh: "气是中医核心概念。", category: "中医英语", tags: ["TCM"] },
  { id: "v024", word: "blood stasis", phonetic: "/blʌd ˈsteɪsɪs/", zh: "血瘀", example: "Blood stasis may cause fixed pain.", exampleZh: "血瘀可能导致固定痛。", category: "中医英语", tags: ["diagnosis"] },
  { id: "v025", word: "deficiency", phonetic: "/dɪˈfɪʃnsi/", zh: "虚证；不足", example: "Qi deficiency can lead to fatigue.", exampleZh: "气虚可导致疲劳。", category: "中医英语", tags: ["diagnosis"] },
  { id: "v026", word: "excess", phonetic: "/ɪkˈses/", zh: "实证；过盛", example: "Excess heat may cause a red tongue.", exampleZh: "实热可能导致舌红。", category: "中医英语", tags: ["diagnosis"] },
  { id: "v027", word: "tongue coating", phonetic: "/tʌŋ ˈkəʊtɪŋ/", zh: "舌苔", example: "The tongue coating gives useful diagnostic information.", exampleZh: "舌苔提供有用的诊断信息。", category: "中医英语", tags: ["diagnosis"] },
  { id: "v028", word: "pulse", phonetic: "/pʌls/", zh: "脉象；脉搏", example: "A doctor checks the pulse before choosing treatment.", exampleZh: "医生选治疗前会诊脉。", category: "中医英语", tags: ["diagnosis"] },
  { id: "v029", word: "herbal formula", phonetic: "/ˈhɜːbəl ˈfɔːmjələ/", zh: "方剂", example: "A herbal formula should match the pattern.", exampleZh: "方剂应当对应证型。", category: "中医英语", tags: ["formula"] },
  { id: "v030", word: "symptom", phonetic: "/ˈsɪmptəm/", zh: "症状", example: "The main symptom is poor sleep.", exampleZh: "主要症状是睡眠差。", category: "中医英语", tags: ["clinical"] },
  { id: "v031", word: "diagnosis", phonetic: "/ˌdaɪəɡˈnəʊsɪs/", zh: "诊断", example: "A clear diagnosis is the basis of treatment.", exampleZh: "清楚诊断是治疗基础。", category: "中医英语", tags: ["clinical"] },
  { id: "v032", word: "treatment", phonetic: "/ˈtriːtmənt/", zh: "治疗", example: "The treatment focuses on reducing pain.", exampleZh: "治疗重点是减轻疼痛。", category: "中医英语", tags: ["clinical"] },
  { id: "v033", word: "holistic", phonetic: "/həʊˈlɪstɪk/", zh: "整体的", example: "Chinese medicine often takes a holistic view.", exampleZh: "中医常采取整体观。", category: "中医英语", tags: ["concept"] },
  { id: "v034", word: "balance", phonetic: "/ˈbæləns/", zh: "平衡", example: "Health is often understood as a balance of the body.", exampleZh: "健康常被理解为身体平衡。", category: "中医英语", tags: ["concept"] },
  { id: "v035", word: "insomnia", phonetic: "/ɪnˈsɒmniə/", zh: "失眠", example: "Insomnia is common among stressed students.", exampleZh: "失眠在压力大的学生中很常见。", category: "中医英语", tags: ["symptom"] },
  { id: "v036", word: "fatigue", phonetic: "/fəˈtiːɡ/", zh: "疲劳", example: "Long-term fatigue should not be ignored.", exampleZh: "长期疲劳不应被忽视。", category: "中医英语", tags: ["symptom"] },
  { id: "v037", word: "candidate", phonetic: "/ˈkændɪdət/", zh: "考生；候选人", example: "IELTS candidates need to manage time carefully.", exampleZh: "雅思考生需要谨慎管理时间。", category: "IELTS", tags: ["exam"] },
  { id: "v038", word: "coherent", phonetic: "/kəʊˈhɪərənt/", zh: "连贯的", example: "A coherent answer is easy for the examiner to follow.", exampleZh: "连贯回答让考官容易跟上。", category: "IELTS", tags: ["speaking"] },
  { id: "v039", word: "fluent", phonetic: "/ˈfluːənt/", zh: "流利的", example: "Fluent speaking does not mean speaking very fast.", exampleZh: "口语流利不等于说得很快。", category: "IELTS", tags: ["speaking"] },
  { id: "v040", word: "paraphrase", phonetic: "/ˈpærəfreɪz/", zh: "改写；同义转述", example: "Paraphrase the question in your introduction.", exampleZh: "在引言中改写题目。", category: "IELTS", tags: ["writing"] },
  { id: "v041", word: "outweigh", phonetic: "/ˌaʊtˈweɪ/", zh: "超过；比...更重要", example: "The benefits outweigh the disadvantages.", exampleZh: "好处大于坏处。", category: "IELTS", tags: ["writing"] },
  { id: "v042", word: "trend", phonetic: "/trend/", zh: "趋势", example: "The chart shows an upward trend.", exampleZh: "图表显示上升趋势。", category: "IELTS", tags: ["task1"] },
  { id: "v043", word: "significant", phonetic: "/sɪɡˈnɪfɪkənt/", zh: "显著的；重要的", example: "There was a significant increase in the figure.", exampleZh: "该数据有显著增长。", category: "IELTS", tags: ["task1"] },
  { id: "v044", word: "urban", phonetic: "/ˈɜːbən/", zh: "城市的", example: "Urban life can be convenient but stressful.", exampleZh: "城市生活方便但有压力。", category: "IELTS", tags: ["topic"] },
  { id: "v045", word: "consume", phonetic: "/kənˈsjuːm/", zh: "消费；消耗", example: "Young people consume a lot of online content.", exampleZh: "年轻人消费大量网络内容。", category: "IELTS", tags: ["topic"] },
  { id: "v046", word: "policy", phonetic: "/ˈpɒləsi/", zh: "政策", example: "Education policy should protect students' mental health.", exampleZh: "教育政策应保护学生心理健康。", category: "IELTS", tags: ["writing"] },
  { id: "v047", word: "stressful", phonetic: "/ˈstresfəl/", zh: "有压力的", example: "A stressful timetable can harm sleep quality.", exampleZh: "压力大的时间表会损害睡眠质量。", category: "高考英语", tags: ["life"] },
  { id: "v048", word: "ossified", phonetic: "/ˈɒsɪfaɪd/", zh: "僵化的", example: "An ossified system is hard to change.", exampleZh: "僵化制度很难改变。", category: "IELTS", tags: ["advanced"] },
  { id: "v049", word: "well-being", phonetic: "/ˌwel ˈbiːɪŋ/", zh: "身心健康；幸福感", example: "Schools should care about students' well-being.", exampleZh: "学校应关心学生身心健康。", category: "大学英语", tags: ["education"] },
  { id: "v050", word: "resilience", phonetic: "/rɪˈzɪliəns/", zh: "抗压能力；恢复力", example: "Resilience helps students deal with setbacks.", exampleZh: "抗压能力帮助学生应对挫折。", category: "大学英语", tags: ["growth"] },
  { id: "v051", word: "clinical", phonetic: "/ˈklɪnɪkəl/", zh: "临床的", example: "Clinical practice connects theory with real patients.", exampleZh: "临床实践把理论和真实病人连接起来。", category: "中医英语", tags: ["clinical"] },
  { id: "v052", word: "constitution", phonetic: "/ˌkɒnstɪˈtjuːʃn/", zh: "体质；构成", example: "A patient's constitution affects treatment choices.", exampleZh: "病人体质影响治疗选择。", category: "中医英语", tags: ["concept"] }
];

const templateItems = [
  { id: "t01", topic: "Teenage Pressure", category: "高考英语", title: "青少年压力", paragraph: "Hong Kong has an ossified education system that focuses too much on academic results. Schools and parents force students to perform well. As a result, teenagers have little time to sleep or play. Like me, I often have sleepless nights because I have to go to school five or even six days a week.", zhExplanation: "用于写教育压力、学生睡眠、校园生活。结构是：制度问题 -> 外部压力 -> 结果 -> 个人例子。", patterns: ["[Place] has an ossified system that focuses too much on [result].", "As a result, teenagers have little time to [rest/play].", "Like me, I often [personal problem] because [reason]."], keywords: ["ossified", "academic results", "sleepless nights"], useCases: ["作文", "speaking", "大学英语"] },
  { id: "t02", topic: "University Study", category: "大学英语", title: "大学学习", paragraph: "University study is different from secondary school because students have to manage their own time. A good student should not only attend lectures, but also review notes after class. If I can build this habit early, I will have less pressure before exams. Therefore, self-discipline is the key to a stable GPA.", zhExplanation: "用于大学学习、GPA、自律主题。", patterns: ["[Topic] is different from [old stage] because...", "A good student should not only..., but also...", "Therefore, self-discipline is the key to..."], keywords: ["manage", "review", "self-discipline"], useCases: ["大学英语", "作文"] },
  { id: "t03", topic: "TCM Learning", category: "中医英语", title: "中医学习", paragraph: "Traditional Chinese medicine is difficult at first because many ideas are abstract. For example, qi, blood and meridians cannot be understood only by memorising words. Students need to connect theory with cases. In this way, TCM becomes a practical medical system rather than a list of terms.", zhExplanation: "用于解释中医学习难点。", patterns: ["[Subject] is difficult at first because...", "Students need to connect theory with cases.", "In this way, [subject] becomes practical."], keywords: ["abstract", "meridians", "practical"], useCases: ["中医英语", "speaking"] },
  { id: "t04", topic: "Acupuncture", category: "中医英语", title: "针灸介绍", paragraph: "Acupuncture is an important part of traditional Chinese medicine. It uses specific points on meridians to regulate the body. Many patients choose acupuncture because it may reduce pain and improve sleep. However, it should be performed carefully by trained practitioners.", zhExplanation: "用于介绍针灸、治疗、安全。", patterns: ["[Therapy] is an important part of...", "It uses [method] to regulate the body.", "However, it should be performed carefully by..."], keywords: ["acupuncture", "meridians", "practitioners"], useCases: ["中医英语", "口语介绍"] },
  { id: "t05", topic: "Healthy Lifestyle", category: "高考英语", title: "健康生活", paragraph: "A healthy lifestyle is not about doing one big thing perfectly. It is about small habits, such as sleeping earlier, eating regularly and doing exercise. These habits may look simple, but they protect both the body and the mind. For students, health is the basis of better learning.", zhExplanation: "用于健康、习惯、学生生活。", patterns: ["[Topic] is not about..., it is about...", "These habits may look simple, but...", "For students, [A] is the basis of [B]."], keywords: ["lifestyle", "regularly", "basis"], useCases: ["高考英语", "作文"] },
  { id: "t06", topic: "Technology", category: "IELTS", title: "科技影响", paragraph: "Technology makes learning more convenient because students can find information quickly. However, it can also reduce concentration if students spend too much time on short videos. In my view, technology itself is not the problem. The real issue is whether students can use it with clear goals.", zhExplanation: "用于科技利弊、网络、学习。", patterns: ["Technology makes [activity] more convenient because...", "However, it can also...", "The real issue is whether..."], keywords: ["convenient", "concentration", "clear goals"], useCases: ["IELTS", "作文"] },
  { id: "t07", topic: "Family Education", category: "高考英语", title: "家庭教育", paragraph: "Parents usually push their children because they want them to have a better future. This intention is understandable, but too much pressure may damage the parent-child relationship. Instead of only asking for high marks, parents should listen to their children. Support is often more useful than criticism.", zhExplanation: "用于父母压力、亲子关系。", patterns: ["This intention is understandable, but...", "Instead of only..., parents should...", "[Support] is often more useful than [criticism]."], keywords: ["intention", "relationship", "support"], useCases: ["高考英语", "speaking"] },
  { id: "t08", topic: "City Life", category: "IELTS", title: "城市生活", paragraph: "City life gives young people more opportunities, such as better schools, hospitals and jobs. At the same time, it can be noisy, expensive and stressful. I think the best city is not the biggest one, but the one that gives people a balanced life. Public spaces and affordable housing are therefore very important.", zhExplanation: "用于城市、生活质量、政策。", patterns: ["[Place] gives people more opportunities, such as...", "At the same time, it can be...", "The best [place] is not..., but..."], keywords: ["opportunities", "balanced", "affordable"], useCases: ["IELTS", "作文"] },
  { id: "t09", topic: "Learning English", category: "大学英语", title: "学习英文", paragraph: "Learning English should not begin with difficult grammar rules. It should begin with useful words and repeatable sentences. When I can say one simple idea clearly, I can slowly make it more advanced. This is a more realistic way to build confidence.", zhExplanation: "用于英语学习方法、自信。", patterns: ["Learning [skill] should not begin with...", "It should begin with...", "When I can..., I can slowly..."], keywords: ["repeatable", "advanced", "confidence"], useCases: ["大学英语", "speaking"] },
  { id: "t10", topic: "Medical Career", category: "中医英语", title: "医学职业", paragraph: "A good doctor needs both knowledge and communication skills. Medical knowledge helps the doctor make safer decisions. Communication helps patients understand their condition and treatment. Therefore, English can also be useful for future medical study and international exchange.", zhExplanation: "用于医学职业、沟通、英语价值。", patterns: ["A good [role] needs both [A] and [B].", "[A] helps..., [B] helps...", "Therefore, English can also be useful for..."], keywords: ["communication", "condition", "international exchange"], useCases: ["中医英语", "大学英语"] },
  { id: "t11", topic: "Exam Preparation", category: "IELTS", title: "备考方法", paragraph: "Preparing for an exam is not just about spending long hours at a desk. Students need to know their weak points and practise them deliberately. For example, if writing is weak, copying useful sentence patterns is more helpful than reading random articles. A clear strategy saves time and reduces anxiety.", zhExplanation: "用于备考、弱项、策略。", patterns: ["Preparing for [exam] is not just about...", "Students need to know their weak points and...", "A clear strategy saves time and..."], keywords: ["deliberately", "random", "strategy"], useCases: ["IELTS", "大学英语"] },
  { id: "t12", topic: "Sleep", category: "高考英语", title: "睡眠", paragraph: "Sleep is often ignored by students, but it directly affects memory and mood. If teenagers sleep too late every night, they may find it harder to focus in class. Schools should avoid giving too much homework, and students should stop using phones before bed. Better sleep can lead to better learning.", zhExplanation: "用于睡眠、健康、学习效率。", patterns: ["[Topic] is often ignored, but it directly affects...", "If teenagers..., they may find it harder to...", "Better [A] can lead to better [B]."], keywords: ["ignored", "memory", "focus"], useCases: ["高考英语", "speaking"] }
];

const patternItems = [
  { category: "大学英语", title: "表达原因", en: "This is mainly because...", zh: "这主要是因为..." },
  { category: "大学英语", title: "表达结果", en: "As a result, students may...", zh: "结果，学生可能会..." },
  { category: "高考英语", title: "给建议", en: "It is better for students to...", zh: "学生最好..." },
  { category: "高考英语", title: "个人例子", en: "Like me, many teenagers...", zh: "像我一样，很多青少年..." },
  { category: "中医英语", title: "介绍概念", en: "In traditional Chinese medicine, ... refers to...", zh: "在中医里，... 指的是..." },
  { category: "中医英语", title: "说明治疗", en: "This treatment aims to...", zh: "这种治疗旨在..." },
  { category: "IELTS", title: "平衡观点", en: "A more balanced view is that...", zh: "更平衡的看法是..." },
  { category: "IELTS", title: "强调重点", en: "The key issue is not..., but...", zh: "关键问题不是...，而是..." }
];

const quizItems = [
  { id: "q1", type: "单词测试", category: "高考英语", prompt: "pressure 的中文意思是？", options: ["压力", "机会", "习惯", "环境"], answer: "压力", explanation: "pressure = 压力，常用于 exam pressure / family pressure。" },
  { id: "q2", type: "中英配对", category: "中医英语", prompt: "“经络” 对应哪个英文？", options: ["pulse", "meridian", "fatigue", "policy"], answer: "meridian", explanation: "meridian = 经络；pulse = 脉象。" },
  { id: "q3", type: "句子补全", category: "IELTS", prompt: "The real issue is ___ students can use technology with clear goals.", options: ["whether", "although", "because", "unless"], answer: "whether", explanation: "whether 引导“是否”的宾语从句。" },
  { id: "q4", type: "单词测试", category: "大学英语", prompt: "deadline 最准确的意思是？", options: ["截止日期", "研讨课", "证据", "讲座"], answer: "截止日期", explanation: "deadline = 截止日期，大学作业常用词。" },
  { id: "q5", type: "中英配对", category: "中医英语", prompt: "“失眠” 对应哪个英文？", options: ["insomnia", "deficiency", "coherent", "urban"], answer: "insomnia", explanation: "insomnia = 失眠。" }
];

const insertSnippets = {
  writing: "Hong Kong has an ossified education system that focuses too much on academic results. Schools and parents force students to perform well. As a result, teenagers have little time to sleep or play. Like me, I often have sleepless nights because I have to go to school five or even six days a week.",
  balanced: "Some people believe that exam results are necessary because they show how hard students work. However, others argue that too much pressure can harm teenagers' sleep and mental health. In my view, schools should keep exams but reduce unnecessary homework. This would help students learn better without losing balance."
};

const defaultState = {
  knownWords: {},
  daily: {},
  quiz: { correct: 0, attempts: 0 },
  writingDraft: "",
  writingCorrection: "",
  speakingNotes: "",
  maskedTemplates: false
};

const state = loadState();

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(stateKey) || "{}") };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(stateKey, JSON.stringify(state));
  updateStats();
}

function selectBritishVoice() {
  if (!availableVoices.length) availableVoices = speechSynthesis.getVoices();
  return (
    availableVoices.find((voice) => voice.lang === "en-GB" && /Google|Microsoft|Daniel|Serena|UK/i.test(voice.name)) ||
    availableVoices.find((voice) => voice.lang === "en-GB") ||
    availableVoices.find((voice) => /^en/.test(voice.lang)) ||
    null
  );
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    document.getElementById("voiceStatus").textContent = "浏览器不支持发音";
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = selectBritishVoice();
  if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang || "en-GB";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

function updateVoiceStatus() {
  if (!("speechSynthesis" in window)) {
    document.getElementById("voiceStatus").textContent = "浏览器不支持发音";
    return;
  }
  availableVoices = speechSynthesis.getVoices();
  const voice = selectBritishVoice();
  document.getElementById("voiceStatus").textContent = voice ? `British voice: ${voice.name}` : "未找到英式语音，使用默认英文";
}

function filteredItems(items) {
  return selectedCategory === "all" ? items : items.filter((item) => item.category === selectedCategory);
}

function renderVocabulary() {
  const query = document.getElementById("wordSearch").value.trim().toLowerCase();
  const words = filteredItems(vocabularyItems).filter((item) => {
    const text = `${item.word} ${item.zh} ${item.category} ${item.tags.join(" ")}`.toLowerCase();
    return text.includes(query);
  });
  document.getElementById("wordGrid").innerHTML = words
    .map((item) => {
      const known = Boolean(state.knownWords[item.id]);
      return `
        <article class="word-card" data-word-id="${item.id}">
          <div class="word-head">
            <div class="word-title">
              <h4>${item.word}</h4>
              <span class="phonetic">${item.phonetic}</span>
            </div>
            <button class="sound-button" data-speak="${escapeAttr(item.word)}">▶</button>
          </div>
          <span class="tag">${item.category}</span>
          <p class="meaning"><strong>${item.zh}</strong></p>
          <p>${item.example}</p>
          <p class="zh-block">${item.exampleZh}</p>
          <div class="card-actions">
            <button class="plain-button" data-toggle-meaning="${item.id}">显示/隐藏中文</button>
            <button class="plain-button" data-known="${item.id}">${known ? "已认识" : "标记认识"}</button>
            <button class="sound-button" data-speak="${escapeAttr(item.example)}">朗读例句</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderPatterns() {
  document.getElementById("patternGrid").innerHTML = filteredItems(patternItems)
    .map(
      (item) => `
        <article class="pattern-card">
          <span class="tag">${item.category}</span>
          <h4>${item.title}</h4>
          <p class="english-block">${item.en}</p>
          <p class="zh-block">${item.zh}</p>
          <button class="sound-button wide" data-speak="${escapeAttr(item.en)}">朗读句式</button>
        </article>
      `
    )
    .join("");
}

function renderTemplates() {
  const holder = document.getElementById("templateGrid");
  holder.classList.toggle("templates-masked", state.maskedTemplates);
  holder.innerHTML = filteredItems(templateItems)
    .map(
      (item) => `
        <article class="template-card">
          <div class="template-meta">
            <span class="tag">${item.category}</span>
            ${item.useCases.map((use) => `<span class="tag">${use}</span>`).join("")}
          </div>
          <h4>${item.title} · ${item.topic}</h4>
          <p class="english-block">${item.paragraph}</p>
          <p class="zh-block template-zh">${item.zhExplanation}</p>
          <ul class="pattern-list">${item.patterns.map((pattern) => `<li>${pattern}</li>`).join("")}</ul>
          <p><strong>Keywords:</strong> ${item.keywords.join(", ")}</p>
          <button class="sound-button wide" data-speak="${escapeAttr(item.paragraph)}">朗读模板</button>
        </article>
      `
    )
    .join("");
}

function renderQuiz() {
  const pool = filteredItems(quizItems);
  const item = pool[currentQuizIndex % pool.length] || quizItems[0];
  document.getElementById("quizCard").innerHTML = `
    <span class="tag">${item.category} · ${item.type}</span>
    <h4>${item.prompt}</h4>
    <div class="quiz-options">
      ${item.options.map((option) => `<button class="quiz-option" data-answer="${escapeAttr(option)}">${option}</button>`).join("")}
    </div>
    <p class="quiz-result" id="quizResult"></p>
  `;
}

function checkQuizAnswer(selected) {
  const pool = filteredItems(quizItems);
  const item = pool[currentQuizIndex % pool.length] || quizItems[0];
  const correct = selected === item.answer;
  state.quiz.attempts += 1;
  if (correct) state.quiz.correct += 1;
  saveState();
  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.disabled = true;
    button.classList.toggle("correct", button.dataset.answer === item.answer);
    button.classList.toggle("wrong", button.dataset.answer === selected && !correct);
  });
  document.getElementById("quizResult").textContent = `${correct ? "正确" : "不对"}：${item.explanation}`;
}

function switchPanel(panelId) {
  document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.panel === panelId));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.toggle("active", panel.id === panelId));
}

function updateStats() {
  const known = Object.values(state.knownWords).filter(Boolean).length;
  document.getElementById("wordTotal").textContent = String(vocabularyItems.length);
  document.getElementById("templateTotal").textContent = String(templateItems.length);
  document.getElementById("knownTotal").textContent = String(known);
  document.getElementById("knownText").textContent = `${known} / ${vocabularyItems.length} words marked known.`;
  document.getElementById("knownMeter").style.width = `${Math.round((known / vocabularyItems.length) * 100)}%`;
  document.getElementById("quizScore").textContent = `${state.quiz.correct} correct / ${state.quiz.attempts} attempts`;
  document.getElementById("draftPreview").textContent = state.writingDraft || "还没有保存草稿。";
}

function hydrateFields() {
  for (const id of ["writingDraft", "writingCorrection", "speakingNotes"]) {
    const field = document.getElementById(id);
    field.value = state[id] || "";
    field.addEventListener("input", () => {
      state[id] = field.value;
      saveState();
    });
  }
  document.querySelectorAll("[data-daily]").forEach((input) => {
    input.checked = Boolean(state.daily[input.dataset.daily]);
    input.addEventListener("change", () => {
      state.daily[input.dataset.daily] = input.checked;
      saveState();
    });
  });
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach((button) => button.addEventListener("click", () => switchPanel(button.dataset.panel)));
  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.filter;
      document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
      renderVocabulary();
      renderPatterns();
      renderTemplates();
      currentQuizIndex = 0;
      renderQuiz();
    });
  });
  document.addEventListener("click", (event) => {
    const speakButton = event.target.closest("[data-speak]");
    if (speakButton) speakText(speakButton.dataset.speak);
    const meaningButton = event.target.closest("[data-toggle-meaning]");
    if (meaningButton) document.querySelector(`[data-word-id="${meaningButton.dataset.toggleMeaning}"]`)?.classList.toggle("show-meaning");
    const knownButton = event.target.closest("[data-known]");
    if (knownButton) {
      const id = knownButton.dataset.known;
      state.knownWords[id] = !state.knownWords[id];
      saveState();
      renderVocabulary();
    }
    const quizOption = event.target.closest(".quiz-option");
    if (quizOption && !quizOption.disabled) checkQuizAnswer(quizOption.dataset.answer);
    const insertButton = event.target.closest("[data-insert]");
    if (insertButton) {
      const draft = document.getElementById("writingDraft");
      draft.value = draft.value ? `${draft.value}\n\n${insertSnippets[insertButton.dataset.insert]}` : insertSnippets[insertButton.dataset.insert];
      state.writingDraft = draft.value;
      saveState();
      draft.focus();
    }
  });
  document.getElementById("wordSearch").addEventListener("input", renderVocabulary);
  document.getElementById("randomWord").addEventListener("click", () => {
    const item = filteredItems(vocabularyItems)[Math.floor(Math.random() * filteredItems(vocabularyItems).length)] || vocabularyItems[0];
    document.getElementById("wordSearch").value = item.word;
    renderVocabulary();
  });
  document.getElementById("toggleTemplateMask").addEventListener("click", () => {
    state.maskedTemplates = !state.maskedTemplates;
    saveState();
    renderTemplates();
  });
  document.getElementById("revealReading").addEventListener("click", () => {
    const answers = document.getElementById("readingAnswers");
    answers.hidden = !answers.hidden;
    document.getElementById("revealReading").textContent = answers.hidden ? "显示答案" : "隐藏答案";
  });
  document.getElementById("saveWriting").addEventListener("click", () => {
    state.writingDraft = document.getElementById("writingDraft").value;
    state.writingCorrection = document.getElementById("writingCorrection").value;
    saveState();
  });
  document.getElementById("nextQuiz").addEventListener("click", () => {
    currentQuizIndex += 1;
    renderQuiz();
  });
  document.getElementById("resetDaily").addEventListener("click", () => {
    state.daily = {};
    saveState();
    document.querySelectorAll("[data-daily]").forEach((input) => {
      input.checked = false;
    });
  });
  document.getElementById("clearData").addEventListener("click", () => {
    localStorage.removeItem(stateKey);
    Object.assign(state, structuredClone(defaultState));
    hydrateFields();
    renderVocabulary();
    updateStats();
  });
  document.getElementById("startTimer").addEventListener("click", startTimer);
}

function startTimer() {
  const button = document.getElementById("startTimer");
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    button.textContent = "开始";
    return;
  }
  button.textContent = "暂停";
  timerId = setInterval(() => {
    timerSeconds -= 1;
    if (timerSeconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      timerSeconds = 120;
      button.textContent = "开始";
    }
    updateTimer();
  }, 1000);
}

function updateTimer() {
  const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const seconds = String(timerSeconds % 60).padStart(2, "0");
  document.getElementById("timerText").textContent = `${minutes}:${seconds}`;
}

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

if ("speechSynthesis" in window) {
  speechSynthesis.onvoiceschanged = updateVoiceStatus;
}

updateVoiceStatus();
renderVocabulary();
renderPatterns();
renderTemplates();
renderQuiz();
hydrateFields();
bindEvents();
updateTimer();
updateStats();
