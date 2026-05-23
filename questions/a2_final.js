// Final Exam Practice — English A2. 20 multiple-choice items.
// Covers all three course units with different scenarios from the Unit 3 quiz.
// Unit 1: Daily Life / Shopping / Health  (Q1–Q7)
// Unit 2: Past Experiences / Places / Plans  (Q8–Q14)
// Unit 3: Social Interactions / Problems / Digital  (Q15–Q20)

module.exports = [
  // ── UNIT 1 ─────────────────────────────────────────────────────────────────

  {
    id: 1,
    skill: "Grammar — present simple + frequency adverbs",
    text: "María describes her weekly routine. She writes:\n• \"I goes to the gym three times a week and usually I have a salad for lunch.\"\nWhat is the grammatical error?",
    options: [
      "\"Three times\" should be \"three time\" because it follows a specific number.",
      "\"Usually\" must go at the very end of the sentence, after \"lunch.\"",
      "\"Goes\" should be \"go\" — the first person singular never adds -s in present simple.",
      "\"A salad\" must drop the article and simply be written \"salad\" here."
    ],
    correct: 2,
    explanation: "Present simple with first person singular (I) uses the base form: 'I go to the gym.' The -s/-es ending belongs only to third person singular (he/she/it). 'Usually' is correctly placed before the verb. 'A salad' is standard with 'have.'"
  },
  {
    id: 2,
    skill: "Vocabulary — describing family members",
    text: "Someone asks:\n• \"Is the tall woman in the photo your sister?\"\nYou want to explain it is your cousin, not your sister. Which response is the most natural and clear?",
    options: [
      "\"No, that's my cousin, Clara. She lives nearby and we see each other often.\"",
      "\"Yes, she is someone from my family who looks like me in many ways.\"",
      "\"She is not here, but she is a family member yes, that is correct.\"",
      "\"That is a person who is related to me, but she is not exactly my sister.\""
    ],
    correct: 0,
    explanation: "Option A directly corrects the assumption ('No'), names the correct relationship ('my cousin'), and adds natural context. The other options are evasive, confuse rather than clarify, or use unnatural phrasing."
  },
  {
    id: 3,
    skill: "Grammar — there is / there are",
    text: "A student writes about a local market:\n• \"There is a lot of vegetables and fresh fruit at the market on weekends.\"\nWhat is the grammatical error?",
    options: [
      "\"Fresh fruit\" should include the article \"a\" before it in this context.",
      "\"At the market\" should be \"in the market\" to express the location correctly.",
      "\"A lot of\" is too informal here and should be replaced with \"many.\"",
      "\"There is\" should be \"there are\" because \"vegetables\" is a plural noun."
    ],
    correct: 3,
    explanation: "'There is' is used with singular nouns; 'there are' is used with plural nouns. Since 'a lot of vegetables' is the first item in a plural list, the correct form is 'There are a lot of vegetables and fresh fruit.'"
  },
  {
    id: 4,
    skill: "Speaking — ordering food politely",
    text: "You are at a restaurant. The waiter approaches and asks:\n• Waiter: \"Good evening! What would you like to order?\"\nYou want grilled fish with rice. Which response is the clearest and most polite?",
    options: [
      "\"Fish, grilled. With rice on the side. Quickly, please, because I'm hungry.\"",
      "\"I'd like the grilled fish with rice, please. Thank you.\"",
      "\"Could you maybe bring something with fish, and also some rice would be okay?\"",
      "\"We will have the fish dish — grilled — and some rice must come with it too.\""
    ],
    correct: 1,
    explanation: "'I'd like…, please' is the standard polite formula for ordering. Option B is specific, clear, and courteous. Option A sounds like a command; C is too vague and hesitant; D says 'we' when there is only one person and 'must come' is too demanding."
  },
  {
    id: 5,
    skill: "Speaking — describing symptoms at the doctor",
    text: "You visit the doctor. She asks:\n• Doctor: \"What seems to be the problem today?\"\nWhich response describes your symptoms most clearly?",
    options: [
      "\"I feel really bad since yesterday and everything hurts a lot all over me.\"",
      "\"Something is wrong with me and I am not good since some days ago.\"",
      "\"I have a sore throat and a fever. It started yesterday morning.\"",
      "\"My body is not working well because something inside is giving me a lot of pain.\""
    ],
    correct: 2,
    explanation: "Option C names specific symptoms ('sore throat,' 'fever') and gives the time of onset ('yesterday morning') — the two key pieces of information a doctor needs. The other options are vague and give no medical details."
  },
  {
    id: 6,
    skill: "Grammar — should / must (advice and obligation)",
    text: "Your friend complains:\n• \"I have a terrible headache and I don't know what to do.\"\nWhich response gives grammatically correct advice?",
    options: [
      "\"You should drink more water and rest. If it gets worse, you must see a doctor.\"",
      "\"You must to rest and must to drink water and should to see a doctor too.\"",
      "\"You should to drink water and you should to sleep for a few hours today.\"",
      "\"Drinking water you should, and the doctor maybe also you must visit today.\""
    ],
    correct: 0,
    explanation: "'Should' and 'must' are modal verbs — they are followed directly by the base form without 'to': 'you should drink,' 'you must see.' Options B and C incorrectly add 'to' after the modal. Option D has inverted, ungrammatical word order."
  },
  {
    id: 7,
    skill: "Reading — interpreting a pharmacy label",
    text: "You read a medicine label:\n• \"Take 1 tablet every 8 hours with food. Do not exceed 3 tablets in 24 hours. Consult a doctor if symptoms persist for more than 3 days.\"\nWhich statement correctly interprets the instructions?",
    options: [
      "You can take up to 4 tablets a day if your symptoms are severe enough.",
      "You must eat something when you take the tablet, and take no more than 3 per day.",
      "The tablet should be taken without food to maximize its effectiveness.",
      "You should see a doctor immediately after taking the first dose of the medicine."
    ],
    correct: 1,
    explanation: "'With food' means you must eat when taking the tablet. 'Do not exceed 3 tablets in 24 hours' means 3 per day maximum. Option A incorrectly says 4; C contradicts 'with food'; D distorts 'if symptoms persist for more than 3 days' into 'immediately.'"
  },

  // ── UNIT 2 ─────────────────────────────────────────────────────────────────

  {
    id: 8,
    skill: "Grammar — past simple regular",
    text: "Rosa writes about her last summer vacation:\n• \"In July, I visit my cousins in Cali and enjoy three wonderful days with them.\"\nWhat is the error?",
    options: [
      "\"In July\" should use the preposition \"on\" instead: \"on July.\"",
      "\"My cousins\" should use the possessive pronoun: \"mine cousins.\"",
      "\"In Cali\" uses the wrong preposition — it should be \"at Cali\" here.",
      "\"Visit\" should be \"visited\" and \"enjoy\" should be \"enjoyed\" — past simple requires -ed."
    ],
    correct: 3,
    explanation: "Past time markers like 'In July' require past tense verbs. Regular verbs add -ed: 'visited' and 'enjoyed.' In affirmative past simple sentences, the main verb carries the past tense — no auxiliary is used."
  },
  {
    id: 9,
    skill: "Grammar — past simple irregular",
    text: "David tells his classmates:\n• \"Yesterday, I falled asleep on the bus and my phone ringed very loudly.\"\nWhat are the errors in David's sentence?",
    options: [
      "\"Yesterday\" must be moved to the end of the sentence for the correct word order.",
      "\"Falled\" should be \"fell\" and \"ringed\" should be \"rang\" — both are irregular past verbs.",
      "\"On the bus\" uses the wrong preposition — it should be \"in the bus\" here.",
      "\"My phone\" requires the definite article and should be written \"the phone.\""
    ],
    correct: 1,
    explanation: "'Fall' and 'ring' are irregular verbs. Their past simple forms are 'fell' and 'rang' — not 'falled' or 'ringed.' Adding -ed to an irregular verb is one of the most common learner errors with the past simple."
  },
  {
    id: 10,
    skill: "Grammar — future with 'be going to'",
    text: "Sofia texts her friend:\n• \"I am going study at the library for my exam on Saturday afternoon.\"\nWhat does Sofia's message need to be corrected?",
    options: [
      "\"On Saturday afternoon\" should be moved to the start of the sentence.",
      "\"At the library\" should be \"in the library\" to use the correct preposition.",
      "\"Am going study\" is missing \"to\" — the correct form is \"am going to study.\"",
      "\"For my exam\" should use the article \"the\" and be written \"for the my exam.\""
    ],
    correct: 2,
    explanation: "The 'be going to' structure requires: subject + am/is/are + going + to + base verb. 'Am going study' omits 'to,' which is obligatory. The correct sentence is 'I am going to study at the library.'"
  },
  {
    id: 11,
    skill: "Grammar — future with 'will' (spontaneous offer)",
    text: "Your friend says:\n• \"Oh no, I forgot to bring money for the coffee!\"\nWhich response uses 'will' correctly to show a spontaneous offer to help?",
    options: [
      "\"Don't worry — I'll pay for it. Just pay me back whenever you can.\"",
      "\"I am going to pay because last night I already decided I would help you.\"",
      "\"Will you pay it? I think you should since you have your wallet right now.\"",
      "\"I was going to say I will paid for it, but I am not totally sure about that.\""
    ],
    correct: 0,
    explanation: "'Will' (contracted to 'll) expresses a spontaneous decision made at the moment of speaking — the classic use for offers: 'I'll pay for it.' 'Be going to' (Option B) implies a pre-planned decision. Options C and D have grammar errors."
  },
  {
    id: 12,
    skill: "Grammar — comparatives",
    text: "Carlos compares two neighborhoods he lived in. He writes:\n• \"My new neighborhood is more quiet and more clean than my old one.\"\nWhat is the grammatical error?",
    options: [
      "\"My old one\" is too informal and should be \"my previous neighborhood.\"",
      "\"More quiet\" and \"more clean\" need the article \"the\" placed before them.",
      "\"Than\" is incorrect after comparatives — the correct word is \"as\" instead.",
      "\"More quiet\" should be \"quieter\" and \"more clean\" should be \"cleaner\" — short adjectives use -er."
    ],
    correct: 3,
    explanation: "One-syllable adjectives (and most two-syllable ones ending in -y, -er, -ow) form comparatives with -er, not 'more': 'quieter' and 'cleaner.' 'More' is used with longer adjectives: 'more comfortable,' 'more expensive.'"
  },
  {
    id: 13,
    skill: "Grammar — superlatives",
    text: "Ana recommends a place:\n• \"This is the more delicious restaurant in the whole city, in my opinion.\"\nWhat is the error?",
    options: [
      "\"In my opinion\" should be moved to the start: \"In my opinion, this is…\"",
      "\"The more delicious\" should be \"the most delicious\" — superlatives use most, not more.",
      "\"In the whole city\" repeats information and should just be \"in the city.\"",
      "\"This\" should be plural — \"these restaurants\" — to be more accurate."
    ],
    correct: 1,
    explanation: "Superlatives describe the extreme end of a comparison — they use 'the most' with longer adjectives, not 'the more': 'the most delicious.' 'The more delicious' is a comparative, not a superlative. The superlative also requires 'the.'"
  },
  {
    id: 14,
    skill: "Reading — understanding a description of home",
    text: "Read this apartment listing:\n• \"Cozy 2-bedroom apartment on the 5th floor. There ____ a living room, a modern kitchen, and a small balcony. The building has a gym and 24-hour security.\"\nWhich option correctly fills the blank?",
    options: [
      "\"is\" — because the apartment is described as a single, unified living space.",
      "\"was\" — because the listing uses past tense to describe previous conditions.",
      "\"are\" — because the blank introduces a list of multiple rooms and features.",
      "\"has\" — because \"has\" is the correct verb for describing what a place contains."
    ],
    correct: 2,
    explanation: "'There are' is used before plural subjects. The blank introduces 'a living room, a modern kitchen, and a small balcony' — a list of three items, which is plural, so the correct verb is 'are.' 'There is' would only be correct before a single, singular item."
  },

  // ── UNIT 3 ─────────────────────────────────────────────────────────────────

  {
    id: 15,
    skill: "Social — accepting an invitation",
    text: "Your colleague says:\n• \"We're having a small birthday lunch for Carlos on Friday. Would you like to join us?\"\nWhich response politely accepts the invitation?",
    options: [
      "\"That sounds lovely! I'd be happy to join. What time does it start?\"",
      "\"Carlos's birthday? I had no idea. Why didn't anyone tell me earlier?\"",
      "\"Lunch is fine in general, but I don't usually eat much so maybe not.\"",
      "\"I have been waiting for an invitation. Yes, please send me all the details.\""
    ],
    correct: 0,
    explanation: "Option A accepts warmly ('That sounds lovely!'), confirms willingness ('I'd be happy to join'), and moves the conversation forward with a practical question. The other options express surprise, hesitation, or sound presumptuous — none of which is a clean acceptance."
  },
  {
    id: 16,
    skill: "Social — small talk / informal conversation",
    text: "You run into an acquaintance at the supermarket. She says:\n• \"Hi! Long time no see! How have you been?\"\nWhich response is the most natural and friendly?",
    options: [
      "\"I have been existing in an acceptable condition since our last encounter here.\"",
      "\"Hello. I don't have much time for talking so maybe another day would work.\"",
      "\"Good, I think. Did you know I saw you at the gym last week by the way?\"",
      "\"Pretty good, thanks! Busy with work, but can't complain. What about you?\""
    ],
    correct: 3,
    explanation: "Option D is warm, natural, and uses common conversational phrases ('can't complain,' 'What about you?'). It matches the informal, friendly register the acquaintance opened with. The other options are overly formal, dismissive, or pivot to an unrelated topic."
  },
  {
    id: 17,
    skill: "Social — expressions of courtesy (apology)",
    text: "You accidentally bump into a stranger in a crowded hallway and they drop their bag. What do you say?",
    options: [
      "\"I always try to be careful but these things happen sometimes in busy places.\"",
      "\"Oh, I'm so sorry! Let me help you pick that up. Are you okay?\"",
      "\"You should really watch where you are going in narrow spaces like this.\"",
      "\"These accidents happen to everyone and people should not worry about them.\""
    ],
    correct: 1,
    explanation: "Option B does three things correctly: it apologizes immediately ('I'm so sorry!'), offers practical help ('Let me help you pick that up'), and checks on the person ('Are you okay?'). The other options deflect blame, are passive, or give unsolicited advice."
  },
  {
    id: 18,
    skill: "Speaking — problem at a store",
    text: "You bought a jacket last week but discovered at home that the zip is broken. You return to the store. What is the most appropriate thing to say?",
    options: [
      "\"This jacket is defective! You sold me a bad product and I want my money back!\"",
      "\"I think there might be some kind of small problem with this jacket somewhere.\"",
      "\"Excuse me, I bought this jacket here last week and the zip is broken. Could I exchange it, please?\"",
      "\"The jacket from your shop is not working right. Please do something about it.\""
    ],
    correct: 2,
    explanation: "Option C is calm and specific — it states where and when the purchase was made ('here last week'), names the exact defect ('the zip is broken'), and makes a polite, clear request ('Could I exchange it, please?'). The other options are aggressive, vague, or both."
  },
  {
    id: 19,
    skill: "Speaking — on public transport",
    text: "You are on a city bus and want to know if it stops near the central library. What is the most polite way to ask the driver?",
    options: [
      "\"Excuse me, does this bus stop near the central library, please?\"",
      "\"Library stop? You tell me if this bus goes there, okay, driver?\"",
      "\"I need the central library and I don't know if this bus is the right one for me.\"",
      "\"Where does this bus stop? I need the library and need to know right now.\""
    ],
    correct: 0,
    explanation: "Option A uses 'Excuse me' to get attention politely, forms a clear yes/no question with correct word order ('does this bus stop'), and adds 'please' at the end. The other options use wrong word order, commands, or sound impatient and demanding."
  },
  {
    id: 20,
    skill: "Writing — formal email register",
    text: "You need to email your professor to request more time to complete an assignment. Which message opening is the most appropriate for a formal email?",
    options: [
      "\"Hey prof! I really need more time for the assignment. Can I have it please?\"",
      "\"Dear Professor Ramírez, I am writing to kindly request an extension for the assignment due this Friday.\"",
      "\"Hi! I was wondering if maybe you could possibly give me a little bit more time?\"",
      "\"Dear Prof, plz I need extension 4 my assignment its urgent thx a lot bye.\""
    ],
    correct: 1,
    explanation: "Option B uses the correct formal opening ('Dear Professor [Name]'), states the purpose clearly ('I am writing to request'), and uses polite, professional language ('kindly request'). The other options use informal greetings, abbreviations, or lack the precision expected in academic correspondence."
  }
];
