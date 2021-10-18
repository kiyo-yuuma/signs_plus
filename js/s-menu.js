$(function(){
    $(".open").fadeIn();
    $(".button").on("click",function(){
        
        function change() {
            $(this).addClass("active").siblings().removeClass("active");
            $(".content.open").removeClass("open");
        };

        if ($(this).hasClass("selected")){

        }else{
            if ($(this).hasClass("menu1")){
                $(this).addClass("active").siblings().removeClass("active");
                $(".open").fadeOut(1);
                $(".content.open").removeClass("open");
                $("#menu1").addClass("open");
                $(".open").fadeIn(500);
            }else if ($(this).hasClass("menu2")){
                $(this).addClass("active").siblings().removeClass("active");
                $(".open").fadeOut(1);
                $(".content.open").removeClass("open");
                $("#menu2").addClass("open");
                $(".open").fadeIn(500);
            }else if ($(this).hasClass("menu3")){
                $(this).addClass("active").siblings().removeClass("active");
                $(".open").fadeOut(1);
                $(".content.open").removeClass("open");
                $("#menu3").addClass("open");
                $(".open").fadeIn(500);
            }else {
                $(this).addClass("active").siblings().removeClass("active");
                $(".open").fadeOut(1);
                $(".content.open").removeClass("open");
                $("#menu4").addClass("open");
                $(".open").fadeIn(500);
            }
        }
    });
});