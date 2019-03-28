/*
    9) Условие: дан числовой массив [-3, 0, -0, 11, 8, 5, 33, 115].
    Задание: написать функию, принимающую на вход массив и два числа (начало и конец диапазона),
    которая возвращает сумму всех нечетных чисел в этом диапазоне.
*/
console.log("Task 9");

const arr = [-3, 0, -0, 11, 8, 5, 33, 115];
console.log(`Initial Array: [${arr}]`);

const summarizeEven = (array, min, max) => {
    console.log(`Range: [${min}, ${max}]`);
    let sum = 0;
    array.forEach(number => {
        if (number >= min && number <= max && number%2 === 0) {
            console.log(`${sum} + ${number}:`);
            sum+=number;
            console.log(sum);
        }
    });
    return sum;
};

console.log(`Result: ${summarizeEven(arr, -100, 100)}`);