$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  // Mostrar un alert
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente");
  });
  //Cambiar color de etiquetas
  $("section").on("dblclick", "div h3", function () {
    $(this).css({
      color: "red",
    });
  });
  //hacer aparecer y desaparecer contenido de tarjetas
  $(".card-title").click(function () {
    $(".card-text").toggle(1000);
  });
});
