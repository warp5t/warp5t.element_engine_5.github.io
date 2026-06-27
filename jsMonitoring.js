console.log('cge===');
const canv_00 = document.getElementById('canvas_00');
const ctx_00 = canv_00.getContext('2d');



ctx_00.font = "15px Tahoma";
ctx_00.fillStyle = "black";

const monitorEngine = () => {
    ctx_00.clearRect(0, 0, canv_00.width, canv_00.height);

    ctx_00.font = "15px Tahoma";
    ctx_00.fillStyle = "black";

    ctx_00.fillText(`tapLand: ${tapLand}`, 10, 110);
    ctx_00.fillText(`shot: ${shot}`, 10, 130);
    ctx_00.fillText(`ctn: ${ctn}`, 10, 150);
    ctx_00.fillText(`frame: ${frame}`, 10, 170);
    ctx_00.fillText(`trig_sit: ${trig_sit}`, 10, 190);
    ctx_00.fillText(`forceCooficent: ${forceCooficent}`, 10, 210);
    ctx_00.fillText(`jumpPermission: ${jumpPermission}`, 10, 230);
    ctx_00.fillText(`purpleX: ${purpleX}`, 10, 250);
    ctx_00.fillText(`purpleY: ${purpleY}`, 10, 270);
    ctx_00.fillText(`levelInvert: ${levelInvert}`, 10, 290);
    ctx_00.fillText(`toRight: ${toRight}`, 10, 330);
    ctx_00.fillText(`toLeft: ${toLeft}`, 10, 350);
    ctx_00.fillText(`toDown: ${toDown}`, 10, 370);
    ctx_00.fillText(`trig_sitBlock: ${trig_sitBlock}`, 10, 390);
}

setInterval(monitorEngine, 30);

// ку ку