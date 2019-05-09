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
let sequence, guess, reset, gameover, start, strict;
let playerArray = [];
let seqArray = [];
let buttonId = ['button-y', 'button-b', 'button-g', 'button-r'];
let matchArray = true;
var movesArray = [0, 1, 2, 3];
//  

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

// debugger;
//if start button is pressed, run playStart function, game starts
// playStart();

init();

function playStart(evt) {
let soundIndex = evt.target.getAttribute('data-button');
soundPlayer.src = buttonSound[soundIndex];
soundPlayer.play();
}

// Simonsays
function playStart(evt) {
    var offset = 0;
    movesArray.forEach(function(move) {
    setTimeout(function() {
        document.getElementById(`${buttonId[move]}`).classList.add('active-button');
    setTimeout(function() {
            document.getElementById(`${buttonId[move]}`).classList.remove('active-button');
    }, 200);
        // console.log(Math.floor(Math.random() * 4) + 1);
    }, 700 + offset);
    
    offset += 2000;
    // seqArray.push(Math.floor(Math.random() * 4 + 1));
    });
    addSeqArray();
}

function addSeqArray() {
    seqArray.push(Math.floor(Math.random() * 4 + 1)) ;
}

function playerGuess() {
    
    if (playerArray.length === seqArray.length) {
        //player Correct sound 
    //     add player's clicks into playerArray
    // } else play Wrong answer sound clip 
    // clear playerArr .emptyt()
    // prompt "Wrong, guess again"
}

// function getWinner() {
    
// }


function init() {
    
    turn = 1;
    winner = null;
}


function showMoves(movesArray) {
    
}

function increaseRound(currentRound) {
    // add a new element to the end of the currentRound array
    return Math.floor(Math.random() * 4) + 1;
    // call render again with the updated sequence
}


// let rando = Math.floor(Math.random() * 4 + 1)
// switch(rando) {
//     case 'yellow':
//     seqArray.push(0);
//     break;
//     case 'blue':
//     seqArray.push(1);
//     break;
//     case 'green':
//     seqArray.push(2);
//     break;
//     case 'red':
//     seqArray.push(3);

// for each element in round
// console.log the numbers in the round, 1 at a time with 1s between logs
}