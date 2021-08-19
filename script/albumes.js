const album_url = "https://agusbergalli.github.io/api-alternativo/JSON/Albumes.json";

function cargarDatos(url) {
    document.getElementById("album").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
            console.log(datos)
            for(let valor of datos){
                document.getElementById("album").innerHTML +=`
                    <tr>
                        <th scope="row">${valor.nombre}</th>
                        <td>${valor.genero}</td>
                        <td>${valor.anio_lanzamiento}</td>
                        <td>${valor.cantCanciones}</td>
                    </tr>
                    `
          }
            
        })
        .catch(error => alert("Hubo un error: " + error));
}
