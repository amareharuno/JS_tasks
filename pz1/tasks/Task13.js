/*
    13) Задание: написать фунцию, рисующую в консоли равнобедренный треугольник из символов ^.
    Высоту треугольника передать параметром в функцию.
*/
console.log("Task 13");

const drawTriangle = (height) => {
    console.log(`Height: ${height}`);
    let bottomLineLength = 1 + (height - 1) * 2;

    for (let i = 1; i <= height; i++) {
        let numberOfTicksInLine = 1 + (i - 1) * 2;
        let numberOfSpacesFromOneSide = (bottomLineLength - numberOfTicksInLine) / 2;

        let spacesStr = "";
        let symbolStr = "";
        for (let j = 1; j <= numberOfSpacesFromOneSide; j++) {
            spacesStr += ' ';
        }
        for (let j = 1; j <= numberOfTicksInLine; j++) {
            symbolStr += '^';
        }

        console.log(spacesStr + symbolStr + spacesStr);
    }
};

drawTriangle(10);