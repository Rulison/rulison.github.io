$(document).ready(function() {
	$("body").append("<p>Yes dude</p>");
	$.ajax({
  		url: "/images",
  		success: function(data){
     		$(data).find("a:contains(.jpg)").each(function(){
        	// will loop through 
        	var images = $(this).attr("href");

        	$('<p></p>').html(images).appendTo($("body"));

     		});
  		}	
	});
});