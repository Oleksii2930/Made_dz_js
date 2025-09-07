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