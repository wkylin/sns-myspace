//** jQuery Scroll to Top Control script- (c) Dynamic Drive DHTML 
//** 返回顶部（缓冲效果）
//** wkylin
//** 2010-12-31

$(function(){
    //回顶部
    $("a.goTop").hide();
    $(window).scroll(function(){
        var scrollTopHeight = $(document).scrollTop();
        if (scrollTopHeight > 50) {
            $("a.goTop").show();
        }
        if (scrollTopHeight == 0) {
            $("a.goTop").hide();
        }
        
    });
    
    $('a.goTop').click(function(e){
        e.stopPropagation();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    
});