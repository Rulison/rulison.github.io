function processNext(index, maxIndex, releases, baseURL, keys) {
  if (maxIndex == index) {
    return;
  }
  single_response = $.get(baseURL+releases[index]["id"], function() {
    response_json = single_response.responseJSON;
    master_response = $.get(response_json["master_url"]+keys, function() {
      img_src = master_response.responseJSON.images[0].resource_url;
      div = document.createElement("div");
      div.className = "frame three columns";
      a = document.createElement("a");
      a.href = response_json["uri"]
      img = document.createElement("img");
      img.src = img_src
      img.className = "album"
      $(a).appendTo(div);
      $(img).appendTo(a);
      $(div).appendTo($(".albums"));
      processNext(index+1, maxIndex, releases, baseURL, keys);
    });
  });
}

$(document).ready(function() {
    //var collection = $.get( "https://api.discogs.com/users/rulison/collection/folders/0/releases", function() {
    
    var collection = $.ajax( {url:"https://api.discogs.com/users/rulison/collection/folders/0/releases?page=1&per_page=100",
                             type: "get",
                             data:{sort:"added", sort_order:"desc"}, success:function() {  
      collection_json = collection.responseJSON;
      releases = collection_json["releases"];
      processNext(0, releases.length, releases, "https://api.discogs.com/releases/", keys);
    }})
    .done(function() {

    })
    .fail(function() {

    })
    .always(function() {

    });
});
