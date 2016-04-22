$(document).ready(function() {
	$("body").append("<p>Yes dude</p>");
	$.ajax({
  		url: "http://rulison.github.io/images/",
  		success: function(data){
     		$(data).find("a:contains(.jpg)").each(function(){
        	// will loop through 
        	var images = $(this).attr("href");

        	$('<p></p>').html(images).appendTo($("body"));

     		});
  		}	
	});
});