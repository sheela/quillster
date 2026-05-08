// Quillster Exercise Data - All content in one place (CORRECTED ORDER ORDER)
const EXERCISE_DATA = {
  beginner: {
    findError: [
      { sentence: "Its a beautiful day outside.", topic: "Punctuation", choices: [{ text: 'Change "Its" to "It\'s"', correct: true }, { text: 'Change "beautiful" to "beauty"', correct: false }, { text: 'Add "very"', correct: false }, { text: 'Change "day" to "days"', correct: false }], explain: "Rule: 'It's' is a contraction of 'it is'." },
      { sentence: "She bought an apple and a orange.", topic: "Articles", choices: [{ text: '"a orange" should be "an orange"', correct: true }, { text: 'Change "apple" to "an apple"', correct: false }, { text: 'Remove "and"', correct: false }, { text: 'Change "bought" to "buy"', correct: false }], explain: "Use 'an' before vowel sounds." },
      { sentence: "He recieved a letter from his friend yesterday.", topic: "Spelling", choices: [{ text: '"recieved" should be "received"', correct: true }, { text: 'Change "letter" to "latter"', correct: false }, { text: 'Remove "yesterday"', correct: false }, { text: 'Change "friend" to "freind"', correct: false }], explain: "'Receive' follows 'i before e except after c'." },
      { sentence: "The teacher said, please open your books.", topic: "Punctuation", choices: [{ text: 'Missing capital: "Please open"', correct: true }, { text: 'Remove "The"', correct: false }, { text: 'Change "books" to "book"', correct: false }, { text: 'Add "kindly"', correct: false }], explain: "Quoted speech should start with a capital letter." },
      { sentence: "I have an university degree in science.", topic: "Articles", choices: [{ text: '"an university" should be "a university"', correct: true }, { text: 'Change "degree" to "diploma"', correct: false }, { text: 'Remove "in science"', correct: false }, { text: 'Change "have" to "has"', correct: false }], explain: "Use 'a' before 'university' because it sounds like 'yoo'." }
    ],
    fixOrder: [
      { words: ['She', 'drinks', 'milk', 'every', 'morning'], answer: 'She drinks milk every morning' },
      { words: ['The', 'dog', 'ran', 'across', 'the', 'field'], answer: 'The dog ran across the field' },
      { words: ['My', 'sister', 'likes', 'to', 'read', 'books'], answer: 'My sister likes to read books' },
      { words: ['We', 'played', 'cricket', 'yesterday', 'afternoon'], answer: 'We played cricket yesterday afternoon' },
      { words: ['The', 'little', 'girl', 'sang', 'a', 'song'], answer: 'The little girl sang a song' }
    ]
  },
  intermediate: {
    findError: [
      { sentence: "She speaked to the manager about the issue yesterday.", topic: "Irregular Past", choices: [{ text: '"speaked" should be "spoke"', correct: true }, { text: 'Change "manager" to "managers"', correct: false }, { text: 'Change "yesterday" to "tomorrow"', correct: false }, { text: 'Change "about" to "on"', correct: false }], explain: "Speak → spoke (irregular)." },
      { sentence: "The children was playing in the park.", topic: "Subject-Verb", choices: [{ text: '"was playing" should be "were playing"', correct: true }, { text: 'Change "playing" to "played"', correct: false }, { text: 'Remove "the park"', correct: false }, { text: 'Change "children" to "child"', correct: false }], explain: "'Children' is plural → 'were'." },
      { sentence: "He has went to the market already.", topic: "Past Participle", choices: [{ text: '"has went" should be "has gone"', correct: true }, { text: 'Change "market" to "store"', correct: false }, { text: 'Change "already" to "yet"', correct: false }, { text: 'Remove "He"', correct: false }], explain: "Present perfect: has/have + past participle (gone)." },
      { sentence: "She don't like to eat spicy food.", topic: "Auxiliary", choices: [{ text: '"don\'t" should be "doesn\'t"', correct: true }, { text: 'Change "like" to "likes"', correct: false }, { text: 'Change "spicy" to "spice"', correct: false }, { text: 'Remove "to eat"', correct: false }], explain: "She/He/It + doesn't." },
      { sentence: "I taked the bus to school this morning.", topic: "Irregular Past", choices: [{ text: '"taked" should be "took"', correct: true }, { text: 'Change "bus" to "buses"', correct: false }, { text: 'Change "morning" to "afternoon"', correct: false }, { text: 'Change "to school" to "school"', correct: false }], explain: "Take → took." }
    ],
    shrinkIt: [
      { sentence: "The girl she went to the store and she bought some milk and then she went back home and she made cookies and they were very delicious and everyone loved them.", choices: [{ text: "The girl went to the store, bought milk, and went home. She made delicious cookies that everyone loved.", correct: true }, { text: "The girl she went to the store and bought milk and went home and made cookies they were delicious.", correct: false }, { text: "Going to the store, the girl bought milk, making cookies at home were delicious and everyone loved.", correct: false }], explain: "Removes unnecessary repetition and fixes pronoun errors." },
      { sentence: "Because he was feeling tired so he decided to take a nap but then his alarm didn't go off so he missed his meeting and his boss was angry.", choices: [{ text: "Because he was tired, he decided to take a nap. His alarm didn't go off, so he missed his meeting and his boss was angry.", correct: true }, { text: "He was feeling tired so he took a nap but then his alarm didn't go off and he missed his meeting his boss was angry.", correct: false }, { text: "Feeling tired he napped missing meeting made boss angry.", correct: false }], explain: "Removes redundant 'so' after 'because' and properly separates clauses." }
    ],
    thoughtPrompts: [
      { type: "Fiction", prompt: "You discover a small, hidden door in your bedroom that was never there before. When you open it, you find a tiny world inside. Describe what you see, hear, and do in the first five minutes.", hint: "💡 Use your senses: what does the tiny world look like? Are there creatures? How do you feel?" },
      { type: "Non-Fiction", prompt: "Think about a skill you learned recently (cooking, riding a bike, playing a game, etc.). Describe the process of learning it — what was hard, what helped you improve, and how you felt when you finally succeeded.", hint: "💡 Be specific. Mention one struggle and one breakthrough moment. Use past tense." }
    ],
    orderOrder: [
      {
        id: 1,
        title: "Anil's Poster Project",
        paragraph: "Before Anil painted the poster, he wrote the title at the top. The night before, he had drawn planets on the poster with a pencil. After the paint on the poster dried, Anil carried the poster carefully to school. In the morning, he showed the finished project to his teacher.",
        events: ["Anil drew planets on the poster", "Anil wrote the title", "Anil painted the poster", "The paint on the poster dried", "Anil carried the poster to school", "Anil showed the project to his teacher"],
        correctOrder: [0, 1, 2, 3, 4, 5]
      },
      {
        id: 2,
        title: "The Science Fair",
        paragraph: "Before the fair started, Riya had already set up her volcano model. Earlier that week, she had mixed baking soda and vinegar to test it. After the judges announced the winners, Riya felt proud of her hard work. During the fair, she demonstrated the eruption to many visitors.",
        events: ["Riya mixed baking soda and vinegar to test it", "Riya set up her volcano model", "Riya demonstrated the eruption to visitors", "The judges announced the winners", "Riya felt proud"],
        correctOrder: [0, 1, 2, 3, 4]
      },
      {
        id: 3,
        title: "The Birthday Surprise",
        paragraph: "After everyone sang 'Happy Birthday,' Meena opened her presents. The day before, her mother had secretly baked a chocolate cake. Before the party started, Meena's friends decorated the living room with balloons. During the party, they played games and ate cake.",
        events: ["Meena's mother baked a chocolate cake", "Friends decorated the living room", "The party started", "Everyone sang 'Happy Birthday'", "They played games and ate cake", "Meena opened her presents"],
        correctOrder: [0, 1, 2, 3, 4, 5]
      }
    ]
  },
  madlibs: [
    { title: "The Market Day", fields: [{ label: "A person's name", hint: "Sunita, Ravi, Anju", key: "name" }, { label: "An animal", hint: "elephant, monkey, tiger, orangutan", key: "animal" }, { label: "A colour", hint: "bright red, orange, purple", key: "colour" }, { label: "A food", hint: "mangoes, oranges, bananas", key: "food" }, { label: "An action word (past tense)", hint: "jumped, ate, danced", key: "verb" }, { label: "A feeling", hint: "excited, scared, amazed", key: "feeling" }] }
  ],
  storyStarters: [
    { prompt: "Meena found an old, dusty box under her grandmother's bed. When she opened it, she gasped — inside was something she had never seen before.", hints: "💡 What was inside the box? What did it look like? What did Meena do next?", tips: "✓ Great things to check: Did you start each sentence with a capital letter? Did you end each sentence with a full stop?" },
    { prompt: "It was the first day at a new school. Arjun stood at the gate and looked at all the children playing. He took a deep breath and walked in.", hints: "💡 Who did Arjun meet first? What happened during his first class? Did he make a friend?", tips: "✓ Did you use words like 'then,' 'next,' or 'suddenly' to connect your sentences?" }
  ],
  advancedTopics: ['FANBOYS', 'Comma Splice', 'Advanced Vocabulary', 'Subject-Verb Agreement', 'Since vs For', 'Confusable Pairs']
};
