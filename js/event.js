$('.excavations').on("click", function () { console.log("excavations") })

function battle(player, npc) {
    var rnum1 = Math.floor(Math.random() * 10);
    var hit;
    if (npc.mp >= player.mp) {
        npc.mp = npc.mp - rnum1;
        hit = npc.level * npc.hp * 0.01 + rnum1;
        attackDialog(player,npc,hit);
        player.mp = player.mp + rnum1;
        player.hp = player.hp - hit;
        countstrikeDialog(npc,player,hit)
        npc.hp = npc.hp - hit * player.level *0.01 * player.hp;
    }
}

/*var player = {
    race: "human",
    playerName: "td",
    level: 1,
    weapon: "fist",
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
    position : [5,5],
    hp : 100,
    mp : 100,
    active : 0,
}*/