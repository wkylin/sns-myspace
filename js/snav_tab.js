
// JavaScript Document
/**
 * @author wangjingang
 */
$(function(){

    //信件列表
    $(".email_list > ul > li").each(function(index){
        $(this).attr("id", "email_id-" + index);
        var email_li = $("#email_id-" + index);
        email_li.hover(function(){
            email_li.addClass("li_current");
        }, function(){
            email_li.removeClass("li_current");
        });
    });
});
