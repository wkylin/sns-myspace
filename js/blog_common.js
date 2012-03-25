// JavaScript Document
// JavaScript Document

$(function(){
    //左右分栏高度保持一致
   // var side_bar_h = $(".sidebar").height();
//    var content_h = $(".content").height();
//    
//    if (side_bar_h > content_h) {
//        $(".content").height(side_bar_h);
//    }
//    else {
//        $(".sidebar").height(content_h);
//    }
    
    //通道下拉菜单的显示与隐藏
    //$("#routeway").hover(function(){
//        $("#routeway_option").show();
//    }, function(){
//        $("#routeway_option").hide();
//    });
    //头部通用查询
   // $(".top_sh_input").focus(function(){
//        var top_txt = $(".top_sh_input").val();
//        if (top_txt != "") {
//            $(this).val("");
//        }
//    });
//    $(".top_sh_input").blur(function(){
//        var $top_txt = $(".top_sh_input").val();
//        if ($top_txt == "") {
//            $(this).val(this.defaultValue);
//        }
//    });
    //意见反馈
   // $("#feedback_box").hover(function(){
//        $(this).css({
//            "opacity": 1
//        })
//    }, function(){
//        $(this).css({
//            "opacity": 0.6
//        })
//    });
    
    //我关注的话题查询
   // $(".topic_input").focus(function(){
//        $(this).val("");
//    });
//    $(".topic_input").blur(function(){
//        var $top_txt = $(".topic_input").val();
//        if ($top_txt == "") {
//            $(this).val(this.defaultValue);
//        }
//    });
    // 微博发表(ie6 noerror)
    $("#blog_textarea").focus(function(){
        $(this).css("border", "1px solid #a0a0a0");
    });
    $("#blog_textarea").blur(function(){
        $(this).css("border", "1px solid #d0d0d0")
    });
    
    // 表情弹出与关闭
   // $("#show_faces").click(function(){
//        $(".face_list").show()
//    });
//    $(".face_close").click(function(){
//        $(".face_list").hide()
//    });
    
    // 话题
    //var defaultValue="三言两语，发发感慨，晒晒心情！"
    //$(".publish_topic").toggle(function(){$("#blog_textarea").val("#话题");},
    //function(){$("#blog_textarea").val(defaultValue);});
    //$(".publish_topic").one( "click",function(){$("#blog_textarea").val("#Topic#");});
    $(".publish_topic").click(function(){
        a();
    });
    
    // 微博选项卡
    blog_tab();
    
    //我的首页 最新 热门
    $("#myblog_home li a ").click(function(){
        $(this).removeClass("talk_title").addClass("talk_title_curt");
        $(this).parent().siblings().children().removeClass("talk_title_curt").addClass("talk_title");
    })
    
    //对话内容
    
    $(".dilog_cont").each(function(index){
        $(this).attr("id", "dilog_id-" + index);
        var dilog_index = $("#dilog_id-" + index);
        
        dilog_index.hover(function(){
            dilog_index.children(".dilog_maincnt").show();
        }, function(){
            dilog_index.children(".dilog_maincnt").hide();
        });
        
    });
    
    
});

function a(){
    var con = "请在这里输入自定义话题";
    //转载文字
    $("#blog_textarea").val("#" + con + "#");
    var l = $("#blog_textarea").val().length;
    
    //创建选择区域	
    if ($("#blog_textarea")[0].createTextRange) {//IE浏览器
        var range = $("#blog_textarea")[0].createTextRange();
        range.moveEnd("character", -l)
        //range.moveStart("character",-l)              
        range.moveEnd("character", l - 1);
        range.moveStart("character", l - 1 - con.length);
        range.select();
    }
    else {
        $("#blog_textarea")[0].setSelectionRange(l - 1 - con.length, l - 1);
        $("#blog_textarea")[0].focus();
    }
};
function blog_tab(){
    var $blog_tab_li = $(".blog_menu_tab li");
    
    $blog_tab_li.hover(function(){
        $(this).addClass("my_blog").siblings().removeClass("my_blog");
    }, function(){
        $(this).removeClass("my_blog");
    });
    
    
    for (var i = 0; i < $blog_tab_li.length; i++) {
        var li_eq = ".blog_menu_tab li:eq(" + i + ")";
        $(li_eq).click(function(){
            $(this).addClass("myblog_cur").siblings().removeClass("myblog_cur");
        })
    }
    
    
    $(".blog_menu_tab li:eq(0)").click(function(){
        $("#myblog_home").show().siblings().hide();
    });
    $(".blog_menu_tab li:eq(1)").click(function(){
        $(".talk_top_option #reply_myblog").show().siblings().hide();
    });
    $(".blog_menu_tab li:eq(2)").click(function(){
        $(".talk_top_option #my_blog").show().siblings().hide();
    });
    
    $(".blog_menu_tab li:eq(3)").click(function(){
        $(".talk_top_option #tc_blog").show().siblings().hide();
    });
    
    
}
