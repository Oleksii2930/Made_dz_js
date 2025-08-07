// spred operator робить копію повністю незалежний обєкт
// let user = {
//     name: 'vasya',
//     age: 18,
// };
//
// let userCopy = {...user};
// console.log(userCopy);
// console.log(userCopy === user);


// Оператор опціональної послідовності одноокий елвіс ?.
// let user = {}
// user.foo();
// let user = undefined;
// user?.name;
//
//
// // ES6 Features
// let [a,  ,c] = [11,22,33];
// console.log(a, c);

//Поверхнева та глибока копії
// let user = {name: 'vasya', skills:['html','js']}
// let userJsonClone = JSON.stringify(user);
// console.log(userJsonClone);
// let parse = JSON.parse(userJsonClone);
// console.log(parse);
// console.log(user === parse);
// console.log(user.skills === parse.skills); // deep cope
//
// let assign = Object.assign({}, user);
// console.log(assign);
// console.log(assign === user);
// console.log(assign.skills === user.skills); //shallow cope


//Prototyping
