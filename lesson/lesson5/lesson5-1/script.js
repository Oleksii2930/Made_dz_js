// function calc(a, b) {
//     return a + b;
// }


let calc = (a,b) => a + b;
console.log(calc(10,20));


let user = {
    name: 'John',
    greeting: function (msg) {
        return `${msg.value} is ${this.name}`; // this не використовуєтся в стрілкових функціях
    },
}

// Замикання




// Рекурсія

function iterator (arr, i) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) {
        iterator(arr, i); //завжди має бути обмеження
    }
}
iterator([11,22,33],0);