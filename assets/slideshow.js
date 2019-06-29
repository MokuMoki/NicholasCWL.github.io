
$(document).ready(function(){
	$(".img1").slick({
		dots: true,
		speed: 500,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			arrows: true,
			dots: true
		}
		},
		{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: true,
			dots: true
		}
		},
		{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true
		}
		}
		]
	});
});