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

const playersAreUnder12 = {
  0: { id: 0, text: 'No, everybody is 12 and older' },
  1: { id: 1, text: 'Yes, we have players under 12'}
}

const questions = [
  {
    id: 0,
    criterion: 'duration',
    text: 'How long a game do you want to play?',
    answer: null,
    minAnswer: null,
    maxAnswer: null,
    answers: durations
  },
  {
    id: 1,
    criterion: 'complexity',
    text: 'How steep should the learning curve be?',
    answer: null,
    minAnswer: null,
    maxAnswer: null,
    answers: complexities
  },
  {
    id: 2,
    criterion: 'players',
    text: 'How many people will be playing?',
    answer: 2,
    minAnswer: 2,
    maxAnswer: 12,
    answers: null
  },
  {
    id: 3,
    criterion: 'age',
    text: 'Will there be any players under 12?',
    answer: null,
    minAnswer: null,
    maxAnswer: null,
    answers: playersAreUnder12
  }
];

const games = [
  {
    name: 'Exploding Kittens',
    description: 'Exploding Kittens is a kitty-powered version of Russian Roulette. Players take turns drawing cards until someone draws an exploding kitten and loses the game. The deck is made up of cards that let you avoid exploding by peeking at cards before you draw, forcing your opponent to draw multiple cards, or shuffling the deck.',
    imageURL: 'https://www.explodingkittens.com/img/home/exploding-kittens-box_x1.png',
    location: 'W2',
    category: 'Party',
    playersAreUnder12: 1,
    minAge: 7,
    players: [2, 5],
    duration: 0,
    complexity: 0
  },
  {
    name: 'Love Letter',
    description: 'Love Letter is a game of risk, deduction, and luck for 2–4 players. Your goal is to get your love letter to Princess Annette while deflecting the letters from competing suitors. From a deck with only sixteen cards, each player starts with only one card in hand; one card is removed from play. On a turn, you draw one card, and play one card, trying to expose others and knock them from the game. Powerful cards lead to early gains, but make you a target. Rely on weaker cards for too long, however, and your letter may be tossed in the fire!',
    imageURL: 'https://images-na.ssl-images-amazon.com/images/I/91PuPRI6ZeL._SL1500_.jpg',
    location: 'P4',
    category: 'Party',
    playersAreUnder12: 1,
    minAge: 10,
    players: [2, 4],
    duration: 0,
    complexity: 0
  },
  {
    name: 'Codenames',
    description: 'In Codenames, two teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.',
    imageURL: 'https://s3-eu-west-1.amazonaws.com/skicka-products-images-src/4015566033481.jpg',
    location: 'A1',
    category: 'Party',
    playersAreUnder12: 0,
    minAge: 14,
    players: [2, 8],
    duration: 0,
    complexity: 0
  },
  {
    name: 'Jaipur',
    description: 'In Jaipur, you are one of the two most powerful traders in the city. But that is not enough for you, because only the merchant with two Seals of Excellence will have the privilege of being invited to the court of the Maharaja. You are therefore going to have to do better than your direct competitor by buying, exchanging and selling at better prices, all while keeping an eye on both your camel herds.',
    imageURL: 'https://i.frg.im/Ewog6T6q/jaipur.jpg',
    location: 'B4',
    category: 'Party',
    playersAreUnder12: 0,
    minAge: 12,
    players: [2, 2],
    duration: 0,
    complexity: 0
  },
  {
    name: 'BANG!',
    description: 'The card game BANG! recreates an old-fashioned spaghetti western shoot-out, with each player randomly receiving a Character card to determine special abilities, and a secret Role card to determine their goal.',
    imageURL: 'https://www.jeuxdenim.be/images/jeux/Wanted_large01.jpg',
    location: 'E3',
    category: 'Party',
    playersAreUnder12: 1,
    minAge: 8,
    players: [4, 7],
    duration: 0,
    complexity: 0
  },
  {
    name: 'Sheriff of Nottingham',
    description: 'In Sheriff of Nottingham, players will not only be able to experience Nottingham as a merchant of the city, but each turn one player will step into the shoes of the Sheriff himself. Players declare goods they wish to bring into the city, goods that are secretly stored in their burlap sack. The Sheriff must then determine who gets into the city with their goods, who gets inspected, and who may have their goods confiscated!',
    imageURL: 'https://target.scene7.com/is/image/Target/26391267?wid=520&hei=520&fmt=pjpeg',
    location: 'D3',
    category: 'Party',
    playersAreUnder12: 0,
    minAge: 13,
    players: [3, 5],
    duration: 1,
    complexity: 0
  },
  {
    name: 'Morels',
    description: 'Morels, a strategic card game for two players, uses two decks: a Day Deck (84 cards) that includes ten different types of mushrooms as well as baskets, cider, butter, pans, and moons; and a smaller Night Deck (8 cards) of mushrooms to be foraged by moonlight. Cooking sets of three or more like mushrooms – sizzling in butter or cider if the set is large enough – earns points toward winning the game.',
    imageURL: 'http://www.fungi.com/system/html/gxbg-e3f95a81.jpg',
    location: 'K2',
    category: 'Party',
    playersAreUnder12: 1,
    minAge: 10,
    players: [2, 2],
    duration: 0,
    complexity: 0
  },
  {
    name: 'Splendor',
    description: 'Splendor is a game of chip-collecting and card development. Players are merchants of the Renaissance trying to buy gem mines, means of transportation, shops—all in order to acquire the most prestige points. If you are wealthy enough, you might even receive a visit from a noble at some point, which of course will further increase your prestige.',
    imageURL: 'https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/6e80f96be49a4e12853008b8e5a2a57d_Large.png',
    location: 'D4',
    category: 'Party',
    playersAreUnder12: 1,
    minAge: 10,
    players: [2, 4],
    duration: 0,
    complexity: 1
  },
  {
    name: 'Ticket to Ride: Europe',
    description: 'Ticket to Ride: Europe takes you on a new train adventure across Europe. From Edinburgh to Constantinople and from Lisbon to Moscow, you will visit great cities of turn-of-the-century Europe. Like the original Ticket to Ride, the game remains elegantly simple, can be learned in 5 minutes, and appeals to both families and experienced gamers.',
    imageURL: 'https://www.boswells.co.uk/images/products/large/11039.jpg',
    location: 'P1',
    category: 'Party',
    playersAreUnder12: 1,
    minAge: 8,
    players: [2, 5],
    duration: 0,
    complexity: 1
  },
  {
    name: 'Scrabble',
    description: 'In this classic word game, players use their seven drawn letter-tiles to form words on the gameboard. Each word laid out earns points based on the commonality of the letters used, with certain board spaces giving bonuses. But a word can only be played if it uses at least one already-played tile or adds to an already-played word.',
    imageURL: 'https://target.scene7.com/is/image/Target/13697577?wid=520&hei=520&fmt=pjpeg',
    location: 'Y1',
    category: 'Word',
    playersAreUnder12: 1,
    minAge: 10,
    players: [2, 4],
    duration: 1,
    complexity: 1
  },
  {
    name: '7 Wonders',
    description: 'You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.',
    imageURL: 'https://www.lautapelit.fi/images/wwwkuvat/lautapelit/7-Wonder_VP.jpg',
    location: 'C2',
    category: 'Party',
    playersAreUnder12: 1,
    minAge: 10,
    players: [2, 7],
    duration: 0,
    complexity: 1
  },
  {
    name: 'Dominion',
    description: 'In Dominion, each player starts with an identical, very small deck of cards. In the center of the table is a selection of other cards the players can buy as they can afford them. Through their selection of cards to buy, and how they play their hands as they draw them, the players construct their deck on the fly, striving for the most efficient path to the precious victory points by game end.',
    imageURL: 'http://940ee6dce6677fa01d25-0f55c9129972ac85d6b1f4e703468e6b.r99.cf2.rackcdn.com/products/pictures/225515.jpg',
    location: 'F2',
    category: 'Party',
    playersAreUnder12: 0,
    minAge: 13,
    players: [2, 4],
    duration: 0,
    complexity: 1
  },
  {
    name: 'Pandemic',
    description: 'In Pandemic, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand.',
    imageURL: 'https://target.scene7.com/is/image/Target/14203019?wid=520&hei=520&fmt=pjpeg',
    location: 'M4',
    category: 'Party',
    playersAreUnder12: 1,
    minAge: 8,
    players: [2, 4],
    duration: 1,
    complexity: 2
  },
  {
    name: 'Terraforming Mars',
    description: 'In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.',
    imageURL: 'https://www.gamesmen.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/e/terraforming_mars_2_.jpg',
    location: 'L1',
    category: 'Party',
    playersAreUnder12: 0,
    minAge: 12,
    players: [1, 5],
    duration: 2,
    complexity: 2
  },
  {
    name: 'Power Grid',
    description: 'The objective of Power Grid is to supply the most cities with power when any one network gains a predetermined size. In this new edition, players mark pre-existing routes between cities for connection, and then bid against each other to purchase the power plants that they use to power their cities.',
    imageURL: 'http://www.ultraboardgames.com/power-grid/gfx/box.jpg',
    location: 'O2',
    category: 'Party',
    playersAreUnder12: 0,
    minAge: 12,
    players: [2, 6],
    duration: 2,
    complexity: 2
  },
  {
    name: 'Twilight Struggle',
    description: 'Twilight Struggle inherits its fundamental systems from the card-driven classics We the People and Hannibal: Rome vs. Carthage. It is a quick-playing, low-complexity game in that tradition. The game map is a world map of the period, whereon players move units and exert influence in attempts to gain allies and control for their superpower.',
    imageURL: 'https://cdn6.bigcommerce.com/s-ua4dd/images/stencil/480x420/products/19269/43914/6112%2F1483386008%2Fgmt0510-15__88061.1498170030.jpg?c=2',
    location: 'G3',
    category: 'Two-Player',
    playersAreUnder12: 0,
    minAge: 13,
    players: [2, 2],
    duration: 2,
    complexity: 2
  },
  {
    name: 'Star Wars: Rebellion',
    description: 'Experience the Galactic Civil War like never before. In Rebellion, you control the entire Galactic Empire or the fledgling Rebel Alliance. You must command starships, account for troop movements, and rally systems to your cause. Given the differences between the Empire and Rebel Alliance, each side has different win conditions, and you will need to adjust your play style depending on who you represent.',
    imageURL: 'https://cf.geekdo-images.com/vDtvYEKdl_H5hPSj7_CDKs43lyc=/fit-in/1200x630/pic2737530.png',
    location: 'G2',
    category: 'Party',
    playersAreUnder12: 0,
    minAge: 14,
    players: [2, 4],
    duration: 2,
    complexity: 2
  },
  {
    name: 'Gloomhaven',
    description: 'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for travelling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.',
    imageURL: 'https://images-na.ssl-images-amazon.com/images/I/51ulRXlJ7LL._SX355_.jpg',
    location: 'U2',
    category: 'Party',
    playersAreUnder12: 0,
    minAge: 12,
    players: [1, 4],
    duration: 2,
    complexity: 2
  }
];

