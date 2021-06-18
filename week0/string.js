// instead of **** put your name and last name;

const firstName = 'Ivan';
const lastName = 'Spishniak';

// 1. concat first and last name, to create full name e.g (Vitalii Danchul)
const fullName = `${firstName} ${lastName}`;

console.log('1: ', fullName);

// 2. log fullName third character. Please, use more than one solution

console.log('2.1:', fullName[2]);
console.log('2.2:', fullName.slice(2, 3));
console.log('2.3:', fullName.split('')[2]);
console.log('2.4:', ...fullName.split('').filter((character, index) => {
    if (index === 2) {
        return true;
    }
    return false;
}));

// 3. replace all vowels in fullName with number
const number = 10;
const replaced = fullName.replace(/[aeiou]/ig, number);

console.log('3:', replaced);

// 4. check if replaced string on position 8 ends with number 10

let answer;
if (replaced.slice(8, 10) === '10') {
    answer = 'string on position 8 ends with number 10';
} else {
    answer = 'No';
}
console.log('4:', answer);

// 5. log part of fullName from 3 to 7 character

console.log('5:', replaced.slice(3, 7));

// 6. Divide replaced string by number 10

console.log('6:', replaced.split('10').join('')); // not understand task

// 7. Write function capitalize(), to capitalize first letter of string
const lowerCased = 'new york';
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
console.log('7:', capitalize(lowerCased));

// 8. Write insert function, that will accept main string, string to insert and position to insert
// Change **** with your name

const mainString = 'Hello, my name is ****, I want to learn Node.js';
// console.log('8:' , insert(mainString, fullName, '*****')) // don't understand task

console.log(`Hello, my name is ${fullName}, I want to learn Node.js`);

function insert(str) {
    return str.replace(/\*+/, fullName);
}
console.log(insert(mainString));

// 9. Write your own reverse() function. (do not use .reverse())

function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i -= 1) {
        result += str[i];
    }
    return result;
}

console.log('9', reverse('my random string'));
