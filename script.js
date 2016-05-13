/*$(document).ready(function() {
	$("body").append("<p>Yes dude</p>");
	var jqxhr = $.get( "https://api.discogs.com/users/rulison/collection/folders/0/releases", function() {
	  response = jQuery.parseJSON(jqxhr["responseText"]);
	  releases = response["releases"];
	  console.log(response);
	  for(i = 0; i<releases.length; i++) {
	  	release = releases[i];
	  	p = document.createElement("p");
	  	p.innerHTML = release["basic_information"]["title"];
	  	$(p).appendTo($("body"));
	  }
	  console.log(releases[0]["basic_information"]["title"]);
	})
	  .done(function() {

	  })
	  .fail(function() {

	  })
	  .always(function() {

	console.log(jqxhr);
	  });
});*/
$(document).ready(function() {
	$(".overlay").mouseenter(function() {
		$(this).children(".hidden").addClass("unhidden");
		$(this).children(".hidden").removeClass("hidden");
		$(this).children("img").addClass("selected");
	});
	$(".overlay").mouseleave(function() {
		$(this).children(".unhidden").addClass("hidden");
		$(this).children(".unhidden").removeClass("unhidden");
		$(this).children("img").removeClass("selected");
	});
	$(".header-entry").mouseenter(function() {
		$(this).addClass("header-hover");
		//$(this).removeClass("header-nohover");
	});
	$(".header-entry").mouseleave(function() {
		//$(this).addClass("header-nohover");
		$(this).removeClass("header-hover");
	});



});