$(document).ready(function() {

  var normalFontsize = $('.navbar-text').css("font-size");

  $('.navbar-text').hover(function(){
    $(this).css("font-size", "1.2em");
    $(this).next().css("color", "#EBE4E0");
  }, function() {
    $(this).css("font-size", normalFontsize)
  }
  )
});
