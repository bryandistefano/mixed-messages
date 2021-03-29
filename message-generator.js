// Create a randomization function
const randomNumberGenerator = num => {
    return Math.floor(Math.random() * num)
};

// Create an object to randomize on for different combinations
const spaceMarine = {
    legion: ['Dark Angels', "Emperor's Children", 'Iron Warriors', 'White Scars', 'Space Wolves', 'Imperial Fists', 'Night Lords', 'Blood Angels', 'Iron Hands', 'World Eaters', 'Ultramarines', 'Death Guard', 'Thousand Sons', 'Luna Wolves', 'Word Bearers', 'Salamanders', 'Raven Guard', 'Alpha Legion'],
    specialization: ['Assault', 'Tactical', 'Devastator', 'Scout', 'Apothecary', 'Terminator'],
    weapon: ['Chainsword', 'Lightning Claws', 'Power Axe', 'Power Fist', 'Power Sword', 'Thunder Hammer', 'Bolter', 'Flamer', 'Bolt Pistol', 'Meltagun', 'Plasma Gun', 'Storm Bolter', 'Lascannon', 'Plasma Cannon', 'Missile Launcher']
};

// Create an array to store the random combinations
let randomCombo = [];

// Iterate over the object
for (let item in spaceMarine) {
    let randomChoice = randomNumberGenerator(spaceMarine[item].length)

    switch (item) {
        case 'legion':
            randomCombo.push(`You are a Space Marine of the ${spaceMarine[item][randomChoice]} Legion.`)
            break
        case 'specialization':
            randomCombo.push(`You are part of a ${spaceMarine[item][randomChoice]} Squad.`)
            break
        case 'weapon':
            randomCombo.push(`You wield a ${spaceMarine[item][randomChoice]} into glorious battle for the Emperor.`)
            break
        default:
            console.log('You are not worthy to join the ranks of the Space Marines.')
    }
};

// Display results of generator
console.log(randomCombo);