$(document).ready(function() {
	



	$("#site-about").mouseenter(function() {
		$("#site-about-text").show(500);
	});
	$("#me-about").mouseenter(function() {
		$("#me-about-text").show(500);
	});
	/*$("#site-about").mouseleave(function() {
		$("#site-about-text").hide(500);
	});*/
	/*$("#me-about").mouseleave(function() {
		$("#me-about-text").hide(500);
	});*/
	$("#contact").mouseenter(function() {
		$("#contact-specifics").show(500);
	});
	$( window ).resize(function() {
	  $(".footer").css("bottom", "0");
	});
});
