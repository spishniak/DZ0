// 1. Write function to get random value in range from -100 to 100
const random = (num1, num2) => Math.random() * (num2 - num1) + num1;

console.log('1: ', random(-100, 100));

// 2. Write function to check is positive random number,

// console.log('2: ', isPositive(random(-100, 100)));
// output should be boolean

// // 3. Write function, which create Array of random numbers. Array length = 6;
// // Result of function should be sum of array elements
function arr() {
    const result = [];
    for (let i = 0; i < 6; i += 1) {
        result[i] = Math.random();
    }
    return result.reduce((a, b) => a + b, 0);
}
console.log('3:', arr());
// console.log('3:', getArraySum([]));

// // 4. Write function to create random color

// console.log('4: ', getRandomColor(*, *, *));
// // output rgb(*, *, *);

// // 5. Write function to find out if a number is a natural number or not
function yourFuncName(n) {
    if (typeof n !== 'number') {
        return 'Not';
    }
    if ((n >= 0.0) && (Math.floor(n) === n) && n !== Infinity) {
        return 'natural';
    }
    return 'number is not natural';
}

console.log('5: ', yourFuncName(10, 22, -23, 5.4));

// // 6. Create function isDivideBy(number, firstDivider, secondDivider).
function isDivideBy(number, firstDivider, secondDivider) {
    const result1 = number / firstDivider;
    const result2 = number / secondDivider;
    if ((result1 % firstDivider === 0) && (result2 % secondDivider === 0)) {
        return true;
    }
    return false;
}

// /**
//  * (45, 1, 6)    ->  false
//  * (45, 5, 15)   ->  true
//  *
//  * (-12, 2, -6)  ->  true
//  * (-12, 2, -5)  ->  false
//  */

console.log('6: ', isDivideBy(10, 5, 2));
