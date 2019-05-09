// modify to use "active" class *
// toggle "active" class for each round by the computer
// add Math.random() to moveArray 
// record all moves by the computer in a new array

/*----- constants -----*/ 

const buttonSound = [
    'sound/piano-e.wav',
    'sound/piano-c.wav',
    'sound/piano-a.wav',
    'sound/piano-g.wav',
    'sound/correct-sound.wav',
    'sound/Startexplosion5.wav',
    'sound/8-bit-wrong-2.wav'
];

// buttonSound.play();

/*----- app's state (variables) -----*/
let sequence, guess, badGuess, reset, gameover, start, strict;
let guessArray = [];
let seqArray = [];
let buttonId = ['button-y', 'button-b', 'button-g', 'button-r'];
let matchArray = true;
var movesArray = [0, 1, 2, 3];


/*----- cached element references -----*/
const playEl = document.querySelector("#round h1");
const resetEl = document.querySelector("#reset h1");
const strictEl = document.querySelector("#strict h1");

const buttonPlayY = document.querySelector(".board #button-y");
parseInt(buttonPlayY.getAttribute('data-button'));
// > "1"
const buttonPlayB = document.querySelector(".board #button-b");
parseInt(buttonPlayB.getAttribute('data-button'));

const buttonPlayG = document.querySelector(".board #button-g");
parseInt(buttonPlayG.getAttribute('data-button'));

const buttonPlayR = document.querySelector(".board #button-r");
parseInt(buttonPlayR.getAttribute('data-button'));




/*----- event listeners -----*/
document.querySelector('.board #button-y').addEventListener('click', playStart);
document.querySelector('.board #button-b').addEventListener('click', playStart);
document.querySelector('.board #button-g').addEventListener('click', playStart);
document.querySelector('.board #button-r').addEventListener('click', playStart);
// start button init and playStart
document.querySelector('#start').addEventListener('click', playStart);



/*----- functions -----*/

init();
function init() {
    // display starts at 1 
    
    
    reset = {
    };
    
    start = {
        
    };
    // press to start strict mode, make one mistake and the game starts over
    strict = {
        
    };
    winner = null;
    // render(round);
}

playStart();
var soundPlayer = new Audio();
    function playStart(evt) {
    let soundIndex = evt.target.getAttribute('data-button');
    soundPlayer.src = buttonSound[soundIndex];
    soundPlayer.play();

// debugger;
//if start button is pressed, run playStart function, game starts


this.classList.toggle('active');
var movesArray = [0, 1, 2, 3];
var offset = 0;
movesArray.forEach(function(move) {
    setTimeout(function() {
        document.getElementById(`${buttonId[move]}`).classList.add('active-button');
        
        setTimeout(function() {
            document.getElementById(`${buttonId[move]}`).classList.remove('active-button');
    }, 500);
        console.log(Math.floor(Math.random() * 4) + 1);
    }, 1000 + offset);
    
    offset += 1000;
    seqArray.push(Math.floor(Math.random() * 4 + 1));
});

function addSeqArray() {
    let rando = Math.floor(Math.random() * 4 + 1)
    switch(rando) {
        case 'yellow':
        seqArray.push(0);
        break;
        case 'blue':
        seqArray.push(1);
        break;
        case 'green':
        seqArray.push(2);
        break;
        case 'red':
        seqArray.push(3);
    }
}



function showMoves(movesArray) {
    // for each element in round
    // console.log the numbers in the round, 1 at a time with 1s between logs
    // var movesArray = [1, 2, 3, 4];
    // (Math.random(movesArray['']));
    
    // var offset = 0;
    // movesArray.forEach(function(moves) {
        // setTimeout(function() {
            //     console.log(moves);
            // }, 1000 + offset);
            // offset += 1000;
            // });
            

            
            // TODO: play the associated sound from the 'buttons' const variable
            
            // calls playStart() / playStrict()
        }
        
        function increaseRound(currentRound) {
            // add a new element to the end of the currentRound array
            return Math.floor(Math.random() * 4) + 1;
            // call render again with the updated sequence
        }
        
        //function getRandomSeq(max) {
            //     return Math.floor(Math.random() * Math.floor(max));
            // }
            // console.log(getRandomSeq(5));
            
          
                // call showMoves(currentRound)
           
                // increment a roundCounter?
    }
