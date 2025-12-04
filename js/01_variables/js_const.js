/**
 * const
 * 1. Variables defined with const cannot be Redeclared
 * 2. Variables defined with const cannot be Reassigned
 * 3. Variables defined with const have Block Scope
 * 4. Variable name for const must be in uppercase
 */

const PI = 3.14159; // Make sure variable name is in uppercase
console.log(`the value of PI is ${PI}`);

// Changing the value of const is not allowed
// PI = 3.141592653589793;

// Note: The keyword const is a little misleading.
// It does not define a constant value. It defines a constant reference to a value.
// Because of this you can't reassign a constant value, array or object, but you can change the elements
// of constant array or change the properties of constant object

// Work with array
const names = ['jon', 'harry', 'peter'];

names[1] = 'sam'; // We can change element's value
names.push('bob'); // We can add new element

// names = ['bob', 'john'] // But, We can't reassign the array

// Work with object
const student = {
    'name': 'John',
    'age': 25,
    'gender': 'male',
};

student.name = 'Bob'; // We can change the property value

// Note allowed
// student = {
//     'name': 'John',
//     'age': 25,
//
// };
