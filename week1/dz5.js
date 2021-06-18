/**
 * 5. Imagine, that we have 2 requests to database, first is getUsers() that return data in 1 second,
 * and second is createUser() that resolves in 2 seconds. 
 * Your goal, is to modify createUser() with callback, and return 3 users
 */

 const users = [
    {
        name: 'Daniel',
        age: 22,
    },
    {
        name: 'Michael',
        age: 32,
    },
];

function getUsers() {
    setTimeout(() => {
        users.forEach((user) => {
            console.log('user:', user);
        });
    }, 1000);
}

function createUser(user, ****) {
    setTimeout(() => {
        users.push(user);

        ****
    }, 2000);
}

getUsers();
createUser({ name: 'Vitalii', age: 24 });
