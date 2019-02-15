 // 点击发送数据;
             var submit = document.getElementById("submit");
             var username = document.getElementById("username");
             var password = document.getElementById("password");

             submit.addEventListener("click",register);
             function register(){
                  var usr_value = username.value;
                  var pwd_value = password.value;


                  var url = "http://localhost/interface/login.php";
                  url += `?username=${usr_value}&password=${pwd_value}`;

                
                  ajaxGet(url)
                  .then(function(res){
                        console.log(res);
                  })
             }


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
		 
		 submit.addEventListener("click",submitForm)
		 
		 function submitForm(evt){
			 var e=evt||window.event;
			 
			 
			 
			 e.preventDefault();
		 }
		 
		 
		 