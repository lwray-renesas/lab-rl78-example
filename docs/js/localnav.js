
$(document).ready(function () {

  /* Add the sublist to the active navigation list item*/
  var localNavAtt = '<ul title="Page Contents" class="localnav"></ul>';
  $(".activeListItem").append(localNavAtt);

  /* Add the link to each h2 to the sub menu*/
  $("h2").each(function () {
    var text = document.getElementById($(this).attr("id")).innerHTML;
    var id = $(this).attr("id");
    var navLink = "<li id='ln" + id + "'><a href='#" + id + "'>" + "<b>" + text + "</b>" + "</a></li>";
    $(".localnav").append(navLink);
  });

});
