// changement icon de son <i class="fa-solid fa-volume-xmark"></i>

/* STRUCTURE HTML DYNAMIQUE */

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

structureDice();

/* GAME */

// Appel de l'élément (button "Lancer le dé")
const buttonGoDice = document.querySelector('.go-dice');
// Appel de l'élément (button "Hold")
const buttonHold = document.querySelector('.hold');
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
const holdPlayerOne = document.querySelector('.hold-player-one');
const holdPlayerTwo = document.querySelector('.hold-player-two');
// Appel des éléments players (total score)
const totalPlayerOne = document.querySelector('.total-player-one');
const totalPlayerTwo = document.querySelector('.total-player-two');
// Div des joueurs
const divPlayerOne = document.querySelector('.div-player-one');
const divPlayerTwo = document.querySelector('.div-player-two');

// Boolean player (qui va permettre de déclencher un changement de main joueur)
let PlayerOne = true
// Boolean résultat du dé = 1 (va permettre de garder le score total lorsque le joueur utilise le button hold )
let resultOne = false

// Tableau qui va recevoir les valeurs du dé obtenu (HOLD)
let arraySum = [];
// Tableaux qui va recevoir les valeurs du dé obtenu (HOLD vers TOTAL SCORE)
let arrayTotalScorePlayOne = [];
let arrayTotalScorePlayTwo = [];
// Tableaux qui va permettre l'affichage du score total
let totalPlayOne = []
let totalPlayTwo = []

// Charge l'animation (joueur qui a la main) au chargement du DOM
document.addEventListener('DOMContentLoaded', function(){
    divPlayerOne.classList.add('clignote')
})

/* FUNCTION */

// Function qui permet le changement (boolean = true/false) joueur
const changeValuePlayer = () => {
    PlayerOne = !PlayerOne
}

const additionValueHold = () => {
    // On transforme les valeurs obtenu dans le tableau arraySum (de string en numbers) afin d'effectuer une addition des valeurs avec reduce
    const newArraySumNumbs = arraySum.map((i) => Number(i));
    // Utilisation de la méthode reduce pour additionner les valeurs du nouveau tableau de nombres (newArraySumNumbs)
    const reducer = newArraySumNumbs.reduce(
        (accumulateur, valeurCourante) =>  accumulateur + valeurCourante, 0
        );
    // On envoie la valeur du résultat de reduce dans le front
    if(PlayerOne === true){ // PlayerOne
        holdPlayerOne.innerHTML = `${reducer}`
    } else if(PlayerOne === false){ // PlayerTwo
        holdPlayerTwo.innerHTML = `${reducer}`
    }
    // Condition si le score hold est supérieur ou égal a 100
    if (holdPlayerOne.innerHTML >= 100){

        setTimeout(function() {
            const newArrayTotalScoreNumbsOne = arrayTotalScorePlayOne.map((i) => Number(i));
            const reducerTotalScorePlayOne = newArrayTotalScoreNumbsOne.reduce(
            (accumulateur, valeurCourante) =>  accumulateur + valeurCourante, 0
            );
            
            totalPlayerOne.innerHTML = (`${reducerTotalScorePlayOne}`);
            
            holdPlayerOne.innerHTML = "0"
                
            if(totalPlayerOne.innerHTML >= 100){
                setTimeout(function() {
                        modal();
                }, 1000)
            }
        }, 1000)
    } else if (holdPlayerTwo.innerHTML >= 100){

        setTimeout(function() {
            const newArrayTotalScoreNumbsTwo = arrayTotalScorePlayTwo.map((i) => Number(i));
            const reducerTotalScorePlayTwo = newArrayTotalScoreNumbsTwo.reduce(
            (accumulateur, valeurCourante) =>  accumulateur + valeurCourante, 0
            );
            totalPlayerTwo.innerHTML = `${reducerTotalScorePlayTwo}`
            
            holdPlayerTwo.innerHTML = "0"
            
            if(totalPlayerTwo.innerHTML >= 100){
                setTimeout(function() {
                        modal();
                }, 1000)
            }
        }, 1000)
    }
}

const animationPlayer = () => {
    if(PlayerOne === true){
        changeValuePlayer();
        
        divPlayerOne.classList.remove('clignote');
        divPlayerTwo.classList.add('clignote');
        
        arraySum = []

        if(resultOne === true){
            let lastElementArrayPlayerOne = totalPlayOne[totalPlayOne.length -1]
            arrayTotalScorePlayOne = []
            arrayTotalScorePlayOne.push(lastElementArrayPlayerOne)
        }
        
        const newArrayTotalScoreNumbsOne = arrayTotalScorePlayOne.map((i) => Number(i));
        const reducerTotalScorePlayOne = newArrayTotalScoreNumbsOne.reduce(
        (accumulateur, valeurCourante) =>  accumulateur + valeurCourante, 0
        );
        totalPlayOne.push(`${reducerTotalScorePlayOne}`)

        if(resultOne === true){
            totalPlayOne.pop()
        }
        
        let lastElementArrayPlayerOne = totalPlayOne[totalPlayOne.length -1]
        totalPlayerOne.innerHTML = `${lastElementArrayPlayerOne}`;
        
        holdPlayerOne.innerHTML = "0"

        if(totalPlayerOne.innerHTML >= 100){
            setTimeout(function() {
                    modal();
            }, 1000)
        }
        
    } else if (PlayerOne === false){
        changeValuePlayer();
        
        divPlayerOne.classList.add('clignote');
        divPlayerTwo.classList.remove('clignote');
        
        arraySum = []

        if(resultOne === true){
            let lastElementArrayPlayerTwo = totalPlayTwo[totalPlayTwo.length -1]
            arrayTotalScorePlayTwo = []
            arrayTotalScorePlayTwo.push(lastElementArrayPlayerTwo)
        }
        
        const newArrayTotalScoreNumbsTwo = arrayTotalScorePlayTwo.map((i) => Number(i));
        const reducerTotalScorePlayTwo = newArrayTotalScoreNumbsTwo.reduce(
        (accumulateur, valeurCourante) =>  accumulateur + valeurCourante, 0
        );
        totalPlayTwo.push(`${reducerTotalScorePlayTwo}`)

        if(resultOne === true){
            totalPlayTwo.pop()
        }
        
        let lastElementArrayPlayerTwo = totalPlayTwo[totalPlayTwo.length -1]
        totalPlayerTwo.innerHTML = `${lastElementArrayPlayerTwo}`;
        
        holdPlayerTwo.innerHTML = "0"
        
        if(totalPlayerTwo.innerHTML >= 100){
            setTimeout(function() {
                    modal();
            }, 1000)
        }
    }
}


