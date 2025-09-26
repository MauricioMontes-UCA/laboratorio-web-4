function bubbleSort(arr) {
    const newArray = [...arr] // what is this????
    
    for (let i = 0; i < newArray.length; i++) { // empezando desde cero hasta la longitud del array - 1
        
        // en cada iteración, es la longitud del array menos la iteración - 1, en la primera iteración
        // es en el penúltimo elemento...
        for (let j = 0; j < newArray.length - i - 1; j++) {
            if (newArray[j] > newArray[j+1]) {
                let temp = newArray[j];
                newArray[j] = newArray[j+1];
                newArray[j+1] = temp;
            }
        }
    }

    return newArray;
}

console.log(bubbleSort([14, 23, 99, 847, 93, 12]))


// Sabían que, legítimamente, hay un paquete de NPM llamado is-even que hace precísamente esto?
// https://www.npmjs.com/package/is-even

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(7));


// Función para un caso específico en el que una planta crece siguiendo una tasa, decrece en la noche siguiendo
// otra tasa, y se quiere saber si algún día alcanzará una altura deseada.

function daysForDesiredGrowth(growthRate, shrinkRate, desiredGrowth) {
    let height = 0;
    let days = 0;

    while (height < desiredGrowth) {
        height += growthRate;
        days++;

        if (height >= desiredGrowth)return days
        else if (height < 0) { console.log("Your plant died man"); return days };

        height -= shrinkRate;
    }
}