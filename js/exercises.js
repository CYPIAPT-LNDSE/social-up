$(document).ready(function() {

  $("#path-button-1").click(function(){
  var monster = $("#monster");
    monster.fadeOut(400);
    $("#exercises-content").fadeOut(400);
    setTimeout(function() {
      $("#exercises-content").fadeIn(400);
      monster.css({
        top: monster.position().top+94+'px',
        left: monster.position().left-54+'px',
      })
      .fadeIn(400);
    }, 500);
  });

  $("#path-button-2").click(function(){
  var monster = $("#monster");
    monster.fadeOut(400);
    $("#exercises-content").fadeOut(400);
    setTimeout(function() {
      $("#exercises-content").fadeIn(400);
      monster.css({
        top: monster.position().top+110+'px',
        left: monster.position().left+270+'px',
      })
      .fadeIn(400);
    }, 500);
  });

  $("#path-button-3").click(function(){
  var monster = $("#monster");
    monster.fadeOut(400);
    $("#exercises-content").fadeOut(400);
    setTimeout(function() {
      $("#exercises-content").fadeIn(400);
      monster.css({
        top: monster.position().top+375+'px',
        left: monster.position().left-30+'px',
      })
      .fadeIn(400);
    }, 500);
  });

  $("#path-button-4").click(function(){
  var monster = $("#monster");
    monster.fadeOut(400);
    $("#exercises-content").fadeOut(400);
    setTimeout(function() {
      $("#exercises-content").fadeIn(400);
      monster.css({
        top: monster.position().top+485+'px',
        left: monster.position().left+255+'px',
      })
      .fadeIn(400);
    }, 500);
  });

  $("#path-button-5").click(function(){
  var monster = $("#monster");
    monster.fadeOut(400);
    $("#exercises-content").fadeOut(400);
    setTimeout(function() {
      $("#exercises-content").fadeIn(400);
      monster.css({
        top: monster.position().top+620+'px',
        left: monster.position().left+30+'px',
      })
      .fadeIn(400);
    }, 500);
  });

});
