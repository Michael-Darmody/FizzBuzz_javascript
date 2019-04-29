describe("FizzBuzz", function(){
  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });

  describe("Returns FizzBuzz when given a multiple of 3 & 5", function(){
    it("FizzBuzz for 15", function() {
    expect(fizzbuzz.play(15)).toEqual("FizzBuzz")
    })
  });

  describe("Returns Fizz when given a multiple of 3", function(){
    it("Fizz for 3", function() {
    expect(fizzbuzz.play(3)).toEqual("Fizz")
    })
  });

  describe("Returns Buzz when given a multiple of 5", function(){
    it("Buzz for 5", function() {
    expect(fizzbuzz.play(5)).toEqual("Buzz")
    })
  });
});