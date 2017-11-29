let games = [
  {
    name: 'Exploding Kittens',
    description: 'Exploding Kittens is a kitty-powered version of Russian Roulette. Players take turns drawing cards until someone draws an exploding kitten and loses the game. The deck is made up of cards that let you avoid exploding by peeking at cards before you draw, forcing your opponent to draw multiple cards, or shuffling the deck.',
    imageURL: 'https://www.explodingkittens.com/img/home/exploding-kittens-box_x1.png',
    minPlayers: 2,
    maxPlayers: 5,
    minAge: 7,
    duration: 'quick',
    complexity: 'low',
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
    duration: 'quick',
    complexity: 'low',
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
    duration: 'quick',
    complexity: 'low',
    location: 'B4',
    category: 'Two-Player'
  },
  {
    name: 'Jaipur',
    description: 'In Jaipur, you are one of the two most powerful traders in the city. But that is not enough for you, because only the merchant with two Seals of Excellence will have the privilege of being invited to the court of the Maharaja. You are therefore going to have to do better than your direct competitor by buying, exchanging and selling at better prices, all while keeping an eye on both your camel herds.',
    imageURL: 'https://i.frg.im/Ewog6T6q/jaipur.jpg',
    minPlayers: 2,
    maxPlayers: 2,
    minAge: 12,
    duration: 'short',
    complexity: 'medium',
    location: 'W2',
    category: 'Party'
  },
  {
    name: 'BANG!',
    description: 'The card game BANG! recreates an old-fashioned spaghetti western shoot-out, with each player randomly receiving a Character card to determine special abilities, and a secret Role card to determine their goal.',
    imageURL: '.com',
    minPlayers: 4,
    maxPlayers: 7,
    minAge: 8,
    duration: 'short',
    complexity: 'medium',
    location: 'W2',
    category: 'Party'
  },
  {
    name: 'Exploding Kittens',
    description: 'Blah blah blah',
    imageURL: '.com',
    minPlayers: 2,
    maxPlayers: 12,
    minAge: 4,
    duration: 'short',
    complexity: 'low',
    location: 'W2',
    category: 'Party'
  },
  {
    name: 'Exploding Kittens',
    description: 'Blah blah blah',
    imageURL: '.com',
    minPlayers: 2,
    maxPlayers: 12,
    minAge: 4,
    duration: 'short',
    complexity: 'low',
    location: 'W2',
    category: 'Party'
  },
  {
    name: 'Exploding Kittens',
    description: 'Blah blah blah',
    imageURL: '.com',
    minPlayers: 2,
    maxPlayers: 12,
    minAge: 4,
    duration: 'short',
    complexity: 'low',
    location: 'W2',
    category: 'Party'
  },
  {
    name: 'Exploding Kittens',
    description: 'Blah blah blah',
    imageURL: '.com',
    minPlayers: 2,
    maxPlayers: 12,
    minAge: 4,
    duration: 'short',
    complexity: 'low',
    location: 'W2',
    category: 'Party'
  }
];


const questions = {
  0: {
    id: 0,
    path: '/duration',
    text: 'How long a game do you want to play?',
    value: null,
    min: null,
    max: null,
    answers: {
      0: {
        id: 0,
        text: '< 15 mins',
        value: 'quick'
      },
      1: {
        id: 1,
        text: '15-45 min',
        value: 'short'
      },
      2: {
        id: 2,
        text: '45-90 min',
        value: 'medium'
      },
      3: {
        id: 3,
        text: '90 mins +',
        value: 'long'
      }
    }
  },
  1: {
    id: 1,
    path: '/complexity',
    text: 'How steep should the learning curve be?',
    value: null,
    min: null,
    max: null,
    answers: {
      0: {
        id: 0,
        text: 'Gentle',
        value: 'low'
      },
      1: {
        id: 1,
        text: 'Medium',
        value: 'medium'
      },
      2: {
        id: 2,
        text: 'Brutal',
        value: 'high'
      }
    }
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
    path: '/age',
    text: 'How old is the youngest player?',
    value: null,
    min: 4,
    max: 18,
    answers: null
  }
}
