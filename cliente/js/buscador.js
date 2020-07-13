let loadCatalogo = () => {

    fetch("http://127.0.0.1:5500/data/catologo.json")
      .then(function(resultado){
        return resultado.json()
      })
      .then(function(arreglo) {
      
        for(let elemento of arreglo){
        
          let nombre = elemento.nombre;
          let keywords = elemento.keywords;
          let precio = elemento.precio;
          let imagen = elemento.imagen;
          let menu = elemento.menu
  
        let plantilla = 
        `<div class="card card-deck border-dark m-3 bg-warning col-md-3 border-top" style="width: 18rem;">
          <img class ="card-img-top"src="${imagen}" alt="${nombre}">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${keywords}</p>
                <p class="card-text">${precio}</p>
                <p class="card-text">${menu}</p>
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
  
      let elementos = arreglo.getElementsByClassName("card-title")
  
      let contenedor = document.getElementsByClassName("card")
  
      for(let i = 0; i<elementos.length; i++){
        let nombre = elementos[i].innerHTML 
        let contenido = contenedor[i]
        if(nombre.includes(textSearch))
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