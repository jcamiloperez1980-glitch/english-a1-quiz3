// Approaches and Methods in Language Teaching I — UNIMINUTO
// Unit 2 practice: Methodological Approaches (Structural, Notional-Functional, Content-Based)
// 20 items. Some are multi-select (multi: true).
//   - `correct` is always an array of correct option indices.
//   - For single-answer items, the array has length 1.

module.exports = [
  {
    id: 1,
    skill: "Grammar-Translation Method",
    multi: false,
    text:
"CASE 1 — Teacher Rodrigo opens his English class by writing the rule for the Past Simple on the board in Spanish. He gives four model sentences with translations, then asks students to complete 10 fill-in-the-blank exercises in silence. After correcting whole-class, he distributes a paragraph for students to translate from Spanish into English. No speaking activity takes place. The class ends when he assigns a homework translation.\n\nBased on Case 1, which methodological approach is Teacher Rodrigo applying?",
    options: [
      "The Audiolingual Method, because students practise oral pattern drills",
      "The Grammar-Translation Method, because the lesson prioritises explicit grammar rules, translation, and written accuracy",
      "The Communicative Approach, because students interact in meaningful tasks",
      "Content-Based Instruction, because the lesson integrates a content subject with language"
    ],
    correct: [1],
    explanation:
"GTM is characterised by explicit grammar rules explained in L1, translation as the primary practice mode, and a focus on written accuracy over spoken communication. Rodrigo's lesson matches all these features (Richards & Rodgers, 2014)."
  },
  {
    id: 2,
    skill: "Audiolingual Method",
    multi: true,
    text:
"Which of the following statements are TRUE about the Audiolingual Method (ALM)? (Select ALL correct answers)",
    options: [
      "Grammar is presented through explicit rule explanation before practice",
      "Language learning is viewed as habit formation through stimulus-response repetition",
      "The L1 is avoided; all classroom interaction happens in the target language",
      "Meaning and communicative purpose are the primary goals of each lesson"
    ],
    correct: [1, 2],
    explanation:
"The ALM draws on behaviourist psychology: learning = habit formation through drills (B). The L1 is strictly avoided to prevent interference (C). Grammar is taught implicitly through pattern practice — never explained explicitly (A is FALSE). Meaning is secondary to structural accuracy (D is FALSE)."
  },
  {
    id: 3,
    skill: "Audiolingual Method — behaviourism",
    multi: false,
    text:
"CASE 2 — A student teacher, Valentina, observes a lesson where the teacher plays an audio recording twice without comment, then leads choral repetition line by line. She then conducts substitution drills ('I walked to school' → cue 'she' → 'She walked to school'). Any mispronunciation is corrected immediately by modelling, without explanation. No translation is used.\n\nWhich of the following BEST explains why immediate error correction through modelling — rather than explanation — is a core feature of this approach?",
    options: [
      "Because learners at this level are not yet able to understand grammar explanations",
      "Because the ALM is grounded in behaviourism: reinforcing correct patterns and preventing incorrect habits from forming is more important than metalinguistic awareness",
      "Because the teacher does not know how to explain the grammar rule",
      "Because communicative approaches discourage any form of error correction"
    ],
    correct: [1],
    explanation:
"The ALM's behaviourist foundation (Skinner) treats language learning as habit formation. Immediate correction-through-modelling prevents wrong habits from being reinforced, without engaging the learner's analytical mind — which the method considers counterproductive."
  },
  {
    id: 4,
    skill: "Structural Syllabus",
    multi: true,
    text:
"Which of the following are defining features of a STRUCTURAL SYLLABUS? (Select ALL correct answers)",
    options: [
      "Content is organised around grammatical forms in a sequence from simple to complex",
      "Lessons are built around the communicative functions learners need (e.g. apologising, requesting)",
      "The teacher selects structures based on perceived difficulty and pedagogical sequencing",
      "The learner's authentic communicative needs drive the selection of content"
    ],
    correct: [0, 2],
    explanation:
"A structural syllabus organises content around grammatical forms sequenced by complexity (A) and teacher/pedagogical judgement (C). B and D describe a notional-functional or communicative syllabus, where learner needs and communicative functions are the organising principle."
  },
  {
    id: 5,
    skill: "Kumaravadivelu — transmission model",
    multi: false,
    text:
"Kumaravadivelu (2003) argues that structural approaches reflect a 'transmission' model of teaching. Which of the following BEST captures what he means?",
    options: [
      "Knowledge is seen as a fixed body of facts that the teacher transfers to a passive learner, with little room for learner agency or negotiation of meaning",
      "Teachers transmit audio recordings of native speakers to students for imitation",
      "Students transmit their grammatical knowledge through written translation exercises",
      "The method was transmitted from European language teaching traditions to Latin America without adaptation"
    ],
    correct: [0],
    explanation:
"Kumaravadivelu's 'transmission' model critiques structural approaches for positioning the teacher as the sole knowledge-holder who delivers pre-packaged content to passive learners. This contrasts with a constructivist view where meaning is co-constructed."
  },
  {
    id: 6,
    skill: "Critique of GTM",
    multi: false,
    text:
"CASE 3 — A teacher trainer asks a student teacher to evaluate a GTM lesson. The student says: 'The lesson was effective because students can now translate accurately and they know the grammar rule.' The trainer pushes back: 'But can they use the language to DO anything?'\n\nThe trainer's question reflects a key criticism of the Grammar-Translation Method. What is that criticism?",
    options: [
      "GTM lessons are too short to produce meaningful learning",
      "GTM focuses on linguistic form and metalinguistic knowledge while neglecting the learner's ability to use language for real communicative purposes",
      "GTM should only be used with advanced learners who already have communicative competence",
      "GTM is ineffective because it relies too heavily on digital tools and technology"
    ],
    correct: [1],
    explanation:
"The central criticism of GTM is its failure to develop communicative competence (Hymes, 1972). Accurate translation and grammar knowledge do not equate to the ability to communicate — the trainer's question highlights precisely this gap."
  },
  {
    id: 7,
    skill: "Post-method perspective",
    multi: true,
    text:
"A new teacher asks: 'Are there contexts where a structural approach might still be useful today?' Which responses are DEFENSIBLE from a post-method perspective? (Select ALL correct answers)",
    options: [
      "Pattern drills can help learners automatise high-frequency structures, which frees cognitive resources for communication",
      "A structural approach is always superior to communicative approaches in any context",
      "Explicit grammar explanation (a GTM feature) can scaffold comprehension for learners who value analytical understanding",
      "Structural approaches should replace all other methods in Colombian secondary schools"
    ],
    correct: [0, 2],
    explanation:
"Kumaravadivelu's post-method framework encourages principled eclecticism: teachers select techniques based on context, not method loyalty. Drills (A) and explicit explanation (C) have documented value in certain contexts. B and D reflect method dogmatism — the opposite of post-method thinking."
  },
  {
    id: 8,
    skill: "Notional-Functional Approach",
    multi: false,
    text:
"CASE 4 — Teacher Clara plans a unit for her B1 adults. Instead of organising lessons around grammar points, she organises them around what students need to DO with language: 'Making polite requests at work', 'Apologising in formal and informal contexts', 'Giving and receiving advice'. She selects grammar, vocabulary, and activities based on what learners need to communicate these functions.\n\nClara's planning BEST exemplifies which methodological framework?",
    options: [
      "The Grammar-Translation Method, because she focuses on accuracy and form",
      "The Audiolingual Method, because she uses repetition to build communicative habits",
      "The Notional-Functional Approach, because lessons are organised around communicative functions and the social purposes of language",
      "Content-Based Instruction, because she integrates subject matter content into the language lesson"
    ],
    correct: [2],
    explanation:
"The Notional-Functional Approach (Wilkins, 1976; Council of Europe) organises syllabi around communicative functions (apologising, requesting) and notions (time, quantity, frequency) rather than grammatical structures. Clara's planning is a textbook example."
  },
  {
    id: 9,
    skill: "Wilkins — notions vs functions",
    multi: true,
    text:
"Wilkins (1976) distinguished between 'notions' and 'functions' as organising principles for language syllabi. Which of the following CORRECTLY illustrate this distinction? (Select ALL correct answers)",
    options: [
      "'Duration' is a notion; 'Asking how long something takes' is a function based on that notion",
      "'Apologising' is a function; it can involve various grammatical forms (I'm sorry / I do apologise / I didn't mean to…)",
      "'The Present Perfect Tense' is a notion in Wilkins' framework",
      "'Giving advice' is a function that a learner needs to perform in social interaction"
    ],
    correct: [0, 1, 3],
    explanation:
"Notions are conceptual/semantic categories (duration, quantity, frequency — A). Functions are the social acts performed with language (apologising, advising — B, D). The Present Perfect is a grammatical structure, not a notion in Wilkins' sense (C is FALSE)."
  },
  {
    id: 10,
    skill: "NFA in practice",
    multi: false,
    text:
"CASE 5 — Diego designs a lesson around the function 'Making recommendations'. He teaches 'You should…', 'I'd suggest…', 'Have you considered…?' Students then recommend a weekend activity to a classmate who feels stressed. They negotiate, respond, and ask follow-up questions. Diego notices students are producing language beyond the target structures.\n\nWhat does Diego's observation reveal about the Notional-Functional Approach in practice?",
    options: [
      "That the approach fails because students are not using the target structures accurately",
      "That organising lessons around communicative functions creates conditions for meaningful interaction that can exceed the planned linguistic targets — moving closer to authentic communication",
      "That students should be corrected whenever they use structures not explicitly taught in the lesson",
      "That the lesson should be redesigned using a structural syllabus to maintain control over language output"
    ],
    correct: [1],
    explanation:
"A strength of the NFA is that function-based tasks generate authentic interaction. When meaning matters (recommending something to reduce stress), students draw on their full linguistic repertoire — a constructivist principle: the task elicits more than the form being taught."
  },
  {
    id: 11,
    skill: "Historical shift to NFA",
    multi: false,
    text:
"Which of the following BEST describes the main shift the Notional-Functional Approach represented in language teaching history?",
    options: [
      "A shift from teaching language as a set of grammatical structures to teaching language as a tool for achieving social purposes",
      "A shift from oral communication to written communication as the primary mode of language use",
      "A shift from using authentic materials to using specially designed textbooks with controlled vocabulary",
      "A shift from communicative goals to accuracy goals in the language classroom"
    ],
    correct: [0],
    explanation:
"The NFA marked a fundamental paradigm shift: from 'What grammatical forms does the learner need?' to 'What does the learner need to DO with language in social contexts?' (Wilkins, 1976). This laid the groundwork for the Communicative Approach."
  },
  {
    id: 12,
    skill: "Comparing syllabi",
    multi: true,
    text:
"CASE 6 — A curriculum designer compares two syllabi. Syllabus A: Simple Present → Simple Past → Present Perfect → Modal Verbs. Syllabus B: Introducing yourself → Talking about your job → Describing past experiences → Expressing ability and possibility.\n\nWhich of the following statements are CORRECT? (Select ALL correct answers)",
    options: [
      "Syllabus A is a structural syllabus organised around grammatical progression",
      "Syllabus B is a notional-functional syllabus organised around communicative purposes",
      "Syllabus B would likely generate more authentic language use because learners are working towards communicative goals",
      "Syllabus A is always more effective because explicit grammar sequencing guarantees transfer to communication"
    ],
    correct: [0, 1, 2],
    explanation:
"Syllabus A = structural (grammar-sequenced). Syllabus B = notional-functional (function-sequenced). Research supports B's capacity to generate authentic language use in adults (C). D is false: research consistently shows grammatical sequencing alone does not guarantee communicative competence."
  },
  {
    id: 13,
    skill: "Limitations of NFA",
    multi: false,
    text:
"A limitation of the Notional-Functional Approach — noted by Richards & Rodgers (2014) — is that it does not provide a fully developed theory of language acquisition. What does this mean for classroom practice?",
    options: [
      "Teachers who use the NFA have no way of knowing if their students are learning anything",
      "The NFA tells teachers WHAT to teach (functions and notions) but offers limited guidance on HOW learners acquire language, meaning teachers must draw on other theoretical resources to make process decisions",
      "The NFA is completely ineffective and should not be used in contemporary language teaching",
      "Students taught through the NFA cannot develop accuracy in grammatical forms"
    ],
    correct: [1],
    explanation:
"The NFA is primarily a syllabus design framework — it specifies content but not acquisition processes. Teachers must supplement it with knowledge of language acquisition theory (e.g. Krashen, Vygotsky) to make informed decisions about sequencing, correction, and scaffolding."
  },
  {
    id: 14,
    skill: "CLIL",
    multi: false,
    text:
"CASE 7 — A secondary school in Medellín is piloting an English programme in which the science teacher delivers her Biology unit on ecosystems entirely in English. Students learn the scientific content (food chains, biodiversity, ecological balance) while developing academic English vocabulary, reading strategies, and oral skills. The English teacher co-plans with the Biology teacher.\n\nThe programme BEST exemplifies which approach?",
    options: [
      "The Grammar-Translation Method, because students are learning biological terminology",
      "The Audiolingual Method, because the science teacher uses repetition to reinforce key vocabulary",
      "Content and Language Integrated Learning (CLIL), because content from another subject area is taught through and alongside the target language",
      "The Notional-Functional Approach, because lessons are organised around the function of 'describing natural processes'"
    ],
    correct: [2],
    explanation:
"CLIL is defined by the dual focus on content objectives (learning Biology) and language objectives (developing academic English) simultaneously. Co-planning between subject and language teachers is a hallmark feature of strong CLIL implementation (Coyle et al., 2010)."
  },
  {
    id: 15,
    skill: "CBI — content + language objectives",
    multi: true,
    text:
"In a Content-Based Instruction (CBI) lesson, BOTH content and language objectives must be present. Which of the following pairs represent a VALID content + language objective for a CLIL lesson on human rights? (Select ALL correct answers)",
    options: [
      "Content: Students will identify the three generations of human rights. Language: Students will use relative clauses to describe each generation.",
      "Content: Students will conjugate verbs correctly in the Present Simple. Language: Students will read a text about rights.",
      "Content: Students will evaluate a real-world human rights case and take a position. Language: Students will use language for expressing opinion and concession (I argue that… / Although… / On the other hand…).",
      "Content: Students will translate a UN declaration from English to Spanish."
    ],
    correct: [0, 2],
    explanation:
"CBI requires genuine integration: content knowledge and language skill are developed simultaneously. A pairs conceptual understanding (generations of rights) with a language structure (relative clauses). C pairs higher-order thinking (evaluating, taking a position) with academic discourse functions. B and D separate content from language or reduce the lesson to grammar/translation."
  },
  {
    id: 16,
    skill: "CBI in practice",
    multi: false,
    text:
"CASE 8 — Teacher Manuel teaches B2 students using a documentary about climate change. Students watch 8 minutes of the video, then discuss in groups: 'What are the three main causes of climate change mentioned? Which do you think is most urgent, and why?' Students then write a one-paragraph argument citing evidence from the video. Manuel focuses his feedback on academic vocabulary and the structure of argument.\n\nWhich of the following BEST describes Manuel's lesson from a CBI/CLIL perspective?",
    options: [
      "It is a weak CBI lesson because students are not learning a formal academic subject alongside the language",
      "It is an effective content-based lesson because students develop both content knowledge (climate change causes) and language skills (academic vocabulary, argumentation) through authentic engagement with meaningful content",
      "It is a purely communicative lesson with no content-based features",
      "It is a structural lesson because Manuel focuses on vocabulary and argument structure"
    ],
    correct: [1],
    explanation:
"CBI does not require a formal school subject — any meaningful content can anchor the lesson. Manuel's lesson integrates content knowledge (causes of climate change) with language development (academic vocabulary, written argumentation), and uses authentic materials — all hallmarks of CBI."
  },
  {
    id: 17,
    skill: "CBI family — shared principle",
    multi: false,
    text:
"Sheltered instruction, immersion, and CLIL are all models within the content-based approaches family. What do they share as a fundamental principle?",
    options: [
      "They all require the teacher to be a native speaker of the target language",
      "They all prioritise grammar accuracy as the primary learning outcome",
      "They all organise language learning around meaningful, content-driven engagement rather than isolated form practice",
      "They all require students to study abroad in the target language country"
    ],
    correct: [2],
    explanation:
"All CBI models share the conviction that language is best acquired when learners are cognitively engaged with meaningful content — not when they study language as an abstract system. This aligns with Krashen's comprehension hypothesis and Vygotsky's sociocultural learning theory."
  },
  {
    id: 18,
    skill: "Critiquing a 'CBI' lesson",
    multi: true,
    text:
"CASE 9 — Lucia designs what she calls a 'content-based lesson' on nutrition: (1) students read a text about vitamins and minerals, (2) they answer comprehension questions, (3) they do a grammar exercise on countable/uncountable nouns from the text, (4) they translate the final paragraph into Spanish.\n\nWhich of the following are VALID criticisms of Lucia's lesson from a CBI perspective? (Select ALL correct answers)",
    options: [
      "The lesson lacks an integrated language objective that is genuinely developed through engagement with content",
      "Using a text about nutrition makes the lesson too difficult for EFL learners",
      "The lesson treats the content text as a vehicle for grammar practice and translation rather than as a source of meaningful knowledge construction",
      "There is no task that requires students to DO something with the content — to analyse, evaluate, create, or apply it"
    ],
    correct: [0, 2, 3],
    explanation:
"True CBI requires learners to construct knowledge through content and develop language through that process. Lucia's lesson uses content as a pretext for grammar exercises and translation (C) — neither a genuine content objective nor an integrated language objective is developed (A). No higher-order task requires students to use content meaningfully (D). B is false — authentic content is a strength of CBI, not a barrier."
  },
  {
    id: 19,
    skill: "Post-method decision-making",
    multi: false,
    text:
"From a post-method perspective (Kumaravadivelu, 2003), what should guide a teacher's decision to use a content-based approach rather than a notional-functional or structural one?",
    options: [
      "The content-based approach is always the best choice because it is the most recent methodological development",
      "The teacher's personal preference for the subject matter being taught",
      "A principled analysis of the specific learners, their communicative needs, the institutional context, and available resources — not method loyalty",
      "The Ministry of Education's mandatory requirement to use one specific approach in all public schools"
    ],
    correct: [2],
    explanation:
"Post-method pedagogy rejects the idea that any single method is universally superior. The teacher as a 'reflective practitioner' analyses context, learner needs, and resources to make principled decisions. This is the core of Kumaravadivelu's macrostrategic framework."
  },
  {
    id: 20,
    skill: "Constructivist lesson design",
    multi: true,
    text:
"CASE 10 — Imagine you are designing an integrated Unit 2 lesson for future language teachers. You want them to (a) understand the differences between structural, notional-functional, and content-based approaches; (b) apply that understanding to a real teaching context; (c) reflect critically on which combination would work for their own future students in Colombia.\n\nWhich of the following design choices would BEST align this lesson with constructivist and social learning principles? (Select ALL correct answers)",
    options: [
      "Asking students to memorise a table of the three approaches and reproduce it in a written test",
      "Having students analyse real lesson plans from each approach, then collaboratively design a mini-lesson for a specific Colombian context they know",
      "Providing a 50-minute lecture where the teacher explains all three approaches using PowerPoint slides",
      "Asking students to debate: 'Which approach would you choose for a CLIL programme in a rural Colombian secondary school — and why?' — requiring them to use evidence from course readings to justify their position"
    ],
    correct: [1, 3],
    explanation:
"Constructivism (Vygotsky, Jonassen) positions learning as active knowledge construction through socially mediated, contextually grounded tasks. B requires analysis + collaborative design + contextualisation. D requires argumentation grounded in evidence — higher-order thinking. A (memorisation) and C (passive reception) reflect transmission models, not constructivist principles."
  }
];
