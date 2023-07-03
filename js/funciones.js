$(document).ready(function () {

  $(window).scroll(function () {
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop() + windowHeight;

    $(".panel").each(function () {
      var offsetTop = $(this).offset().top;
      if (offsetTop < scrollPosition) {
        $(this).css("opacity", "1");
      }
    });
  });

  // Mostrar los elementos visibles al cargar la página
  $(window).trigger('scroll');




  $(".carta").mouseover(function () {
    $(this).find("img").css({
      transform: 'scale(1.2)',
      transition: 'transform 1s'
    });
  });

  $(".carta").mouseout(function () {
    $(this).find("img").css({
      transform: 'scale(1)',
      transition: 'transform 1s'
    });
  });

  $(".lineas").mouseover(function () {
    $(this).css({
      transform: 'scale(1.2)',
      transition: 'transform 1s',
      cursor: "default"
    });
  });

  $(".lineas").mouseout(function () {
    $(this).css({
      transform: 'scale(1)',
      transition: 'transform 1s'
    });
  });


  $(".cartaprecios").mouseover(function () {
    $(this).css({
      transform: 'scale(1.1)',
      transition: 'transform 1s'
    });
  });

  $(".cartaprecios").mouseout(function () {
    $(this).css({
      transform: 'scale(1)',
      transition: 'transform 1s'
    });
  });


  $(".tarjeta").mouseover(function () {

    $(this).css({
      transform: 'scale(1.1)',
      transition: 'transform 1s',
      cursor: "pointer"
    });
  });

  $(".tarjeta").mouseout(function () {
    $(this).css({
      transform: 'scale(1)',
      transition: 'transform 1s'
    });
  });


  $(".footer li").mouseover(function () {
    $(this).find("img").css({
      transform: 'scale(1.2)',
      transition: 'transform 1s'
    });
  });

  $(".footer li").mouseout(function () {
    $(this).find("img").css({
      transform: 'scale(1)',
      transition: 'transform 1s'
    });
  });


  $(".btn").mouseover(function () {
    $(this).css({
      transform: 'scale(1.2)',
      transition: 'transform 1s'
    });
  });

  $(".btn").mouseout(function () {
    $(this).css({
      transform: 'scale(1)',
      transition: 'transform 1s'
    });
  });


  var btnVolverInicio = $("#btn-volver-inicio");

  // Ocultar el botón inicialmente con desvanecimiento
  btnVolverInicio.hide();

  // Agregar evento de desplazamiento
  $(window).scroll(function() {
    // Obtener la posición vertical actual de desplazamiento
    var scrollPos = $(this).scrollTop();

    // Mostrar u ocultar el botón con animación de desvanecimiento
    if (scrollPos > 0) {
      btnVolverInicio.fadeIn();
    } else {
      btnVolverInicio.fadeOut();
    }
  });

  // Agregar evento de clic al botón de imagen
  btnVolverInicio.click(function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });



});