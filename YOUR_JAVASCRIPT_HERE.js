// Write your JS here
let hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2
    }
};

let gameBody = document.getElementById("gameBody");

function checkDeath (hero) {
    if (hero.health < 1) {
        gameBody.innerHTML = '';
        hero.heroic = false;
        gameBody.style.display = "none";
        return alert('Game over!');
    }
} 

window.addEventListener('load', (event) => {
    return alert("Greetings brave adventurer! We have an orc invasion! Quick, fill in your name, and grab the daggers!");
});

const inn = document.getElementById("inn");
console.log(inn);
inn.onclick = function () {
    console.log("INN got clicked!");
    rest(hero);
}

const bag = document.getElementById("bag");
bag.onclick = function () {
    console.log("BAG got clicked!");
    equipWeapon(hero);
}


const enemyOne = document.getElementById("orc");
let enemyOneHealth = 4;
enemyOne.onclick = function () {
    console.log("Orc 1 got clicked!");
    if (enemyOneHealth === 0) {
        gameBody.removeChild(enemyOne);
        return alert("The orc is defeated! Remember to rest at the inn if your health is low!");
    } else {
    enemyOneHealth = enemyOneHealth - hero.weapon.damage;
    hero.health = hero.health - 3;
    displayStats(hero);
    checkDeath(hero);
    return alert(`You attacked the Orc for ${hero.weapon.damage} damage! The Orc counter attacked for 3 damage!`);
    }
}

const enemyTwo = document.getElementById("orc2");
let enemyTwoHealth = 4;
enemyTwo.onclick = function () {
    console.log("Orc 2 got clicked!");
    if (enemyTwoHealth === 0) {
        gameBody.removeChild(enemyTwo);
        return alert("The orc is defeated! Remember to rest at the inn if your health is low!");
    } else {
    enemyTwoHealth = enemyTwoHealth - hero.weapon.damage;
    hero.health = hero.health - 3;
    displayStats(hero);
    checkDeath(hero);
    return alert(`You attacked the Orc for ${hero.weapon.damage} damage! The Orc counter attacked for 3 damage!`);
    }
}





let daggerImage = document.getElementById("dagger");
const daggerWeapon = {type: "dagger", damage: 2};
console.log(daggerImage);
daggerImage.onclick = function () {
    console.log("DAGGER got clicked!");
    pickUpItem(hero, daggerWeapon);
    gameBody.removeChild(daggerImage);
    return alert("Good! Now click on your bag in the lower left to equip it!");
}

function submitName() {
    const inputField = document.getElementById('name');
    let playerName = inputField.value;
    hero.name = playerName;
    inputField.value = null;
    displayStats(hero);
}



function rest(hero) {
    if (hero.health === 10) {
       return alert(`${hero.name}'s Health is already full!`);
    } else {
    hero.health = 10;
    displayStats(hero);
    return hero;
    }
};

function pickUpItem(hero, weaponObject) {
    if (!hero.inventory.includes(weaponObject)) {
    hero.inventory.push(weaponObject);
    console.log(hero.inventory);
    }
};

function equipWeapon(hero) {
    if (hero.inventory.length === 0) {
        console.log("length confirmed 0");
        return false;
    }
    hero.weapon = hero.inventory[0];
    console.log(hero.weapon);
    displayStats(hero);
    return alert("Excellent, you're a natural! Now click on the orcs to attack!");
};

function displayStats(hero) {
    let hud = document.getElementById("hud");
    hud.innerHTML = "";
    let hudName = document.createElement("h2");
    let hudHealth = document.createElement("h2");
    let hudWeaponType = document.createElement("h2");
    let hudWeaponDmg = document.createElement("h2");
    hudName.innerHTML = `Hero name: ${hero.name}`; 
    hudHealth.innerHTML = `Health: ${hero.health}`
    hudWeaponType.innerHTML = `Weapontype: ${hero.weapon.type}`;
    hudWeaponDmg.innerHTML = `DMG: ${hero.weapon.damage}`;
    hud.appendChild(hudName);
    hud.appendChild(hudHealth);
    hud.appendChild(hudWeaponType);
    hud.appendChild(hudWeaponDmg);
};

