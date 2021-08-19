const canciones_url = "https://agusbergalli.github.io/api-alternativo/JSON/Canciones.json";

function cargarDatos(url) {
    document.getElementById("canciones").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
            console.log(datos)
            for(let valor of datos){
                document.getElementById("canciones").innerHTML +=`
                    <tr>
                        <th scope="row">${valor.nombre}</th>
                        <td>${valor.genero}</td>
                        <td>${valor.duracion}</td>
                        <td>${valor.anioLanzamiento}</td>
                        <td>${valor.cantVistas}</td>
                    </tr>
                    `
          }
            
        })
        .catch(error => alert("Hubo un error: " + error));
}