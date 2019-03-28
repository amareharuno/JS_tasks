/*
    4. Условие: дан числовой массив [3, -2, 6, 1, 3, 30, -8, 1].
    Задание: найти сумму чисел. Использывать цикл forEach.
*/
console.log("Task 4");

const arr = [3, -2, 6, 1, 3, 30, -8, 1];
console.log("Initial Array: [" + arr + "]");

let result = 0;
arr.forEach((item, index) => {
    console.log(index + ") " + result + " + " + item + ":");
    result += item;
    console.log(result);
});

console.log("Result: " + result);
