describe('segments', function() {
  it('returns an array containing the string if the string is shorter than the segment length', function() {
    expect(segments('word', 5)).to.deep.equal(['word']);
  });

  it('takes a string and returns an array of substrings of a specific length', function(){
    expect(segments('thisisateststrin', 4)).to.deep.equal(['this','isat','ests','trin']);
  });

  it('has a shorter string in the last spot if the message isnt evenly divisible by the length', function(){
    expect(segments('thisisateststri', 4)).to.deep.equal(['this','isat','ests','tri']);
  });

});

describe('cleanString', function(){
  it('removes all spaces', function(){
    expect(cleanString('this is a string')).to.equal('thisisastring');
  });

  it('removes all punctuation and special characters', function(){
    expect(cleanString('this!is $a.test,')).to.equal('thisisatest');
  });

  it('puts each letter in downcase', function(){
    expect(cleanString('HeLlo WoRld')).to.equal('helloworld');
  });
});
