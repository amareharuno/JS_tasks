/*
    10) Условие: дана строка 'abcde'.
    Задание: проверить, что первым символом этой строки является буква 'a'. Результат типа boolean.
*/
console.log("Task 10");

const string = 'abcde';
console.log(`Initial string: '${string}'`);

const checkFirstLetterIsA = () => {
    return string[0] === 'a';
    // OR:
    // return string.charAt(0) === 'a';
};

console.log(`First letter is 'a'?`);
console.log(checkFirstLetterIsA());
