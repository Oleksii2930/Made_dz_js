function userFactory(id, name, age, status) {
    let user = {
        id: id,
        name: name,
        age: age,
        status: status,
    }
    return user;
}
let u1 = userFactory(1, 'Oleg', '25', true);
let u2 = userFactory(2, 'Oleksiy', '23', false);
let u3 = userFactory(3);
let u4 = userFactory(4);
console.log(u1, u2);