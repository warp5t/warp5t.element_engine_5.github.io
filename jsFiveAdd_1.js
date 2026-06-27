let grabY;
let drawX, drawY;

let move_idle = [73, 133, 191, 250, 307, 365, 424];

let move_right = [0, 59, 116, 174, 231, 288, 346, 404, 471]; // * the number follows begin sprite in move's set

let move_sit = {
    1 : 974,
    2 : 1030,
    3 : 1114,
    grab1Y : 13,
    grab2Y : 37,
    grab3Y : 53,
    draw_x1 : 45,
    draw_y1 : 89,
    draw_x2 : 45,
    draw_y2 : 65,
    draw_x3 : 44,
    draw_y3 : 49,

}

let move_blockSit = {
    1 : 831,
    2 : 1200,
    grab1Y : 889,
    grab2Y : 33,
    draw_x1 : 41,
    draw_y1 : 55,
    draw_x2 : 41,
    draw_y2 : 69,
}

let move_raise = {
    1 : 565,
    grab1Y : 158,
    draw_x1 : 43,
    draw_y1 : 73,
}

let move_fall = {
    1 : 619,
    grab1Y : 124,
    draw_x1 : 45,
    draw_y1 : 107,
}

let move_endFall = {
    1 : 675,
    grab1Y : 141,
    draw_x1 : 41,
    draw_y1 : 90,
}


let scorpion = document.getElementById('scorpion');
let scorpion_M = document.getElementById('scorpion_M');
let background = document.getElementById('background');


function moveRight_() {
    // * (image,sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight )
    ctx.drawImage(scorpion, frame, 128, 54, 103, purpleX, purpleY, 51, -103);
}
function moveLeft_() {
    ctx.drawImage(scorpion, frame, 128, 54, 103, purpleX, purpleY, 51, -103);
}

function moveStand_() {
    ctx.drawImage(scorpion, frame, 3, 54, 98,  purpleX, purpleY, 51, -98);
}

function moveSit_() {
    ctx.drawImage(scorpion, frame, grabY, drawX, drawY,  purpleX, purpleY, drawX, -drawY);
}

function moveBlockSit_() {
    ctx.drawImage(scorpion, frame, grabY, drawX, drawY,  purpleX, purpleY, drawX, -drawY);
}

function moveJumpRaise_() {
    ctx.drawImage(scorpion, 565, 158, 43, 73,  purpleX, purpleY, 43, -73);
}

function moveJumpFall_() {
    ctx.drawImage(scorpion, frame, grabY, drawX, drawY,  purpleX, purpleY, drawX, -drawY);
}

function moveJumpEnd_() {
    ctx.drawImage(scorpion, 675, 141, 41, 90,  purpleX, purpleY, 41, -90);
}

//* image -  Картинка-источник (spritesheet): scorpion, scorpion_M, background
//* sx - X координата левого верхнего угла вырезаемого кадра на spritesheet
//* sy - Y координата левого верхнего угла вырезаемого кадра на spritesheet
//* sWidth - Ширина вырезаемого фрагмента на spritesheet
//* sHeight - Высота вырезаемого фрагмента на spritesheet
//* dx - X на canvas, куда рисовать
//* dy - Y на canvas, куда рисовать
//* dWidth - Ширина на canvas (масштаб по X)
//* dHeight - Высота на canvas (масштаб по Y; отрицательное значение — отражение по вертикали)