$(document).ready(function() {
    $('.button').hover (function() {
            $('.shadow, .button').css('background-position', '0 -300px');
        }, 	function() {
            $('.shadow, .button').css('background-position', '');
        }
    );
});

$('.all').hide();

$('.button').on('click', function() {
    $(this).animate({
        margin: '64px 0 0 +=4px'
    }, 200);

    $('.shadow').animate({
        margin: '70px 0 0 -=4px'
    }, 200);

    $('.nameTag').delay(400).fadeTo(100, 0.0);


    var showResume = function(){
        $('.all').slideDown(500);
        $('.all').css({'z-index': '1'});
    };

    setTimeout(showResume, 750);



});

$('.all').on('click', function() {

    $('.button').animate({
        margin: '60px 0 0 -=4px'
    }, 200);

    $('.shadow').animate({
        margin: '75px 0 0 +=4px'
    }, 200);

    var hideResume = function(){
        $('.all').slideUp(500);
        $('.all').css({'z-index': '-1'});
    };

    setTimeout(hideResume, 200);

    $('.nameTag').delay(1000).fadeTo(100, 1);
});



