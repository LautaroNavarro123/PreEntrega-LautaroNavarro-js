
let lista = document.getElementById('mejoresEmpleados')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(info => {
            const listaEmpleados = document.createElement ('li')
            listaEmpleados.innerHTML =` 
            <h3>${info.name}</h3>
            <h5>${info.username}</h5>
            `
            lista.appendChild(listaEmpleados)
        });
    })

