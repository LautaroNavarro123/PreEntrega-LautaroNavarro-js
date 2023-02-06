

const listaDeProductos = document.querySelector(`#listaDeProductos`)

let productosSeleccionados = JSON.parse(localStorage.getItem('Producto'))


if (productosSeleccionados) {
    productosSeleccionados.forEach((prodSeleccionado) => {
        console.log(prodSeleccionado)

        const li = document.createElement('li')
        li.innerHTML = `
            <h3>Producto: ${prodSeleccionado.product}</h3>
            <h4>Cuotas: ${prodSeleccionado.numeroCuotas}</h4>
        `

        listaDeProductos.append(li)
    })
} else {
    listaDeProductos.innerText = 'No hay productos agregados'
}

const btnVaciar = document.querySelector(`#btnVaciar`)

btnVaciar.addEventListener('click', () => {
    localStorage.removeItem('Producto')
    listaDeProductos.innerHTML = 'Se vació el listado'
})