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


const daggerImage = document.getElementById("dagger");
const daggerWeapon = {type: "dagger", damage: 2};
console.log(daggerImage);
daggerImage.onclick = function () {
    console.log("DAGGER got clicked!");
    pickUpItem(hero, daggerWeapon);
    
}




function rest(hero) {
    if (hero.health === 10) {
       return alert(`${hero.name}'s Health is already full!`);
    } else {
    hero.health = 10;
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
};

function displayStats(hero) {
    let hud = document.getElementById("hud");
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
}





/*workbench


    if (hero.health === 10) {
        alert(`${hero.name}'s Health is already full!`);
    }


function myTest(hero) {
hero.health = 5;
console.log(hero.health);
rest(hero);
}

myTest(hero);



*/