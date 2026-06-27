let swtch = false;
function test_1() {
  if (swtch === false) {
    swtch = true;
  } else {
    swtch = false;
  }
  countY();
  console.log("swtch: ", swtch);
}

let sign;

let shot = 1;

let mVnG = false;

let box_move;
// -------------------------------------------
// function check_move() {
//   // console.log(shot, 'shot');
//   if (
//     toRight === true &&
//     toDown === false &&
//     dMove === true &&
//     upMove === false &&
//     tapLand === false
//   ) {
//     if (box_move !== moveRight_) {
//       box_move = moveRight_;
//     }
//   } else if (
//     toRight === false &&
//     toLeft === false &&
//     dMove === true &&
//     upMove === false &&
//     tapLand === false
//   ) {
//     if (box_move !== moveStand_) {
//       box_move = moveStand_;
//     }
//   } else if (
//     toLeft === true &&
//     toDown === false &&
//     dMove === true &&
//     upMove === false &&
//     tapLand === false
//   ) {
//     if (box_move !== moveLeft_) {
//       box_move = moveLeft_;
//     }
//   } else if (
//     toDown === true &&
//     dMove === true &&
//     upMove === false &&
//     tapLand === false
//   ) {
//     if (box_move !== moveSit_) {
//       box_move = moveSit_;
//     }
//   } else if (
//     (toLeft === true &&
//       toDown === true &&
//       dMove === true &&
//       upMove === false &&
//       tapLand === false) ||
//     (toRight === true &&
//       toDown === true &&
//       dMove === true &&
//       upMove === false &&
//       tapLand === false)
//   ) {
//     if (box_move !== moveBlockSit_) {
//       box_move = moveBlockSit_;
//     }
//   } else if (dMove === false && tapLand === false) {
//     if (box_move !== moveJumpFall_) {
//       box_move = moveJumpFall_;
//     }
//   } else if (upMove === true && tapLand === false) {
//     if (box_move !== moveJumpRaise_) {
//       box_move = moveJumpRaise_;
//     }
//   }
// }
// ----------------------
function check_move() {
  if (tapLand === true) {
    if (box_move !== moveJumpEnd_) box_move = moveJumpEnd_;
    return;
  }
  if (dMove === false && !upMove) {
    if (box_move !== moveJumpFall_) box_move = moveJumpFall_;
    return;
  }
  if (upMove) {
    if (box_move !== moveJumpRaise_) box_move = moveJumpRaise_;
    return;
  }
  // дальше только ground-состояния (dMove === true, не в воздухе)
  if (toDown && (toLeft || toRight)) {
    if (box_move !== moveBlockSit_) box_move = moveBlockSit_;
  } else if (toDown) {
    if (box_move !== moveSit_) box_move = moveSit_;
  } else if (toRight) {
    if (box_move !== moveRight_) box_move = moveRight_;
  } else if (toLeft) {
    if (box_move !== moveLeft_) box_move = moveLeft_;
  } else if (box_move !== moveStand_) {
    box_move = moveStand_;
  }
}

function countY_invert() {
  //console.log('arrY.length : ', arrY.length);
  levelInvert = 0;
  for (let i = 0; arrY.length > i; i++) {
    if (arrY[i] <= height_scorp + purpleY) {
      levelInvert++;
      // console.log(levelInvert);
    }
  }
}

let dMove = true;
let tapLand = false;

function checkY_invert() {
  console.log("checkY_invert");
  dMove = false;
  //console.log(arrY[levelInvert]);
  if (purpleY + height_scorp >= arrY[levelInvert]) {
    purpleY = arrY[levelInvert] - height_scorp;

    if (pltfrm === true) {
      // for falling without change frame
      dMove = true;
    }

    if (forceCooficent != FC && pltfrm === true) {
      forceCooficent = FC;
    }
    // count++;
    //  console.log(' checkY_invert  levelInvert : ', levelInvert);
  }
  //count++;
}

function fall() {
  forceCooficent = forceCooficent + 0.5;
  forceCooficent = Math.round(forceCooficent * 10) / 10;
  if (forceCooficent > FC) {
    forceCooficent = FC;
  }
  purpleY = purpleY + forceCooficent;

  if (dMove === false) {
    upMove = false;
  }
  if (purpleY + height_scorp > arrY[levelInvert] - 2 && pltfrm === true) {
    tapLand = true;
  }
}

let upMove = false;

function raise() {
  forceCooficent = forceCooficent - 0.5;
  forceCooficent = Math.round(forceCooficent * 10) / 10;
  purpleY = purpleY - forceCooficent;
  purpleY = Math.round(purpleY * 10) / 10;
  upMove = true;
}

let initCount = 0;
function initPositionY() {
  // console.log("initPositionY");
  for (let i = 0; arrY.length > i; i++) {
    if (purpleY > arrY[i]) {
      initCount++;
    }
    // console.log(initCount);
  }
  levelInvert = initCount;
}
