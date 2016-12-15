$(function(){
//    scoll
    var flag=true;
    window.onscroll=function() {
        var scrotop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrotop > 220) {
            if (flag) {
                flag = false;
                $('.header-content').addClass('tmall-bg-red');
            }
        } else {
            if (!flag) {
                flag = true;
                $('.header-content').removeClass('tmall-bg-red');
            }
        }
    }
    //轮播
    var mySwiper = new Swiper ('#banner', {
        direction: 'horizontal',
        loop: false,
        autoplay : 2000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
    })
    var mySwiper = new Swiper ('#ads-word', {
        direction: 'vertical',
        autoplay : 2000,
        autoplayDisableOnInteraction : false,
        loop: true,
    })
    var mySwiper = new Swiper ('#ads-img', {
        direction: 'horizontal',
        loop: false,
    })
    
    
    //顶部菜单
    // $('.category-menu').click(function(){
    //     $('.tab-container').css('display','block');
    //     $('.tab-cover').css('display','block').delay(300).queue(function(){
    //         $(this).next().css({"transform":"translateX(0rem)"}).dequeue();
    //     });
    //
    // })
    // $('.tab-cover p').click(function(){
    //     $('.tab-container').css({"transform":"translateX(-3.8rem)"}).delay(300).queue(function(){
    //         $(this).css('display','none').prev().css("display","none").dequeue();
    //     })
    //     // $('.tab-container').delay(500).css('display','none');
    // })

















    })