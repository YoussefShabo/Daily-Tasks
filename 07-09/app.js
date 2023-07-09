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
    return words.join('');
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

function arrayDiff(a,b){
let result = [];
for (let i = 0; i < a.length; i++){
    if(!b.includes(a[i])){
        result.push(a[i]);
    }
}
return result;
}
console.log(arrayDiff([1,2,2,2,3,534634,7,4,3,4,5,4,6,7,3,4,],[2,3,6,2,4]));