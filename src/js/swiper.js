var swiper = new Swiper('.swiper-container',{
		          pagination:{
		                      el: '.swiper-pagination-bullet',
							  clickable :true,
							 
		                      bulletElement : 'span',
		                      progressbarOpposite: true,
		                      bulletClass : 'my-bullet',
		                      bulletActiveClass : "active"
							  
		          },
				 navigation: {
					   nextEl: '.swiper-button-next',
                       prevEl: '.swiper-button-prev',
				  },
		        
		          autoplay : true
		  });

 