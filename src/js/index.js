
var btns=document.getElementById("btns");
var target=0;

btns.onclick=function(){
	clearInterval(timer);
	var timer=setInterval(function(){
		console.log(1);
		target=document.body.scrollTop;
		target-=Math.ceil(target/10);
		window.scrollTo(0,target);
		if(target==0){
			clearInterval(timer);
		}
	},10000);
};
