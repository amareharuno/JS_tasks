/*
    3. Условие: дан числовой массив [3, -2, 6, 1, 3, 30, -8, 1]. В массиве должна содержаться хотя бы одна единица.
    Задание: выводить числа в консоль пока не встретится единица (первая попавшаяся единица тоже должна быть выведена в консоль).
    Реализовать с использованием цикла while и do while.
*/

const arr = [3, -2, 6, 1, 3, 30, -8, 1];
console.log("Initial Array: [" + arr + "]");

// do..while
console.log("// do..while");
let index = -1;
do {
    index++;
    console.log(arr[index]);
    // OR: console.log(arr[++index]);
} while (arr[index] !== 1 && index < arr.length);


// while
console.log("// while");
let i = -1;
while (i < arr.length && arr[i] !== 1) {
    i++;
    console.log(arr[i]);
    // OR: console.log(arr[++i]);
}
