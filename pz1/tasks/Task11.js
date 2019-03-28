/*
    11) Условие: дана строка вида 'var_text_hello'.
    Задание: преобразовать строку в 'varTextHello'.
*/
console.log("Task 11");
const str = 'var_text_hello';
console.log(`Initial string: '${str}'`);

const removeUnderlines = (string) => {
    let newStr = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== '_') {
            newStr += string[i];
        } else {
            newStr += string[i + 1].toUpperCase();
            i++;
        }
    }
    return newStr;
};

console.log(`Result: ${removeUnderlines(str)}`);
