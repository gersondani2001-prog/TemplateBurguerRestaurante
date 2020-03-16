/*codigo de javaScript*/ 


// *******************************************************************

/*
    codigo de javaScript
*/ 
console.log("Ejecutando js.")


const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});






// *******************************************************************

/*
    codigo de angular js
*/ 

var app = angular.module("app",[]);
app.controller("appCtrl",function($scope, $rootScope){

    console.log("Ejecutando Angular js");

});

// *******************************************************************

/*
    codigo de angular js
*/ 

$(document).ready(function(){

    console.log("Ejecutando Jquery js");
    

});


$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});




// *******************************************************************






















