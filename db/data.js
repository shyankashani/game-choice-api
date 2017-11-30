const games = [
  {
    name: 'Exploding Kittens',
    description: 'Exploding Kittens is a kitty-powered version of Russian Roulette. Players take turns drawing cards until someone draws an exploding kitten and loses the game. The deck is made up of cards that let you avoid exploding by peeking at cards before you draw, forcing your opponent to draw multiple cards, or shuffling the deck.',
    imageURL: 'https://www.explodingkittens.com/img/home/exploding-kittens-box_x1.png',
    minPlayers: 2,
    maxPlayers: 5,
    minAge: 7,
    duration: 0,
    complexity: 0,
    location: 'W2',
    category: 'Party'
  },
  {
    name: 'Love Letter',
    description: 'Love Letter is a game of risk, deduction, and luck for 2–4 players. Your goal is to get your love letter to Princess Annette while deflecting the letters from competing suitors. From a deck with only sixteen cards, each player starts with only one card in hand; one card is removed from play. On a turn, you draw one card, and play one card, trying to expose others and knock them from the game. Powerful cards lead to early gains, but make you a target. Rely on weaker cards for too long, however, and your letter may be tossed in the fire!',
    imageURL: 'https://images-na.ssl-images-amazon.com/images/I/91PuPRI6ZeL._SL1500_.jpg',
    minPlayers: 2,
    maxPlayers: 4,
    minAge: 10,
    duration: 0,
    complexity: 0,
    location: 'P4',
    category: 'Party'
  },
  {
    name: 'Codenames',
    description: 'In Codenames, two teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.',
    imageURL: 'https://s3-eu-west-1.amazonaws.com/skicka-products-images-src/4015566033481.jpg',
    minPlayers: 2,
    maxPlayers: 8,
    minAge: 14,
    duration: 0,
    complexity: 0,
    location: 'A1',
    category: 'Party'
  },
  {
    name: 'Jaipur',
    description: 'In Jaipur, you are one of the two most powerful traders in the city. But that is not enough for you, because only the merchant with two Seals of Excellence will have the privilege of being invited to the court of the Maharaja. You are therefore going to have to do better than your direct competitor by buying, exchanging and selling at better prices, all while keeping an eye on both your camel herds.',
    imageURL: 'https://i.frg.im/Ewog6T6q/jaipur.jpg',
    minPlayers: 2,
    maxPlayers: 2,
    minAge: 12,
    duration: 0,
    complexity: 0,
    location: 'B4',
    category: 'Party'
  },
  {
    name: 'BANG!',
    description: 'The card game BANG! recreates an old-fashioned spaghetti western shoot-out, with each player randomly receiving a Character card to determine special abilities, and a secret Role card to determine their goal.',
    imageURL: 'https://www.jeuxdenim.be/images/jeux/Wanted_large01.jpg',
    minPlayers: 4,
    maxPlayers: 7,
    minAge: 8,
    duration: 0,
    complexity: 0,
    location: 'E3',
    category: 'Party'
  },
  {
    name: 'Sheriff of Nottingham',
    description: 'In Sheriff of Nottingham, players will not only be able to experience Nottingham as a merchant of the city, but each turn one player will step into the shoes of the Sheriff himself. Players declare goods they wish to bring into the city, goods that are secretly stored in their burlap sack. The Sheriff must then determine who gets into the city with their goods, who gets inspected, and who may have their goods confiscated!',
    imageURL: 'https://target.scene7.com/is/image/Target/26391267?wid=520&hei=520&fmt=pjpeg',
    minPlayers: 3,
    maxPlayers: 5,
    minAge: 13,
    duration: 1,
    complexity: 0,
    location: 'D3',
    category: 'Party'
  },
  {
    name: 'Morels',
    description: 'Morels, a strategic card game for two players, uses two decks: a Day Deck (84 cards) that includes ten different types of mushrooms as well as baskets, cider, butter, pans, and moons; and a smaller Night Deck (8 cards) of mushrooms to be foraged by moonlight. Cooking sets of three or more like mushrooms – sizzling in butter or cider if the set is large enough – earns points toward winning the game.',
    imageURL: 'http://www.fungi.com/system/html/gxbg-e3f95a81.jpg',
    minPlayers: 2,
    maxPlayers: 2,
    minAge: 10,
    duration: 0,
    complexity: 0,
    location: 'K2',
    category: 'Party'
  },
  {
    name: 'Splendor',
    description: 'Splendor is a game of chip-collecting and card development. Players are merchants of the Renaissance trying to buy gem mines, means of transportation, shops—all in order to acquire the most prestige points. If you are wealthy enough, you might even receive a visit from a noble at some point, which of course will further increase your prestige.',
    imageURL: 'https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/6e80f96be49a4e12853008b8e5a2a57d_Large.png',
    minPlayers: 2,
    maxPlayers: 4,
    minAge: 10,
    duration: 0,
    complexity: 1,
    location: 'D4',
    category: 'Party'
  },
  {
    name: 'Ticket to Ride: Europe',
    description: 'Ticket to Ride: Europe takes you on a new train adventure across Europe. From Edinburgh to Constantinople and from Lisbon to Moscow, you will visit great cities of turn-of-the-century Europe. Like the original Ticket to Ride, the game remains elegantly simple, can be learned in 5 minutes, and appeals to both families and experienced gamers.',
    imageURL: 'https://www.boswells.co.uk/images/products/large/11039.jpg',
    minPlayers: 2,
    maxPlayers: 5,
    minAge: 8,
    duration: 0,
    complexity: 1,
    location: 'P1',
    category: 'Party'
  },
  {
    name: 'Scrabble',
    description: 'In this classic word game, players use their seven drawn letter-tiles to form words on the gameboard. Each word laid out earns points based on the commonality of the letters used, with certain board spaces giving bonuses. But a word can only be played if it uses at least one already-played tile or adds to an already-played word.',
    imageURL: 'https://target.scene7.com/is/image/Target/13697577?wid=520&hei=520&fmt=pjpeg',
    minPlayers: 2,
    maxPlayers: 4,
    minAge: 10,
    duration: 1,
    complexity: 1,
    location: 'Y1',
    category: 'Word'
  },
  {
    name: '7 Wonders',
    description: 'You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.',
    imageURL: 'https://www.lautapelit.fi/images/wwwkuvat/lautapelit/7-Wonder_VP.jpg',
    minPlayers: 2,
    maxPlayers: 7,
    minAge: 10,
    duration: 0,
    complexity: 1,
    location: 'C2',
    category: 'Party'
  },
  {
    name: 'Dominion',
    description: 'In Dominion, each player starts with an identical, very small deck of cards. In the center of the table is a selection of other cards the players can buy as they can afford them. Through their selection of cards to buy, and how they play their hands as they draw them, the players construct their deck on the fly, striving for the most efficient path to the precious victory points by game end.',
    imageURL: 'http://940ee6dce6677fa01d25-0f55c9129972ac85d6b1f4e703468e6b.r99.cf2.rackcdn.com/products/pictures/225515.jpg',
    minPlayers: 2,
    maxPlayers: 4,
    minAge: 13,
    duration: 0,
    complexity: 1,
    location: 'F2',
    category: 'Party'
  },
  {
    name: 'Pandemic',
    description: 'In Pandemic, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand.',
    imageURL: 'https://target.scene7.com/is/image/Target/14203019?wid=520&hei=520&fmt=pjpeg',
    minPlayers: 2,
    maxPlayers: 4,
    minAge: 8,
    duration: 1,
    complexity: 2,
    location: 'M4',
    category: 'Party'
  },
  {
    name: 'Terraforming Mars',
    description: 'In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.',
    imageURL: 'https://www.gamesmen.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/e/terraforming_mars_2_.jpg',
    minPlayers: 1,
    maxPlayers: 5,
    minAge: 12,
    duration: 2,
    complexity: 2,
    location: 'L1',
    category: 'Party'
  },
  {
    name: 'Power Grid',
    description: 'The objective of Power Grid is to supply the most cities with power when any one network gains a predetermined size. In this new edition, players mark pre-existing routes between cities for connection, and then bid against each other to purchase the power plants that they use to power their cities.',
    imageURL: 'http://www.ultraboardgames.com/power-grid/gfx/box.jpg',
    minPlayers: 2,
    maxPlayers: 6,
    minAge: 12,
    duration: 2,
    complexity: 2,
    location: 'O2',
    category: 'Party'
  },
  {
    name: 'Twilight Struggle',
    description: 'Twilight Struggle inherits its fundamental systems from the card-driven classics We the People and Hannibal: Rome vs. Carthage. It is a quick-playing, low-complexity game in that tradition. The game map is a world map of the period, whereon players move units and exert influence in attempts to gain allies and control for their superpower.',
    imageURL: 'https://cdn6.bigcommerce.com/s-ua4dd/images/stencil/480x420/products/19269/43914/6112%2F1483386008%2Fgmt0510-15__88061.1498170030.jpg?c=2',
    minPlayers: 2,
    maxPlayers: 2,
    minAge: 13,
    duration: 2,
    complexity: 2,
    location: 'G3',
    category: 'Two-Player'
  },
  {
    name: 'Star Wars: Rebellion',
    description: 'Experience the Galactic Civil War like never before. In Rebellion, you control the entire Galactic Empire or the fledgling Rebel Alliance. You must command starships, account for troop movements, and rally systems to your cause. Given the differences between the Empire and Rebel Alliance, each side has different win conditions, and you will need to adjust your play style depending on who you represent:',
    imageURL: 'https://cf.geekdo-images.com/vDtvYEKdl_H5hPSj7_CDKs43lyc=/fit-in/1200x630/pic2737530.png',
    minPlayers: 2,
    maxPlayers: 4,
    minAge: 14,
    duration: 2,
    complexity: 2,
    location: 'G2',
    category: 'Party'
  },
  {
    name: 'Gloomhaven',
    description: 'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for travelling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.',
    imageURL: 'https://images-na.ssl-images-amazon.com/images/I/51ulRXlJ7LL._SX355_.jpg',
    minPlayers: 1,
    maxPlayers: 4,
    minAge: 12,
    duration: 2,
    complexity: 2,
    location: 'U2',
    category: 'Party'
  }
];

const durations = {
  0: { id: 0, text: 'Under 45 min' },
  1: { id: 1, text: '45 to 90 min' },
  2: { id: 2, text: 'Above 90 min' }
}

const complexities = {
  0: { id: 0, text: 'Gentle' },
  1: { id: 1, text: 'Medium' },
  2: { id: 2, text: 'Brutal' }
}

const questions = {
  0: {
    id: 0,
    path: '/duration',
    text: 'How long a game do you want to play?',
    value: null,
    min: null,
    max: null,
    answers: durations
  },
  1: {
    id: 1,
    path: '/complexity',
    text: 'How steep should the learning curve be?',
    value: null,
    min: null,
    max: null,
    answers: complexities
  },
  2: {
    id: 2,
    path: '/players',
    text: 'How many people will be playing?',
    value: null,
    min: 2,
    max: 12,
    answers: null
  },
  3: {
    id: 3,
    path: '/minAge',
    text: 'How old is the youngest player?',
    value: null,
    min: 4,
    max: 18,
    answers: null
  }
}

exports.games = games;
exports.durations = durations;
exports.complexities = complexities;
exports.questions = questions;
