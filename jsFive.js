let radPurple = 41;
let height_scorp = 0;

let FC = 11;
let forceCooficent = FC;

let jumpPermission = false;
let gravitation = true;

let countDown = 0;
let countUp = 0;

let toRight = false;
let toLeft = false;
let toUp = false;
let toDown = false;

let canv = document.getElementById('canvas');
let ctx = canv.getContext('2d');

const b = 45; // for X coordinates
const c = 100;
const d = 0;
const f = 400;
const g = 170;
const s = 240;
const t = 300;
const k = 350;

const a = 285; // for Y coordinates
const e = 330;
const o = 250;
const y = 120;
const a1 = 100;
const e1 = 200;
const u = canv.height;

let purpleX = 210;
let purpleY = e;

let arrY = [a1, y, e1, o, a, e, u];

let arrX0 = [b, c];
let arrX1 = [g, s];
let arrX2 = [b, c];
let arrX3 = [g, s];
let arrX4 = [b, c, t, k];
let arrX5 = [d, f];
let arrX6 = [u];

let arrArr = [arrX0, arrX1, arrX2, arrX3, arrX4, arrX5, arrX6];

let levelInvert;

let pltfrm = true;

initPositionY();

window.addEventListener('keyup', keyUpBool, false);
window.addEventListener('keydown', keyMoveX, false);
window.addEventListener('keydown', keyMoveY, false);

document.querySelector("#Jump").addEventListener('mousedown', jump);
document.querySelector("#Jump").addEventListener('touchstart', jump);

//document.querySelector("#test").addEventListener('mousedown', test);
//document.querySelector("#test").addEventListener('touchstart', test);
//document.querySelector("#test_1").addEventListener('mousedown', test_1);

document.querySelector("#R").addEventListener('mousedown', buttonRight);
document.querySelector("#R").addEventListener('touchstart', buttonRight);
document.querySelector("#L").addEventListener('mousedown', buttonLeft);
document.querySelector("#L").addEventListener('touchstart', buttonLeft);
document.querySelector("#U").addEventListener('mousedown', buttonUp);
document.querySelector("#U").addEventListener('touchstart', buttonUp);
document.querySelector("#D").addEventListener('mousedown', buttonDown);
document.querySelector("#D").addEventListener('touchstart', buttonDown);



document.querySelector("#R").addEventListener('mouseup', abortRight);
document.querySelector("#L").addEventListener('mouseup', abortLeft);
document.querySelector("#U").addEventListener('mouseup', abortUp);
document.querySelector("#D").addEventListener('mouseup', abortDown);

document.querySelector("#R").addEventListener('touchend', abortRight);
document.querySelector("#L").addEventListener('touchend', abortLeft);
document.querySelector("#U").addEventListener('touchend', abortUp);
document.querySelector("#D").addEventListener('touchend', abortDown);




function drawing() {


    ctx.clearRect(0, 0, canv.width, canv.height);

    //moveStand_();

    ctx.drawImage(background, 750, 400, 400, 390, 0, 0, 400, 400);
    box_move();

    // ctx.beginPath();
    // ctx.arc(purpleX, purpleY, radPurple, 0 * Math.PI, 2 * Math.PI, false);
    // ctx.fillStyle = 'yellow';
    // ctx.fill();
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = 'red';
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = 1;
    // ctx.moveTo(purpleX, purpleY);
    // ctx.lineTo(purpleX + 50, purpleY);


    ctx.stroke();



    ctx.font = "15px Tahoma";
    ctx.fillStyle = "black";



    // ctx.fillText(`forceCooficent:  ${forceCooficent}`, 30, 30);
     //ctx.fillText(`jumpPermission:  ${jumpPermission}`, 30, 50);
    // ctx.fillText(`gravitation:  ${gravitation}`, 30, 70);
    // ctx.fillText(`purpleX:  ${purpleX}`, 30, 90);
    // ctx.fillText(`purpleY: ${purpleY}`, 30, 110);
    // ctx.fillText(`pltfrm: ${pltfrm}`, 30, 130);
    // ctx.fillText(`fallPltfrm: ${fallPltfrm}`, 30, 150);
    // ctx.fillText(`levelInvert: ${levelInvert}`, 30, 170);
     //ctx.fillText(`arrY[levelInvert]: ${arrY[levelInvert]}`, 30, 190);
   // ctx.fillText(`tapLand : ${tapLand}`, 30, 210);
   // ctx.fillText(`frame : ${frame}`, 30, 230);

    // ctx.fillText(`rightCheck : ${rightCheck}`, 250, 30);
    // ctx.fillText(`count : ${count}`, 250, 60);
    // ctx.fillText(`toDown: ${toDown}`, 30, 250);
    // ctx.fillText(`toUp: ${toUp}`, 30, 280);
    // ctx.fillText(`toLeft: ${toLeft}`, 30, 310);
    // ctx.fillText(`toRight: ${toRight}`, 30, 340);

    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.moveTo(b, a1);
    ctx.lineTo(c, a1);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.moveTo(b, e1);
    ctx.lineTo(c, e1);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.moveTo(b, a);
    ctx.lineTo(c, a);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.moveTo(k, a);
    ctx.lineTo(t, a);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.moveTo(d, e);
    ctx.lineTo(f, e);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.moveTo(g, o);
    ctx.lineTo(s, o);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.moveTo(g, y);
    ctx.lineTo(s, y);
    ctx.stroke();

    scorpion.style.display = 'none';
    scorpion_M.style.display = 'none';
    background.style.display = 'none';
}
//console.log('hi)');

