const usuario_url = "https://agusbergalli.github.io/api-alternativo/JSON/Usuario.json";

function cargarDatos(url) {
    document.getElementById("usuario").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
            console.log(datos)
            for(let valor of datos){
                document.getElementById("usuario").innerHTML +=`
                    <tr>
                        <th scope="row">${valor.nickname}</th>
                        <td>${valor.email}</td>
                    </tr>
                    `
          }
            
        })
        .catch(error => alert("Hubo un error: " + error));
}