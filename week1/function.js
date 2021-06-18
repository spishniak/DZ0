// 0. Create function that will accept (10, 20) params and return their sum. Main goal - use all possible variants to declare functions
function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(2, 3));

const fn = (num1, num2) => num1 + num2;

console.log(fn(2, 2));

const fn1 = (num1, num2) => num1 + num2;

console.log(fn1(4, 3));
// 1. Create self-invoked anonymous function, that will return if the day after tomorrow is odd, or even.
// HINT: function accepts one argument: new Date();
// output example 15.06.2021, 11:19:22 is odd date
const result = ((date) => {
    const day = date.getDate() + 2;
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();
    const fullDate = `${day}.${month}.${year}, ${hours}:${minutes}:${second} `;

    if (day % 2 === 0) {
        return `${fullDate}, even `;
    }
    return `${fullDate}, odd`;
})(new Date());

console.log(result);

// 2. Rewrite this function to ES6/ES2015

class Intern {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.homework = {
            status: 'Resolved',
            rating: '100%',
        };
    }

    getHomework() {
        return `${this.name} resolved homework with status ${this.homework.status}`;
    }
}

const intern = new Intern('Ivan', 26);

console.log(intern);

// 3. Write multiply function. Two arguments - random numbers. But sometimes, we don't have second argument, and result is = random number * 12
// HINT: Read about default parameters in functions.

/**
 * example output
 * (19, 29) => 551
 * (23) => 276
 */
function multi(num1, num2 = 12) {
    return num1 * num2;
}

console.log(multi(10, 10));
console.log(multi(20));

/**
 * 4. Write function, that modify first argument to example output with delay 2 seconds
 *
 * example:
 * yourFuncName({ a: 1, b: 2}, (data) => { console.log(data) }); output: { a: 2, b: 3 }
 * HINT: read about callbacks
 */

const object1 = {
    a: 5,
    b: 2,
};

function simpleSolutionFn() {
    object1.a += 1;
    object1.b += 1;
    console.log(object1);
}

setTimeout(simpleSolutionFn, 2000);

const object2 = {
    a: 5,
    b: 2,
};

(async (obj) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            obj.a += 1;
            obj.b += 1;
            console.log(obj);
            resolve();
        }, 2000);
    });
})(object2);

/**
 * 5. Imagine, that we have 2 requests to database, first is getUsers() that return data in 1 second,
 * and second is createUser() that resolves in 2 seconds.
 * Your goal, is to modify createUser() with callback, and return 3 users
 */

//  const users = [
//     {
//         name: 'Daniel',
//         age: 22,
//     },
//     {
//         name: 'Michael',
//         age: 32,
//     },
// ];

// function getUsers() {
//     setTimeout(() => {
//         users.forEach((user) => {
//             console.log('user:', user);
//         });
//     }, 1000);
// }

// function createUser(user, ****) {
//     setTimeout(() => {
//         users.push(user);

//         ****
//     }, 2000);
// }

// getUsers();
// createUser({ name: 'Vitalii', age: 24 });
