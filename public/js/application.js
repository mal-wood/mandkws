$(document).ready(function() {

  var normalFontSize = $('.navbar-text').css("font-size");

  $('.navbar-text').hover(function(){
    $(this).css("font-size", "1.2em");
  }, function() {
    $(this).css("font-size", normalFontSize);
  }
  )
});
