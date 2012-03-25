//网站换肤
$(function(){
		var $li =$("#skin_option li");
		$li.click(function(){
			switchSkin( this.id );
		});
		
		var cookie_skin = $.cookie("MyCssSkin");
		if (cookie_skin) {
			switchSkin( cookie_skin );
		}
});
function switchSkin(skinName){
		$("#"+skinName).children("img").addClass("skin_current").end()               //当前<li>元素选中
					   .siblings().children("img").removeClass("skin_current");  //去掉其他同辈<li>元素的选中
	    $("#skincss").attr("href","../css/skincss/"+ skinName +".css"); //设置不同皮肤
		$.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });
}