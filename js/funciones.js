function traerInformacion() {
  $.ajax({
    //url dirección del nuestro servidor
    url: "https://g54e18a710da042-nmwpjfcclbjz0kl8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo/",
    //tipo de petición GET, POST, DELECT, PUT
    type: "GET",
    //tipo de dato que esperamos que el sevidor nos entregue
    dataType: "json",
    // crossDomain: true,
    contentType: "application/json",
    // cache: false,
    // xhrFields: {
    //   withCredentials: false,
    // },
    // headers: {
    //   "Access-Control-Allow-Credentials": true,
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET, POST, PUT,",
    //   "Access-Control-Allow-Headers": "application/json",
    // },
    //Función
    success: function (respuesta) {
      //Acá se puede validar la respuesta.
      console.log(respuesta);
      for (i = o; i < respuesta.iteam.length; i++) {
        $("#resultado").append(respuesta.iteam[i].name + "<br>");
      }
    },
  });
}

function pintarRespuesta(iteam) {
  let myTable = "<table>";
  for (i = 0; i < iteam.length; i++) {
    myTable += "<tr>";
    myTable += "<td>" + iteam[i].id + "</td>";
    myTable += "<td>" + iteam[i].name + "</td>";
    myTable += "<td>" + iteam[i].brand + "</td>";
    myTable += "<td>" + iteam[i].model + "</td>";
    myTable +=
      "<td> <button onclick='borrarElemento(" +
      items[i].id +
      ")'>Borrar</button>";
    myTable += "<tr>";
  }

  myTable = "</table>";
  $("#resultado").append(myTable);
}

function guardarInformacion() {
  let myData = {
    id: $("#id").val(),
    name: $("#name").val(),
    brand: $("#brand").val(),
    model: $("model").val(),
    category_id: $("#category_id").val(),
  };
  let dataToSend = JSON.stringify(myData);

  $.ajax({
    //url dirección del nuestro servidor
    url: "https://g54e18a710da042-nmwpjfcclbjz0kl8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo/",
    //tipo de petición GET, POST, DELECT, PUT
    type: "POST",
    //
    data: myData,
    //tipo de dato que esperamos que el sevidor nos entregue
    dataType: "json",
    //Función
    success: function (respuesta) {
      $("#resultado").empty();
      $("#id").val("");
      $("#name").val("");
      $("#brand").val("");
      $("#model").val("");
      $("#category_id").val("");
      traerInformacion();
      alert("Se ha guardado");
    },
  });
}

function editarInformacion() {
  let myData = {
    id: $("#id").val(),
    name: $("#name").val(),
    brand: $("#brand").val(),
    model: $("model").val(),
    category_id: $("#category_id").val(),
  };

  let dataToSend = JSON.stringify(myData);

  $.ajax({
    //url dirección del nuestro servidor
    url: "https://g54e18a710da042-nmwpjfcclbjz0kl8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo/",
    //tipo de petición GET, POST, DELECT, PUT
    type: "PUT",
    //
    data: dataToSend,
    //decirle al servidor en qué formato le estoy enviando la información.
    contentType: "application/json",
    //tipo de dato que esperamos que el sevidor nos entregue
    dataType: "json",
    //Función
    success: function (respuesta) {
      $("#resultado").empty();
      $("#id").val("");
      $("#name").val("");
      $("#brand").val("");
      $("#model").val("");
      $("#category_id").val("");
      traerInformacion();
      alert("Se ha actualizado");
    },
  });
}

function borrarElemento(idElemento) {
  let myData = {
    id: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    //url dirección del nuestro servidor
    url: "https://g54e18a710da042-nmwpjfcclbjz0kl8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo/",
    //tipo de petición GET, POST, DELECT, PUT
    type: "DELETE",
    //
    data: dataToSend,
    //decirle al servidor en qué formato le estoy enviando la información.
    contentType: "application/json",
    //tipo de dato que esperamos que el sevidor nos entregue
    dataType: "json",
    //Función
    success: function (respuesta) {
      $("#resultado").empty();
      traerInformacion();
      alert("Se ha eliminado");
    },
  });
}
