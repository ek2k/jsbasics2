https://github.com/gSchool/js-functions-part2

# Basic Javascript

For each of the problems below:

1. Create a JavaScript file (e.g. function1.js)
1. Solve each of the given problems, creating a function that returns the value. Then output an example of your function to the JavaScript console.

### Example

```javascript
function test(str) {
  return "test" + str
}

console.log(test("ing"))
```

## Problems

1.  Write code to print out the lyrics to "99 Bottles of Beer on the Wall." Then generalize your code into a function which prints out the lyrics to "`num` Bottles of Beer on the Wall" for any whole number `num`. (Pay attention to pluralization!)
1. Complete the 'FizzBuzz' exercise from Chapter 2 of [Eloquent Javascript](http://eloquentjavascript.net/02_program_structure.html)
1. Complete the 'Bean Counting' exercise from Chapter 3 of [Eloquent Javascript](http://eloquentjavascript.net/03_functions.html)
1. Complete the 'Sum of a Range' exercise from Chapter 4 of [Eloquent Javascript](http://eloquentjavascript.net/04_data.html)
1. Complete the 'Reversing an Array' exercise from Chapter 4 of [Eloquent Javascript](http://eloquentjavascript.net/04_data.html)
1. Create an `isPalindrome()` function which takes a string as an argument and returns a boolean value: `true` if the string is a palindrome, and `false` if not. E.g. `isPalindrome("bob")` should return `true`, but `isPalindrome("robert")` should return `false`. **Bonus** Write the function so that it ignores capitalization of letters. **Bonus bonus** Write the function so that it also ignores whitespaces and punctuation (so that "A man, a plan, a canal, Panama" would be classified as a palindrome). 
1. Create a 'Guessing Game'. The game starts by picking a random number between 1 and 100. It then prompts the user to guess the number. If the user's number is lower/higher, it will prompt the user to enter another guess and tell the user if the guess was too high or too low. This continues until the correct guess is entered. When the correct guess is entered the user is given a success message with the correct number.
1. A [prime number](https://en.wikipedia.org/wiki/Prime_number) is one that has no divisors other than 1 and itself. Write a function `isPrime` which takes a single input, a whole number, and returns `true` if the number is prime and `false` otherwise.