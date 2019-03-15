/*
    5. Условие: дан объект {js: "forever", java: "never"}.
    Задание: вывести в консоль объект в формате: свойсво - значение. Использывать цикл for in.
*/
console.log("Task 5");
const object = {js: "forever", java: "never"};
console.log("Initial Object:");
console.log(object);


console.log("Result:");
for (let prop in object) {
    console.log(`${prop} - ${object[prop]}`);
}