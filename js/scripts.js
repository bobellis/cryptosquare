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
