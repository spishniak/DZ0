const request = require('request');

const getUsers = () => new Promise((resolve, reject) => {
  request('https://jsonplaceholder.typicode.com/users', (error, response, body) => {
    if (error || response.statusCode !== 200) reject(error);

    resolve(JSON.parse(body));
  });
});

const getComments = () => new Promise((resolve, reject) => {
  request('https://jsonplaceholder.typicode.com/comments', (error, response, body) => {
    if (error || response.statusCode !== 200) reject(error);

    resolve(JSON.parse(body));
  });
});

(async () => {
  const [users, comments] = await Promise.all([
    await getUsers(),
    await getComments(),
  ]).catch((error) => {
    throw new Error(error);
  });
  console.log(users[0]);
  console.log(comments[0]);
})();

// 1. Rewrite getUsers to async/await
/**
 *  2. Add another request to url - https://jsonplaceholder.typicode.com/comments.
 *  Make two requests, and return all values
 *  Hint: Promise.all
 * */

/**
 * 3. Read about Promice.race
 * Try to use it on previous two requests
 */

/**
 * 4. Read about Promice.any
 * Try to use it on previous two requests
 */
