$(function () {

    // Menu opener hamburger
    $('.menu-open, .menu a').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    });

    // Fixed navigation

    $(window).scroll(function() {
        if ($(this).scrollTop() > 700){  
            $('menu').addClass("sticky");
        }
        else{
            $('menu').remosveClass("sticky");
        }s
    });

    // Всплывающее окно
    $('.parallax-btn').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

    // Большой слайдер
    
    $('.big-slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    });

    
    
});