// changement icon de son <i class="fa-solid fa-volume-xmark"></i>

// Function structure HTML 

const structureDice = () => {    

    const getElementDice = document.querySelector(".structure-dice");

    let displayDice= [];

        displayDice = displayDice + 
        `<div class="dice">
            <div class="face one"><input type="hidden" class="value-one" value="1"></div>
            <div class="face two"><input type="hidden" class="value-two" value="2"></div>
            <div class="face three"><input type="hidden" class="value-three" value="3"></div>
            <div class="face four"><input type="hidden" class="value-four" value="4"></div>
            <div class="face five"><input type="hidden" class="value-five" value="5"></div>
            <div class="face six"><input type="hidden" class="value-six" value="6"></div>
        </div>`;

        getElementDice.innerHTML = displayDice;
};

structureDice()

/* DICE */

// Appel de l'élément (button "Lancer le dé")
const buttonGoDice = document.querySelector('.go-dice');
// Appel de l'élément (dice entier)
const dice = document.querySelector('.dice');
// Appel des éléments div et valeurs input des faces du dé
const numberOne = document.querySelector('.one');
let valueOne = document.querySelector('.value-one').value;
const numberTwo = document.querySelector('.two');
let valueTwo = document.querySelector('.value-two').value;
const numberThree = document.querySelector('.three');
let valueThree = document.querySelector('.value-three').value;
const numberFour = document.querySelector('.four');
let valueFour = document.querySelector('.value-four').value;
const numberFive = document.querySelector('.five');
let valueFive = document.querySelector('.value-five').value;
const numberSix = document.querySelector('.six');
let valueSix = document.querySelector('.value-six').value;
// Appel des éléments players (hold score)
const holdPlayerOne = document.querySelector('.hold-player-two');
const holdPlayerTwo = document.querySelector('.hold-player-two');


// Ecoute l'évenement au click du button "lancé le dé"
buttonGoDice.addEventListener('click', function (){
    // Rajout de classe pour déclencher l'animation
    dice.classList.add('dice-turn')

    /* Math.random (min,max) On renvoie un nombre aléatoire entre une valeur min (incluse) et une valeur max (exclue) */
    /* Avec Math.round on va chercher le chiffre entier du résultat obtenu avec Math.random */
    function numberRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    // Const result va permettre la récupération de la valeur obtenu pour utilisation dans les conditions if/else
    const result = numberRandom(1,6);
    console.log(result);
    
    if (result === 1){
        // Image de la valeur obtenu
        numberTwo.style.backgroundImage = "url('./images/one.png')"
        
        /* EN COURS
            arraySum.push(`${valueOne}`)
            holdPlayerOne.innerHTML = sum
        */
        
        // function qui va arreter l'animation (setTimeout = 1s)
        function diceRemove(){
            dice.classList.remove('dice-turn')
        }
        setTimeout(diceRemove,1000)
    
  } else if(result === 2){
        numberTwo.style.backgroundImage = "url('./images/two.png')"
        
        function diceRemove(){
            dice.classList.remove('dice-turn')
        }
        setTimeout(diceRemove,1000)
    
  } else if(result === 3){
        numberTwo.style.backgroundImage = "url('./images/three.png')"

        function diceRemove(){
            dice.classList.remove('dice-turn')
        }
        setTimeout(diceRemove,1000)
    
  } else if(result === 4){
        numberTwo.style.backgroundImage = "url('./images/four.png')"
        
        function diceRemove(){
            dice.classList.remove('dice-turn')
        }
        setTimeout(diceRemove,1000)
    
  } else if(result === 5){
        numberTwo.style.backgroundImage = "url('./images/five.png')"
    
        function diceRemove(){
            dice.classList.remove('dice-turn')
        }
        setTimeout(diceRemove,1000)
    
  } else if(result === 6){
        numberTwo.style.backgroundImage = "url('./images/six.png')"
    
        function diceRemove(){
            dice.classList.remove('dice-turn')
        }
        setTimeout(diceRemove,1000) 
  }
})

/* EN COURS 

const arraySum = [];
let sum = 0;

for (let i = 0; i < arraySum.length; i++) {
        sum += arraySum[i];
    }

    const sumWithInitial = arraySum.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        sum
      );
      
    console.log(sumWithInitial);
    console.log(arraySum);
    console.log(sum);
*/

