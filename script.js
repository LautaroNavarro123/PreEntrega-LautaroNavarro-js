let camaGrande, camaMediana, camaChica, cuotas, producto, intentos, nombre, apellido;
precioCamaGrande = Number(1200);
precioCamaMediana = Number(900)
precioCamaChica = Number(600)
camaGrande = "Cama grande"
camaMediana = "Cama mediana"
camaChica = "Cama chica"
intentos = 3

function login(params) {

    for (i = 0; i < 4; i++) {

        let nombre = prompt("Ingrese su nombre")
        let apellido = prompt("Ingrese su apellido")

        if (nombre == ("") || apellido == ("")) {
            alert("Le falto rellenar un casillero")
        } else {
            alert("Bienvenido")
            break 
        }
        alert("Fallo en el registro le quedan " + intentos + " intentos.");
        intentos--;
        

    }if (intentos === -1) {
        intentos += 4 
        requestIdleCallback(login)
    }
    
}
    
login()




function elegirproducto(params) {
    producto = prompt("Elija el producto que desee comprar")
    if (producto == camaChica) {
        alert("Usted ha elegido una " + camaChica + " con un valor de " + precioCamaChica)
    } else if (producto == camaMediana) {
        alert("Usted ha elegido una " + camaMediana + " con un valor de " + precioCamaMediana)
    } else if (producto == camaGrande) {
        alert("Usted ha elegido una " + camaGrande + " con un valor de " + precioCamaGrande)
    }
}

function compra(params) {
    if (producto == camaChica) {
        alert("Usted ha elegido una " + camaChica + " con un valor de " + precioCamaChica)
        cuotas = Number(prompt("Con cuantas cuotas desea abonar? 3-6-12"))
        if (cuotas === 3) {
            alert("El valor mensual es de " + precioCamaChica / 3)
        } else if (cuotas === 6) {
            alert("El valor mensual es de " + precioCamaChica / 6)
        } else if (cuotas === 12) {
            alert("El valor mebnsual es de " + precioCamaChica / 12)
        } else {
            alert("El numero de cuotas seleccionado no esta disponible")
        }
    }

    if (producto == camaMediana) {
        alert("Usted ha elegido una " + camaMediana + " con un valor de " + precioCamaMediana)
        cuotas = Number(prompt("Con cuantas cuotas desea abonar? 3-6-12"))
        if (cuotas === 3) {
            alert("El valor mensual es de " + precioCamaMediana / 3)
        } else if (cuotas === 6) {
            alert("El valor mensual es de " + precioCamaMediana / 6)
        } else if (cuotas === 12) {
            alert("El valor mebnsual es de " + precioCamaMediana / 12)
        } else {
            alert("El numero de cuotas seleccionado no esta disponible")
        }
    }

    if (producto == camaGrande) {
        alert("Usted ha elegido una " + camaGrande + " con un valor de " + precioCamaGrande)
        cuotas = Number(prompt("Con cuantas cuotas desea abonar? 3-6-12"))
        if (cuotas === 3) {
            alert("El valor mensual es de " + precioCamaGrande / 3)
        } else if (cuotas === 6) {
            alert("El valor mensual es de " + precioCamaGrande / 6)
        } else if (cuotas === 12) {
            alert("El valor mebnsual es de " + precioCamaGrande / 12)
        } else {
            alert("El numero de cuotas seleccionado no esta disponible")
        }
    }
}

function seguircomprando(params) {
    let respuesta
    respuesta = prompt("Desea seguir comprando? si/no")
    if (respuesta === "si") {
        alert("Siga con su compra")
    } else if (respuesta === "no") {
        alert("Gracias por su compra")
    } else {
        alert("Lo siento no lo entendemos")
    }
}