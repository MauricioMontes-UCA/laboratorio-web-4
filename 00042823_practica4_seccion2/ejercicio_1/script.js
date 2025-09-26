console.assert("Enraged Beastfly" > "Cogwork Dancers");

console.clear();

console.dir(window);

console.dirxml(document.body);

// ------------------------------------------------

const silksong = ['Garmond and Zaza', 'Shakra', 'Sherma', 'Pavo', "Bone bottom's builder"];

console.group("Silksong's favorite characters");

silksong.forEach(character => console.log(character));

console.groupEnd();