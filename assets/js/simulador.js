// Inicializamos calculo = 2 para que por defecto calcule TAU
var calculo = 2;

// @name: CambiarCalculo
// @Param: int
// @Return: none
function CambiarCalculo(val) {
	calculo = val;
}

// @name: CalcularTau
// @Param: none
// @Return: none
function CalcularTau () {

	// Lectura del input resistencia
	var resistencia = document.getElementById("resistencia").value;
	// Lectura del select unidad resistencia
	var unidad_resistencia = document.getElementById("unidad_resistencia").value;
	// Lectura del input capacitor
	var capacitor = document.getElementById("capacitor").value;
	// Lectura del select unidad capacitor
	var unidad_capacitor = document.getElementById("unidad_capacitor").value;

	// Seleccion de calculo de tau
	if(calculo == 2){
		// Verificacion de los valores de los input's
		if(resistencia > -1 && capacitor > -1){
			// Asignamos el resultado al input TAU
			document.getElementById("tau").value = (resistencia*unidad_resistencia)*(capacitor/unidad_capacitor);
		}else{
			// Alerta de error
			alert("los valores deben ser positivos");
		}
	}

	//Funcion de impresion de resultados
	Resultados(document.getElementById("tau").value);
}

// @name: CalcularCapacitor
// @Param: none
// @Return: none
function CalcularCapacitor () {

	// Lectura del input resistencia
	var resistencia = document.getElementById("resistencia").value;
	// Lectura del input TAU
	var tau = document.getElementById("tau").value;
	// Lectura del select unidad resistencia
	var unidad_resistencia = document.getElementById("unidad_resistencia").value;
	// Lectura del select unidad capacitor
	var unidad_capacitor = document.getElementById("unidad_capacitor").value;

	// Seleccion de calculo de capacitor
	if(calculo == 1){
		// Verificacion de los valores de los input's
		if(resistencia > -1 && tau > -1){
			// Asignamos el resultado al input capacitor
			document.getElementById("capacitor").value = (tau/(resistencia*unidad_resistencia))/unidad_capacitor;
		}else{
			// Alerta de error
			alert("los valores deben ser positivos");
		}
	}

	//Funcion de impresion de resultados
	Resultados(tau);
}

// @name: CalcularCapacitor
// @Param: float
// @Return: none
function Resultados(tau){

	// Lectura del input voltaje
	var voltaje = document.getElementById("voltaje").value;
	// Lectura del select unidad voltaje
	var unidad_voltaje = document.getElementById("unidad_voltaje").value;
	// Calculo de Nominal
	var resultado_voltaje = 99 * voltaje/unidad_voltaje / 100;
	// Calculo del voltaje en tiempo TAU
	var resultado_tiempo = 100 * tau / 63;

	// Imprimimos el resultado de TAU
	document.getElementById("resultado_tau").innerHTML = tau + 's';
	// Impremimos el valor del voltaje nominal
	document.getElementById("resultado_voltaje").innerHTML = resultado_voltaje.toFixed(2) + 'V';
	// Imprimimo es resultado del tiempo maximo de carga
	document.getElementById("resultado_tiempo").innerHTML = resultado_tiempo.toFixed(2) + 's';
}

/* ======================== CANVAS =========================== */
var canvas = document.getElementById("canvas");
var widthCanvas = 500;
var heightCanvas = 300;
var ctx = canvas.getContext("2d");

//Origenes
var xOrigin = 26;
var yOrigin = 44;

//Resistencia
var xResistencia = widthCanvas/4;
var yResistencia = yOrigin;

//Finales
var xFinal = widthCanvas-xOrigin;
var yFinal = heightCanvas-(yOrigin/2);

var interval;
var velocidad = 10;
var factor = 1;
var xMove = xOrigin;
var yMove = yOrigin;
var cantidad= 50; // Cantidad de electrones
var radio= 10; // Radio de los electrones
var xPos = []; // Array de posiciones en Y de los electrones
var yPos = []; // Array de posiciones en X de los electrones
var color= '#276bb0';
var colorc= '#000000';
var colorl= '#ffffff';

var date;
var segundos;
var t;
var tTexto;
var transcurrido = 0;

