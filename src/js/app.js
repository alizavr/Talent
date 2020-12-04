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
