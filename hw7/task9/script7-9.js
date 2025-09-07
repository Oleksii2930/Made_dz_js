Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i + 1, this); // передаємо елемент, індекс і весь масив
    }
};
const arr = [1, 2, 3];

arr.myForEach((item, index) => {
    console.log(`Index ${index}: Value ${item}`);
});

Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
const nums = [1, 2, 3, 4, 5, 6];

const even = nums.myFilter(num => num % 2 === 0);

console.log(even); // [2, 4, 6]