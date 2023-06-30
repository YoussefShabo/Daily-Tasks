13. Roman to Integer
    Easy
    11.1K
    633
    Companies
    Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol Value
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

//---------------------------
// Answer
//---------------------------

// Similar to the grass cutter assignment:
// Set the counter to be 1 or in this case (I) (equiv of bank)
// Aggregate values of the counter and switch Roman Numeral at the set Marks ['I', 'V', 'X', 'L', 'C', 'D', 'M']
// Create a conditional where we compare the value of the numeral to the next one
// subtract the value of the current numeral from the next one and assign the value to the corresponding number: I-V, V-X, X-L, L-C, C-D, D-M
// I-V, I-X, X-L, X-C, C-D, C-M??
// set the last round number before the new Roman Numeral to be the numeral before it
