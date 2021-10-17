var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var grammar = '#JSGF V1.0;';

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'es';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

vozbutton.addEventListener('click', () =>{
    recognition.start();
    console.log('Ready to receive a color command.');
});

recognition.onresult = function (event) {
    var numero = event.results[0][0].transcript;
    // i g m
    numero = numero.replace(/menos/ig,"-");
    numero = numero.replace(/cero/ig,"0");
    numero = numero.replace(/uno/ig,"1");
    numero = numero.replace(/dos/ig,"2");
    numero = numero.replace(/tres/ig,"3");
    numero = numero.replace(/cuatro/ig,"4");
    numero = numero.replace(/cinco/ig,"5");
    numero = numero.replace(/seis/ig,"6");
    numero = numero.replace(/siete/ig,"7");
    numero = numero.replace(/ocho/ig,"8");
    numero = numero.replace(/nueve/ig,"9");

    let regEX = new RegExp(' ', 'g');
    numero = numero.replace(regEX, '');

    console.log(typeof parseInt(numero));
    llenadoporvoz(numero);

    console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function () {
    recognition.stop();
}

recognition.onnomatch = function (event) {
    diagnostic.textContent = 'No existe ese numero.';
}

recognition.onerror = function (event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}

function llenadoporvoz(numero){
    switch(operacion){
        case 1:
            var aux_x1 = document.getElementById("nx").value;
			var aux_y2 = document.getElementById("ny").value;

			if (aux_x1 == "") {
				document.getElementById("nx").value = numero;
			} else if (aux_y2 == "") {
				document.getElementById("ny").value = numero;
			} else {
                msg.text = 'TODOS LOS ESPACIOS LLENOS';
                speechSynthesis.speak(msg);
                alert("TODOS LOS ESPACIOS LLENOS");
            }
        break;
    
        case 2:
            var aux_x1 = document.getElementById("mx").value;
			var aux_y2 = document.getElementById("my").value;

			if (aux_x1 == "") {
				document.getElementById("mx").value = numero;
			} else if (aux_y2 == "") {
				document.getElementById("my").value = numero;
			} else {
                msg.text = 'TODOS LOS ESPACIOS LLENOS';
                speechSynthesis.speak(msg);
                alert("TODOS LOS ESPACIOS LLENOS");
            }
        break;
    
        case 3:
            var aux_x = document.getElementById("np").value;

			if (aux_x == "") {
				document.getElementById("np").value = numero;
			} else {
                msg.text = 'TODOS LOS ESPACIOS LLENOS';
                speechSynthesis.speak(msg);
                alert("TODOS LOS ESPACIOS LLENOS");
            }

        break;
    
    }
}

