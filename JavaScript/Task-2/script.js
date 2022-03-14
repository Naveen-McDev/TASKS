/* Question : Print the characters in a string separated by line.. */

let str = "NATURE";

//the characters in a string can be separated by split()

// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

// The join() method creates and returns a new string by concatenating all of the elements in an array

let output = str.split("").join("\n")



console.log(output);

/* Output:
N
A
T
U
R
E
*/
