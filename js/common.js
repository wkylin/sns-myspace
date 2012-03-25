
// JavaScript Document

$(function(){

   //左右分栏高度保持一致
	var side_bar_h=$(".sidebar").height();
	var content_h=$(".content").height();
	if(side_bar_h>content_h){
		$(".content").height(side_bar_h);
	} else{
		$(".sidebar").height(content_h);
	}
	
   //通道下拉菜单的显示与隐藏
	$("#routeway").hover(function(){$("#routeway_option").show();},function(){$("#routeway_option").hide();});
   //头部通用查询
   $(".top_sh_input").focus(function(){
			var top_txt=$(".top_sh_input").val();
			if(top_txt!="" && top_txt=="找人"){
			$(this).val("");
			}
			});
   $(".top_sh_input").blur(function(){
		var $top_txt=$(".top_sh_input").val();	
		
		if($top_txt==""){
			$(this).val(this.defaultValue);
			}
		});
		// 表情弹出与关闭
	$("#show_faces").click(function(){$(".face_list").show()});
	$(".face_close").click(function(){$(".face_list").hide()});
	
	//写信样式
	$("#email_textarea").focus(function(){
		$(this).css("border", "1px solid #a0a0a0");
		}).blur(function(){
				$(this).css("border", "1px solid #d0d0d0");
		});

});
		