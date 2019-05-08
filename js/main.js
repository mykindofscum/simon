// modify to use "active" class *
// toggle "active" class for each round by the computer
// add Math.random() to moveArray 
// record all moves by the computer in a new array
// https://s3.amazonaws.com/freecodecamp/simonSound3.mp3
// 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
// 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3',
// 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
// 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',


/*----- constants -----*/ 

const buttonSound = [
    'sound/piano-e.wav',
    'sound/piano-c.wav',
    'sound/piano-a.wav',
    'sound/piano-g.wav',
    'sound/correct-sound.wav',
    'sound/Sad_Trombone.mp3'
];


// buttonSound.play();
// E note: blue, c# yellow, a red, e octave down: green

/*----- app's state (variables) -----*/
let sequence, guess, badGuess, reset, gameover, start, strict;
const soundArray = [1, 2, 3, 4, 5, 6];
let guessArray = [];
let seqArray = [];

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

document.querySelector('#start').addEventListener('click', playStart);



var soundPlayer = new Audio();

function playStart(evt) {
    console.log(evt.target.getAttribute('data-button'));
    
    debugger;
    
    if (evt.target.id !== "start") {
        //sound from the buttonSoundArray linked to 'data-button'.
        soundPlayer.src = buttonSound[parseInt(evt.target.getAttribute('data-button')) - 1]
        soundPlayer.play()
    } else {
        soundPlayer.src = buttonSound[4]
        soundPlayer.play();
    }
    
    //if start button is pressed, run playStart function, game starts
    

    this.classList.toggle('active');

    var movesArray = [1, 2, 3, 4];
    var offset = 0;
    movesArray.forEach(function(movesArray) {
    setTimeout(function() {
        document.getElementById('button-y').classList.add('active-button');
    setTimeout(function() {
        document.getElementById('button-y').classList.remove('active-button');
    }, 250);
        console.log(Math.floor(Math.random(movesArray) * 4) + 1);
    }, 1000 + offset);
    offset += 1000;
});


// this.movesArray.push(seqArray);
    // if (Math.floor(Math.random(movesArray) * 4) + 1 === guessArray) {
    //     soundPlayer.src = buttonSound[6]
    //     soundPlayer.play([5]);
    // }







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


function playStrict() {

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
