// function calc (a, b) {
//     let sum = a + b;
//     return sum;
// }
// let sum1 = calc(10, 20);
// console.log(sum1);

function userFilter(users) {
    let filteredUsers = [];
    for (let user of users) {
        if (user.age > 30) {
            filteredUsers.push(user);

        }
    }
    return filteredUsers;
}
let users = [

];
let filter = userFilter(users);
console.log(filter);