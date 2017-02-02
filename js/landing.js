$(document).ready(function() {

  var showText = function (target, message, index, interval) {
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }

  $(".dropdown-menu li a").click(function(){
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  });

  $("#feelings-strength-dropdown ul li a").click(function(){
    $('#feelings-title').animate({"bottom":"85px"}, "slow");
    $("#feelings-dropdown").animate({"bottom":"85px"}, "slow");
    $('#feelings-strength-title').animate({"bottom":"205px"}, "slow");
    $("#feelings-strength-dropdown").animate({"bottom":"205px"}, "slow");
    setTimeout(function(){
      showText("#welcome-msg-1", "Social media can make you feel like everyone is better than you.", 0, 50);
    }, 1000);
    setTimeout(function(){
      $("#welcome-msg-2").fadeIn(300);
    }, 4500);
    setTimeout(function(){
      $("#panel-facts").fadeIn(300);
    }, 5000);
    setTimeout(function(){
      $("#panel-exercises").fadeIn(300);
    }, 6000);
    setTimeout(function(){
      $("#panel-testimonials").fadeIn(300);
    }, 7000);
  });

  $("#welcome-msg-2").hide();
  $("#panel-facts").hide();
  $("#panel-exercises").hide();
  $("#panel-testimonials").hide();

});
