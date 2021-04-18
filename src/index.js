import './styles.scss';
var cards = [
    {
      "suit": "hearts",
      "value": 2
    },
    {
      "suit": "hearts",
      "value": 3
    },
    {
      "suit": "hearts",
      "value": 4
    },
    {
      "suit": "hearts",
      "value": 5
    },
    {
      "suit": "hearts",
      "value": 6
    },
    {
      "suit": "hearts",
      "value": 7
    },
    {
      "suit": "hearts",
      "value": 8
    },
    {
      "suit": "hearts",
      "value": 9
    },
    {
      "suit": "hearts",
      "value": 10
    },
    {
      "suit": "hearts",
      "value": "J"
    },
    {
      "suit": "hearts",
      "value": "Q"
    },
    {
      "suit": "hearts",
      "value": "K"
    },
    {
      "suit": "hearts",
      "value": "A"
    },
    {
      "suit": "diamonds",
      "value": 2
    },
    {
      "suit": "diamonds",
      "value": 3
    },
    {
      "suit": "diamonds",
      "value": 4
    },
    {
      "suit": "diamonds",
      "value": 5
    },
    {
      "suit": "diamonds",
      "value": 6
    },
    {
      "suit": "diamonds",
      "value": 7
    },
    {
      "suit": "diamonds",
      "value": 8
    },
    {
      "suit": "diamonds",
      "value": 9
    },
    {
      "suit": "diamonds",
      "value": 10
    },
    {
      "suit": "diamonds",
      "value": "J"
    },
    {
      "suit": "diamonds",
      "value": "Q"
    },
    {
      "suit": "diamonds",
      "value": "K"
    },
    {
      "suit": "diamonds",
      "value": "A"
    },
    {
      "suit": "clubs",
      "value": 2
    },
    {
      "suit": "clubs",
      "value": 3
    },
    {
      "suit": "clubs",
      "value": 4
    },
    {
      "suit": "clubs",
      "value": 5
    },
    {
      "suit": "clubs",
      "value": 6
    },
    {
      "suit": "clubs",
      "value": 7
    },
    {
      "suit": "clubs",
      "value": 8
    },
    {
      "suit": "clubs",
      "value": 9
    },
    {
      "suit": "clubs",
      "value": 10
    },
    {
      "suit": "clubs",
      "value": "J"
    },
    {
      "suit": "clubs",
      "value": "Q"
    },
    {
      "suit": "clubs",
      "value": "K"
    },
    {
      "suit": "clubs",
      "value": "A"
    },
    {
      "suit": "spades",
      "value": 2
    },
    {
      "suit": "spades",
      "value": 3
    },
    {
      "suit": "spades",
      "value": 4
    },
    {
      "suit": "spades",
      "value": 5
    },
    {
      "suit": "spades",
      "value": 6
    },
    {
      "suit": "spades",
      "value": 7
    },
    {
      "suit": "spades",
      "value": 8
    },
    {
      "suit": "spades",
      "value": 9
    },
    {
      "suit": "spades",
      "value": 10
    },
    {
      "suit": "spades",
      "value": "J"
    },
    {
      "suit": "spades",
      "value": "Q"
    },
    {
      "suit": "spades",
      "value": "K"
    },
    {
      "suit": "spades",
      "value": "A"
    }
];


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


shuffle(cards);

var description = {
    'A':{name:'Waterfall', desc:'Once someone picks an Ace, everyone must start chugging their drink. The person who picked the card to stop whenever they want; this allows the person to his/her right to stop drinking whenever. When that person stops drinking, the person to his/her can stop'},
    2:{name:'You', desc:'The person who picks two, points to another person and that person drinks.'},
    3:{name:'Me', desc:'If you pick a three, you are drinking.'},
    4:{name:'Whores', desc:'"Whores" is not the word I would choose, but if someone picks a four, all the ladies drink.'},
    5:{name:'Bust a jive', desc:'The person who picks the card starts a dance move, and the person to his/her right has to repeat the move and add their own to the end. The player to forget anymove has to take a drink.'},
    6:{name:'Dicks', desc:'Another subpar choice of words in pursuit of a good rhyme. Six means all the guys take a drink.'},
    7:{name:'Heaven', desc:'Every player must raise their hand to "heaven". The last player to do so drinks. This is a great time to ask for forgiveness for this game.'},
    8:{name:'Mate', desc:'The person that picks an eight, picks another player to be their "mate". When one of the "mates" drinks, the other has to as well. '},
    9:{name:'Rhyme', desc:'Whoever picks the nine says a word. The person to the right has to say a word that rhymes with it; this goes on until someone cannot think of a rhyme. That person has to take a drink'},
    10:{name:'Categories', desc:'The person that picks a ten has to come up with a category (liquors, countries, etc..) and the person to his/her right has to say something in the category. When someone can\'t come up with something in that category, he/she drinks. '},
    'J':{name:'Never have I ever', desc:'The person who picked the five starts with saying something they have never done, if you have done it, you take a drink.'},
    'Q':{name:'Questions', desc:'The person that picks a queen poses a question to anyone in the game. That person has to respond to the question with another question. This goes on until someone does not respond with a question and they  drink.'},
    'K':{name:'King\'s Cup', desc:'When the first three kings are drawn, that player pours some of their drink into the King\'s cup. The person who draws the fourth drinks the contents of the cup. Comes up with a rule and whoever breaks the rule throughout the game drinks.'},
    
}

var index = -1;
document.getElementById ("getNextCard").addEventListener ("click", nextCard, false);
var kingcount = 0;


function nextCard() {
    document.getElementById("parent").innerHTML = "";
    document.getElementById('getNextCard').innerHTML  = 'Next Card';
    document.getElementById('getNextCard').className = '';
    index++;
    var card = cards[index];
    if(card.value == 'K'){
        kingcount++;
    }
    console.log(kingcount);
    if(kingcount == 4){
        shuffle(cards);
        index = -1;
        kingcount = 0;
        document.getElementById('getNextCard').innerHTML  = 'New Game';
        document.getElementById('getNextCard').className = 'grey';
        lastCard(card.suit, card.value);
    } else {
        addCard(card.suit, card.value, description[card.value]);
    }
    
}

function addCard(suit, value, description){

  var element = document.createElement("div");
  var color = (suit == 'hearts' || suit == 'diamonds') ? 'red' : 'black';
  element.className = 'card '+color;
  element.innerHTML = `
  <div class="mark `+suit+`">`+value+`</div>
  <div class="content ">
    <h1>`+description.name+`</h1>
    <h2><span >`+description.desc+`</span></h2>
  </div>
  <div class="mark upside-down `+suit+`">`+value+`</div>`;
  document.getElementById('parent').appendChild(element);
}

function lastCard(suit, value){

    var element = document.createElement("div");
    var color = (suit == 'hearts' || suit == 'diamonds') ? 'red' : 'black';
    element.className = 'card '+color;
    element.innerHTML = `
    <div class="mark `+suit+`">`+value+`</div>
    <div class="content ">
      <h1>Last King</h1>
      <h2><span >You have to drink the kings cup</span></h2>
    </div>
    <div class="mark upside-down `+suit+`">`+value+`</div>`;
    document.getElementById('parent').appendChild(element);
  }

nextCard();
console.log(cards[0]);
