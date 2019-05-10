
/*----- constants -----*/ 

const buttonSound = [
    'sound/piano-e.wav',
    'sound/piano-c.wav',
    'sound/piano-a.wav',
    'sound/piano-g.wav',
    'sound/Startexplosion5.wav'
];

const winAudio = new Audio('sound/correct-sound.wav');
const loseAudio = new Audio('sound/8-bit-wrong-2.wav');
let soundPlayer = new Audio();

// buttonSound.play();

/*----- app's state (variables) -----*/
let sequence, guess, reset, gameover, start, strict;
let playerArray = [];
var movesArray = [0, 1, 2, 3];
let buttonId = ['button-y', 'button-b', 'button-r', 'button-g'];

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

const msgEl = document.getElementById('msg');



/*----- event listeners -----*/
document.querySelector('.board #button-y').addEventListener('click', playerSays);
document.querySelector('.board #button-b').addEventListener('click', playerSays);
document.querySelector('.board #button-g').addEventListener('click', playerSays);
document.querySelector('.board #button-r').addEventListener('click', playerSays);

// start button init and playStart
document.querySelector('#start').addEventListener('click', playStart);
document.querySelector('#reset').addEventListener('click', resetGame);




/*----- functions -----*/

// debugger;
//if start button is pressed, run playStart function, game starts
// playStart();

//init();

function playStart(evt) {
    
    simonSays();
}


// Simonsays
function simonSays() {
    var offset = 0;
    for (let i = 0;i < 4;i++) {
        movesArray[i] = Math.floor(Math.random() * 4);
    } 
    console.log(movesArray);
    movesArray.forEach(function(move) {
        setTimeout(function() {
            document.getElementById(`${buttonId[move]}`).classList.add('active-button');
            
            setTimeout(function() {
                document.getElementById(`${buttonId[move]}`).classList.remove('active-button');
            }, 700);
            
            console.log(move);
        }, 800 + offset);
        
        offset += 500;
    });
}

function resetGame() {
    playerArray = [];
}

function playerSays(evt) {
    let soundIndex = evt.target.getAttribute('data-button');
    
    // if statement that either plays the right sound
    // if (soundIndex || winner) {
    // }
        // player Wins, prompt replace H1 with You Win
        soundPlayer.src = buttonSound[soundIndex];
        soundPlayer.play();
        // or plays the wrong sound and calls simonSays()
    
    // push soundIndex into a playerArray array
    playerArray.push(parseInt(soundIndex));

    console.log(playerArray);

    if (playerArray.length === movesArray.length) {
        getWinner();
    }
}

function getWinner() {
   
    
    let result = true;

    // playerArray.forEach(function (e1,i) { 
    //     movesArray(function (e2) {    
            // if (e1.length > 1 && e2.length) {
                // result = compare(e1, e2);
            // } else 
            
    //         if (e1 !== e2 ){
    //             result = false
    //         } else {
    //             result = true
    //         }
    //     });
    // });
    for (let i = 0; i < playerArray.length; i++) {
        if (playerArray[i] !== movesArray[i]) {
            result = false;
        }
        
    }
    if (result === true) {
        winAudio.play();
        msgEl.innerHTML = `You Win!`; 
        playerArray = [];
    } else {
        loseAudio.play();
        msgEl.innerHTML = `You Lose!`; 
        //msg 'You Lost, maybe try again'
    }

}

    // if (playerArray.length === movesArray.length) {
    //     winAudio.play();
    // } else {
    //     loseAudio.play();
    // }
        
    
    
    
    // document.getElementById("h1").innerHTML = "You Win!";
        // alert (`You Win!`);
        // winAudio.play();
        // playerArray = [];

        // loseAudio.play();







