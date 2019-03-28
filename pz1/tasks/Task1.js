/*
	Исходные данные: массив [3, 6, true, 1, 3, NaN, 'text', null, undefined].
	Написать функцию, принимающую в параметры массив и возвращающую объект типа {maxValue: maxValue, minValue: minValue}.
*/
console.log("Task 1");

const array = [3, 6, true, 1, 3, NaN, 'text', null, undefined];
console.log(findMinMax(array));

function findMinMax(arr) {
    if (arr && arr.length) {
        let min, max;
        arr.forEach(item => {
            if (typeof item === 'number' && !isNaN(item)) {
                if (min === undefined && max === undefined) {
                    min = item;
                    max = item;
                } else {
                    if (item < min) {
                        min = item;
                    }
                    if (item > max) {
                        max = item;
                    }
                }
            }
        });
        return {maxValue: max, minValue: min};
    } else {
        return {};
    }
}
