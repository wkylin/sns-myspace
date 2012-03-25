// JavaScript Document

/**
 * @author wangjingang
 */
$(function(){
    //左右分栏高度保持一致
    var side_bar_h = $(".sidebar").height();
    var content_h = $(".content").height();
    if (side_bar_h > content_h) {
        $(".content").height(side_bar_h);
    }
    else {
        $(".sidebar").height(content_h);
    }
    // 好友查询
    $(".f_topic_input").focus(function(){
        var f_input_txt = $(".f_topic_input").val();
        if (f_input_txt != "") {
            $(".f_topic_input").val("")
        }
    });
    $(".f_topic_input").blur(function(){
        var f_input_txt = $(".f_topic_input").val();
        if (f_input_txt == "") {
            $(this).val(this.defaultValue);
        }
    });
    // 创建新的分组
    
    $(".new_group").click(function(){
        
        $(this).hide();
        $(this).siblings().show();
    });
    $("#new_group_reset").click(function(){
        $(this).parent().hide().siblings().removeClass("hidden").show();
        
    });
    $(".ipt_text").focus(function(){
        if ($(this).val() != "") {
            $(this).val("")
        }
    });
    $(".ipt_text").blur(function(){
        if ($(this).val() == "") {
            $(this).val(this.defaultValue);
        }
    });
    //添加新的分组并编辑
    $("#new_group_submit").click(function(){
        $(this).parent().hide();
        $(this).parent().siblings().show();
        var new_group = $("#ipt_text").val();
        $("ul.f_groups").append("<li><a href='#'>" + new_group + "</a><div class='f_group_option hidden'> <a href='#' title='删除' class='f_group_dele'></a><a href='#' class='f_group_edit'>编辑</a></div><div class='fgroup_submit hidden'><input type='text' name='' id='' /><a href='#' class='fgroup_submit_btn '></a><div class='clear'></div></div></li>");
        
        li_mouseover();
        gli_click();
        li_mouseout();
        f_group_dele();
        f_group_edit();
        fgroup_submit();
    });
    //好友分组管理
    gli_click();
    li_mouseover();
    li_mouseout();
    f_group_dele();
    f_group_edit();
    fgroup_submit();
    
    // 选择分组 2010-08-23
    $(".f_select_group").each(function(index){
        $(this).attr("id", "group-" + index);
        var group_index = $("#group-" + index);
        group_index.hover(function(){
//            group_index.children(".select_group_option").show();
				group_index.click(function(){ group_index.children(".select_group_option").show();});
        }, function(){
            group_index.children(".select_group_option").hide();
        });
    });

	
    //解决ie6和ie7的z-index问题
    var li_length = $(".f_content_mid ol>li");
    li_length.each(function(index){
        $(this).css({
            'z-index': li_length.length - index
        })
    });
    
	//取消请求和解决关系
	// 鼠标悬停时出现
	var $a_relation=$("a").hasClass("fmcont_rerelation");
	if($a_relation){
		
		$(".relievesrelation").show();
		}
	var $a_request=$("a").hasClass("fmcont_dele_btn");
	if($a_request){
			$(".relievesrequest").show();
			}
    
});


function li_mouseover(){
    $(".f_groups > li").mouseover(function(){
        $(this).addClass("f_group").siblings().removeClass("f_group");
        var cur_f_group = $(this).attr("class").toString();
        //if (cur_f_group != "f_group_cur f_group") {
            $(this).children(".f_group_option").show();
        //}
    });
    
};

function gli_click(){
    $("ul.f_groups li").click(function(){
        $(this).addClass("f_group_cur").siblings().removeClass("f_group_cur");
        $(this).children(".f_group_option").hide();
    });
    
}

function li_mouseout(){
    $("ul.f_groups li").mouseout(function(){
        $(this).removeClass("f_group");
        $(this).children(".f_group_option").hide();
    });
}

function f_group_dele(){
    $(".f_group_dele").click(function(){
    
        $(this).parent().parent().remove();
        return false;
    });
}

function f_group_edit(){
    $(".f_group_edit").click(function(){
    
        $(this).parent().hide().prev().hide();
        $(this).parent().next().show();
        $(this).parent().parent().unbind("mouseover");
        
        $(".fgroup_submit input").val($(this).parent().prev().text());
        $(".fgroup_submit input").bind('click', function(event){
            $(this).val("");
            event.stopPropagation();
        })
        // $(".fgroup_submit input").focus(function(){
        //            //$(this).parent().parent().unbind("click");
        //            $(this).val("");
        //            return false;
        //        });
        return false;
    });
}

function fgroup_submit(){
    $(".fsubmit_btn").click(function(){
        $('.fgroup_submit').hide();
        $(this).parent().prev().prev().html($(this).prev().val()).show();
        
        li_mouseover();
        return false;
    });
}

function re_relation(){
	var $find_a=$("a").hasClass("fmcont_rerelation");
		if($find_a){
			$(".relievesrelation").show();
			}
	
	}