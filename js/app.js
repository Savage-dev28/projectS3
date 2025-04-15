(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});
	});

	$(window).load(function(){
		$(".feature-slider").flexslider({
			directionNav: true,
			controlNav: false,
			prevText: '<i class="fa fa-angle-left"></i>',
			nextText: '<i class="fa fa-angle-right"></i>',
		});
	});

})(jQuery, document, window);


const track = document.querySelector('.carousel-trackk');
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');

let currentIndexx = 0;