
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
img.src = "assets/images/fondo_canvas.png";
img.onload = function(){
  ctx.drawImage(img, 0, 0, 700, 400);
}