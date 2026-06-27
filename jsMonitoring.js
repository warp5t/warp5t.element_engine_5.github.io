console.log('cge===');
const canv_00 = document.getElementById('canvas_00');
const ctx_00 = canv.getContext('2d');



ctx.font = "15px Tahoma";
ctx.fillStyle = "black";

const monitorEngine = () => {
    ctx_00.clearRect(0, 0, canv_00.width, canv_00.height);

    ctx_00.font = "15px Tahoma";
    ctx_00.fillStyle = "black";

    // Отображаем несколько параметров
    ctx_00.fillText(`forceCooficent: ${forceCooficent}`, 10, 20);
    ctx_00.fillText(`jumpPermission: ${jumpPermission}`, 10, 40);
    ctx_00.fillText(`purpleX: ${purpleX}`, 10, 60);
    ctx_00.fillText(`purpleY: ${purpleY}`, 10, 80);
    ctx_00.fillText(`levelInvert: ${levelInvert}`, 10, 100);
    ctx_00.fillText(`shot: ${shot}`, 10, 120);
    ctx_00.fillText(`toRight: ${toRight}`, 10, 140);
    ctx_00.fillText(`toLeft: ${toLeft}`, 10, 160);
    ctx_00.fillText(`toDown: ${toDown}`, 10, 180);
}