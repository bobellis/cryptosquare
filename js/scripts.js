var segments = function(message, length){
  // if (message.length <= length) {
  //   return [message];
  // };
  var segments = [];
  var i = 0;
  while (i < message.length) {
    segments.push(message.slice(i, i + length));
    i += length;
  }
  return segments;
};
