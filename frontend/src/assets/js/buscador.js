let loadCatalogo = () => {

    fetch("http://127.0.0.1:5500/data/catologo.json")
        .then(function(resultado) {
            return resultado.json()
        })
        .then(function(arreglo) {

            for (let elemento of arreglo) {

                let nombre = elemento.nombre;
                let keywords = elemento.keywords;
                let precio = elemento.precio;
                let imagen = elemento.imagen;
                let menu = elemento.menu

                let plantilla =
                    `<div class="card card-deck border-dark m-3 bg-warning col-md-3 border-top divFoto" >
                    <img class ="card-img-top imageProduct"src="${imagen}" alt="${nombre}">
                    <div class="column">
                        <div class="card-body">
                            <h5 class="nombre">${nombre}</h5>
                            <p class="card-text">${keywords}</p>
                            <p class="card-text">${menu}</p>
                        </div>
                        <div class="precioDiv">
                        <p class="precio">${precio}</p>
                        </div>
                        </div>
                    </div>`

                document.getElementById('resultados').innerHTML += plantilla

            }

        })
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch: ' + error.message);
        });
}

let filtrar = () => {

    let buscadorForm = document.getElementById('searchForm');

    buscadorForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let textSearch = document.getElementById('textSearch').value

        let arreglo = document.getElementById("resultados")

        let elementos = arreglo.getElementsByClassName("nombre")

        let contenedor = document.getElementsByClassName("card")

        for (let i = 0; i < elementos.length; i++) {
            let nombre = elementos[i].innerHTML
            let contenido = contenedor[i]
            if (nombre.toLowerCase().includes(textSearch.toLowerCase()))
                contenedor[i].style.display = "block"
            else
                contenedor[i].style.display = "none"
        }




    })

}

document.addEventListener('DOMContentLoaded', function() {
    loadCatalogo();
    filtrar();
})
