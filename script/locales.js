const locales_url = "https://agusbergalli.github.io/api-alternativo/JSON/Locales.json";
function cargarDatos(url) {
    document.getElementById("local").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
            console.log(datos)
            for(let valor of datos){
                document.getElementById("local").innerHTML +=`
                    <tr>
                        <th scope="row">${valor.idNumero}</th>
                        <td>${valor.direccion}</td>
                        <td>${valor.ciudad}</td>
                        <td>${valor.telefono}</td>
                    </tr>
                    `
          }
            
        })
        .catch(error => alert("Hubo un error: " + error));
}
