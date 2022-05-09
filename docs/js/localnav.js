$(document).ready(function() {
  
    $("h2").each(function() {
      var text = $(this).text()
      var id = $(this).attr("id")
      var navLink = "<li id='ln" + id + "'><a href='#" + id + "'>" + text + "</a></li>"
      $("#localnav").append(navLink)
    }) 
    
  });
  