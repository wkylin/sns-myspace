// JavaScript Document

$(function(){
    //email_friend
    $("#email_friend").focus(function(){
        var area_txt = $("#email_friend").val();
        if (area_txt != "") {
            $(this).val("").css("border", "1px solid #a0a0a0");
        }
	
    });
    
    $("#email_friend").blur(function(){
        var area_txt = $("#email_friend").val();
        if (area_txt == "") {
            $(this).val(this.defaultValue).css("border", "1px solid #d0d0d0");
        }
		
    });
    //选择写信的好友
    email_sef();
});

//选择写信好友
function email_sef(){

    $("#e_friend_ul > li").each(function(index){
        $(this).attr("id", "e_friend_" + index);
        var $e_friend = $("#e_friend_" + index);
        $e_friend.dblclick(function(){
            $("#select_f_no").hide();
            $("#emailed_friend").show();
            
            var img_src = $e_friend.find("img").attr("src");
			var e_username=$e_friend.find("a").text();
			//alert(e_username);
            //alert(index);
		
			
            var seelcted_li = $("<li><div class='clearfix'><img src='" + img_src + "' alt='" + "" + "' width='30' height='30'/><a href='#' class='dele_selected' id='dele_f_" + index + "'></a></div><a href='#'>"+e_username+"</a></li>");
            
            
            var select_num = $("#emailed_friend li").length;
            if (select_num < 5) {
                $e_friend.hide();//被双击后在好友列表中消失，避免同一好友被第二次添加
                seelcted_li.appendTo("#emailed_friend");
                $("#select_f_num").text(select_num + 1);
                
            }
            else {
                alert("最多只能选择5位好友！");
            }
            
            $("#dele_f_" + index).click(function(){
                $(this).parent().parent().remove();
                $e_friend.show();//删除选择好友后在好友列表中出现
                select_num = $("#emailed_friend li").length;//需要重新计算值
                //seelcted_li.remove();
                $("#select_f_num").text(select_num);
                if (select_num == 0) {
                    $("#emailed_friend").hide();
                    $("#select_f_no").show();
                }
                return false;
            })
            
        })
    })
}
