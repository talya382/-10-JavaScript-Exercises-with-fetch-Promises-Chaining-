// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:`POST`,
//     body:JSON.stringify({
//      title: 'clean code',
//     author:'bob'
//     }),
//     headers:{
//          'Content-type': 'application/json',
//     }
// })
//  .then(response => response.json())
//   .then(json => console.log(json))

1;
function getUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    (response) => response.json(),
  );
}
getUser(1).then((user) => console.log(`user:${user.name}`));
//2
function getPost(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
    (response) => response.json(),
  );
}
getPost(1).then((post) => console.log(`user:${post.title}`));
// //3
// function getUserEmail(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
//     (response) => response.json(),
//   );
// }
// getUserEmail(1).then((email) => console.log(`user:${email.email}`));

//4
// function listUserTodos(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/todos?id=${userId}
// `).then( (response) => response.json(),);

// }
// listUserTodos(6).then((todo) => console.log(`todo:${todo[0]?.title}`));
//5
// function checkPostExists(postId) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
//     (res) => {
//       if (!res.ok) {
//         throw new Error("Post not found");
//       }
//       return res.json();
//     },
//   );
// }
// checkPostExists(1000000)
//   .then(() => console.log("post exiest"))
//   .catch(() => console.log("post not found"));

//6
// function fetchWithDelay(url, delay) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(fetch(url).then(res => res.text()));
//     }, delay);
//   });
// }

// fetchWithDelay('https://jsonplaceholder.typicode.com/users/1', 2000)
//   .then(text => console.log(text.substring(0, 50)))

//7
// function showKeys(url)
// {
//     return fetch(url).then(res=>res.json())

// }
// showKeys(`https://jsonplaceholder.typicode.com/users/1`)
//     .then(data=>console.log(Object.keys(data))
//     )

//8

function getUserPosts(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error("Post not found");
      }
      return res.json();
    },
  );
}
function getUserFirstPost(userId) {
  return getUser(userId).then((user) =>
    getUserPosts(userId).then((posts) => {
      return posts[0].title;
    }),
  );
}
getUserFirstPost(3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
//9
function getPostCommentsCount(postId) {
  return getPost(postId).then(() => {
    return fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    )
      .then((res) => res.json())
      .then((comments) => {
        return `Post has ${comments.length} comments`;
      });
  });
}
getPostCommentsCount(2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//10

function todoAndUser(todoId) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then((res) => res.json())
    .then((todo) => {
      return getUser(todo.userId).then((user) => {
        return `Todo title: ${todo.title}\nUser name: ${user.name}`;
      });
})}
todoAndUser(1)
.then((result) => console.log(result))
.catch((error) => console.log(error))
