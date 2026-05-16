// English A2 — Unit 3 practice. 20 items.
// Same skills/topics as the official exam (directions, invitations,
// introductions, polite requests, hobbies, family, ordering, emails)
// but with different scenarios so students truly practice the language.

module.exports = [
  {
    id: 1,
    skill: "Asking for directions",
    text: "You are visiting a new city and need to find the nearest pharmacy.\n• You: \"Excuse me, can you help me?\"\n• Local person: \"Of course, what do you need?\"\nWhat is the best way to ask for directions?",
    options: [
      "\"Pharmacy where?\"",
      "\"Excuse me, where is the nearest pharmacy?\"",
      "\"How I go pharmacy?\"",
      "\"You know pharmacy? Where?\""
    ],
    correct: 1,
    explanation: "Use the standard polite pattern: 'Excuse me, where is + the + noun?' The other options use word-order or grammar mistakes typical of A1."
  },
  {
    id: 2,
    skill: "Asking 'where is' in a building",
    text: "You are inside a shopping mall and need to find the bathroom. You see a worker.\n• You: \"Excuse me, sir.\"\n• Worker: \"Yes, can I help you?\"\nWhat is the best way to ask where the bathroom is?",
    options: [
      "\"Bathroom where?\"",
      "\"Where the bathroom?\"",
      "\"Where is the bathroom, please?\"",
      "\"The bathroom is where here?\""
    ],
    correct: 2,
    explanation: "In English, 'Where is the + noun?' is the correct question form. Adding 'please' makes it polite. The other options drop the verb 'is' or invert the order incorrectly."
  },
  {
    id: 3,
    skill: "Small talk — opinions",
    text: "At a coffee shop, you meet a new coworker, Daniel.\n• Daniel: \"Hi! I just started working here last week. How do you like this company?\"\nWhat is the best way to reply?",
    options: [
      "\"Company good. I work much.\"",
      "\"I don't know. I never think about it.\"",
      "\"It's great! The team is friendly and the work is interesting.\"",
      "\"Why you ask? Is something wrong?\""
    ],
    correct: 2,
    explanation: "Option C gives a clear opinion ('great') and two specific reasons (friendly team, interesting work). This is the natural way to respond to 'How do you like…?' at A2."
  },
  {
    id: 4,
    skill: "Introducing your job",
    text: "You meet someone new at a wedding and they ask what you do for a living. What is the best way to respond?",
    options: [
      "\"I teach English at a high school.\"",
      "\"Teacher. English. High school.\"",
      "\"My job is teach English students.\"",
      "\"English I teach in school high.\""
    ],
    correct: 0,
    explanation: "A complete sentence with subject + verb + object is the natural answer. 'I teach English at a high school' is clear and grammatically correct. The other options are fragments or have word-order errors."
  },
  {
    id: 5,
    skill: "Declining an invitation politely",
    text: "Your friend Laura invites you to her birthday dinner, but you have a family event the same evening.\n• Laura: \"I'm having a birthday dinner this Friday at 8 PM. Can you come?\"\nWhat is the best way to decline politely?",
    options: [
      "\"No, I can't go.\"",
      "\"Maybe. We see later.\"",
      "\"I'm so sorry, I have a family event that night. Thanks for inviting me!\"",
      "\"Birthday dinner not for me this time.\""
    ],
    correct: 2,
    explanation: "A polite decline has three parts: apology ('I'm so sorry'), reason ('I have a family event'), and appreciation ('Thanks for inviting me!'). The other options are too direct or unclear."
  },
  {
    id: 6,
    skill: "Accepting an invitation enthusiastically",
    text: "Your classmate invites you to study together for the math test.\n• Classmate: \"Do you want to study with me at the library on Saturday?\"\nWhat is the best way to accept enthusiastically?",
    options: [
      "\"Okay. Library Saturday.\"",
      "\"Yes. I go.\"",
      "\"Sounds great! What time should we meet?\"",
      "\"Maybe. I will think.\""
    ],
    correct: 2,
    explanation: "Option C accepts clearly ('Sounds great!') and follows up with a practical question. The others are too short or non-committal."
  },
  {
    id: 7,
    skill: "Inviting someone to join",
    text: "You and your sister are eating lunch in the cafeteria. You see your classmate Carlos sitting alone. What is the best way to invite him to sit with you?",
    options: [
      "\"Carlos, come here.\"",
      "\"Hi Carlos, would you like to join us for lunch?\"",
      "\"Why you eat alone?\"",
      "\"Carlos sit with us now.\""
    ],
    correct: 1,
    explanation: "'Would you like to…?' is the polite invitation pattern at A2. The other options sound demanding or like commands, which is not appropriate for inviting someone."
  },
  {
    id: 8,
    skill: "Asking for help politely",
    text: "You are at a hotel and the TV in your room is not working. You go to the reception.\n• You: \"Good evening.\"\n• Receptionist: \"Good evening, how can I help you?\"\nWhat is the best way to ask for help?",
    options: [
      "\"TV broken. Help.\"",
      "\"Excuse me, the TV in my room is not working. Could you help me?\"",
      "\"My TV problem. Now fix.\"",
      "\"You fix TV in my room?\""
    ],
    correct: 1,
    explanation: "A polite request includes the problem ('TV is not working') and a polite ask ('Could you help me?'). Note: 'is not working' is correct present continuous for a current problem."
  },
  {
    id: 9,
    skill: "Friendly acceptance",
    text: "Your neighbor invites you to a barbecue at her house on Sunday.\n• Neighbor: \"We're having a barbecue this Sunday. Would you like to come?\"\nWhat is a friendly way to accept?",
    options: [
      "\"Sure, I'd love to! Can I bring something?\"",
      "\"Yes, I come.\"",
      "\"Why not. I see.\"",
      "\"I think later I tell you.\""
    ],
    correct: 0,
    explanation: "Option A accepts warmly and shows good manners by offering to contribute. 'I'd love to' is a friendly A2 phrase. The others are flat, vague, or grammatically weak."
  },
  {
    id: 10,
    skill: "Inviting in a friendly way",
    text: "You are planning to watch a movie at the cinema this weekend and want to invite your friend Lucas.\n• You: \"Hi Lucas, are you free this Saturday night?\"\n• Lucas: \"Yes, I think so. Why?\"\nWhat is a friendly way to invite him?",
    options: [
      "\"Cinema Saturday. Come?\"",
      "\"You go cinema with me.\"",
      "\"Would you like to go to the cinema with me?\"",
      "\"I want cinema. You free?\""
    ],
    correct: 2,
    explanation: "'Would you like to…?' is the standard friendly invitation. Notice how it builds on the previous turn where Lucas confirmed he is free."
  },
  {
    id: 11,
    skill: "Asking about price",
    text: "You are at a bookstore and want to know the price of a book you like.\n• You: \"Excuse me.\"\n• Clerk: \"Yes, how can I help?\"\nWhat is the best way to ask?",
    options: [
      "\"Book price what?\"",
      "\"Excuse me, how much does this book cost?\"",
      "\"Cost this book how?\"",
      "\"Book money how much?\""
    ],
    correct: 1,
    explanation: "'How much does it cost?' is the standard question for prices. 'Does' is the auxiliary because the subject ('this book') is third-person singular."
  },
  {
    id: 12,
    skill: "Email subject lines",
    text: "You need to write an email to your professor to ask for an extension on your assignment because you are sick. Which email subject line is most appropriate?",
    options: [
      "\"Help me please!\"",
      "\"Sick — Extension Request for Assignment Due Friday\"",
      "\"Hi professor I need something\"",
      "\"Problem!\""
    ],
    correct: 1,
    explanation: "A good subject line is short, specific, and signals the topic. Option B tells the professor exactly what the email is about so they can prioritize it. The others are vague or unprofessional."
  },
  {
    id: 13,
    skill: "Inviting a friend (specific activity)",
    text: "You want to invite your friend Sofia to go shopping with you next Saturday.\n• You: \"Hi Sofia! What are you doing on Saturday?\"\n• Sofia: \"Nothing special. Why?\"\nWhat is the best way to invite her?",
    options: [
      "\"Shopping with me Saturday?\"",
      "\"Come shopping. Now.\"",
      "\"You go shopping with me Saturday I think.\"",
      "\"Would you like to go shopping with me on Saturday?\""
    ],
    correct: 3,
    explanation: "Same friendly pattern: 'Would you like to + verb…?' + specific activity + specific day. The other options drop the verb 'go', use commands, or have unclear word order."
  },
  {
    id: 14,
    skill: "Polite refusal",
    text: "Your coworker invites you to lunch but you brought your own food.\n• Coworker: \"We're going to that new pizza place. Want to come?\"\nHow can you politely decline?",
    options: [
      "\"No. I have food.\"",
      "\"Thanks, but I brought my lunch today. Maybe next time!\"",
      "\"Pizza no. I don't want.\"",
      "\"I think I no go.\""
    ],
    correct: 1,
    explanation: "A polite refusal: thank ('Thanks'), reason ('I brought my lunch'), keep the door open ('Maybe next time!'). This is the formula for declining warmly at A2."
  },
  {
    id: 15,
    skill: "Talking about hobbies",
    text: "Your new classmate asks about your hobbies:\n• Classmate: \"What do you do in your free time?\"\nWhat is the clearest way to answer?",
    options: [
      "\"Cooking. Free time.\"",
      "\"I cook hobby.\"",
      "\"I like cooking, especially Italian food.\"",
      "\"Cook food. My time.\""
    ],
    correct: 2,
    explanation: "A complete answer at A2 uses 'I like + -ing form' (gerund) and adds a detail. Option C also adds a specific example ('Italian food'), which makes it sound natural and conversational."
  },
  {
    id: 16,
    skill: "Asking for help in a store",
    text: "Maria is at a department store and wants to find a black shirt in size medium. What is the best way for her to ask a store assistant?",
    options: [
      "\"Black shirt medium where?\"",
      "\"I want shirt black medium. Where?\"",
      "\"Excuse me, do you have this shirt in black, size medium?\"",
      "\"Black medium shirt yes or no?\""
    ],
    correct: 2,
    explanation: "'Do you have + item + in + color/size?' is the standard polite shopping question. 'Excuse me' makes it more courteous. Other options use fragmented or rude phrasing."
  },
  {
    id: 17,
    skill: "Inviting for an activity",
    text: "You want to invite your coworker Pedro to play soccer after work.\n• You: \"Hi Pedro, are you busy this evening?\"\n• Pedro: \"Not really. What's up?\"\nWhat is the best way to invite him?",
    options: [
      "\"Soccer now?\"",
      "\"Would you like to play soccer after work?\"",
      "\"Play soccer me you.\"",
      "\"You want soccer? Come.\""
    ],
    correct: 1,
    explanation: "Same pattern as other invitations: 'Would you like to + verb…?' Note that 'play soccer' uses the base form because 'would' is a modal verb."
  },
  {
    id: 18,
    skill: "Talking about family",
    text: "You are at an English class. The teacher asks:\n• Teacher: \"Tell me about your parents. Do they live in this city?\"\nWhat is the clearest way to respond?",
    options: [
      "\"Parents yes city.\"",
      "\"Yes, my parents live in this city. They have a small house near the park.\"",
      "\"Parents city this. Live.\"",
      "\"Yes parents I have here.\""
    ],
    correct: 1,
    explanation: "A complete A2 answer: yes/no + repeat key info + extra detail. Option B answers the question directly and adds one extra sentence to keep the conversation going."
  },
  {
    id: 19,
    skill: "Ordering at a restaurant",
    text: "You are at a café and want to order a sandwich and a coffee. What is the clearest way to place your order?",
    options: [
      "\"Sandwich coffee for me.\"",
      "\"I want sandwich coffee please.\"",
      "\"I'd like a sandwich and a coffee, please.\"",
      "\"Coffee sandwich now.\""
    ],
    correct: 2,
    explanation: "'I'd like + a/an + noun, please' is the standard polite ordering phrase. The article 'a' is required before singular countable nouns. 'And' connects two items naturally."
  },
  {
    id: 20,
    skill: "Introducing yourself",
    text: "You start a new English course and meet a classmate before class.\n• Classmate: \"Hi! I'm Lucia. What's your name?\"\nWhat is the best way to respond?",
    options: [
      "\"Hi! My name is Marco. Nice to meet you.\"",
      "\"Marco I am.\"",
      "\"Hello. Marco me.\"",
      "\"Name Marco. You?\""
    ],
    correct: 0,
    explanation: "The standard self-introduction is 'My name is + name' or 'I'm + name'. Adding 'Nice to meet you' is a polite, natural closing. The other options omit the verb or use wrong word order."
  }
];
