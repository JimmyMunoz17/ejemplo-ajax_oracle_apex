function traerInformacion() {
  $.ajax({
    //url dirección del nuestro servidor
    url:"https://g54e18a710da042-nmwpjfcclbjz0kl8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo/",
    //tipo de petición GET, POST, DELETE, PUT
    type:"GET",
    //tipo de dato que esperamos que el sevidor nos entregue
    dataType:"JSON",
    //Función
    success:function (respuesta) {
      //Acá se puede validar la respuesta.
      console.log(respuesta);
      pintarRespuesta(respuesta.items);
      // for (i=0; i < respuesta.items.length; i++) {
      //   // $("#resultado").append(respuesta.items[i].name+"<br>");
      // }
    },
  }).done(function(){
    // alert("exito");
  });
}

function pintarRespuesta(items) {
  let myTable = "<table>";
  for (i=0; i < items.length; i++) {
    myTable += "<tr>";
    myTable += "<td>" + items[i].id + "</td>";
    myTable += "<td>" + items[i].name + "</td>";
    myTable += "<td>" + items[i].brand + "</td>";
    myTable += "<td>" + items[i].model + "</td>";
    //Botón eliminar
    myTable += "<td> <button onclick='borrarElemento(" + items[i].id + ")'>Borrar</button>";
    myTable += "<tr>";
  }
  myTable += "</table>";
  $("#resultado").append(myTable);
}

function guardarInformacion() {
  let myData = {
    id: $("#id").val(),
    name: $("#name").val(),
    brand: $("#brand").val(),
    model: $("#model").val(),
    category_id: $("#category").val()
  };

  let dataToSend = JSON.stringify(myData);
  console.log(dataToSend);
  $.ajax({
    //url dirección del nuestro servidor
    url:"https://g54e18a710da042-nmwpjfcclbjz0kl8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo/",
    //tipo de petición GET, POST, DELETE, PUT
    type:"POST",
    data:myData,
    //tipo de dato que esperamos que el sevidor nos entregue
    dataType:"JSON",
  })
  .done(function(){
    alert("se ha guardado");
  })
  // .fail( function(request, errorType, errorMessage){
  //   //TIMEOUT --> PASA MUCHO TIEMPO Y NO HAY RESPUESTA
  //   //error --> la página no esta disponible errores 500
  //   //about --> abortado
  //   //parseerror -->  información json y no de este tipo
  //   console.log(errorType);
  //   alert(errorMessage);
  // })
  .always(function(){
    // $('#dato').text('cargando...')
    $("#resultado").empty();
    $("#id").val("");
    $("#name").val("");
    $("#brand").val("");
    $("#model").val("");
    $("#category").val("");
    traerInformacion();
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
    //tipo de petición GET, POST, DELETE, PUT
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
