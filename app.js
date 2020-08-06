var canvas = document.getElementById("snake");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(20,20,32,32);

ctx.fillRect(100,20,32,32);

ctx.strokeStyle = "blue";
ctx.lineWidth="5"

ctx.strokeRect(100,20,32,32)

ctx.arc(200,200,50,0,Math.PI*2)
ctx.fillStyle="yellow"
ctx.fill()
ctx.stroke()