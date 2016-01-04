// for header intro
$('h1').animate({top: '80px'},1800);
// for smooth scrolling
$('a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	var target = this.hash;
	var $target = $(target);

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 900, 'swing', function () {
		window.location.hash = target;
	
	});
});

// Collapse navbar on scroll
$(window).scroll(function(){
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});


// Close Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function(){
	$('.navbar-toggle:visible').click();
});

