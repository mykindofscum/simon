
/*----- constants -----*/

const buttons = {
    y: {
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
    },
    b: {
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'), 
    },
    g: {
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
    },
    r: {
        sound: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    }
}


/*----- app's state (variables) -----*/
let game, reset, start, strict;

/*----- cached element references -----*/
const playEl = document.querySelector("#round h1");
const resetEl = document.querySelector("#onOff h1");
const strictEl = document.querySelector("#strict h1");

const buttonPlayY = document.querySelector(".board #button-y");
const buttonPlayB = document.querySelector(".board #button-b");
const buttonPlayG = document.querySelector(".board #button-g");
const buttonPlayR = document.querySelector(".board #button-r");





/*----- event listeners -----*/
document.querySelector('.board #button-y').addEventListener('click', playStart);
document.querySelector('.board #button-b').addEventListener('click', playStart);
document.querySelector('.board #button-g').addEventListener('click', playStart);
document.querySelector('.board #button-r').addEventListener('click', playStart);



/*----- functions -----*/
init();

function init() {
    // display starts at 1 
    let round = [1, 3, 2, 3, 4, 1];
    
    reset = {
    };
    
    start = {
        
    };
    // press to start strict mode, make one mistake and the game starts over
    strict = {
        
    };
    winner = null;
    render(round);
}

function playStart() {
    
    return Math.floor(Math.random() * 4);
    showMoves()
}

function playStrict() {
}

function showMoves(movesArray) {
    // for each element in round
        // console.log the numbers in the round, 1 at a time with 1s between logs
        var movesArray = [1, 3, 2, 4];
        
        var offset = 0;
        buttonArray.forEach(function(moves) {
        setTimeout(function() {
            console.log(moves);
        }, 1000 + offset);
        offset += 1000;
        });

        // TODO: add an "active" class/manipulate style properties to show active button
       document.getElementById(".board #button-y").addEventListener('on-click')
        button.onclick = function() {

        }


        // TODO: play the associated sound from the 'buttons' const variable

    // calls playStart() / playStrict()
}

function increaseRound(currentRound) {
    // add a new element to the end of the currentRound array
    // call render again with the updated sequence
}

function render(currentRound) {
    // call showMoves(currentRound)
    showMoves(currentRound);
    // increment a roundCounter?
}






// Use Math.floor(Math.random() * length);  to randomize sequence(array of four, one for each button) each turn

