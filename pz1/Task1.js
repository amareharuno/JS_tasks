/*
	Исходные данные: массив [3, 6, true, 1, 3, NaN, 'text', null, undefined].
	Написать функцию, принимающую в параметры массив и возвращающую объект типа {maxValue: maxValue, minValue: minValue}.
*/

const array = [3, 6, true, 1, 3, NaN, 'text', null, undefined];
console.log(findMinMax(array));

function findMinMax(arr) {
    let numberArr = arr.filter(item => typeof item === 'number' && item === item);
    console.log(numberArr);

    if (numberArr) {
        let min = numberArr[0];
        let max = numberArr[0];

        numberArr.forEach(item => {
            if (item > max) max = item;
        if (item < min) min = item;
    });
        return {
            maxValue: max,
            minValue: min
        };
    } else {
        return {};
    }
}
