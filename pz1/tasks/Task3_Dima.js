console.log("Task 3 - Dima");

const arr = [3, -2, 6, 1, 3, 30, -8, 1];

const doWhileCycle = arr => {
    let i = 0;
    do {
        console.log(arr[i]);
        i++;
    } while (arr[i-1] !== 1 || i === arr.length);
};

doWhileCycle(arr);