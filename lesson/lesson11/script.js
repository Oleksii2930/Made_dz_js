
//1
async function foo(){
    let users = await fetch('http://localhost:3001/users')
    .then(value => value.json());
    fetch('http://localhost:3001/ingredients')
    .then(value => value.json())
    .then(value => {});
}
//2
console.log('log1');

setTimeout(() => console.log('asd'), 2000); // асинхронна функція

console.log('log2');

setTimeout(() => console.log('qwe'), 1000);

console.log('log3');

//3
new Promise((resolve) => {
    setTimeout(() => {
        let x = 1;
        console.log(x);
        resolve(x);
    },1000);
})
    .then((x) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                x++;
                console.log(x);
                resolve(x);
            },1000);
        });
    })
    .then(x => {
        return new Promise((resolve) => {
            setTimeout(() => {
                x++;
                console.log(x);
                resolve(x);
            },1000);
        });
    })
    .then(x => {
        return new Promise((resolve) => {
            setTimeout(() => {
                x++;
                console.log(x);
                resolve(x);
            },1000);
        });
    })

//4
let users = fetch('http://localhost:3001/users')
.then(value => value.json());

let posts = fetch('http://localhost:3001/posts')
.then(value => value.json());



Promis.all([posts, posts]).then(result => {
    let [users, posts] = result;
    for (const user of users) {
        user.posts = [];
        for (const post of posts) {
            if (user.id === post.userId) {
                user.posts.push(post);
            }
        }
    }
    console.log(users);
})

// Promise.race([posts, posts]).then(value => console.log(value));
// //як перегони який прийде швидше такий і виведется
// Promise.any([posts, posts]).then(value => console.log(value));
// //схожий щоб вивести хоч щось з цих двох