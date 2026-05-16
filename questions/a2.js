// English A2 — Unit 3 practice. 20 items.
// Same skills/topics as the official exam (directions, invitations,
// introductions, polite requests, hobbies, family, ordering, emails)
// but with different scenarios so students truly practice the language.
//
// Distractors are full-length plausible-looking sentences with embedded
// grammar/pragmatic errors — length alone does not reveal the correct option.

module.exports = [
  {
    id: 1,
    skill: "Asking for directions",
    text: "You are visiting a new city and need to find the nearest pharmacy.\n• You: \"Excuse me, can you help me?\"\n• Local person: \"Of course, what do you need?\"\nWhat is the best way to ask for directions?",
    options: [
      "\"Excuse me, where the nearest pharmacy is located here?\"",
      "\"Excuse me, where is the nearest pharmacy in this area?\"",
      "\"Excuse me, can you tell me where is the pharmacy nearest?\"",
      "\"Excuse me, do you know how I can find pharmacy?\""
    ],
    correct: 1,
    explanation: "The standard direct question is 'Where is + the + noun?'. Option A has the wrong word order ('where the nearest pharmacy is located') in a direct question. Option C uses 'where is' in an embedded question — it should be 'where the pharmacy is' — and also misplaces 'nearest'. Option D drops the article ('find pharmacy' → 'find a pharmacy')."
  },
  {
    id: 2,
    skill: "Asking 'where is' in a building",
    text: "You are inside a shopping mall and need to find the bathroom. You see a worker.\n• You: \"Excuse me, sir.\"\n• Worker: \"Yes, can I help you?\"\nWhat is the best way to ask where the bathroom is?",
    options: [
      "\"Please, the bathroom where is located in this place?\"",
      "\"Could you please where the bathroom is located now?\"",
      "\"Where is the bathroom in this place, please?\"",
      "\"Where the bathroom is, please you tell me?\""
    ],
    correct: 2,
    explanation: "The direct question pattern 'Where is the + noun?' is the standard form. Option A has the wrong word order ('the bathroom where is'). Option B is missing a verb after 'Could you please' (it needs 'tell me'). Option D inverts the embedded question incorrectly and uses 'please you tell me' as a non-standard structure."
  },
  {
    id: 3,
    skill: "Small talk — opinions",
    text: "At a coffee shop, you meet a new coworker, Daniel.\n• Daniel: \"Hi! I just started working here last week. How do you like this company?\"\nWhat is the best way to reply?",
    options: [
      "\"This company is the okay place. People work much but I learn here.\"",
      "\"I don't know about it yet. Maybe in some weeks I tell you.\"",
      "\"It's great! The team is friendly and the work is really interesting.\"",
      "\"I have no opinion of this company because I am new in here.\""
    ],
    correct: 2,
    explanation: "Option C gives a clear opinion ('great') with two concrete reasons (friendly team, interesting work) — the natural way to respond at A2. Option A uses 'the okay place' (wrong article) and 'work much' (literal translation). Option B uses 'in some weeks I tell you' (wrong word order — 'I will tell you'). Option D uses 'opinion OF' (→ 'about') and 'new in here' (→ 'here')."
  },
  {
    id: 4,
    skill: "Introducing your job",
    text: "You meet someone new at a wedding and they ask what you do for a living. What is the best way to respond?",
    options: [
      "\"I teach English at a high school here in the city.\"",
      "\"I work as teacher in one high school in this city.\"",
      "\"My job is to teach the English to students of high school.\"",
      "\"I am teacher of English in high school for some years.\""
    ],
    correct: 0,
    explanation: "Option A uses the natural pattern: subject + verb + object + place. Option B drops the article ('as teacher' → 'as a teacher') and uses 'one' instead of 'a'. Option C adds a wrong article ('teach THE English') and uses 'of high school' instead of the more natural 'in a high school'. Option D drops the article again ('I am teacher' → 'I am a teacher')."
  },
  {
    id: 5,
    skill: "Declining an invitation politely",
    text: "Your friend Laura invites you to her birthday dinner, but you have a family event the same evening.\n• Laura: \"I'm having a birthday dinner this Friday at 8 PM. Can you come?\"\nWhat is the best way to decline politely?",
    options: [
      "\"No, I cannot go that day because I have other plans, sorry.\"",
      "\"Maybe later I tell you if I can come, my plans are not clear.\"",
      "\"I'm so sorry, I have a family event that night. Thanks for inviting me!\"",
      "\"Birthday dinner is not for me this time, but call me another day, please.\""
    ],
    correct: 2,
    explanation: "A polite decline has three parts: apology, specific reason, and appreciation. Option C does all three. Option A starts with a blunt 'No' and apologises only at the end. Option B uses 'I tell you' (wrong tense — should be 'I'll tell you') and leaves Laura uncertain. Option D's phrasing 'is not for me this time' sounds dismissive."
  },
  {
    id: 6,
    skill: "Accepting an invitation enthusiastically",
    text: "Your classmate invites you to study together for the math test.\n• Classmate: \"Do you want to study with me at the library on Saturday?\"\nWhat is the best way to accept enthusiastically?",
    options: [
      "\"Okay. Saturday at library is good for me to study.\"",
      "\"Yes, I will go, but you tell me the time after, please.\"",
      "\"Sounds great! What time should we meet at the library?\"",
      "\"Maybe, I will think it and tell you tomorrow my decision.\""
    ],
    correct: 2,
    explanation: "Option C accepts warmly ('Sounds great!') and follows up with a practical question. Option A drops the article ('at library' → 'at the library'). Option B sounds commanding ('you tell me the time'). Option D is non-committal ('Maybe... I will think it') where enthusiasm is expected; also 'think it' should be 'think about it'."
  },
  {
    id: 7,
    skill: "Inviting someone to join",
    text: "You and your sister are eating lunch in the cafeteria. You see your classmate Carlos sitting alone. What is the best way to invite him to sit with you?",
    options: [
      "\"Carlos, come here and have the lunch with us today.\"",
      "\"Hi Carlos, would you like to join us for lunch?\"",
      "\"Why are you eating alone? Come here to sit with us.\"",
      "\"Carlos, sit with us for the lunch right now, please.\""
    ],
    correct: 1,
    explanation: "'Would you like to…?' is the polite invitation pattern. Option A sounds like a command and uses an extra article ('the lunch'). Option C is presumptuous and a little rude ('Why are you eating alone?'). Option D sounds like an order ('sit with us right now') and uses the wrong article."
  },
  {
    id: 8,
    skill: "Asking for help politely",
    text: "You are at a hotel and the TV in your room is not working. You go to the reception.\n• You: \"Good evening.\"\n• Receptionist: \"Good evening, how can I help you?\"\nWhat is the best way to ask for help?",
    options: [
      "\"Excuse me, my TV is broken and I need somebody to help me now.\"",
      "\"Excuse me, the TV in my room is not working. Could you help me?\"",
      "\"My TV has a problem in my room, can you fix it for me?\"",
      "\"Can you please send somebody to fix the TV that is in my room?\""
    ],
    correct: 1,
    explanation: "Option B describes the problem clearly ('not working') and ends with the polite request 'Could you help me?'. Option A jumps to 'broken' (an assumption) and demands action 'now'. Option C asks the receptionist to 'fix it' personally, which isn't accurate. Option D presumes the solution (sending someone) before getting confirmation."
  },
  {
    id: 9,
    skill: "Friendly acceptance",
    text: "Your neighbor invites you to a barbecue at her house on Sunday.\n• Neighbor: \"We're having a barbecue this Sunday. Would you like to come?\"\nWhat is a friendly way to accept?",
    options: [
      "\"Sure, I'd love to come! Can I bring something with me?\"",
      "\"Yes, I will go to your house on Sunday for sure.\"",
      "\"Maybe, I tell you tomorrow if I can go that day.\"",
      "\"Sure, I think I will go but I tell you later about it.\""
    ],
    correct: 0,
    explanation: "Option A accepts warmly ('I'd love to!') and offers to contribute — natural at A2. Option B is grammatically fine but flat and doesn't sound friendly. Options C and D are non-committal ('Maybe, I'll think about it') where enthusiasm is expected; both also use 'I tell you' instead of 'I'll tell you'."
  },
  {
    id: 10,
    skill: "Inviting in a friendly way",
    text: "You are planning to watch a movie at the cinema this weekend and want to invite your friend Lucas.\n• You: \"Hi Lucas, are you free this Saturday night?\"\n• Lucas: \"Yes, I think so. Why?\"\nWhat is a friendly way to invite him?",
    options: [
      "\"I want we go together to the cinema on Saturday night.\"",
      "\"You should come with me to cinema this Saturday night, Lucas.\"",
      "\"Would you like to go to the cinema with me?\"",
      "\"Let's me know if you can go cinema this Saturday night.\""
    ],
    correct: 2,
    explanation: "'Would you like to…?' is the standard friendly invitation. Option A uses a wrong structure ('I want we go' → 'I want us to go'). Option B sounds presumptuous ('You should come') and drops the article ('to cinema' → 'to the cinema'). Option D uses the non-standard 'Let's me know' (→ 'Let me know') and drops 'to the'."
  },
  {
    id: 11,
    skill: "Asking about price",
    text: "You are at a bookstore and want to know the price of a book you like.\n• You: \"Excuse me.\"\n• Clerk: \"Yes, how can I help?\"\nWhat is the best way to ask?",
    options: [
      "\"Excuse me, how much costs this book here, please?\"",
      "\"Excuse me, how much does this book cost, please?\"",
      "\"Excuse me, what is the price for this book here?\"",
      "\"Excuse me, how much money is this book in your store?\""
    ],
    correct: 1,
    explanation: "'How much does it cost?' is the standard price question; 'does' is the auxiliary because the subject is third-person singular. Option A drops the auxiliary ('how much costs'). Option C uses the wrong preposition ('the price FOR' → 'the price OF'). Option D uses an unnatural phrasing ('how much money is this book')."
  },
  {
    id: 12,
    skill: "Email subject lines",
    text: "You need to write an email to your professor to ask for an extension on your assignment because you are sick. Which email subject line is most appropriate?",
    options: [
      "\"Hello professor — I am sick and need help today\"",
      "\"Sick today — Extension Request for Assignment Due Friday afternoon\"",
      "\"Important question about my homework that is due\"",
      "\"Help! Please I have a big problem with my homework\""
    ],
    correct: 1,
    explanation: "A good subject line is short, specific, and signals the topic. Option B identifies (1) the reason, (2) the action requested, and (3) the deadline. Option A is a greeting, not a subject. Option C is vague ('important question' — about what?). Option D sounds panicked and unprofessional."
  },
  {
    id: 13,
    skill: "Inviting a friend (specific activity)",
    text: "You want to invite your friend Sofia to go shopping with you next Saturday.\n• You: \"Hi Sofia! What are you doing on Saturday?\"\n• Sofia: \"Nothing special. Why?\"\nWhat is the best way to invite her?",
    options: [
      "\"You will come with me to shopping on Saturday morning.\"",
      "\"Sofia, let's me know if you can go shopping with me.\"",
      "\"I want we go shopping together on this Saturday morning.\"",
      "\"Would you like to go shopping with me on Saturday?\""
    ],
    correct: 3,
    explanation: "Same friendly pattern: 'Would you like to + verb…?' + specific activity + specific day. Option A is presumptuous ('You WILL come') and uses 'to shopping' (→ 'shopping'). Option B uses non-standard 'let's me know' (→ 'let me know') — also the wrong type of phrase for an invitation. Option C uses 'I want we go' (→ 'I want us to go')."
  },
  {
    id: 14,
    skill: "Polite refusal",
    text: "Your coworker invites you to lunch but you brought your own food.\n• Coworker: \"We're going to that new pizza place. Want to come?\"\nHow can you politely decline?",
    options: [
      "\"No, today I cannot go because I already have my lunch with me.\"",
      "\"Thanks, but I brought my own lunch today. Maybe we can go next time!\"",
      "\"Pizza is not for me today, I have my own food already.\"",
      "\"Maybe I will go later but I am not sure about it.\""
    ],
    correct: 1,
    explanation: "A polite refusal has three parts: thank, reason, keep the door open. Option B does all three. Option A starts with a blunt 'No' and never thanks the coworker. Option C 'Pizza is not for me' sounds dismissive about what they offered. Option D is non-committal — it neither accepts nor declines clearly."
  },
  {
    id: 15,
    skill: "Talking about hobbies",
    text: "Your new classmate asks about your hobbies:\n• Classmate: \"What do you do in your free time?\"\nWhat is the clearest way to answer?",
    options: [
      "\"My hobby is the cooking on weekends with my family.\"",
      "\"I do cooking many times in the week at home.\"",
      "\"I like cooking on the weekend, especially Italian food.\"",
      "\"Cooking is what I do for free time at the house.\""
    ],
    correct: 2,
    explanation: "A complete A2 answer uses 'I like + -ing form' and adds a detail. Option C does both. Option A uses an extra article ('the cooking'). Option B uses the wrong collocation ('do cooking' → 'cook'). Option D says 'for free time' (→ 'in my free time')."
  },
  {
    id: 16,
    skill: "Asking for help in a store",
    text: "Maria is at a department store and wants to find a black shirt in size medium. What is the best way for her to ask a store assistant?",
    options: [
      "\"Excuse me, you have this shirt in the black color, medium size?\"",
      "\"Excuse me, I want this shirt in a black color and medium size, please.\"",
      "\"Excuse me, do you have this shirt in black, size medium?\"",
      "\"Excuse me, can I find here this shirt in black and medium?\""
    ],
    correct: 2,
    explanation: "'Do you have + item + in + color/size?' is the standard polite shopping question. Option A drops the auxiliary ('you have' → 'do you have') and adds an unnecessary 'the' before 'black'. Option B starts with 'I want' (too direct for A2 shopping politeness) and overuses articles. Option D uses the wrong word order ('can I find here this shirt')."
  },
  {
    id: 17,
    skill: "Inviting for an activity",
    text: "You want to invite your coworker Pedro to play soccer after work.\n• You: \"Hi Pedro, are you busy this evening?\"\n• Pedro: \"Not really. What's up?\"\nWhat is the best way to invite him?",
    options: [
      "\"We play soccer after work today, you come with us?\"",
      "\"Would you like to play soccer after work today, Pedro?\"",
      "\"After work, let's me know if you play soccer today.\"",
      "\"You want play soccer after work with me today, Pedro?\""
    ],
    correct: 1,
    explanation: "Same invitation pattern: 'Would you like to + verb…?'. Option A drops the auxiliary ('Do you' before 'come'). Option C 'let's me know' (→ 'let me know') is wrong, and it asks IF you play soccer — not an invitation. Option D drops 'to' ('want PLAY' → 'want TO play') and the auxiliary 'do' at the start."
  },
  {
    id: 18,
    skill: "Talking about family",
    text: "You are at an English class. The teacher asks:\n• Teacher: \"Tell me about your parents. Do they live in this city?\"\nWhat is the clearest way to respond?",
    options: [
      "\"Yes, parents live here in city, they have one house close from park.\"",
      "\"Yes, my parents live in this city. They have a small house near the park.\"",
      "\"My parents are here in city since long time, they live in own house.\"",
      "\"Yes, in this city my parents are living near the park with small house.\""
    ],
    correct: 1,
    explanation: "A complete A2 answer: yes/no + repeat key info + add one detail. Option B does all three correctly. Option A drops articles ('in city' → 'in the city') and uses wrong preposition ('close from' → 'close to'). Option C uses 'since long time' (→ 'for a long time'). Option D uses present continuous where present simple is needed ('are living' → 'live') and drops an article ('with small house')."
  },
  {
    id: 19,
    skill: "Ordering at a restaurant",
    text: "You are at a café and want to order a sandwich and a coffee. What is the clearest way to place your order?",
    options: [
      "\"I want one sandwich and the coffee for me, please.\"",
      "\"Give me a sandwich and a coffee for the lunch, please.\"",
      "\"I'd like a sandwich and a coffee for lunch, please.\"",
      "\"Please, sandwich and coffee is what I want now, thank you.\""
    ],
    correct: 2,
    explanation: "'I'd like + a/an + noun, please' is the standard polite ordering phrase. Option A mixes 'one... the' awkwardly. Option B starts with 'Give me' (command) and adds an extra article ('for the lunch'). Option D fronts the items ('sandwich and coffee is what I want') and uses singular 'is' for two items."
  },
  {
    id: 20,
    skill: "Introducing yourself",
    text: "You start a new English course and meet a classmate before class.\n• Classmate: \"Hi! I'm Lucia. What's your name?\"\nWhat is the best way to respond?",
    options: [
      "\"Hi Lucia! My name is Marco. It's nice to meet you.\"",
      "\"Hi! I am the Marco and I am happy of meet you today.\"",
      "\"Hello! I have the name Marco, pleased of know you here.\"",
      "\"Hi! My name's Marco. It is a pleasure of knowing you.\""
    ],
    correct: 0,
    explanation: "The standard self-introduction is 'My name is + name' followed by 'Nice to meet you'. Option B adds 'the' before a name and uses 'happy OF meet' (→ 'happy TO meet'). Option C uses 'I HAVE the name' (→ 'My name IS') and 'pleased OF know' (→ 'pleased TO know'). Option D uses 'pleasure OF knowing' (→ 'pleasure TO meet')."
  }
];
