/*Aquí colocamos todos los atributos para que cuando mandemos un mensaje de voz 
  este no tenga errores y se conserve la misma voz*/

var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[8]; // Nota: algunas voces no  soportan el cambio de parámetros
msg.voiceURI = 'native';
msg.volume = 1;  // 0 a 1
msg.rate = 1; // 0.1 a 10
msg.pitch = 2; //0 a 2
msg.lang = 'es';

/* Retorna un entero aleatorio entre min (incluido) y max (excluido)
	Usando Math.round() te dará una distribución no-uniforme!
Math.floor(Math.random() * (max - min)) + min;  */

var operacion = Math.floor(Math.random() * (2 + 1) + 1);//Esta variable determinara que operación se realizara

var x1 = Math.floor(Math.random() * (10 + 9) - 9);
var x2 = Math.floor(Math.random() * (10 + 9) - 9);
var y1 = Math.floor(Math.random() * (10 + 9) - 9);
var y2 = Math.floor(Math.random() * (10 + 9) - 9);

//
document.write("<header> OPERACIONES CON VECTORES DE 2 DIMENSIONES  </header>");
document.write("<p> Vector 1:   ( " + x1 + " , " + y1 + " )  </p>");
document.write("<p> Vector 2:   ( " + x2 + " , " + y2 + " )  </p>");

switch (operacion) {
	case 1:
		document.write("<p>La operación a realizar es una suma de vectores: <br><br></p>");
		document.write("<p>(" + x1 + " , " + y1 + ") + (" + x2 + " , " + y2 + ") = ( x , y )<br><br></p>");
		break;

	case 2:
		document.write("<p>La operación a realizar es una resta de vectores: <br><br></p>");
		document.write("<p>(" + x1 + " , " + y1 + ") - (" + x2 + " , " + y2 + ") = ( x , y )<br><br></p>");
		break;

	case 3:
		document.write("<p>La operación a realizar es una multiplicación de vectores: <br><br></p>");
		document.write("<p>(" + x1 + " , " + y1 + ") * (" + x2 + " , " + y2 + ") = ( z )<br><br></p>");
		break;
}

document.write("<p> Por favor realiza el ejercicio y anota tu respuesta para verificarla. <br><br></p>");

