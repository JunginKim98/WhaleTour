$(function(){
    $('.nav> li').mouseover(function(){
        $(this).children('.menu_inner').stop().slideDown();
    }); //hover시 내려오는 거 

    $('.nav> li').mouseleave(function(){
        $(this).children('.menu_inner').stop().slideUp();
    });
});

$(function(){
    $('.check> li> a').click(function(){
        $(this).toggleClass("check_on");
    });
});

$(function(){
    $('.swiper-slide> img:nth-child(2)').click(function(){
        $(this).toggleClass("cart");
    });
});

$(function(){
    $('.swiper-slide> img:nth-child(3)').click(function(){
        $(this).toggleClass("heart");
    });
});


// sub1
// 추천 여행지
$(function(){
    $('.switzerland').mouseover(function(){
        $(this).addClass("switzerland_hover");
    });

    $('.switzerland').mouseleave(function(){
        $(this).removeClass("switzerland_hover");
    });
});


$(function(){
    $('.boracay').mouseover(function(){
        $(this).addClass("boracay_hover");
    });

    $('.boracay').mouseleave(function(){
        $(this).removeClass("boracay_hover");
    });
});

$(function(){
    $('.london').mouseover(function(){
        $(this).addClass("london_hover");
    });

    $('.london').mouseleave(function(){
        $(this).removeClass("london_hover");
    });
});

$(function(){
    $('.osaka').mouseover(function(){
        $(this).addClass("osaka_hover");
    });

    $('.osaka').mouseleave(function(){
        $(this).removeClass("osaka_hover");
    });
});

$(function(){
    $('.check_search_sub1> li> a').click(function(){
        $(this).toggleClass("check_on");
    });
});

// 해외여행_ 베스트
$(function(){
    $('.best_inner div img:nth-child(2)').click(function(){
        $(this).toggleClass("cart1");
    });
});

$(function(){
    $('.best_inner div img:nth-child(3)').click(function(){
        $(this).toggleClass("heart");
    });
});








// sub2
// 추천여행지 국내
$(function(){
    $('.jeonju').mouseover(function(){
        $(this).addClass("jeonju_hover");
    });

    $('.jeonju').mouseleave(function(){
        $(this).removeClass("jeonju_hover");
    });
});


$(function(){
    $('.yangyang').mouseover(function(){
        $(this).addClass("yangyang_hover");
    });

    $('.yangyang').mouseleave(function(){
        $(this).removeClass("yangyang_hover");
    });
});

$(function(){
    $('.busan').mouseover(function(){
        $(this).addClass("busan_hover");
    });

    $('.busan').mouseleave(function(){
        $(this).removeClass("busan_hover");
    });
});

$(function(){
    $('.pohang').mouseover(function(){
        $(this).addClass("pohang_hover");
    });

    $('.pohang').mouseleave(function(){
        $(this).removeClass("pohang_hover");
    });
});

// 국내 제주패스
$(function(){
    $('.cafe1').mouseover(function(){
        $(this).addClass("cafe1_hover");
    });

    $('.cafe1').mouseleave(function(){
        $(this).removeClass("cafe1_hover");
    });
});

$(function(){
    $('.cafe2').mouseover(function(){
        $(this).addClass("cafe2_hover");
    });

    $('.cafe2').mouseleave(function(){
        $(this).removeClass("cafe2_hover");
    });
});

$(function(){
    $('.cafe3').mouseover(function(){
        $(this).addClass("cafe3_hover");
    });

    $('.cafe3').mouseleave(function(){
        $(this).removeClass("cafe3_hover");
    });
});

$(function(){
    $('.cafe4').mouseover(function(){
        $(this).addClass("cafe4_hover");
    });

    $('.cafe4').mouseleave(function(){
        $(this).removeClass("cafe4_hover");
    });
});


// 국내 액티비티
$(function(){
    $('.bungee').mouseover(function(){
        $(this).addClass("bungee_hover");
    });

    $('.bungee').mouseleave(function(){
        $(this).removeClass("bungee_hover");
    });
});

$(function(){
    $('.surfing').mouseover(function(){
        $(this).addClass("surfing_hover");
    });

    $('.surfing').mouseleave(function(){
        $(this).removeClass("surfing_hover");
    });
});

$(function(){
    $('.kart').mouseover(function(){
        $(this).addClass("kart_hover");
    });

    $('.kart').mouseleave(function(){
        $(this).removeClass("kart_hover");
    });
});

$(function(){
    $('.paragliding').mouseover(function(){
        $(this).addClass("paragliding_hover");
    });

    $('.paragliding').mouseleave(function(){
        $(this).removeClass("paragliding_hover");
    });
});

$(function(){
    $('.rafting').mouseover(function(){
        $(this).addClass("rafting_hover");
    });

    $('.rafting').mouseleave(function(){
        $(this).removeClass("rafting_hover");
    });
});

// 해외여행_ 베스트
$(function(){
    $('.review_inner div img:nth-child(2)').click(function(){
        $(this).toggleClass("cart");
    });
});

$(function(){
    $('.review_inner div img:nth-child(3)').click(function(){
        $(this).toggleClass("heart");
    });
});

// sub4 cv

$(function(){
    $('.employee').mouseover(function(){
        $(this).children('.p_hover1')
        .fadeIn(500);
    });
});

$(function(){
    $('.employee').mouseleave(function(){
        $(this).children('.p_hover1')
        .hide();
    });
});

$(function(){
    $('.customer').mouseover(function(){
        $(this).children('.p_hover2')
        .fadeIn(500);
    });
});

$(function(){
    $('.customer').mouseleave(function(){
        $(this).children('.p_hover2')
        .hide();
    });
});

$(function(){
    $('.trust').mouseover(function(){
        $(this).children('.p_hover3')
        .fadeIn(500);
    });
});

$(function(){
    $('.trust').mouseleave(function(){
        $(this).children('.p_hover3')
        .hide();
    });
});

