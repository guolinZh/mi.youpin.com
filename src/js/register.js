 // 点击发送数据;
             var submit = document.getElementById("submit");
             var username = document.getElementById("username");
             var password = document.getElementById("password");

             submit.addEventListener("click",register);
             function register(){
                  var are_value = area.value;
                  var num_value = number.value;

                  // console.log(usr_value,pwd_value);
                  // 使用ajax技术进行数据的发送;
                  // GET || POST
                  
                  //1. 目标 -> 用GET发送数据;

                  // get数据发送规则;
                  // url + ? + data
                  // data key=value
                  // key=value&key2=value2;

                  var url = "http://localhost/interface/register.php";
                  url += `?area=${are_value}&number=${num_value}`;

                  // var xhr = new XMLHttpRequest();
                  // xhr.open("GET",url);
                  // xhr.send(null);
                  // xhr.onreadystatechange = function(){
                  //       if(xhr.readyState === 4 && xhr.status === 200){
                  //             // console.log(xhr.response);
                  //             console.log(JSON.parse(xhr.response))
                  //       }
                  // }

                  // ajaxGet(url,function(res){
                  //       console.log(res);
                  // })

                  ajaxGet(url)
                  .then(function(res){
                        console.log(res);
                  })
             }


             // 但是使用回调函数我们就面临回调地狱;
             // 使用promise =>  就没有回调函数;
             function ajaxGet(url){
                  return new Promise(function(resolve,reject){
                        var xhr = new XMLHttpRequest();
                        xhr.open("GET",url);
                        xhr.send(null);
                        xhr.onreadystatechange = function(){
                              if(xhr.readyState === 4 && xhr.status === 200){
                                    resolve(xhr.response);
                              }
                        }
                  })
             }
		 
		 var number=document.getElementById("number");
		 	
		 	number.addEventListener("blur",confirmNumber);
		 	
		 function confirmNumber(){
		 		var tel_reg=/\b18\s\d{9}|15\d{9}|13\d{9}/gm;
		 		var number_str=number.value;
		 		var tip=number.parentNode.children[2];
		 		if(tel_reg.test(number_str)){
		 			tip.className="hide";
		 		}else{
		 			tip.className="error";
		 		}
		 	}
			
			 submit.addEventListener("click",submitForm)
			
			function submitForm(evt){
						 var e=evt||window.event;
						 
						 // var b=document.querySelectorAll()
						 
						 e.preventDefault();
			}