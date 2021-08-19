const ventas_url = "https://agusbergalli.github.io/api-alternativo/JSON/Ventas.json";

function cargarDatos(url) {
    document.getElementById("ventas").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
            console.log(datos)
            for(let valor of datos){
                document.getElementById("ventas").innerHTML +=`
                    <tr>
                        <th scope="row">${valor.idFactura}</th>
                        <td>${valor.monto}</td>
                        <td>${valor.metodoPago}</td>
                        <td>${valor.cantAlbumesComprado}</td>
                    </tr>
                    `
          }
            
        })
        .catch(error => alert("Hubo un error: " + error));
}
