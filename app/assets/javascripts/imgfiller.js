$(document).ready(function() {
  $(".imgLiquidFill").imgLiquid();

  var original_message = "<span id='original-message'>Hover over an Event to see what items are needed.</span>"

  $(".forest-needs").append(original_message);


  var brocolli_message = "<span id='hover-message'>The Forest Party has 14 members and has 3 item needs.</span>"
  var cole_message = "<span id='hover-message'>The Cole Valley Party has 3 members and has 11 item needs.</span>"
  var richmond_message = "<span id='hover-message'>The Richmond's Epic event has 15 members and has 2 item needs.</span>"
  var hipster_message = "<span id='hover-message'>Hipsterpalooza has 8 members and has 5 item needs.</span>"
  var park_message = "<span id='hover-message'>The Park Party has 6 members and has 13 item needs.</span>"
  var noe_message = "<span id='hover-message'>The Noe Doubt has 10 members and has 7 item needs.</span>"
  var bernal_message = "<span id='hover-message'>The Such Great Heights has 20 members and has 0 item needs.</span>"
  var castro_message = "<span id='hover-message'>The Castro Theatre Showing has 3 members and has 10 item needs.</span>"



  BindMessage("#brocolli", brocolli_message);
  BindMessage("#cole", cole_message);
  BindMessage("#richmond", richmond_message);
  BindMessage("#hipster", hipster_message);
  BindMessage("#park", park_message);
  BindMessage("#noe", noe_message);
  BindMessage("#bernal", bernal_message);
  BindMessage("#castro", castro_message);


  function BindMessage(target_box, message) {
    $(target_box)
  .mouseenter(function(e) {
    e.preventDefault();
    $("span").remove("#original-message");
    $(".forest-needs").append(message);
  })
  .mouseleave(function(e) {
    e.preventDefault();
    $("span").remove("#hover-message");
    $(".forest-needs").append(original_message);
  });
  }
});