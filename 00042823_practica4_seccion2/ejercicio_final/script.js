// Esta función es fumada, pq al chile lidiar con string siempre termina usando regex
// Por si sospechan, esta cosa fue echa con IA porque la verdad me frustra usar valores
// quemados, preferiría usar un spinner para validar datos pero ni modo, la entrada tiene
// que ser un string.

function normalizeDay(day) {
    return day
        .toLowerCase()
        .normalize("NFD") // Separa letras y tildes
        .replace(/[\u0300-\u036f]/g, ""); // Elimina tildes
}

function weeklyTasks(dayName) {
    const tasks = {
        "lunes": "Debes atender un cliente en específico",
        "martes": "Debes visitar una agencia fuera de la ciudad",
        "miercoles": "Debes llevar a tu hija a clases de ballet",
        "jueves": "Hay entregas de desarrollo que tienes que hacer",
        "viernes": "Hay problemas que tienes que atender de manera remota",
        "sabado": "Debes servir a tu esposa",
        "domingo": "Es tu día libre, supongo"
    };
    
    const normalizedDay = normalizeDay(dayName);

    return tasks[normalizedDay] || "Hey, mira, aquí te dejo una ayuda:"
}

// Sabían que si el tag script se encuentra al final del body, no es necesario cargar el DOM?
// that is crazy
const input = document.getElementById('dayInput');
const button = document.querySelector('button');
const resultDiv = document.getElementById('taskResult');

button.addEventListener('click', () => {
    const day = input.value;
    const result = weeklyTasks(day);

    if (result === "Hey, mira, aquí te dejo una ayuda:") {
        resultDiv.innerHTML = `${result} <a href="https://dle.rae.es/" target="_blank">https://dle.rae.es/</a>`;
    }
    else {
        resultDiv.textContent = result
    }
});