const artista_url = "https://agusbergalli.github.io/api-alternativo/JSON/Artista.json";

function cargarDatos(url) {
    document.getElementById("artista").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
            console.log(datos)
            for(let valor of datos){
                document.getElementById("artista").innerHTML +=`
                    <tr>
                        <th scope="row">${valor.nombre}</th>
                        <td>${valor.genero}</td>
                        <td>${valor.cantSuscriptores}</td>
                    </tr>
                    `
          }
            
        })
        .catch(error => alert("Hubo un error: " + error));
}