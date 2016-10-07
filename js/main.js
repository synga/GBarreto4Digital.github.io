//VAI IMPEDIR EFEITO DE DRAG EM IMAGENS
$( document ).ready(function(){
  var imagens = document.getElementsByTagName('img');
  for(var i = 0; i < imagens.length; i++){
    imagens[i].draggable = false;
  };
});

//VAI GARANTIR AS CONFIGURAÇÕES DA PAGINA AO INICIAR
//RELATIVO AO CARROSSELE OUTRAS IMAGENS
$(document).ready(function() {
  var $window = $(window);
  if ($window.width() <= 991) {
    $('#produtos-mdlg').hide();
    $('#produtos-smxs').show();
    $('#carros-mdlg').hide();
    $('#carros-smxs').show();
    $('#header-banner').hide();
  } else {
    $('#produtos-mdlg').show();
    $('#produtos-smxs').hide();
    $('#carros-mdlg').show();
    $('#carros-smxs').hide();
    $('#header-banner').show();
  };
});

//MANIPULA O CARROSSEL DEPENDENDO DO TAMANHO DO VIEWPORT
(function ($) {
  var $window = $(window);

  function resize() {
    if ($window.width() <= 991) {
      $('#produtos-mdlg').hide();
      $('#produtos-smxs').show();
      $('#carros-mdlg').hide();
      $('#carros-smxs').show();
      $('#header-banner').hide();
    } else {
      $('#produtos-mdlg').show();
      $('#produtos-smxs').hide();
      $('#carros-mdlg').show();
      $('#carros-smxs').hide();
      $('#header-banner').show();
    };
  };

  $window.resize(resize).trigger('resize');
})(jQuery);

//AUTOPLAY PARA O PRIMEIRO CARROSSEL
$(document).ready(function() {
  $('#CarouselCarros').carousel({
    interval: 5000
  });
});

/*
MANIPULAÇÃO PARA VIEWPORT XS
*/
//MUDA O ICONE DE LUGAR NA BARRA DE MENU
(function ($) {
  var $window = $(window);

  function resize() {
    if ($window.width() <= 767) {
      $('#botao-enviar').addClass('text-center');
      $('#navbar-logo').hide();
      var logos = $('#logo-xs');
      if(logos.length == 0) {
        var novaImagem = '<img id="logo-xs" src="img/logo.png" alt="QDCars" />';
        $('.navbar-header').append(novaImagem);
      } else {
        $('#logo-xs').show();
      };
    } else {
      $('#botao-enviar').removeClass('text-center');
      $('#navbar-logo').show();
      $('#logo-xs').hide();
    };
  };

  //MUDA O ICONE DE LUGAR NA BARRA DE MENU AO INICIAR O SITE
  $(document).ready(function() {
    var $window = $(window);
    if ($window.width() <= 767) {
      $('#botao-enviar').addClass('text-center');
      $('#navbar-logo').hide();
      var logos = $('#logo-xs');
      if(logos.length == 0) {
        var novaImagem = '<img id="logo-xs" src="img/logo.png" alt="QDCars" />';
        $('.navbar-header').append(novaImagem);
      } else {
        $('#logo-xs').show();
      };
    } else {
      $('#botao-enviar').removeClass('text-center');
      $('#navbar-logo').show();
      $('#logo-xs').hide();
    };
  });

  $window.resize(resize).trigger('resize');
})(jQuery);
