// Quiz 3 — English A1, Unit 3. 20 multiple-choice items.
// Each item: text, options [a,b,c,d], correct index, explanation, skill tag.

module.exports = [
  {
    id: 1,
    skill: "Speaking — requesting help",
    text: "You are in a foreign country and need medical help. You tell the receptionist at your hotel:\n• Customer: \"Excuse me, I feel very sick and need to see a doctor.\"\nWhich additional information would make your request clearer and more effective?",
    options: [
      "\"Help me now because I feel very bad and need something.\"",
      "\"What can I do if I'm feeling so bad and don't have help?\"",
      "\"Do you know where is a doctor for something about health?\"",
      "\"I have a high fever and dizziness. Can you call a doctor for me?\""
    ],
    correct: 3,
    explanation: "Option D gives specific symptoms (fever, dizziness) and makes a clear, polite request. Specific information helps the listener respond effectively. The other options are vague or grammatically awkward (e.g., 'where is a doctor' is an indirect-question word-order error)."
  },
  {
    id: 2,
    skill: "Reading — interpreting an offer",
    text: "You are in a store and see the following sign: \"Buy 2 shirts and get 1 free. Offer valid for items under $30 each.\" What is the correct interpretation of this offer?",
    options: [
      "You must buy two shirts under $30 each to get a third shirt for free.",
      "The third shirt you choose must cost less than $30.",
      "You can buy one shirt under $30 and get another for free.",
      "You can get any shirt for free after buying two items."
    ],
    correct: 0,
    explanation: "The condition 'items under $30 each' applies to the qualifying purchase: both of the shirts you buy must be under $30. The free item is the result of meeting that condition."
  },
  {
    id: 3,
    skill: "Grammar — past simple negative",
    text: "You hear someone say:\n• Speaker: \"She didn't went to the meeting yesterday.\"\nWhat is the grammatical error in this sentence?",
    options: [
      "\"Went\" should be replaced with \"go.\"",
      "\"To the meeting\" should be \"for the meeting.\"",
      "\"Didn't\" should be replaced with \"doesn't.\"",
      "\"Yesterday\" should be placed before \"the meeting.\""
    ],
    correct: 0,
    explanation: "After the auxiliary 'did/didn't' we always use the base form of the verb: 'She didn't go.' The auxiliary already carries the past tense, so the main verb stays in base form."
  },
  {
    id: 4,
    skill: "Speaking — closing a transaction",
    text: "You are a customer at an electronics store. A sign says: \"20% off on phones with over 64 GB storage and cameras above 12 MP.\" The salesperson offers a phone with 128 GB and a 16 MP camera for $400 (20% off $500). What would be the best response to close the transaction clearly and effectively?",
    options: [
      "\"I need a phone with better features, but thank you anyway.\"",
      "\"I think $400 is fair, but I want to see more options before deciding.\"",
      "\"The second phone seems good, but can you explain the offer again?\"",
      "\"Okay, I'll take the second one for $400. Can I pay by card?\""
    ],
    correct: 3,
    explanation: "Option D closes the transaction: it confirms the decision, states the price, and moves to payment. The other options either reject, delay, or ask for repetition — none of which closes the sale."
  },
  {
    id: 5,
    skill: "Speaking — ordering food / clarifying",
    text: "The waiter explains the specials:\n• Waiter: \"Our soup of the day is tomato basil, and our chef's special is grilled chicken with a side of mashed potatoes.\"\nWhich response is the most effective?",
    options: [
      "\"I'll try the chef's special, please. Could you tell me if it's spicy?\"",
      "\"I think chef's special is good, so I want.\"",
      "\"Do you have something else more special than this?\"",
      "\"I want the chicken special with soup, please give me both.\""
    ],
    correct: 0,
    explanation: "Option A is polite, makes a clear order, and asks a relevant clarifying question. B is grammatically incomplete ('I want' has no object). C is impolite and vague. D is grammatically awkward and abrupt."
  },
  {
    id: 6,
    skill: "Grammar — modal verbs",
    text: "During a conversation, someone says:\n• Speaker: \"I can to help you with your project later.\"\nWhat is the main grammatical error in this sentence?",
    options: [
      "The sentence needs a subject pronoun.",
      "\"Later\" should be placed before \"help.\"",
      "\"With your project\" should be \"to your project.\"",
      "The use of \"to\" after \"can\" is incorrect."
    ],
    correct: 3,
    explanation: "Modal verbs (can, must, should, may, will…) are followed by the base form of the verb without 'to': 'I can help you,' not 'I can to help you.'"
  },
  {
    id: 7,
    skill: "Speaking — fluency and coherence",
    text: "You are at a language workshop. The facilitator asks:\n• Facilitator: \"Can you explain how you practice your speaking skills outside of class?\"\nWhich response demonstrates clarity, coherence, and fluency?",
    options: [
      "\"I try to learn English by speaking sometimes. It's a bit difficult, but I make some effort when I have time to do it.\"",
      "\"I watch English movies and practice speaking by repeating dialogues I hear. It helps me learn pronunciation and new vocabulary.\"",
      "\"I watch movies in English. It's enjoyable, and I pick up some words. Sometimes I try to copy the way actors speak, but not very often.\"",
      "\"Well, I usually watch, um, things like movies or shows, and then, you know, I kind of, like, practice talking a bit, but it's okay.\""
    ],
    correct: 1,
    explanation: "Option B is specific, well-structured, and uses connected ideas with cause–effect ('It helps me…'). A is vague, C is hesitant, and D is full of fillers ('um', 'like', 'you know') that break fluency."
  },
  {
    id: 8,
    skill: "Speaking — polite correction",
    text: "You ordered a steak, but the waiter brings you chicken instead. What is the most appropriate response?",
    options: [
      "\"This is not steak. I need my order fixed now.\"",
      "\"Excuse me. I ordered steak, but this is chicken. Can it be changed, please?\"",
      "\"I'm sorry, but I don't want chicken. Where's my steak?\"",
      "\"This food is wrong, you should know better.\""
    ],
    correct: 1,
    explanation: "Option B is polite, clearly identifies the problem, and politely requests a correction. The others are rude or accusatory."
  },
  {
    id: 9,
    skill: "Speaking — polite questions",
    text: "You want to order a vegetarian dish but are unsure what the options are. What is the most effective way to ask the waiter for information?",
    options: [
      "\"What is vegetarian in your menu? Is there anything?\"",
      "\"I want something vegetarian. Tell me what's there.\"",
      "\"What can I eat here that's vegetarian? I need to know.\"",
      "\"Excuse me, could you please tell me what vegetarian options you have?\""
    ],
    correct: 3,
    explanation: "Option D is the most polite and grammatically correct. 'Could you please tell me…' is a standard indirect, courteous question. The others are too direct or awkwardly phrased."
  },
  {
    id: 10,
    skill: "Listening — interpreting instructions",
    text: "Your teacher says:\n• Teacher: \"Please turn in your assignments by Friday at noon.\"\nWhat is the teacher asking you to do?",
    options: [
      "Complete the assignment during the weekend.",
      "Submit the assignment before 12:00 PM on Friday.",
      "Submit the assignment exactly at noon on Friday.",
      "Turn in the assignment anytime on Friday."
    ],
    correct: 1,
    explanation: "'By Friday at noon' means the deadline is 12:00 PM on Friday — you must submit before or at that time. 'By' indicates a deadline, not an exact moment."
  },
  {
    id: 11,
    skill: "Speaking — clarity and coherence",
    text: "You are giving a presentation about your favorite book. Which sentence best demonstrates clarity and coherence?",
    options: [
      "\"It's a nice book about something magical, and I read it because it's fun.\"",
      "\"There's a book I like, you know, about, like, magic and stuff, so yeah.\"",
      "\"I like the book, and it's really good, so I want to tell you about it now.\"",
      "\"My favorite book is about a young wizard. It's full of adventures and magic, which I find exciting.\""
    ],
    correct: 3,
    explanation: "Option D names the topic (a young wizard), describes it (adventures, magic), and gives a personal reaction (exciting). It is specific, connected, and complete — the marks of clear coherent speech."
  },
  {
    id: 12,
    skill: "Speaking — describing a problem",
    text: "You are calling a plumber because a pipe in your house is leaking. What is the most effective way to describe the problem?",
    options: [
      "\"Hello, there's a pipe in my kitchen leaking a lot of water. Can you come fix it?\"",
      "\"The kitchen is very wet because the pipe broke. Help me now.\"",
      "\"There's a leak, and I don't know what to do. Come here.\"",
      "\"There's water in my house. I need help quickly.\""
    ],
    correct: 0,
    explanation: "Option A specifies what is wrong (pipe leaking water), where (in the kitchen), and politely requests action. Specific + polite = effective service call."
  },
  {
    id: 13,
    skill: "Speaking — clarifying questions",
    text: "You are explaining a project to a classmate:\n• Speaker: \"This project is about improving communication skills. We will focus on practicing listening, speaking, and writing.\"\nWhich question would best maintain clarity and coherence in the discussion?",
    options: [
      "\"Can you explain what methods we will use for each skill?\"",
      "\"Why are we doing this project in this time?\"",
      "\"I think this is interesting, but what's more about it?\"",
      "\"What are the practice tools we will use?\""
    ],
    correct: 0,
    explanation: "Option A directly connects to the three skills the speaker just mentioned and asks for elaboration on methods. It keeps the conversation focused. D is close, but 'methods for each skill' is more precise than 'tools.'"
  },
  {
    id: 14,
    skill: "Speaking — asking about price",
    text: "You are at a bookstore and want to buy a notebook. What is the most appropriate way to ask the price?",
    options: [
      "\"This notebook, price it for me, please.\"",
      "\"Excuse me, how much does this notebook cost?\"",
      "\"I want this notebook; what is the money for it?\"",
      "\"What price is this? Can you tell me now?\""
    ],
    correct: 1,
    explanation: "Option B uses the standard polite question 'How much does X cost?' with 'Excuse me' to get attention. The others use unnatural phrasing or sound impatient."
  },
  {
    id: 15,
    skill: "Speaking — polite preference",
    text: "The waiter asks:\n• Waiter: \"Would you like water, soda, or juice with your meal?\"\nWhat is the best way to respond if you want juice?",
    options: [
      "\"I think juice is good for me.\"",
      "\"Yes, give me something to drink.\"",
      "\"I'll take water because juice is not my favorite.\"",
      "\"I'd like juice, please.\""
    ],
    correct: 3,
    explanation: "Option D uses 'I'd like…, please' — the standard polite formula for ordering. It directly answers the question. A is indirect, B doesn't answer the choice, and C contradicts the question."
  },
  {
    id: 16,
    skill: "Grammar — tense agreement",
    text: "During a discussion, someone says:\n• Speaker: \"You can borrow my book if you will return it yesterday.\"\nWhat is the mistake in this sentence?",
    options: [
      "The word \"yesterday\" is incorrect because it refers to the past.",
      "The sentence is correct as it expresses a conditional idea.",
      "The phrase \"borrow my book\" should be replaced with \"lend my book.\"",
      "The word \"return\" should be replaced with \"give back.\""
    ],
    correct: 0,
    explanation: "You cannot return something 'yesterday' in the future. The time reference contradicts the future action. The fix would be 'tomorrow' or 'next week' — a future time."
  },
  {
    id: 17,
    skill: "Listening — following directions",
    text: "You are in a grocery store looking for apples. You approach an employee and say:\n• Customer: \"Excuse me, where can I find apples?\"\n• Employee: \"The apples are in the fruit section, next to the bananas.\"\nWhat should you do next based on the employee's response?",
    options: [
      "Go to the bananas and ask for more help to find the fruit section.",
      "Look for vegetables instead, as they are near the fruit section.",
      "Go to the fruit section and look for the bananas to find the apples.",
      "Search in the bakery section, as fruits are sometimes placed there."
    ],
    correct: 2,
    explanation: "The employee gave two clues: (1) the fruit section and (2) next to the bananas. Going to the fruit section first and locating the bananas is the logical step."
  },
  {
    id: 18,
    skill: "Speaking — appropriate follow-up",
    text: "You are buying a jacket priced $60. You ask the cashier about discounts:\n• Cashier: \"We have a 10% discount on all items today.\"\nWhich response is grammatically correct and contextually appropriate?",
    options: [
      "\"Is it possible I pay $50 for this jacket instead?\"",
      "\"Oh, okay. What other offers are?\"",
      "\"The discount is good, but I don't think it help me.\"",
      "\"That's great! How much will it be with the discount?\""
    ],
    correct: 3,
    explanation: "Option D is grammatically correct and naturally moves the conversation toward the final price. A is awkwardly phrased and assumes the wrong discount; B has wrong word order; C has a verb agreement error ('it help' → 'it helps')."
  },
  {
    id: 19,
    skill: "Listening — key safety information",
    text: "At a pharmacy:\n• Pharmacist: \"For your symptoms, I recommend this syrup. Take 10 ml every 6 hours. Avoid cold drinks and get plenty of rest. If your symptoms persist for more than a week, consult a doctor.\"\nWhat is the most important information to remember?",
    options: [
      "Take 10 ml of the syrup every 6 hours and avoid cold drinks.",
      "Use the syrup every 6 hours but only if your symptoms worsen.",
      "Rest well and consult a doctor immediately if you feel worse.",
      "Drink cold beverages after taking the syrup for better results."
    ],
    correct: 0,
    explanation: "The instruction the pharmacist gives directly is the dose ('10 ml every 6 hours') and the restriction ('avoid cold drinks'). These are the immediate, actionable points. Option C distorts 'persist for more than a week' into 'immediately'; D contradicts the pharmacist."
  },
  {
    id: 20,
    skill: "Grammar — third person singular",
    text: "A classmate says:\n• Classmate: \"She don't like to go outside in winter.\"\nWhat is the grammatical error in this sentence?",
    options: [
      "\"To go\" is not needed in the sentence.",
      "\"Don't\" should be replaced with \"doesn't.\"",
      "\"Like\" should be changed to \"likes.\"",
      "\"In winter\" should be \"on winter.\""
    ],
    correct: 1,
    explanation: "With third person singular (he / she / it) in the present simple, the auxiliary is 'does/doesn't', not 'do/don't': 'She doesn't like to go outside in winter.'"
  }
];
