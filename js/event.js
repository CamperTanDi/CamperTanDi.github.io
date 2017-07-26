$('.excavations').on("click", function () { console.log("excavations") })

function battle(player, npc) {
    var rnum1 = Math.floor(Math.random() * 10);
    var rnum2 = Math.floor(Math.random() * 10);
    var hit;
    if (npc.hp >= player.hp) {
        if (npc.mp > npc.hp) {
            magicCalculate(npc, player, rnum1);
        } else if (rnum2 > 5) {
            hitCalculate(npc, player, rnum1);
        } else {
            missDialog(npc, player);
        }
    } else {
        if (player.mp > player.hp) {
        } else if (rnum2 > 5) {
        } else {
        }
    }
}

function hitCalculate(unit1, unit2, rnum) {
    var hit;
    hit = (unit1.level * unit1.hp * 0.01 + rnum) * (unit1.ATK - unit2.DEF);
    attackDialog(unit1, unit2, hit);
    unit2.hp = unit2.hp - hit;
    countstrikeDialog(unit1, unit2, hit);
    unit1.hp = unit1.hp - hit * unit2.level * 0.01 * unit2.hp;
}

function magicCalculate(unit1, unit2, rnum) {
    var hit;
    var rnum1 = Math.floor(Math.random() * 10);
    var rnum2 = Math.floor(Math.random() * 10);
    hit = unit1.level * unit1.mp * 0.01 + rnum;
    if (unit1.magic !== undefined || unit1.magic.length !== 0) {
        for (var i = 0; i < unit1.magic.length; i++) {
            if (rnum1 > 5) {
                unit1.mp = unit1.mp - 10;
                magicAtkDialog(unit1, unit2, hit);
                unit1.hp = unit1.hp - hit * data.magic[unit1.magic[i]][0];
                unit2.hp = unit2.hp - hit * data.magic[unit1.magic[i]][1];
                break;
            } else if (rnum2 > 9) {
                unit1.mp = 0;
                magicAtkSelfDialog(unit1, unit2, hit);
                unit1.hp = unit1.hp / 2;
                break;
            } else {
                unit1.mp = unit1.mp + 10;
                magicDefDialog(unit1, unit2, hit);
            }
        }
    }
}

function attackDialog(unit1, unit2, hit) {
    
}

var dialog = {
    magic: {
        criticalHit: "criticalHit",
    },
    atk: {

    }
}

data = {
    magic: {
        criticalHit: [0, 1],
        forestHope: [-1, -1],
        windSpeak: [-1, 1],
        broveAid: [-1, 0],
    }
}



/*var player = {
    race: "human",
    playerName: "td",
    level: 1,
    weapon: "fist",
    magic : ["criticalHit"]
    position: [0, 0],
    hp: 100,
    mp: 0,
    active: 0
};*/

/*var npc1 = {
    race : "elf",
    npcName : "darvlin",
    level : 1,
    weapon : "sword",
    magic : ["windSpeak","forestHope"]
    position : [5,5],
    hp : 100,
    mp : 100,
    active : 0,
}*/