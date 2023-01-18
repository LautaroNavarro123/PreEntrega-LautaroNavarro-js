let intentos = 3

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = Number(precio)
        this.stock = stock
    }
}

const camaChica = new Producto("Cama chica", 600, true)
const camaMediana = new Producto("Cama mediana", 900, true)
const camaGrande = new Producto("Cama grande", 1200, false)

const productos = [camaChica, camaMediana, camaGrande]




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


    }
    if (intentos === -1) {
        intentos += 4
        requestIdleCallback(login)
    }

}

login()

function elegirproducto(params) {
    producto = prompt("Elija el producto que desee comprar")
    if (producto == camaChica.nombre) {
        alert("Usted ha elegido una " + camaChica.nombre + " con un valor de " + camaChica.precio)
    } else if (producto == camaMediana.nombre) {
        alert("Usted ha elegido una " + camaMediana.nombre + " con un valor de " + camaMediana.precio)
    } else if (producto == camaGrande.nombre) {
        alert("Usted ha elegido una " + camaGrande.nombre + " con un valor de " + camaGrande.precio + " lamentablemente no se encuentra en stock")
    } else {
        alert("El producto elegido no existe")
    }
}

function compra(params) {
    if (producto == camaChica.nombre) {
        alert("Usted ha elegido una " + camaChica.nombre + " con un valor de " + camaChica.precio)
        cuotas = Number(prompt("Con cuantas cuotas desea abonar? 3-6-12"))
        if (cuotas === 3) {
            alert("El valor mensual es de " + camaChica.precio / 3)
        } else if (cuotas === 6) {
            alert("El valor mensual es de " + camaChica.precio / 6)
        } else if (cuotas === 12) {
            alert("El valor mensual es de " + camaChica.precio / 12)
        } else {
            alert("El numero de cuotas seleccionado no esta disponible")
        }
    }

    if (producto == camaMediana.nombre) {
        alert("Usted ha elegido una " + camaMediana.nombre + " con un valor de " + camaMediana.precio)
        cuotas = Number(prompt("Con cuantas cuotas desea abonar? 3-6-12"))
        if (cuotas === 3) {
            alert("El valor mensual es de " + camaMediana.precio / 3)
        } else if (cuotas === 6) {
            alert("El valor mensual es de " + camaMediana.precio / 6)
        } else if (cuotas === 12) {
            alert("El valor mensual es de " + camaMediana.precio / 12)
        } else {
            alert("El numero de cuotas seleccionado no esta disponible")
        }
    }

    if (producto == camaGrande.nombre) {
        alert("Usted ha elegido una " + camaGrande.nombre + " con un valor de " + camaGrande.precio + " lamentablemente no se encuentra en stock")
       
    }
}

function consultarStock() {
    const stockDisponible = productos.filter((producto) => producto.stock === true)
    stockDisponible.forEach(el => alert(el.nombre))
}