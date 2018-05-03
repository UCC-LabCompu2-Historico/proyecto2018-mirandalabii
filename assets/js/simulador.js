var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = new Image();
img.src = "assets/images/fondo_canvas.png";
img.onload = function(){
  ctx.drawImage(img, 0, 0, 700, 400);
}