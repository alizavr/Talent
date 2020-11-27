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
 