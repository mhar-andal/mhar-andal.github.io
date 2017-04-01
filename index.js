$(document).ready(function(){

  var randColor = function () {
    var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $("body").css("background-color", color)
  }

  window.setInterval(randColor, 500)


})
