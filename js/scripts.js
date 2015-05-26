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
      encodedString += row[column];
    });
  }
  return segmentString(encodedString, 5).join(" ")
};