/* Ecoute l'évenement au click du button "lancé le dé" */

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

        resultOne = true
        // function qui va arreter l'animation (setTimeout = 1s)
        function diceRemove(){
            dice.classList.remove('dice-turn')
        }

        setTimeout(function() {
            diceRemove();
            animationPlayer();
            resultOne = false
        }, 1000)

  } else if(result === 2){
        numberTwo.style.backgroundImage = "url('./images/two.png')"
        // push dans le tableau (hold) de la valeur obtenu
        arraySum.push(`${valueTwo}`)

        function diceRemove(){
            dice.classList.remove('dice-turn')
        }

        if(PlayerOne === true){
            setTimeout(function() {
                diceRemove();
                additionValueHold();
                // push dans le tableau (total score) de la valeur obtenu
                arrayTotalScorePlayOne.push(`${valueTwo}`)
            }, 1000)
        } else if (PlayerOne === false){
            setTimeout(function() {
                diceRemove();
                additionValueHold();
                arrayTotalScorePlayTwo.push(`${valueTwo}`)
            }, 1000)
        }
    
  } else if(result === 3){
        numberTwo.style.backgroundImage = "url('./images/three.png')"

        arraySum.push(`${valueThree}`)

        function diceRemove(){
            dice.classList.remove('dice-turn')
        }
        
        if(PlayerOne === true){
            setTimeout(function() {
                diceRemove();
                additionValueHold();
                arrayTotalScorePlayOne.push(`${valueThree}`)
            }, 1000)
        } else if (PlayerOne === false){
            setTimeout(function() {
                diceRemove();
                additionValueHold();
                arrayTotalScorePlayTwo.push(`${valueThree}`)
            }, 1000)
        }
    
  } else if(result === 4){
        numberTwo.style.backgroundImage = "url('./images/four.png')"
        
        arraySum.push(`${valueFour}`)

        function diceRemove(){
            dice.classList.remove('dice-turn')
        }
        
        if(PlayerOne === true){
            setTimeout(function() {
                diceRemove();
                additionValueHold();
                arrayTotalScorePlayOne.push(`${valueFour}`) 
            }, 1000)
        } else if (PlayerOne === false){
            setTimeout(function() {
                diceRemove();
                additionValueHold();
                arrayTotalScorePlayTwo.push(`${valueFour}`)
            }, 1000)
        }
    
  } else if(result === 5){
        numberTwo.style.backgroundImage = "url('./images/five.png')"
    
        arraySum.push(`${valueFive}`)

        function diceRemove(){
            dice.classList.remove('dice-turn')
        }
        
        if(PlayerOne === true){
            setTimeout(function() {
                diceRemove();
                additionValueHold();
                arrayTotalScorePlayOne.push(`${valueFive}`)
            }, 1000)
        } else if (PlayerOne === false){
            setTimeout(function() {
                diceRemove();
                additionValueHold();
                arrayTotalScorePlayTwo.push(`${valueFive}`)
            }, 1000)
        }
    
  } else if(result === 6){
        numberTwo.style.backgroundImage = "url('./images/six.png')"

        arraySum.push(`${valueSix}`)

        function diceRemove(){
            dice.classList.remove('dice-turn')
        }

        if(PlayerOne === true){
            setTimeout(function() {
                diceRemove();
                additionValueHold();
                arrayTotalScorePlayOne.push(`${valueSix}`)
            }, 1000)
        } else if (PlayerOne === false){
            setTimeout(function() {
                diceRemove();
                additionValueHold();
                arrayTotalScorePlayTwo.push(`${valueSix}`)
            }, 1000)
        }
  } 
})

/* Ecoute l'évenement au click du button "Hold" */

buttonHold.addEventListener('click', () =>{
        if(arraySum.length === 0){
            var nextPlayer = document.querySelector('.next-player');
            nextPlayer.style.display = "block"
            nextPlayer.innerHTML = "Tu as passer ton tour !";
            nextPlayer.style.color = "red"
            nextPlayer.style.fontSize = "1.1em"
            setTimeout(function() {
                animationPlayer();
            }, 1000)
            setTimeout(function() {
                nextPlayer.style.display = "none"
            }, 2000)
        } else {
        setTimeout(function() {
            animationPlayer();
        }, 1000)
    }
});

/* MODAL */

const modal = () => {

const modalLink = document.querySelector("[data-toggle=modal]");

    let target = modalLink.dataset.target

    let modal = document.querySelector(target)

    modal.classList.add("show");

    const modalCloses = document.querySelectorAll("[data-dismiss=dialog]");

    for (let close of modalCloses){

        close.addEventListener('click', function(){
            modal.classList.remove("show");
        })
    }

    modal.addEventListener('click', function(e){
        this.classList.remove("show");
    });

    modal.children[0].addEventListener('click', function(e){
        e.stopPropagation();
    })
}