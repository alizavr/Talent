let isMobile = {
    Android: function(){return navigator .userAgent.match(/Android/i);},
    BlackBerry: function(){return navigator .userAgent.match(/BlackBerry/i);},
    iOS: function(){return navigator .userAgent.match(/iSO/i);},
    Opera: function(){return navigator .userAgent.match(/Opera/i);},
    Windows: function(){return navigator .userAgent.match(/Windows/i);},
    any: function() {return(isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())}
};
let body = document.querySelector('body');

if(isMobile.any()){
    $( ".region__item" ).on( "click", function() {
        $( ".icon-about-arrow" ).toggleClass('opened');
    });
}

$( ".sub-region__item" ).on( "click", function() {
    $(this).toggleClass('actived');
});
$('[data-fancybox="gallery"]').fancybox({
    buttons : [ 
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'download',
      'close'
    ],
    
    infobar: false,
    
  });

$(document).ready(function(){

    $('#carousel-clients').owlCarousel({
        loop:true,
       nav: true,
       dots: false,
  
        responsive:{
            0:{
                items:2
            },
  
            768:{
                items:4
            }
        }
    });
    $('#carousel-customer').owlCarousel({
        loop:true,
       nav: true,
       dots: false,
  
        responsive:{
            0:{
                items:1
            },
  
            768:{
                items:3
            }
        }
    });
  });
 $(document).ready(function(){
$('.header__burger').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock')
});
 });
 $('#corporates-carousel').owlCarousel({
   loop:true,
   nav: true,
   dots: false,

    responsive:{
        0:{
            items:1
        },
        440:{
            items:2
        },

        768:{
            items:4
        }
    }
});
