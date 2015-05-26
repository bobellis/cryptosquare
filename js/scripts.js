var segmentString = function(message, length){

  var first_segment = message.slice(0, length);
  if (!first_segment) {
    return [];
  } else if (first_segment.length < length) {
    return [first_segment];
  }
  return [first_segment].concat(segmentString(message.slice(length), length));
};

var cleanString = function(message){
  return message.replace(/[ !,.?'"/(){}$%&:;<>]/g,'').toLowerCase();
}

var squareRootRoundUp = function(number){
  return Math.ceil(Math.sqrt(number));
}

var encodeString = function(message) {
  message = cleanString(message);
  var number_of_columns = squareRootRoundUp(message.length);
  var rows = segmentString(message, number_of_columns);
  var encodedString = '';
  for (var column = 0; column < number_of_columns; column += 1) {
    rows.forEach(function(row) {
      if (column < row.length){
        encodedString += row[column];
      }
    });
  }
  return segmentString(encodedString, 5).join(" ")
};

$(function() {
  $("form#string-to-encode").submit(function(event) {
    var message = $("#message").val();
    $("#entered-message").text(message);
    $("#displayed-message").hide();
    $("#displayed-message").fadeIn(3000);

    event.preventDefault();
  });

  $("span#entered-message").hover(function(){
    var message = $(this).text();
    debugger;
    $(this).text(encodeString(message));
  });

  var id;

  $("#toggle-interval").click(function() {
    if (id) {
      clearInterval(id);
      id = false;
      $(this).text("Scramble");
    }
    else {
      id = setInterval(function() {
        var message = $("#message").val();
        var current_message = $("span#entered-message").text();
        if (current_message === message) {
          $("span#entered-message").text(encodeString(message));
        } else {
          $("span#entered-message").text(message);
        }
      }, 100);
    $(this).text("Unscramble");
    }
  });
});
