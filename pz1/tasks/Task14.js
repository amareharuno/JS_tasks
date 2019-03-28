/*
    14) Задание: написать функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20,
    с интервалом между числами 100 мс.
    То есть, весь вывод должен занимать 2000 мс, в течение которых каждые 100 мс в консоли появляется очередное число.
    Использывать функцию setInterval.
*/
console.log("Task 14");

function printNumbersInterval() {
    let i = 1;
    const startTime = new Date();
    let intId = setInterval(() => {
        console.log(i++);
        if (i === 21) {
            const endTime = new Date();
            console.log(`Task was running ${startTime-endTime}ms`);
            clearInterval(intId);
        }
    }, 100);
}

printNumbersInterval();
