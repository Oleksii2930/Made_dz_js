//DOM
//Forms API

let target = document.getElementsById("target");
console.log(target.innerHTML);
turget.innerText = "Hello, World!";
turget.style.bgColor = "red";
// console.log(target.classList);
// target.classList.add("active");
// target.classList.add("foo");
// console.log(target.classList.item(0));
// target.classList.toggle("foo");

console.log(target.getAttribute("class"));
console.log(target.getAttribute("id"));

//Створення елементів
let h2 = document.createElement('h2');
he.innerText = 'Hello, World!';
document.body.appendChild(h2);