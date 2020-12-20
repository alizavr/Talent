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
// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-padding');
// let unlock = true;
// const timeout = 800;
// if (popupLinks.length > 0){
//     for(let index = 0; index < popupLinks.length; index++){
//         const popupLinks = popupLinks[index];
//         popupLinks.addEventLisstener('click', function(e){
//             const popupName = popupLinks.getAttribute('href').replace('#','');
//             const curentPopup = document.getElementById(popupName);
//             popupOpen(curentPopup);
//             e.preventDefault();
//         }
//         );
//     }
// }
// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0){
//     for (let index = 0; index < popupCloseIcon.length; index++){
//         const el = popupCloseIcon[index];
//         el.addEventListener('click', function(e){
//             popupClose(el.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }
// function popupOpen(curentPopup){
//     if (curentPopup && unlock){
//         const popupActive = document.querySelector('.popup.open');
//         if(popupActive){
//             popupClose(popupActive, false);
//         } else {
//             bodyLock();
//         }
//         curentPopup.classList.add('open');
//         curentPopup.addEventListener('click', function(e){
//             if (!e.target.closest('popup__content')){
//                 popupClose(e.target.closest('.popup'));
//             }
//         });
//     }
// }
// function popupClose(popupActive, doUnlock = true){
//     if (unlock){
//         popupActive.classList.remove('open');
//         if (doUnlock){
//             bodyUnLock
//         }
//     }
// }
