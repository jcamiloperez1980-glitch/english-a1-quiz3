// Final Exam Practice — English A1. 20 multiple-choice items.
// Covers the same skills as the final exam but uses different scenarios.
// Skills: greetings/farewells, introductions, present/past/future grammar,
//         modal verbs, question formation, embedded questions, polite interaction,
//         describing problems, listening comprehension.

module.exports = [
  {
    id: 1,
    skill: "Grammar — present simple (3rd person singular)",
    text: "Carlos is writing about his sister's morning routine. He writes:\n• \"My sister drink coffee and eat toast every morning before work.\"\nWhat is the grammatical error in this sentence?",
    options: [
      "\"Drink\" should be \"drinks\" and \"eat\" should be \"eats\" — third person singular requires -s.",
      "\"Every morning\" should be moved to the start of the sentence instead.",
      "\"Before work\" should be replaced with \"before the work\" to use an article.",
      "\"Toast\" needs the indefinite article and should be written as \"a toast.\""
    ],
    correct: 0,
    explanation: "With third person singular subjects (he / she / it), present simple verbs add -s or -es: 'My sister drinks coffee and eats toast.' The other options describe errors that do not actually exist in the sentence."
  },
  {
    id: 2,
    skill: "Social — responding to a greeting",
    text: "You arrive at your office at 9:00 AM. Your colleague looks up and says:\n• Colleague: \"Good morning! Did you have a nice weekend?\"\nWhat is the most natural and appropriate response?",
    options: [
      "\"Good night! I really hope your evening was enjoyable too.\"",
      "\"Goodbye! I'll see you again when we both come back tomorrow.\"",
      "\"Good morning! Yes, it was great, thanks. How about yours?\"",
      "\"Hello evening! I had some rest and now I am ready to start.\""
    ],
    correct: 2,
    explanation: "'Good morning' is the correct greeting for 9 AM, and answering the question ('Yes, it was great') before asking back ('How about yours?') is natural, polite conversation. The other options use wrong greetings for the time of day or are grammatically awkward."
  },
  {
    id: 3,
    skill: "Grammar — past simple affirmative",
    text: "Lisa is telling a friend about her weekend. She says:\n• \"We go to the cinema on Saturday and watch a great film.\"\nWhat is the error in Lisa's sentence?",
    options: [
      "\"On Saturday\" should be moved to the very end of the sentence.",
      "\"Go\" should be \"went\" and \"watch\" should be \"watched.\"",
      "\"We\" should be replaced with \"us\" as the object pronoun here.",
      "\"Great\" must become \"greatly\" because adjectives become adverbs after verbs."
    ],
    correct: 1,
    explanation: "Past time markers like 'on Saturday' require past tense verbs. 'Go' → 'went' (irregular) and 'watch' → 'watched' (regular). The auxiliary 'did' is not used in affirmative past sentences — only the past form of the main verb."
  },
  {
    id: 4,
    skill: "Grammar — future simple (will)",
    text: "Pedro writes about his holiday plans:\n• \"Next summer, I will visits my cousins in Cartagena for two weeks.\"\nWhat is the error in Pedro's sentence?",
    options: [
      "\"Visits\" should be \"visit\" — after will, the verb is always in the base form.",
      "\"Next summer\" must use the article \"the\" and become \"the next summer.\"",
      "\"In Cartagena\" uses the wrong preposition and should be \"at Cartagena.\"",
      "\"Two weeks\" needs a hyphen and must be written as \"two-weeks' time.\""
    ],
    correct: 0,
    explanation: "After modal verbs like 'will,' the main verb stays in its base form: 'I will visit,' not 'I will visits.' The -s ending only appears in third-person present simple ('she visits'), never after a modal auxiliary."
  },
  {
    id: 5,
    skill: "Speaking — introducing yourself",
    text: "You start a new job. Your manager walks over and says:\n• Manager: \"Hi! I'm Diana García. What's your name?\"\nWhich response is the most polite and complete?",
    options: [
      "\"I am here because I work here from today, so hello to you.\"",
      "\"My name? Oh yes, I have one. It is nice to be working here.\"",
      "\"Name is Andrés. I start today from the area of marketing.\"",
      "\"Hi, Diana! I'm Andrés Mora. It's great to meet you — I just started today.\""
    ],
    correct: 3,
    explanation: "Option D gives your full name, uses the manager's name (showing you paid attention), and adds friendly context. It is polite, complete, and natural. The other options are grammatically confused or socially awkward for a first introduction."
  },
  {
    id: 6,
    skill: "Grammar — modal verbs",
    text: "A health and safety officer tells the team:\n• \"All workers must to wear protective glasses in this laboratory area.\"\nWhat is the main grammatical error?",
    options: [
      "\"All workers\" is vague and should be replaced with \"every single worker\" instead.",
      "\"Protective glasses\" should use the singular form \"protective glass\" here.",
      "\"To\" after \"must\" is incorrect — modal verbs are followed directly by the base form.",
      "\"This laboratory area\" is redundant and should simply be \"the area\" instead."
    ],
    correct: 2,
    explanation: "Modal verbs (must, can, should, will, may…) are followed directly by the base form without 'to': 'All workers must wear protective glasses.' Writing 'must to wear' incorrectly adds 'to,' which is a common error with modals."
  },
  {
    id: 7,
    skill: "Social — saying goodbye (formal context)",
    text: "You finish a job interview. The interviewer stands up and says:\n• Interviewer: \"Thank you for coming in today. We'll be in touch.\"\nWhat is the most appropriate farewell?",
    options: [
      "\"Oh okay, and I hope you call me very soon because I really want this job.\"",
      "\"Thank you so much for your time. I look forward to hearing from you.\"",
      "\"Goodbye, and I think the interview went very good and I did well.\"",
      "\"Yes, okay. I go now. Bye. You will call me on the phone later, right?\""
    ],
    correct: 1,
    explanation: "Option B is professional, expresses gratitude, and closes with the standard formal phrase 'I look forward to hearing from you.' Option A is too eager and informal; C uses incorrect grammar ('went very good'); D is abrupt and uses 'I go now' incorrectly."
  },
  {
    id: 8,
    skill: "Speaking — polite correction",
    text: "You order a vegetarian pizza at a restaurant, but the waiter brings a pizza with pepperoni. What is the most appropriate response?",
    options: [
      "\"Excuse me, I ordered a vegetarian pizza, but this one has pepperoni. Could you replace it, please?\"",
      "\"This is completely wrong! I cannot believe you brought the wrong pizza to me!\"",
      "\"I did not want this. Bring me what I asked because this is not it.\"",
      "\"You made a mistake. I need a different pizza right now without any meat on it.\""
    ],
    correct: 0,
    explanation: "Option A is calm and specific — it names what was ordered ('vegetarian pizza'), identifies the problem ('has pepperoni'), and makes a polite request ('Could you replace it, please?'). The other options are aggressive, vague, or lack the politeness expected in this interaction."
  },
  {
    id: 9,
    skill: "Grammar — question formation (direct questions)",
    text: "Ana wants to ask about her friend's mother. She writes:\n• \"Where does lives your mother?\"\nWhat is the grammatical error in this sentence?",
    options: [
      "\"Where\" must be replaced with \"In where\" to correctly express a location in English.",
      "\"Friend's\" is possessive and should be replaced with the preposition \"of\" here.",
      "\"Your mother\" should be moved to immediately after \"where\" in the sentence.",
      "\"Does lives\" is wrong — the correct question form is \"does your mother live.\""
    ],
    correct: 3,
    explanation: "In present simple questions with 'does,' the main verb stays in the base form and the subject comes between 'does' and the verb: 'Where does your mother live?' The form 'does lives' incorrectly adds -s twice — once on 'does' and once on 'lives.'"
  },
  {
    id: 10,
    skill: "Grammar — future with 'be going to'",
    text: "Mark tells his classmate about his evening plans. He says:\n• \"I am go to study English for two hours after dinner tonight.\"\nWhat correction does Mark's sentence need?",
    options: [
      "Replace \"tonight\" with \"this night\" to express future time correctly here.",
      "Change \"English\" to \"the English\" to include the required definite article.",
      "\"Am go\" should be \"am going\" to form the 'be going to' future structure correctly.",
      "Replace \"two hours\" with \"a two-hour period\" to use the correct adjectival phrase."
    ],
    correct: 2,
    explanation: "'Be going to' expresses future plans. The structure is: subject + am/is/are + going + to + base verb. 'Am go' is missing 'going' — the correct form is 'I am going to study English tonight.' Without 'going,' the sentence has no future auxiliary."
  },
  {
    id: 11,
    skill: "Listening — following instructions",
    text: "Your supervisor tells the team:\n• Supervisor: \"Please submit your monthly reports no later than Thursday morning.\"\nWhat should you understand from this instruction?",
    options: [
      "Reports are due sometime during the week, but no specific deadline was given.",
      "You must submit the report before or by Thursday morning at the latest.",
      "You may submit the report at any time on Thursday or the following Friday.",
      "Reports should be completed on Wednesday evening for review on Thursday afternoon."
    ],
    correct: 1,
    explanation: "'No later than Thursday morning' means Thursday morning is the final deadline. You can submit earlier, but not after. 'No later than' sets a firm upper limit — it does not allow extra time on Thursday afternoon or Friday."
  },
  {
    id: 12,
    skill: "Speaking — ordering politely",
    text: "You walk into a café. The barista smiles and asks:\n• Barista: \"Good morning! What can I get for you?\"\nYou want a large coffee with milk and a blueberry muffin. Which response is the clearest and most polite?",
    options: [
      "\"Give me a large coffee with milk and also one of those blueberry muffins quickly.\"",
      "\"I'm not really sure — maybe a coffee and something sweet if you have anything.\"",
      "\"Coffee. Large. With milk. And a muffin. Blueberry one. For me please yes.\"",
      "\"I'd like a large coffee with milk and a blueberry muffin, please.\""
    ],
    correct: 3,
    explanation: "'I'd like…, please' is the standard polite formula for placing an order. Option D is specific, clear, and courteous. Option A uses 'Give me' which sounds like a command; B is too vague; C has no grammatical structure and sounds abrupt."
  },
  {
    id: 13,
    skill: "Social — responding to an apology",
    text: "Before class, your classmate says:\n• Classmate: \"I'm really sorry — I forgot to share my notes with you last week.\"\nWhat is the most natural and friendly response?",
    options: [
      "\"Don't worry about it! I found the information online, so it's all fine.\"",
      "\"You should always remember to share your notes and not forget again next time.\"",
      "\"I was very upset because I really needed those notes to prepare for the exam.\"",
      "\"Apology accepted, but please ensure this situation does not repeat itself again.\""
    ],
    correct: 0,
    explanation: "Option A accepts the apology warmly and naturally ('Don't worry about it!') and adds brief reassurance. Option B sounds like a lecture; C focuses on the negative feeling rather than accepting the apology; D is overly formal and cold for a casual interaction with a classmate."
  },
  {
    id: 14,
    skill: "Grammar — present simple negation (3rd person)",
    text: "Roberto is talking about his friend. He says:\n• \"She don't play tennis on weekends because she prefer to stay home.\"\nWhat are the grammatical errors in this sentence?",
    options: [
      "\"Play\" should be \"plays\" and \"stay\" should be changed to \"staying\" here.",
      "\"On weekends\" is unnecessary and should be completely removed from the sentence.",
      "\"Don't\" should be \"doesn't\" and \"prefer\" should be \"prefers.\"",
      "\"Because\" should be replaced with \"so\" to link the two clauses correctly."
    ],
    correct: 2,
    explanation: "With a third person singular subject (she), the auxiliary is 'doesn't' (not 'don't') and the verb in a positive clause needs -s: 'prefers' (not 'prefer'). Both errors share the same cause: forgetting to apply the third person singular rule."
  },
  {
    id: 15,
    skill: "Speaking — asking for directions (politely)",
    text: "You are inside a large hospital and cannot find the pharmacy. A staff member is standing nearby. What is the most polite way to ask for help?",
    options: [
      "\"Where pharmacy? Tell me directions to go there please right now.\"",
      "\"You work here, so where is the pharmacy and how far away is it?\"",
      "\"Excuse me, could you please tell me where the pharmacy is?\"",
      "\"I need pharmacy location. Can you explain me the route to get there?\""
    ],
    correct: 2,
    explanation: "Option C uses 'Excuse me' to get attention politely and forms an indirect (embedded) question — 'could you tell me where the pharmacy is?' — which is the most courteous register. The others use commands, missing grammar, or unnatural phrasing."
  },
  {
    id: 16,
    skill: "Social — formal self-introduction",
    text: "You attend a university networking event and meet a professor you have never spoken to before. How do you introduce yourself most appropriately?",
    options: [
      "\"Hey! I study here somewhere. You're a professor, right? Cool, what subject?\"",
      "\"Good evening. I'm Laura García, a second-year business student. It's a pleasure to meet you.\"",
      "\"Hello. My name Laura. I study in university for two years from now.\"",
      "\"Hi. I'm just a student here. There are really many of us at this event.\""
    ],
    correct: 1,
    explanation: "Option B uses a formal greeting appropriate for the context, gives a full name with academic context, and closes with 'It's a pleasure to meet you.' It matches the formal register of a university event. The other options are too informal, grammatically incorrect, or give almost no useful information."
  },
  {
    id: 17,
    skill: "Grammar — embedded questions (indirect questions)",
    text: "James wants information at the train station. He says:\n• \"Excuse me, can you tell me where is the ticket office?\"\nWhat is the grammatical error in this sentence?",
    options: [
      "\"Excuse me\" is too informal here and should be removed from the sentence.",
      "\"Ticket office\" uses the wrong number and should be \"tickets office\" in the plural.",
      "\"Where is the ticket office\" should be \"where the ticket office is\" in this structure.",
      "\"Can you tell me\" is incorrect and should be replaced with \"do you tell me\" here."
    ],
    correct: 2,
    explanation: "In embedded (indirect) questions, word order follows statement order, not question order: 'Can you tell me where the ticket office is?' — not 'where is.' The inverted order ('where is') belongs only in direct questions ('Where is the ticket office?'), not inside a larger sentence."
  },
  {
    id: 18,
    skill: "Speaking — describing a problem",
    text: "Your apartment has had no hot water since this morning. You call building maintenance. What is the most effective way to describe the problem?",
    options: [
      "\"Hi, there's been no hot water in my apartment since this morning. I'm in unit 304. Could you send someone to check?\"",
      "\"Something is very wrong here and there is a big problem that I need you to fix right now.\"",
      "\"The water is not working well, I think. It is a problem with something. Please do something here.\"",
      "\"I've been waiting and the hot water is just not coming on at all. This really needs a solution soon.\""
    ],
    correct: 0,
    explanation: "Option A specifies what is wrong (no hot water), when it started (this morning), and where (unit 304), then makes a polite request. Option B is vague and aggressive; C gives almost no useful information; D complains without providing the details maintenance needs to help."
  },
  {
    id: 19,
    skill: "Grammar — past simple negative",
    text: "Tom is talking about his evening. He says:\n• \"I didn't saw the football match last night because I was exhausted.\"\nWhat is the grammatical error?",
    options: [
      "\"Was\" should be \"were\" here because the sentence uses the first person singular.",
      "\"Football match\" should include the definite article: \"the football match.\"",
      "\"Last night\" is incorrect — the proper expression is \"yesterday night\" in English.",
      "\"Saw\" should be \"see\" — after \"didn't\" the main verb must be in the base form."
    ],
    correct: 3,
    explanation: "'Didn't' already carries the past tense, so the main verb returns to its base form: 'I didn't see,' not 'I didn't saw.' This rule applies consistently in negatives: 'didn't see,' 'didn't go,' 'didn't eat' — never a past form after 'did/didn't.'"
  },
  {
    id: 20,
    skill: "Social — greeting by time of day",
    text: "It is 7:30 PM. You arrive at a friend's house for a dinner party. Your friend opens the door and smiles. What is the most appropriate greeting?",
    options: [
      "\"Good morning! Thank you so much for the lovely invitation to your dinner.\"",
      "\"Good evening! Thanks for having me — something smells absolutely delicious!\"",
      "\"Good night! I really hope this dinner party will be wonderful for all of us.\"",
      "\"Hello afternoon! I am so happy to be here with you for this dinner now.\""
    ],
    correct: 1,
    explanation: "'Good evening' is correct for approximately 6 PM to bedtime. 'Good morning' is for AM hours; 'Good night' is used when leaving or going to sleep — not when arriving at an event. 'Hello afternoon' is not a standard greeting in English."
  }
];
