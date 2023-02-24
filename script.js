

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

let productosSeleccionados = []

let productosPrevios = JSON.parse( localStorage.getItem('Producto') )

if (productosPrevios) {
    productosSeleccionados = productosPrevios
}

const prodInput = document.querySelector(`#prodInput`)
const selectCuotas = document.querySelector(`#selectCuotas`)
const btnCarrito = document.querySelector(`#btnCarrito`)

btnCarrito.addEventListener('click', () => {
    const product = prodInput.value
    const numeroCuotas = selectCuotas.value

    if (product === "" ) return
    if (numeroCuotas === "" ) return

    const prodSeleccionado = {
        id: productos.length + 1,
        product: product,
        numeroCuotas: numeroCuotas
    }

    productosSeleccionados.push(prodSeleccionado)
    prodInput.value = ""

    localStorage.setItem('Producto', JSON.stringify(productosSeleccionados))

    console.log(productosSeleccionados)

    Toastify({
        text: "Producto agregado con exito",
        duration: 1500,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "#343a40",
        },
      }).showToast();
})