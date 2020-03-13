
$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({
  fullWidth: true
});

setInterval(function(){
  $('.carousel.carousel-slider').carousel('next');
},3000);

$('.navigation li').hover(function () {
//Esto nos dara el efecto de Fade en el submenu
    $('ul', this).fadeIn(); // fadeIn muestra progresivamente un item oculto
},function () {
    $('ul', this).fadeOut(); // fadeOut vuelve a ocultar el submenu
});

var img = $('#img');

$('#btn1').click(function(){
  img.fadeIn();
});

$('#btn2').click(function(){
  img.fadeOut();
});


$('#cargar').click(function(){

  var cont = '<div class="contenido"><img src="coffee1.jpg" alt="" width ="400px"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>';

  $('.Contenido').append(cont);
});

$('#cargarajax').click(function(){
  $.ajax({
    url: "ajax.html",
    success:function(data){
      setTimeout(function(){
        $('#datosajax').html(data);
      },0);
    }
  });
});

$('#color').click(function(){
  $('.otro').css("background", "gray");
})

});
