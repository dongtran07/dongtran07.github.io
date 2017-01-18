 $(function(){
 	$(window).scroll(function(){
 		vitri = $('body').scrollTop();
 		console.log('vitri');
 		if (vitri > 100){
 			$('.navbar').addClass('bienhinh');
 		}else{
 			$('.navbar').removeClass('bienhinh');
 		}
 	});
})
