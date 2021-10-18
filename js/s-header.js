$(function(){
    $(window).on('scroll', function(){
        winScrollTop = $(this).scrollTop();
        if (winScrollTop < 500) {
            $('.section1').removeClass('hoverd');
        }else if (winScrollTop >= 500 && winScrollTop < 1500) {
            $('.section1').addClass('hoverd').siblings().removeClass('hoverd');
        }else if (winScrollTop >= 1500 && winScrollTop < 3300) {
            $('.section2').addClass('hoverd').siblings().removeClass('hoverd');
        }else if (winScrollTop >= 3300 && winScrollTop < 5800) {
            $('.section3').addClass('hoverd').siblings().removeClass('hoverd');
        }else if (winScrollTop >= 5800 && winScrollTop < 6100) {
            $('.section4').addClass('hoverd').siblings().removeClass('hoverd');
        }else if (winScrollTop >= 6100 && winScrollTop < 6400) {
            $('.section4').removeClass('hoverd');
            $('.section5').removeClass('hoverd');
        }else if (winScrollTop >= 6400) {
            $('.section5').addClass('hoverd').siblings().removeClass('hoverd');
        }
    });

    $('.scroll-button a').on('click', function(){
        var id = $(this).attr('href');
        var height = $(id).offset().top;
        $('html, body').animate({scrollTop:height});
    });

    $('.icon-wrapper').on('click',function(){
        if ($('.hm-menu').hasClass('block')) {
            $('.hm-menu').removeClass('block')
            $('.hm-menu').hide('slide');
            $('.icon-item').css('background-color','black');
            $('.icon-wrapper').removeClass('line-active');
            $('.icon-item.line1').css('top','0');
            $('.icon-item.line3').css('bottom','0');
            $('body').removeClass('hidden');
        }else {
            $('.hm-menu').addClass('block');
            $('.hm-menu').show('slide');
            $('.icon-item').css('background-color','white');
            $('.icon-wrapper').addClass('line-active');
            $('.icon-item.line1').css('top','20px');
            $('.icon-item.line3').css('bottom','6px');
            $('body').addClass('hidden');
        }
    });

    $(window).on('scroll',function(){
        winScrollTop = $(this).scrollTop();
        if (winScrollTop >= 200 && winScrollTop <= 5600) {
            $('.logo-s').fadeIn(500);
        }else {
            $('.logo-s').fadeOut(500);
        }
    });

    $('.logo-s, .logo').on('click',function(){
        $('body, html').animate({ scrollTop: 0 }, 700);
    });

    $('.scroll[href*="#"]').click(function () {
        var elmHash = $(this).attr('href');
        var pos = $(elmHash).offset().top;
        $('body,html').animate({scrollTop: pos}, 500);
        return false;
    });
});
