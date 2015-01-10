$(document).ready(function() {
	

	var firstExpanded = false;
	var secondExpanded = false;
	var thirdExpanded = false;

	$("#site-about").mouseenter(function() {
		console.log("secondexpanded");
		secondExpanded = true;
		$("#site-about-text").show(500);
		if (firstExpanded && secondExpanded && thirdExpanded)
			resizeBackground();
	});
	$("#me-about").mouseenter(function() {
		firstExpanded = true;
		console.log("firstexpanded");
		$("#me-about-text").show(500);
		if (firstExpanded && secondExpanded && thirdExpanded)
			resizeBackground();
	});
	/*$("#site-about").mouseleave(function() {
		$("#site-about-text").hide(500);
	});*/
	/*$("#me-about").mouseleave(function() {
		$("#me-about-text").hide(500);
	});*/
	$("#contact").mouseenter(function() {
		thirdExpanded = true;
		$("#contact-specifics").show(500);
		if (firstExpanded && secondExpanded && thirdExpanded)
			resizeBackground();
	});
	$( window ).resize(function() {
	  console.log("resizing");
	  $("#everything").css("height", "auto");
	});

	function resizeBackground() {
		$("#everything").css("height", "auto");
	}
});
