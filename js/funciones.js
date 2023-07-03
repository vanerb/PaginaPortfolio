$(document).ready(function () {

    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollPosition = $(window).scrollTop() + windowHeight;
    
        $(".panel").each(function() {
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
            transition: 'transform 1s'
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

});