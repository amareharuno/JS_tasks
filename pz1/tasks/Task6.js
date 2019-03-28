/*
    6. Условие: дан числовой массив [-3, 0, -0, 11, 8, 5, 33, 115].
    Задание: написать функцию принимающую в качевстве параметров массив, и возвращающую новый массив из чисел кратные 3.
*/
console.log("Task 6");

const arr = [-3, 0, -0, 11, 8, 5, 33, 115];
console.log("Initial Array: [" + arr + "]");

const getMultipleOfThree = (arr) => {
    return arr.filter(item => item % 3 === 0);
};

console.log("Result Array: [" + getMultipleOfThree(arr) + "]");