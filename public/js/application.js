$(document).ready(function() {

  var normalFontSize = $('.navbar-text').css("font-size");

  $('.navbar-text').hover(function(){
      $(this).child.css("font-size", "1.1em");
    }, function() {
      $(this).css("font-size", normalFontSize);
    }
  )

});
