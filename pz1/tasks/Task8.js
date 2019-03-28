/*
    8) Задание: написать рекурсивную функцию, выводящую в консоль ряд Фибоначи.
    Максимальное число должно быть не больше 18000.
*/
console.log("Task 8");

const printFibonacciSeries = (x1 = 1, sum = 1) => {
    if (sum === 1) {
        console.log(x1);
    }
    if (sum <= 18000) {
        console.log(sum);
        printFibonacciSeries(sum, x1 + sum);
    }
};

printFibonacciSeries();