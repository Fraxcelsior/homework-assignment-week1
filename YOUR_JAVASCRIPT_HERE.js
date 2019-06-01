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


let inn = document.getElementById("inn");
    console.log(inn);
    inn.onclick = function () {
        console.log("got clicked!");
        rest(hero);
    }



function rest(hero) {
    console.log(hero);
    hero.health = 10;
    console.log(hero.health);
    console.log("Health set at 10");
    return hero;
};

function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon);
    console.log(hero.inventory);
};

function equipWeapon() {};





/*workbench


function myTest(hero) {
hero.health = 5;
console.log(hero.health);
rest(hero);
}

myTest(hero);



*/