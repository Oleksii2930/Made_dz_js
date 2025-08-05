// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// // const user1 = new User(1,"John", "John", 'wiceo@.com', 9712606741);
// // const user2 = new User(2,"John", "John", 'icemo@.com', 9712606741);
// // const user3 = new User(3,"John", "John", 'wicem@.com', 9712606741);
// // const user4 = new User(4,"John", "John", 'fwiceo@.com', 9712606741);
// // const user5 = new User(5,"John", "John", 'wfiemo@.com', 9712606741);
// // const user6 = new User(6,"John", "frodo", 'wicmof@.com', 9712606741);
// // const user7 = new User(7,"John", "John", 'wicemof@.com', 9712606741);
// // const user8 = new User(8,"John", "John", 'wicefmo@.com', 9712606741);
// // const user9 = new User(9,"John", "John", 'wifcemo@.com', 9712606741);
// // const user10 = new User(10,"John", "John", 'wcemo@.com', 9712606741);
// // console.log(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// let users = [
// new User(1,"John", "John", 'wiceo@.com', 9712606741),
// new User(2,"John", "John", 'icemo@.com', 9712606741),
// new User(3,"John", "John", 'wicem@.com', 9712606741),
// new User(40,"John", "John", 'fwiceo@.com', 9712606741),
// new User(5,"John", "John", 'wfiemo@.com', 9712606741),
// new User(6,"John", "frodo", 'wicmof@.com', 9712606741),
// new User(7,"John", "John", 'wicemof@.com', 9712606741),
// new User(8,"John", "John", 'wicefmo@.com', 9712606741),
// new User(9,"John", "John", 'wifcemo@.com', 9712606741),
// new User(10,"John", "John", 'wcemo@.com', 9712606741)
// ];
//
// function filterFunction(user){
//         return user.id % 2 == 0;
// }
// const filteredUser = users.filter(filterFunction);
// console.log(filteredUser);
//
// function sorter(user1, user2) {
//     return user1.id - user2.id;
// }
// console.log(users.sort(sorter));


function Client(id, name, surname , email, phone, products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}
function Product(title, price) {
    this.title = title;
    this.prise = price;
}
let clients =[
    new Client(1,'awerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}, {title:'phone', prise: 3100}]),
    new Client(2,'bwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}]),
    new Client(3,'cwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}]),
    new Client(4,'dwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}]),
    new Client(5,'ewerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}]),
    new Client(6,'fwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}]),
    new Client(7,'gwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}, {title:'phone', prise: 3100}]),
    new Client(8,'hwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}]),
    new Client(9,'jwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}])
];
console.log(clients[0].order);

// function sorter(client1, client2) {
//     return client1.order.length - client2.order.length;
// }
// console.log(clients.sort(sorter))
const sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);