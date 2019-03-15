/*
    Исходные данные: массив [3, -2, 6, 1, 3, 30, -8, 1]
    Найти произведение чисел. Использывать цикл while
*/

const arr = [3, -2, 6, 1, 3, 30, -8, 1];
console.log("Initial Array: [" + arr + "]");

let result = arr[0];
let index = 1;

while (index < arr.length) {
    console.log(index + ") " + result + " * " + arr[index] + ":" );
    result *= arr[index];
    console.log(result);
    index++;
}

console.log("Result: " + result);
