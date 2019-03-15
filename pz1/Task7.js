/*
    7. Условие: дан числовой массив [-5, 0, 10, 10, 3, 7, 5]
    Задание: написать функцию принимающую в качесве параметров массив, и возвращающая отсортированный массив в порядке возрастания.
    Использывать сортировку "пузырьком".
*/
console.log("Task 6");

const arr = [-5, 0, 10, 10, 3, 7, 5];
console.log("Initial Array: [" + arr + "]");

const sort = (arr) => {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
};

console.log("Sorted Array: [" + sort(arr) + "]");
