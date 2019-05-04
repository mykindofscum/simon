/*----- constants -----*/

const buttons = {
    y: {

    },
    b: {

    },
    g: {

    },
    r: {

    }
}


/*----- app's state (variables) -----*/
let round, onOff, sound, strict;

/*----- cached element references -----*/
const roundEl = document.querySelector("#round h1");
const onOffEl = document.querySelector("#onOff h1");
const soundEl = document.querySelector("#sound h1");
const strictEl = document.querySelector("#strict h1");

const buttonPlayY = document.querySelector(".board #button-y");
const buttonPlayB = document.querySelector(".board #button-b");
const buttonPlayG = document.querySelector(".board #button-g");
const buttonPlayR = document.querySelector(".board #button-r");

const buttonPush = document.querySelector('');



/*----- event listeners -----*/
document.querySelector('.board #button-y').addEventListener('click', playSimon);
document.querySelector('.board #button-b').addEventListener('click', playSimon);
document.querySelector('.board #button-g').addEventListener('click', playSimon);
document.querySelector('.board #button-r').addEventListener('click', playSimon);

/*----- functions -----*/
init();

function init() {
    round = {
        r: 0
    };
    // button is red means off, green means on, must switch on to press other buttons
    onOff = {
    };
    //starts at the off position
    sound = {

    };
    
    strict = {

    }
}

function playSimon() {

}

function getRandomIdx() {
    return Math.floor(Math.random() * 4);
}




// Use Math.floor(Math.random() * length);  to randomize sequence(array of four, one for each button) each turn

// c1830 BR Code