
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


/*----- app's state (variables) -----*/
let guess, start;
let playerArray = [];
let movesArray = [0, 1, 2, 3];
let buttonId = ['button-y', 'button-b', 'button-r', 'button-g'];


/*----- cached element references -----*/
const buttonY = document.querySelector(".board #button-y");
parseInt(buttonY.getAttribute('data-button'));
const buttonB = document.querySelector(".board #button-b");
parseInt(buttonB.getAttribute('data-button'));
const buttonG = document.querySelector(".board #button-g");
parseInt(buttonG.getAttribute('data-button'));
const buttonR = document.querySelector(".board #button-r");
parseInt(buttonR.getAttribute('data-button'));
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/
document.querySelector('.board #button-y').addEventListener('click', playerSays);
document.querySelector('.board #button-b').addEventListener('click', playerSays);
document.querySelector('.board #button-g').addEventListener('click', playerSays);
document.querySelector('.board #button-r').addEventListener('click', playerSays);
document.querySelector('#start').addEventListener('click', playStart);

/*----- functions -----*/

function playStart(evt) {
    msgEl.innerHTML = '';
    playerArray = [];
    simonSays();
}

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
            
        }, 800 + offset);
        
        offset += 1000;
    });
}

function playerSays(evt) {
    let soundIndex = evt.target.getAttribute('data-button');
        soundPlayer.src = buttonSound[soundIndex];
        soundPlayer.play();
        playerArray.push(parseInt(soundIndex));
    
        console.log(playerArray);

    if (playerArray.length === movesArray.length) {
        getWinner();
    } 
}

function getWinner() {
   
    let result = true;
    
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
        playerArray = [];
       }
}


    
    
    







