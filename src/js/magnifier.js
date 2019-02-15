var focus=document.querySelector(".focus");

//大图焦点

var big_wrap=document.querySelector(".wrap-big-magnifier");
var small_wrap=document.querySelector(".wrap-small-magnifier");

var big_bg=big_wrap.children[0];
var small_bg=small_wrap.children[0];


var choice_wrap = document.querySelector(".wrap-choice-magnifier");
var choice_items = choice_wrap.children;
//计算比例  这是小图和大图的缩放比

var prop=parseInt(getComputedStyle(big_wrap)["width"])/parseInt(getComputedStyle(focus)["width"]);
big_bg.style.width=prop*small_wrap.offsetWidth+"px";
big_bg.style.height=prop*small_wrap.offsetHeight+"px";

//  var prop = parseInt(getComputedStyle(big_wrap)["width"]) / parseInt(getComputedStyle(focus)["width"]);
//             
//             big_bg.style.width = prop * small_wrap.offsetWidth + "px";
//             big_bg.style.height = prop * small_wrap.offsetHeight + "px";
// 
//鼠标移入显示
small_wrap.addEventListener("mouseenter",toggle.bind(false,"show"));
//鼠标移出隐藏
small_wrap.addEventListener("mouseleave",toggle.bind(false,"hide"));

function toggle(type){
	var display=null;
	if(type==="show"){
		display="block"
	}else{
		display="none";
	}
	focus.style.display=display;
	big_wrap.style.display=display;
}

small_wrap.addEventListener("mousemove",eleMove);

function eleMove(evt){
	var e=evt||window.event;
	
	var left=e.offsetX;
	var top=e.offsetY;

//边界检测 让鼠标在膜的中间
left=left-focus.offsetWidth/2;
top=top-focus.offsetHeight/2;


//最小值边界判断
   left = left <= 0 ? 0 : left;
    top = top <= 0 ? 0 : top;

//最大值边界判断
var maxLeft=small_wrap.offsetWidth-focus.offsetWidth;
var maxTop=small_wrap.offsetHeight-focus.offsetHeight;

 left = left >= maxLeft ? maxLeft : left;
 top = top >= maxTop ? maxTop : top;

//边界检测结束

//左侧焦点移动
 focus.style.left = left + "px";
 focus.style.top = top  + "px";

//右侧背景移动
 big_bg.style.left = -left * prop + "px";
 big_bg.style.top = -top * prop + "px";
}

  choice_items = Array.from(choice_items);
              choice_items.forEach((item)=>{
                    item.addEventListener("click",choice.bind(false,item))
              })
  
              function choice(item){
                    // 1. 怎么获取路径啊?  data-big  data-samll;
  
                    // 先清空;
                    // console.log(item);      
                    choice_items.forEach((item)=>{
                          item.className = "";
                    })
                    // 给对应的目标添加acitve;
                    item.className = "active";
  
                    // 替换图片;
                    
                    // 1. 获取数据;
                    var bigSrc = item.getAttribute("data-big");
                    var smallSrc = item.getAttribute("data-small");
  
                    // console.log(bigSrc,smallSrc);
                    small_bg.src = smallSrc;
                    big_bg.src = bigSrc;
              }