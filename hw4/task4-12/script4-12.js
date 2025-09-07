function sum (arr) {
    let basket = 0;
    for (const item of arr) {
      basket += item;
    }
    return basket;
}
console.log(sum([1, 2, 3, 4, -23, 34, -45, 780]));