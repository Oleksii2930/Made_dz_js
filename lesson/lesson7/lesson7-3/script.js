// class User {
//     constructor (name, age) {
//     this.name = name;
//     this.age = age;
// }
// greeting() {
//         return `Hello ${this.name}`;
// }
// }
// new User('vasya', 31);
//
// class Customer extends User { //розширення юзер класу
//   constructor(username, age, password) {
//       super(username, age);     // те саме що і зіс тільки для батьківського конструктора
//       this.password = password;
//   }
// }
//
// console.log(new Customer('asdsdds', 1234221, '1111'));

// let set = new Set([]);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(6);
// set.add(7);
// console.log(set);
// console.log(set.has(6));
// set.delete(7);
// console.log(set);
// let arrayFromSet = Array.from(set);

let map = new Map();
console.log(map);
map.set(1, 'one');  //ключ і значення
map.set(2, 'two');
map.set(3, 'three');
console.log(map);

console.log(map.get(2));

