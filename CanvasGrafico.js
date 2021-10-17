var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.translate(720, 720);//Mueve el elemnto hacia donde tu quieras
ctx.scale(2, -2);//Hacer más zoom en la cuadricula dependiendo el tamaño

function dibujar_guias() {
    for (i = -19; i < 19; i++) {
        ctx.moveTo(i * 20, -600);
        ctx.lineTo(i * 20, 600);
        ctx.moveTo(-600, i * 20,);
        ctx.lineTo(600, i * 20);
        ctx.strokeStyle = "#6eb8f5";
        ctx.stroke();
        ctx.save();
    }

}

function cruz(x, y, color) {
    ctx.beginPath()
    ctx.moveTo(0, 0);
    ctx.lineTo(x * 20, y * 20);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.fillStyle = "black";
    ctx.save();
    ctx.restore();
    ctx.stroke();
}

function dibujar_vector(x, y, color) {
    ctx.beginPath()
    ctx.moveTo(0, 0);
    ctx.lineWidth = 3;
    ctx.lineTo(x * 20, y * 20);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.fillStyle = "black";
    cadena = "(" + x + "," + y + ")";
    ctx.save();
    ctx.scale(1, -1);
    ctx.fillText(cadena, x * 20, y * -20);
    ctx.restore();
    ctx.stroke();
}

dibujar_guias()

cruz(0, 18, "black");
cruz(18, 0, "black");
cruz(0, -18, "black");
cruz(-18, 0, "black");

