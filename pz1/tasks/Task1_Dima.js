/*
	Исходные данные: массив [3, 6, true, 1, 3, NaN, 'text', null, undefined].
	Написать функцию, принимающую в параметры массив и возвращающую объект типа {maxValue: maxValue, minValue: minValue}.
*/
console.log("Task 1 - Dima");

const arr = [3, 6, true, 1, 3, NaN, 'text', null, undefined];

const minAndMax = arr => {
    let min, max;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            continue;
        }
        if (max === undefined || arr[i] > max) {
            max = arr[i];
        }
        if (min === undefined || arr[i] < min) {
            min = arr[i];
        }
    }
    return {minValue: min, maxValue: max};
};

const res = minAndMax(arr);
console.log(res);