const gameIds = ["5","11","12","13","41","42","45","50","74","115","116","125","163","172","181","188","215","257","258","320","325","333","339","372","398","403","438","478","514","590","594","621","624","677","681","715","760","764","770","811","815","822","891","917","926","938","1111","1198","1219","1234","1258","1269","1293","1294","1321","1406","1410","1419","1437","1472","1502","1515","1549","1806","1855","1899","1917","1923","1927","1962","1973","2083","2136","2223","2243","2266","2272","2281","2318","2346","2375","2379","2381","2386","2389","2392","2394","2397","2398","2407","2425","2452","2453","2471","2573","2582","2593","2596","2651","2653","2655","2750","2807","2838","2921","2946","3059","3076","3181","3201","3394","3427","3510","3570","3595","3632","3702","3706","3737","3804","3837","3955","3990","4035","4040","4143","4378","4492","4659","4853","4862","4892","4991","5005","5015","5048","5086","5135","5272","5312","5339","5404","5432","5591","5737","5782","6117","6249","6381","6549","6566","6795","6931","6932","7336","7601","7688","7824","7866","8203","8213","8690","8920","8964","8970","8979","8996","9209","9217","9674","9768","10093","10369","10547","10630","10934","11573","11901","11971","12063","12205","12333","12346","12692","12942","12995","13164","13169","13230","13308","13823","13945","14996","15062","15364","15512","15817","15987","16986","16991","16992","17025","17329","17705","17709","17820","18041","18258","19027","19841","20100","20545","20790","21348","21550","21763","22889","22980","24068","24376","24439","24480","24508","24773","24932","25613","25669","27225","27389","27588","27608","27708","27826","27833","28023","28143","28259","29106","29223","29387","30539","30549","30582","31260","31481","31627","33604","33643","34119","34219","34599","34635","34887","35207","35505","35677","35775","36218","36553","36895","37046","37111","37196","37904","39206","39463","39683","39856","40381","40393","40398","40692","40849","40990","41114","41496","41833","41835","41916","43249","43443","43570","44163","45986","46213","48726","50381","54043","54137","56692","56835","58707","59149","59959","60131","62871","63268","63888","65244","65262","65575","66056","66098","66690","67181","67453","67877","68448","70919","71671","71836","72287","72321","73439","73761","80006","83195","83919","84876","85256","86073","86156","90850","91514","91620","92415","93260","94483","94486","94891","96613","96848","97582","97903","98229","98778","99975","100901","102181","102548","102652","102680","102794","102897","103343","103660","103843","104557","104581","105593","106637","106645","107529","107649","108745","108831","110327","111124","111861","112373","113289","113401","116954","116998","117959","118000","118048","118695","118705","119407","119506","119591","119890","120677","121041","121806","121921","122159","122522","123239","123260","123540","123607","123885","124172","124361","125311","125403","125618","125678","125921","125943","126163","126471","127023","127354","127398","127997","128554","128621","128671","128698","128882","129051","129437","129622","130624","130792","130882","131121","131188","131325","131357","131835","132497","132531","133473","135779","136063","136510","136565","136594","136888","137136","137166","139030","140361","141423","141572","142131","142267","142271","142296","142326","142537","142992","143515","143519","143693","143741","143884","145014","145189","145639","146021","146508","146596","146870","146886","147151","147194","147209","147938","147949","148228","148532","148931","149328","150298","150312","150376","150658","150926","151022","151107","152237","152757","153810","153938","153999","154203","154246","154432","155362","155426","155703","155821","156009","156129","157354","157364","157969","158564","158812","158899","158976","160477","160499","160851","161546","161547","161614","162378","162886","163119","163412","163602","163968","164956","165722","165948","165950","166081","166384","166669","167270","167283","167552","167791","168584","168681","168703","169147","169341","169654","169786","170216","171129","171131","171233","171261","171499","171668","171915","172062","172225","172242","172308","172540","172552","172818","172971","173003","173346","173761","173808","174217","174893","175117","175145","176229","176396","176458","176494","176734","177524","177590","177639","177736","177877","178209","178570","178591","178900","180585","180974","181279","181304","181345","181385","182078","182352","182694","183251","184491","184522","184921","185589","186300","188793","188834","189035","189686","190082","190115","190247","190639","191004","191065","191189","191231","191572","191862","191963","192153","192291","192297","192457","192951","193037","193042","193062","193164","193527","193621","193738","194607","194655","194789","194879","194880","195421","195503","195544","197405","198454","198525","198740","198773","198928","199042","199478","199561","199966","200147","201808","202408","202426","203427","203780","204305","204583","204615","205322","205597","206504","206718","208480","208895","209592","209778","213099","213370","213882","213893","214396","215311","216091","216092","216094","217085","217372","217449","217671","218127","218311","218603","219513","220308","220520","220653","220774","220775","220792","220836","221318","221965","223481","223602","224037","224907","226322","226634","227758","228504","228660","229218","230080","230303","230304","230305","230408","230852","231280","232043","233371","233976","234396","234671"]

exports.games = games;
exports.durations = durations;
exports.complexities = complexities;
exports.questions = questions;
