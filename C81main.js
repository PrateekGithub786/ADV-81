var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
//Math.PI = 180 degree
ctx.stroke();
canvas.addEventListener("mousedown", m_mousedown);

function m_mousedown(event){
   color = document.getElementById("color_input").value;
   console.log(color);
   var mouseX = event.clientX - canvas.offsetLeft ;
   var mouseY = event.clientY - canvas.offsetTop;
   console.log("X = " + mouseX + ", Y = " + mouseY);
   circle(mouseX, mouseY);
}

function circle(mouseX1, mouseY1){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(mouseX1, mouseY1, 40, 0, 2*Math.PI);
    ctx.stroke();
};

function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}