let ax; 
// Declare a variable 'ax'. 'let' allows it to hold any type and be reassigned.

console.log(ax); 
// Logs the current value of 'ax', which is undefined because it hasn't been assigned yet.

ax = 12;
console.log(ax); 
// Assigns 12 to 'ax' and logs it. Output: 12

ax = null;
console.log(ax); 
// Assigns null to 'ax' and logs it. Output: null
console.log(typeof ax); 
// Logs the type of 'ax'. Output: "object" (this is a quirk of JavaScript: typeof null === "object")

ax = undefined;
console.log(ax); 
// Assigns undefined to 'ax' and logs it. Output: undefined
console.log(typeof ax); 
// Logs the type of 'ax'. Output: "undefined"

ax = '';
console.log(typeof ax); 
// Assigns an empty string to 'ax' and logs its type. Output: "string"
console.log(ax, ax.length); 
// Logs the value and the length of the string. Output: '' 0
console.log(`#${ax}#`); 
// Logs the string wrapped in hashes. Output: '##'

/* Comparisons */
console.log('1' === 1); 
// Strict equality: compares value and type. '1' is a string, 1 is a number. Output: false
console.log('1' == 1); 
// Loose equality: converts types before comparing. '1' (string) is coerced to number. Output: true

/**✅ Summary of Key Points:

undefined → variable declared but not assigned.

null → represents “no value” explicitly.

typeof null → "object" (quirk).

Empty string '' → type is "string", length is 0.

=== → strict equality, compares both value and type.

== → loose equality, performs type coercion. */