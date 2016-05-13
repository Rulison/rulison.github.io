$(document).ready(function() {	
	$(".header-entry").mouseenter(function() {
		$(this).addClass("header-hover");
		//$(this).removeClass("header-nohover");
	});
	$(".header-entry").mouseleave(function() {
		//$(this).addClass("header-nohover");
		$(this).removeClass("header-hover");
	});
});