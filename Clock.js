const canvas = document.querySelector("#canvas");
const c = canvas.getContext("2d");

c.translate(200, 200);

drawClock();
function drawClock(){
    clockFace(c);
    clockNumber(c);
    clockHand(c);
};

// ++ ClockFace
function clockFace(c){
    c.beginPath();
    c.arc(0, 0, 180, 0, 2*Math.PI);
    c.fillStyle = "black";
    c.fill();

    const grad = c.createRadialGradient(0, 0, 170, 0, 0, 190);
    grad.addColorStop(0, "black");
    grad.addColorStop(0.5, "silver");
    grad.addColorStop(1, "black");
    c.strokeStyle = grad;
    c.lineWidth = "20";
    c.stroke();

    c.beginPath();
    c.arc(0, 0, 169, 0, 2*Math.PI);
    c.strokeStyle = "gold";
    c.lineWidth = "1";
    c.stroke();
}

function clockNumber(e){
    c.beginPath();
    c.font = "30px italiano cursive";
    c.textBaseline = "middle";
    c.textAlign = "center";
    c.fillStyle = "gold";
    for(num = 1; num <13; num++){
        const ang = Math.PI/6;
        c.rotate(ang*num);
        c.translate(0, -140);
        c.rotate(-ang*num);
        c.fillText(num.toString(), 0, 0);
        c.rotate(ang*num);
        c.translate(0, 140);
        c.rotate(-ang*num);
    }
    c.fill();
}

function clockHand(c){
    const date = new Date();
    let hour = date.getHours();
    if(hour > 12){
        hour = hour - 12;
    }else{
        hour = hour;
    }
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let hAng = hour*Math.PI/6 + minute*Math.PI/360 + second*Math.PI/(6*3600);
    let mAng = minute*Math.PI/30 + second*Math.PI/1800;
    let sAng = second*Math.PI/30;

    // hour
    c.rotate(hAng);
    c.lineWidth = "2";
    c.strokeStyle = "goldenrod";
    // c.beginPath();
    // c.moveTo(0, -100);
    // c.lineTo(0, 0);
    // c.stroke();

    c.beginPath();
    c.arc(-30, 0, 30, -1.05, 0);
    c.stroke();
    c.beginPath();
    c.arc(30, 0, 30, Math.PI, -Math.PI+1.05);
    c.stroke();

    c.beginPath();
    c.arc(-190, -100, 190, 0, 0.405);
    c.stroke();
    c.beginPath();
    c.arc(190, -100, 190, Math.PI-0.405, Math.PI);
    c.stroke()
    c.rotate(-hAng);

    // minute
    c.rotate(mAng);
    c.lineWidth = "2";
    c.strokeStyle = "gold";
    // c.beginPath();
    // c.moveTo(0, -120);
    // c.lineTo(0, 0);
    // c.stroke();

    c.beginPath();
    c.arc(-350, -120, 350, 0, 0.254);
    c.stroke();
    c.beginPath();
    c.arc(350, -120, 350, Math.PI-0.254, Math.PI);
    c.stroke()

    c.beginPath();
    c.arc(-50, 0, 50, -0.7, 0);
    c.stroke();
    c.beginPath();
    c.arc(50, 0, 50, Math.PI, -Math.PI+0.7);
    c.stroke();
    c.rotate(-mAng);

    // second
    c.rotate(sAng);
    c.lineWidth = "2";
    c.strokeStyle = "red";
    c.beginPath();
    c.moveTo(0, -120);
    c.lineTo(0, 0);
    c.stroke();

    c.beginPath();
    c.arc(-30, 0, 30, 0, 0.8);
    c.stroke();
    c.beginPath();
    c.arc(30, 0, 30, Math.PI-0.8, Math.PI);
    c.stroke();

    c.beginPath();
    c.arc(-15, 35, 15, -1.2, 0);
    c.stroke();
    c.beginPath();
    c.arc(15, 35, 15, Math.PI, -Math.PI+1.2);
    c.stroke();
    c.rotate(-sAng);
    
    c.beginPath();
    c.arc(0, 0, 7, 0, 2*Math.PI);
    c.fillStyle = "red";
    c.fill();
};
setInterval(drawClock, 1000);