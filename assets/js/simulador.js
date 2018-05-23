
/*var voltaje = document.getElementById("voltaje").value;
var unidad_voltaje = document.getElementById("unidad_voltaje").value;
var tau = document.getElementById("tau").value;*/

var calculo = 2;

function CambiarCalculo(val) {

	 calculo = val; 

}

function CalcularTau () {

	var resistencia = document.getElementById("resistencia").value;
	var unidad_resistencia = document.getElementById("unidad_resistencia").value;
	var capacitor = document.getElementById("capacitor").value;
	var unidad_capacitor = document.getElementById("unidad_capacitor").value;

console.log(calculo);

	if(calculo == 2){
		if(resistencia > -1 && capacitor > -1){
			document.getElementById("tau").value = (resistencia*unidad_resistencia)*(capacitor/unidad_capacitor);
		}else{
			alert("los valores deben ser positivos");
		}
	}
}

function CalcularCapacitor () {

	var resistencia = document.getElementById("resistencia").value;
	var tau = document.getElementById("tau").value;
	var unidad_resistencia = document.getElementById("unidad_resistencia").value;
	var unidad_capacitor = document.getElementById("unidad_capacitor").value;	

	console.log(calculo);

	if(calculo == 1){
		if(resistencia > -1 && tau > -1){
			document.getElementById("capacitor").value = (tau/(resistencia*unidad_resistencia))/unidad_capacitor;
		}else{
			alert("los valores deben ser positivos");
		}
	}
}


/* ======================== CANVAS =========================== */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = new Image();
//img.src = "assets/images/fondo_canvas.png";
//img.onload = function(){
// ctx.drawImage(img, 0, 0, 700, 400);
//}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//CLASE barra
var barra = {
	ancho: 80,
	alto: 15,
	x: (canvas.width)/2,
	y: canvas.height-30,
	color: '#FFF000',
	dibujar: function (ancho) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x - ancho, this.y, this.ancho, this.alto);
	}

};

//CLASE bolita
var bolita = {
	radio: 20,
	x: (canvas.width)/2,
	y: canvas.height-60,
	color: '#000FFF',
	dibujar: function () {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radio, this.radio, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
	}
}

//CLASE bloques
bloques = {
	contenido: [],
	columnas: 5,
	filas: 3,
	ancho: 90,
	alto: 25,
	margentop: 50,
	margenleft: 50,
	init: function(){
		for(var f = 0; f < this.filas; f++){
			for(var c = 0; c < this.columnas; c++){
				this.contenido.push(
					{
						color: getRandomColor(),
						x: this.margentop + (c*this.ancho) + (c*5),
						y: this.margenleft + (f*this.alto) + (f*5),
						existe: true
					});
			}
		}
	},
	dibujar: function () {
		for(bloque of this.contenido){
				ctx.fillStyle = bloque.color;
				ctx.fillRect(bloque.x, bloque.y, this.ancho, this.alto);		
		}
	}
}	

barra.dibujar(barra.ancho/2);
bolita.dibujar();
bloques.init();
bloques.dibujar();
/*for(var i = 0; i < 35; i++){
	ctx.fillStyle="#FF0000";
	ctx.fillRect(i * 35, 3,32,15);
}*/
