/*
    8) Задание: написать рекурсивную функцию, выводящую в консоль ряд Фибоначи.
    Максимальное число должно быть не больше 18000.
*/
console.log("Task 8");

const printFibonacciSeries = (x1, x2) => {
    if (x1 === 1 && x2 ===1) {
        console.log(x1);
        console.log(x2);
    }
    let sum = x1 + x2;
    if (sum <= 18000) {
        console.log(sum);
        printFibonacciSeries(x2, sum);
    }
};

printFibonacciSeries(1, 1);