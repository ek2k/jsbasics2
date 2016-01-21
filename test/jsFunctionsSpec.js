var expect = require("chai").expect //jshint ignore:line
var methods = require("../script");

describe("#countChar", function(){
  it("returns the number of times a character exists in a string", function(){
    expect(methods.countChar("awesome","e")).to.equal(2);
  });
  it("distinguishes between upper and lower case", function(){
    expect(methods.countChar("Student","s")).to.equal(0);
  });
});

describe("#range", function(){
  it("returns a range of numbers based on a start end and step", function(){
    expect(methods.range(1,10,1)).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });
  it("returns a range of numbers based on a start end and step", function(){
    expect(methods.range(0,10,5)).to.eql([0,5,10]);
  });
  it("works with negative numbers", function(){
    expect(methods.range(10,5,-5)).to.eql([10,5]);
  });
});

describe("#sum", function(){
  it("returns the sum of all the values in an array", function(){
    expect(methods.sum([1,2,3,4])).to.equal(10);
  });
  it("works with negative numbers", function(){
    expect(methods.sum([1,2,3,-4])).to.equal(2);
  });
});

describe("#reverseArray", function(){
  it("reverses an array by creating a new array", function(){
    expect(methods.reverseArray([5,4,3,2,1])).to.eql([1,2,3,4,5]);
  });
});

describe("#reverseInPlace", function(){
  it("reverses an array in place (without creating a new array)", function(){
    expect(methods.reverseInPlace([5,4,3,2,1])).to.eql([1,2,3,4,5]);
  });
});

describe("#isPalindrome", function(){
  it("returns true if a string is a palendrome", function(){
    expect(methods.isPalindrome("tacocat")).to.equal(true);
  });
  it("returns false if a string is a not palendrome", function(){
    expect(methods.isPalindrome("awesomeness")).to.equal(false);
  });
  it("ignores spacing and capitalization", function(){
    expect(methods.isPalindrome("a Man A Plan A Canal Panama")).to.equal(true);
  });
});

describe("#isPrime", function(){
  it("returns false if the number is not prime", function(){
    expect(methods.isPrime(4)).to.equal(false);
  });
  it("returns true if the number is prime", function(){
    expect(methods.isPrime(3)).to.equal(true);
  });
  it("understands that 1 is not a prime number", function(){
    expect(methods.isPrime(1)).to.equal(false);
  });
});