function jumpCheck() {

    // console.log('jumpCheck()');

    if (jumpPermission === true) {

        if (forceCooficent === 0) {
            countY_invert();
            gravitation = true;
            jumpPermission = false;
        }

        if (gravitation === false && forceCooficent >= 0) {
            raise();

        } else if (gravitation === true) {
            fall();

        }
        if (gravitation === false && forceCooficent < 0) {
            forceCooficent = 0;
           // return 0;
        }

      //  checkY_invert();

    }

}
let count = 0;
let fallPltfrm = true;

function fallCheck() {
    if (pltfrm === true && jumpPermission === true || pltfrm === false && jumpPermission === true) {
        jumpCheck();
    }

    if (pltfrm === false && jumpPermission === false) {
        // count++;
        fall();
       checkY_invert();
        if (fallPltfrm === true) {
            countY_invert();
            fallPltfrm = false;
            forceCooficent = 3; // for realistic falling
            // count++;
        }
        if (purpleY + height_scorp === arrY[levelInvert]) {
            fall();

            levelInvert++;
            //count++;

        }
    } else if (pltfrm === true && jumpPermission === false) {
        // count++;
        if (pltfrm === true && purpleY + height_scorp != arrY[levelInvert] ) {
            fall();
            checkY_invert();
            //count++;
        }

        if (fallPltfrm === false) {
            fallPltfrm = true;
            // count++;
        }
    }


}


function jump() {

    if (jumpPermission === false && gravitation === true) {

        jumpPermission = true;
        gravitation = false;
    } else if (jumpPermission === false && gravitation === false) {
        return 0;
    }
    //   console.log('level: ', level);
    console.log('----------------------------------jump-----------------------------');

}

let al = 15, ala = 21;

function checkX() {

    // console.log('levelInvert : ', levelInvert);

    for (let i = 0; arrArr[levelInvert].length > i; i++) {
        // console.log('arrArr[levelInvert] : ', arrArr[levelInvert]);
        if (i % 2 === 0) { // begin  platforms
            //  console.log('i % 2 === 0 , i : ', i);

            if (purpleX + al > arrArr[levelInvert][i] && purpleX < arrArr[levelInvert][i + 1] || purpleX + al > arrArr[levelInvert][i] && arrArr[levelInvert][i + 1] == undefined) {
                pltfrm = true;
                // console.log('pltfrm = true');
            } else if (purpleX + al < arrArr[levelInvert][0]) {
                pltfrm = false;
                //console.log('pltfrm = false');
            }
        }

        if (i % 2 !== 0) { // end  platforms
            //    console.log("i % 2 !== 0 , i : ", i);
            if (purpleX + ala > arrArr[levelInvert][i] && purpleX + ala  < arrArr[levelInvert][i + 1] || purpleX + ala > arrArr[levelInvert][i] && arrArr[levelInvert][i + 1] == undefined) {
                pltfrm = false;
                //console.log('pltfrm = false');
            }
        }
    }
}


// //---------------------------- terms of movements ----------------------------------
function moveUp() {
    //purpleY = purpleY - 2;
}

function moveDown() {
   // purpleY = purpleY + 2;
}

function moveRight() {
    purpleX = purpleX + 2;
}

function moveLeft() {
    purpleX = purpleX - 2;
}

//---------------------------- movement for keyboard buttons ----------------------------------

function keyMoveX(e) {

    if (e.keyCode === 39) {
        toRight = true;
    } else if (e.keyCode === 37) {
        toLeft = true;
    }
}

function keyMoveY(e) {
    purpleY = Math.round(purpleY);


    if (e.keyCode === 38) {
        toUp = true;
    } else if (e.keyCode === 40) {
        toDown = true;
    } else if (e.keyCode === 32) {
        jump();
    }
}

function keyUpBool(e) {
    if (e.keyCode === 39) {
        toRight = false;
    } else if (e.keyCode === 37) {
        toLeft = false;
    } else if (e.keyCode === 38) {
        toUp = false;
    } else if (e.keyCode === 40) {
        toDown = false;
    }
}

//---------------------------- movement for brauser buttons ----------------------------------

function buttonRight() {
    toRight = true;
}

function buttonLeft() {
    toLeft = true;
}

function buttonUp() {
    toUp = true;
}

function buttonDown() {
    toDown = true;
}


function abortRight() {
 toRight = false;
}

function abortLeft() {
    toLeft = false;
}

function abortUp() {
    toUp = false;
}

function abortDown() {
    toDown = false;
}

//----------------------------- terms of movements ----------------------------------------
function moveWithoutDelay() {


    if (toRight === true && toUp === false && toDown === false && tapLand === false) {
        moveRight();
    } else if (toLeft === true && toUp === false && toDown === false && tapLand === false) {
        moveLeft();
    } else if (toUp === true && toLeft === false && toRight === false) {
        moveUp();
    } else if (toDown === true && toLeft === false && toRight === false) {
        moveDown();

    } else if (toRight === true && toUp === true) {
        moveRight();
        moveUp();
    } else if (toRight === true && toDown === true) {
        // moveRight();
        // moveDown();
        return 0;
    } else if (toLeft === true && toUp === true) {
        moveLeft();
        moveUp();
    } else if (toLeft === true && toDown === true) {
        // moveLeft();
        // moveDown();
        return 0;
    }
}

function engineGear() {
    drawing();
    moveWithoutDelay();
    checkX();
    fallCheck();

}

function engineGear_1() {

    lineGrow();
    check_move();
}

setInterval(engineGear, 30);

setInterval(engineGear_1,130);