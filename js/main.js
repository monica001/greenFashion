$(function(){
    // nav
    $(".mob_Open").on("click",function(){
        $(".mob_nav").fadeIn();
    })
    $(".mob_Close").on("click",function(){
        $(".mob_nav").fadeOut();
    })

    // 選單固定
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100 && $(window).width()>768) {
            $('.menu').addClass('sticky');
        }
        else {
            $('.menu').removeClass('sticky');
        }
    });


    // gotop
    $(".go-top").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1500);
    });

    //精選旅程輪播
    if(device.mobile()){
        //mobile
         $('.feature-carousel').slick({
            dots: true,
            autoplay: true,
            slidesToShow: 1,
        });
    
    }else{
        //PC
        $('.feature-carousel').slick({
          dots: true,
          infinite: true,
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 3
        });
    }
    //首頁輪播
    $('.carousel').slick({
        dots: true,
        fade:true,
        autoplay: true,
        appendDots:$('.dots-area'),
    });

})//