function VerificarRespuesta() {

	var voz = Math.floor(Math.random() * (2 + 1) + 1); //Esta variable ayuda a eligir un mensaje de voz ganadora al azar

	function victoria() {
		switch (voz) {
			case 1:
				msg.text = 'Respuesta correcta, un desempeño asombroso';
				break;

			case 2:
				msg.text = 'Correcto, excelente trabajo';
				break;

			case 3:
				msg.text = 'Bien hecho, eres genial';
				break;


		}
		speechSynthesis.speak(msg);
	}


	function derrota() {
		switch (voz) {
			case 1:
				msg.text = 'Respuesta incorrecta, vuelve a intentarlo';
				break;

			case 2:
				msg.text = 'Incorrecta pero no te rindas';
				break;

			case 3:
				msg.text = 'Error, tus cuentas estan mal pero se que puedes hacerlo';
				break;
		}
		speechSynthesis.speak(msg);
	}

	switch (operacion) {
		case 1:

			var x3 = x1 + x2;
			var y3 = y1 + y2;
			var aux_x = document.getElementById("nx").value;
			var aux_y = document.getElementById("ny").value;

			if (aux_x == "") {
				msg.text = 'Ingresa un valor para x';
				speechSynthesis.speak(msg);
				alert("INGRESA UN VALOR PARA X");
				document.getElementById("nx").focus();
			} else if (aux_y == "") {
				msg.text = 'Ingresa un valor para ye';
				speechSynthesis.speak(msg);
				alert("INGRESA UN VALOR PARA Y");
				document.getElementById("ny").focus();
			} else {
				if (aux_x == x3 && aux_y == y3) {
					victoria();
					alert("EL RESULTADO ES CORRECTO: (" + x3 + "," + y3 + ")");
					document.getElementById("nx").disabled = true;
					document.getElementById("ny").disabled = true;//Desabilitamos las cajas de texto para que no se pueda cambiar el valor
					document.getElementById("verif").disabled = true;
					document.getElementById("vozbutton").disabled = true;

					document.getElementById('ContVec').innerHTML="Vector 1: ("+ x1+","+y1+") <br><br>"+
																 "Vector 2: ("+ x2+","+y2+") <br><br>"+
																 "Vector 3: ("+ x3+","+y3+") ";

					dibujar_vector(x1, y1, "red");
					dibujar_vector(x2, y2, "blueviolet");
					dibujar_vector(x3, y3, "green");
				} else {
					derrota();
					alert("EL RESULTADO ES INCORRECTO");
					document.getElementById("nx").value = "";
					document.getElementById("ny").value = "";
					document.getElementById("nx").focus();
				}
			}
			break;

		case 2:

			var x3 = x1 - x2;
			var y3 = y1 - y2;
			var aux_x = document.getElementById("mx").value;
			var aux_y = document.getElementById("my").value;

			if (aux_x == "") {
				msg.text = 'Ingresa un valor para x';
				speechSynthesis.speak(msg);
				alert("INGRESA UN VALOR PARA X");
				document.getElementById("mx").focus();
			} else if (aux_y == "") {
				msg.text = 'Ingresa un valor para ye';
				speechSynthesis.speak(msg);
				alert("INGRESA UN VALOR PARA Y");
				document.getElementById("my").focus();
			} else {
				if (aux_x == x3 && aux_y == y3) {
					victoria();
					alert("EL RESULTADO ES CORRECTO: (" + x3 + "," + y3 + ")");
					document.getElementById("mx").disabled = true;
					document.getElementById("my").disabled = true;
					document.getElementById("verif").disabled = true;
					document.getElementById("vozbutton").disabled = true;

					document.getElementById('ContVec').innerHTML="Vector 1: ("+ x1+","+y1+") <br><br>"+
																 "Vector 2: ("+ x2+","+y2+") <br><br>"+
																 "Vector 3: ("+ x3+","+y3+") ";

			 		dibujar_vector(x1, y1, "red");
					dibujar_vector(x2, y2, "blueviolet");
					dibujar_vector(x3, y3, "green");
					//location.href = location.href;//Esta liena sirve para reiniciar la página una vez que terminas el ejercicio
				} else {
					derrota();
					alert("EL RESULTADO ES INCORRECTO");
					document.getElementById("mx").value = "";
					document.getElementById("my").value = "";
					document.getElementById("mx").focus();
				}
			}
			break;

		case 3:

			var pe = (x1 * x2) + (y1 * y2);
			var aux_x = document.getElementById("np").value;

			if (aux_x == "") {
				msg.text = 'Ingresa un valor para la multiplicación en z';
				speechSynthesis.speak(msg);
				alert("INGRESA UN VALOR PARA LA MULTIPLICACION EN Z");
				document.getElementById("np").focus();
			} else {
				if (aux_x == pe) {
					victoria();
					alert("EL RESULTADO ES CORRECTO: (" + pe + ")");
					document.getElementById("np").disabled = true;
					document.getElementById("verif").disabled = true;
					document.getElementById("vozbutton").disabled = true;

					document.getElementById('ContVec').innerHTML="Vector 1: ("+ x1+","+y1+") <br><br>"+
																 "Vector 2: ("+ x2+","+y2+") <br><br>"+
																 "Producto punto: ("+pe+")";
					dibujar_vector(x1, y1, "red");
					dibujar_vector(x2, y2, "blueviolet");
					//dibujar_vector(x3, y3, "green");
					//location.href = location.href;//Esta liena sirve para reiniciar la página una vez que terminas el ejercicio
				} else {
					derrota();
					alert("EL RESULTADO ES INCORRECTO");
					document.getElementById("np").value = "";
					document.getElementById("np").focus();
				}
			}
			break;
	}
}
