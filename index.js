let palabraOculta = "javascript";
let intentos = 3;

function verificarSuposicion(suposicion, palabraOculta) {
    if(suposicion.toLowerCase() === palabraOculta) {
        return true
    }
        return false
    }

function jugarAdivinaLaPalabra() {
    alert("Bienvenido a jugar adivnia la palabra oculta");
    alert("Tienes 3 intentos para adivinar la palabra");
    alert("--Pista-- la palabra oculta es un lenguaje de programacion");

    while (intentos > 0) {
        let suposicion = prompt("Adivina la Palabra oculta")

        if(verificarSuposicion(suposicion, palabraOculta)){
            alert("Correcto! Haz adivinado la palabra");
            break;
        }   
            else{
                intentos--;
                if(intentos > 0){
                    alert(`Incorrecto, aun tienes ${intentos} restantes`);
                }
                else {
                    alert(`Agotastes tus intentos, la palabra oculta era ${palabraOculta}`);

                    }

                }
   
            }
}

jugarAdivinaLaPalabra();