// я делал

$(document).ready(function () { // заменили DOMContentLOaded на ready 
   
    $('.main_btna').on('click', function () {
        modalShow();
    });

    $('.main_btn').on('click', function () {
        modalShow();
    });
    $('button').on('click', function () {
        modalShow();
    });
    $('a[href = "#sheldure"]').on('click', function () {
        modalShow();
    });
});

//  $('.modal').css("display", 'block')


function modalShow() {
    $('.overlay').animate({
        opacity: 'toggle',
    }, 1000);
    
    $('.modal').animate({
        height: 'toggle'
    }, 1000);
}



// ОТВЕТ

// $(document).ready(function() {

//     $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
//         $('.overlay').fadeIn(1000);
//         $('.modal').slideDown(1000);
//     });

//     $('.close').click(function() {
//         $('.modal').slideUp(1000);
//         $('.overlay').fadeOut(1000);
//     });

// });