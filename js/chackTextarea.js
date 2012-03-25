// JavaScript Document


	document.getElementById("textArea").focus();
	var chackTextarea = function(obj,num,objTip){
			setInterval(function(){
				var newvalue = obj.value.replace(/[^\x00-\xff]/g, "**"); 
				if(newvalue.length>=0){
					if (newvalue.length > num) {
						objTip.innerHTML="已超出<em>" +parseInt((newvalue.length - num)/2) +"</em>个字!";
						objTip.style.color="#F00";
						document.getElementById("button").disabled="disabled";
					}else{
						objTip.innerHTML="你还能输入<em>" +parseInt((num-newvalue.length)/2) +"</em>个字!";
						objTip.style.color="#588905";
						document.getElementById("button").disabled="";
					}
				}else{
						document.getElementById("button").disabled="disabled";
				}
			},100)
		
	}
	chackTextarea(document.getElementById("textArea"),280,document.getElementById("tip"));

