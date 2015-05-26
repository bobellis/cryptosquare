var segments = function(message, length){

  var first_segment = message.slice(0, length);
  if (!first_segment) {
    return [];
  } else if (first_segment.length < length) {
    return [first_segment];
  }
  return [first_segment].concat(segments(message.slice(length), length));
};
