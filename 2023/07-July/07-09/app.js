//========================================//
//            CODE WARS PROBLEMS
//========================================//

// DAY 0:

// Using Javascript, complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  // Split the string by dash or underscore
  let words = str.split(/[-_]/);

  // Capitalize all subsequent words
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words and return the camelcased string
  return words.join("");
}
console.log(toCamelCase("hello-my-Dear_Mimi"));

//========================================//
//           PROBLEM #2
//========================================//

// DESCRIPTION:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
}
console.log(
  arrayDiff(
    [1, 2, 2, 2, 3, 534634, 7, 4, 3, 4, 5, 4, 6, 7, 3, 4],
    [2, 3, 6, 2, 4]
  )
);

//========================================//
//           PROBLEM #3
//========================================//

// Many programming languages provide the functionality of converting a string to uppercase or lowercase. For example, upcase/downcase in Ruby, upper/lower in Python, and toUpperCase/toLowerCase in Java/JavaScript. Typically, these methods won't change the size of the string.

// For example, in Ruby, str.upcase.downcase.size == str.size is true for most cases.

// However, in some special cases, the length of the transformed string may be longer than the original. Can you find a string that satisfies this criteria?

// For example, in Ruby, That means str.upcase.downcase.size > str.size

// You should just set the value of STRANGE_STRING to meet the previous criteria.

// Note: Meta programming is not allowed in this kata. So, the size of your solution is limited.

// STRANGE_STRING = "ß"

//========================================//
//           PROBLEM #4
//========================================//

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function (l, w) {
  // Return your answer
  if (l == w) {
    return l * w;
  } else return 2 * l + 2 * w;
};