function loop(){

	clearInterval(interval);

	ctx.clearRect(0,0,widthCanvas,heightCanvas);

	//CIRCUITO
	ctx.beginPath();
	ctx.moveTo(xOrigin, yOrigin);
	ctx.lineTo(xFinal/2 - 45, yOrigin);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	//RESISTENCIA START
	ctx.moveTo(xFinal/2 - 45, yOrigin-20);
	ctx.lineTo(xFinal/2 - 45, yOrigin+20);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	ctx.moveTo(xFinal/2 + 55, yOrigin-20);
	ctx.lineTo(xFinal/2 + 55, yOrigin+20);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	ctx.moveTo(xFinal/2 - 45, yOrigin-20);
	ctx.lineTo(xFinal/2 + 55, yOrigin-20);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	ctx.moveTo(xFinal/2 - 45, yOrigin+20);
	ctx.lineTo(xFinal/2 + 55, yOrigin+20);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	//RESISTENCIA END
	ctx.moveTo(xFinal/2 + 55, yOrigin);
	ctx.lineTo(xFinal, yOrigin);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	ctx.moveTo(xOrigin, yFinal);
	ctx.lineTo(xFinal, yFinal);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	ctx.moveTo(xOrigin, yOrigin);
	ctx.lineTo(xOrigin, yFinal/2);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	//FUENTE START
	ctx.moveTo(xOrigin-25, yFinal/2);
	ctx.lineTo(xOrigin+25, yFinal/2);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	ctx.moveTo(xOrigin-8, yFinal/2 + 15);
	ctx.lineTo(xOrigin+8, yFinal/2 + 15);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	//FUENTE END
	ctx.moveTo(xOrigin, yFinal/2 + 15);
	ctx.lineTo(xOrigin, yFinal);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	ctx.moveTo(xFinal, yOrigin);
	ctx.lineTo(xFinal, yFinal/2);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	//CAPACITOR START
	ctx.moveTo(xFinal-25, yFinal/2);
	ctx.lineTo(xFinal+25, yFinal/2);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	ctx.moveTo(xFinal-25, yFinal/2 + 15);
	ctx.lineTo(xFinal+25, yFinal/2 + 15);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	//CAPACITOR END
	ctx.moveTo(xFinal, yFinal/2 + 15);
	ctx.lineTo(xFinal, yFinal);
	ctx.lineWidth = radio/3;
	ctx.strokeStyle = colorc;
	ctx.stroke();
	ctx.closePath();

	//Tiempo transcurrido
	ctx.font = "20px Arial";
	ctx.fillText("Tiempo transcurrido: " + transcurrido,widthCanvas/2 - 100,heightCanvas/2);

	//ELECTRONES
	for(var i = 0; i < cantidad; i++){
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.arc(xPos[i], yPos[i], radio, radio, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
		ctx.beginPath();
		ctx.moveTo(xPos[i]-(radio/2), yPos[i]);
		ctx.lineTo(xPos[i]+(radio/2), yPos[i]);
		ctx.lineWidth = radio/5;
		ctx.strokeStyle = colorl;
		ctx.stroke();
		ctx.closePath();

		if(parseInt(xPos[i]) >= xOrigin && parseInt(xPos[i]) < xFinal && parseInt(yPos[i]) == yOrigin){
			xPos[i] += factor;
		}else if(parseInt(yPos[i]) >= yOrigin && parseInt(yPos[i]) < yFinal && parseInt(xPos[i]) == xFinal){
			yPos[i] += factor;
		}else if(parseInt(xPos[i]) <= xFinal && parseInt(xPos[i]) > xOrigin && parseInt(yPos[i]) == yFinal){
			xPos[i] -= factor;
		}else{
			yPos[i] -= factor;
		}


	}

	var tau = document.getElementById("tau").value;
	var resultado_tiempo = 100 * tau / 63;

	date = new Date();


	if((date.getSeconds() - tTexto) >= 1){
		transcurrido++;
		tTexto = date.getSeconds();
	}

	if((date.getSeconds() - segundos) >= resultado_tiempo){
		velocidad = 600;
	}else {
		if((date.getSeconds() - t) >= resultado_tiempo/3){
			velocidad += 10;
			t = date.getSeconds();
		}
	}

	interval = setInterval(loop, velocidad);


}

function Animar(){

	clearInterval(interval);

	var pos = radio*4;
	var cantidadX = widthCanvas/pos;
	var cantidadY = heightCanvas/pos;
	var x1 = 0;
	var y1 = 0;
	var x2 = 0;
	var y2 = 0;

	velocidad = 5;

	date = new Date();
	segundos = date.getSeconds();
	t = date.getSeconds();
	tTexto = date.getSeconds();
	transcurrido = 0;

	for(var i = 0; i < cantidad; i++){

		if(x1 < cantidadX-1){
			xPos[i] = xOrigin + pos*x1;
			yPos[i] = yOrigin;
			x1++;
		}

		if(x1 > cantidadX-1 && y1 < cantidadY-1){
			xPos[i] = xFinal;
			yPos[i] = yOrigin + pos*y1;
			y1++;
		}

		if(x2 < cantidadX-1 && y1 > cantidadY-1){
			xPos[i] = xOrigin + pos*x2;
			yPos[i] = yFinal;
			x2++;
		}

		if(x2 > cantidadX-1 && y2 < cantidadY-1){
			xPos[i] = xOrigin;
			yPos[i] = yOrigin + pos*y2;
			y2++;
		}


	}

	var resistencia = document.getElementById("resistencia").value;
	var unidad_resistencia = document.getElementById("unidad_resistencia").value;

	if(resistencia > 0){
		interval = setInterval(loop, velocidad);
	}else{
		alert("Para simular necesita indicar un valor mayor a 0 en la resistencia!");
	}
}
