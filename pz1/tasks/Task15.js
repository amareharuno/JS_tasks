/*
    15) Задание: реализовать задачу 14 с использованием функции setTimeout.
*/
console.log("Task 15");

function printNumbersInterval(i = 1) {
    let timerId = setTimeout(() => {
        console.log(i);
        if (i < 20) {
            printNumbersInterval(i+1);
        } else {
            clearInterval(timerId);
            const endTime = new Date();
            console.log(`Task was running ${startTime-endTime}ms`);
        }
    }, 100);
}

const startTime = new Date();
printNumbersInterval();