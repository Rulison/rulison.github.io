$(document).ready(function() {
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
});
