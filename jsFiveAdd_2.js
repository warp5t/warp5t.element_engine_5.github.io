let frame;
let trig_sit = true;
let trig_sitBlock = true;
let ctn = 0;

function lineGrow() {
  if (toRight === false && toLeft === false) {
    if (shot >= 7) {
      shot = 1;
    } else {
      shot++;
    }

    if (shot === 1) {
      frame = move_idle[0];
    } else if (shot === 2) {
      frame = move_idle[1];
    } else if (shot === 3) {
      frame = move_idle[2];
    } else if (shot === 4) {
      frame = move_idle[3];
    } else if (shot === 5) {
      frame = move_idle[4];
    } else if (shot === 6) {
      frame = move_idle[5];
    } else if (shot === 7) {
      frame = move_idle[6];
    }
  } else if (toRight === true) {
    if (shot >= 9) {
      shot = 1;
    } else {
      shot++;
    }

    if (shot === 1) {
      frame = move_right[0];
    } else if (shot === 2) {
      frame = move_right[1];
    } else if (shot === 3) {
      frame = move_right[2];
    } else if (shot === 4) {
      frame = move_right[3];
    } else if (shot === 5) {
      frame = move_right[4];
    } else if (shot === 6) {
      frame = move_right[5];
    } else if (shot === 7) {
      frame = move_right[6];
    } else if (shot === 8) {
      frame = move_right[7];
    } else if (shot === 9) {
      frame = move_right[8];
    }
  } else if (toLeft === true) {
    if (shot >= 9) {
      shot = 1;
    } else {
      shot++;
    }

    if (shot === 1) {
      frame = 471;
    } else if (shot === 2) {
      frame = 404;
    } else if (shot === 3) {
      frame = 346;
    } else if (shot === 4) {
      frame = 288;
    } else if (shot === 5) {
      frame = 231;
    } else if (shot === 6) {
      frame = 174;
    } else if (shot === 7) {
      frame = 116;
    } else if (shot === 8) {
      frame = 59;
    } else if (shot === 9) {
      frame = 0;
    }
  }

  if (toDown === false && trig_sit === true) {
    trig_sit = false;
  } else if (toDown === true) {
    if (shot >= 3) {
      shot = 3;
    } else {
      shot++;
    }
    if (shot > 1 && trig_sit === false) {
      shot = 1;
      trig_sit = true;
    }

    if (shot === 1) {
      frame = move_sit[1];
      grabY = move_sit.grab1Y;
      drawX = move_sit.draw_x1;
      drawY = move_sit.draw_y1;
    } else if (shot === 2) {
      frame = move_sit[2];
      grabY = move_sit.grab2Y;
      drawX = move_sit.draw_x2;
      drawY = move_sit.draw_y2;
    } else if (shot === 3) {
      frame = move_sit[3];
      grabY = move_sit.grab3Y;
      drawX = move_sit.draw_x3;
      drawY = move_sit.draw_y3;
    }

    console.log("frame : ", frame);
    console.log(shot, "shot");
  }

  if (toDown === false && trig_sitBlock === true) {
    trig_sitBlock = false;
  }
  if (toDown === true && toLeft === false && toRight === false) {
    trig_sitBlock = false;
  } else if (
    (toDown === true && toLeft === true) ||
    (toDown === true && toRight === true)
  ) {
    if (shot >= 2) {
      shot = 2;
    } else {
      shot++;
    }
    if (shot > 1 && trig_sitBlock === false) {
      shot = 1;
      trig_sitBlock = true;
    }
    if (shot === 1) {
      frame = move_blockSit[1];
      grabY = move_blockSit.grab1Y;
      drawX = move_blockSit.draw_x1;
      drawY = move_blockSit.draw_y1;
    } else if (shot === 2) {
      frame = move_blockSit[2];
      grabY = move_blockSit.grab2Y;
      drawX = move_blockSit.draw_x2;
      drawY = move_blockSit.draw_y2;
    }
  }
  if (dMove === false) {
    shot = 1;

    if (shot === 1) {
      frame = move_fall[1];
      grabY = move_fall.grab1Y;
      drawX = move_fall.draw_x1;
      drawY = move_fall.draw_y1;
    }
  }
  if (tapLand === true) {
    if (ctn >= 3) {
      ctn++;
      //shot = 1;
    } else {
      ctn++;
    }

    frame = move_endFall[1];
    grabY = move_endFall.grab1Y;
    drawX = move_endFall.draw_x1;
    drawY = move_endFall.draw_y1;

    if (ctn >= 3) {
      tapLand = false;
      ctn = 0;
      frame = 73;
      if (toRight === true || toLeft === true) {
        frame = move_right[1];
      }
    }
  }
  if (upMove === true) {
    shot = 1;

    if (shot === 1) {
      frame = move_raise[1];
      grabY = move_raise.grab1Y;
      drawX = move_raise.draw_x1;
      drawY = move_raise.draw_y1;
    }
  }

  console.log("upMove : ", upMove, "dMove : ", dMove, "tapLand : ", tapLand);
}
