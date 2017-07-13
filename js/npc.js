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

var npcCollection = {
    elf : {
        race : "elf",
        firstName : ["Darvlin"],
        secondName : ["Windtalker"],
        weapon : ["sword"],
    },
    darkElf : {
        race : "darkElf",
        firstName : ["Youchor"],
        secondName : ["fog"],
        weapon : ["sword"],
    },
}

var npc = {}

var npcNew = function(race,npcName,level,weapon){
    this.race = race;
    this.npcName = npcName;
    this.level = level;
    this.weapon = weapon;
    this.position = npcPosition();
    this.hp = npcHP(level,race);
    this.mp = npcMP(level,race);
    this.active = npcActive(race);
}

function npcPosition(){
    var rnum1 = Math.floor(Math.random()*10) + 10;
    var rnum2 = Math.floor(Math.random()*10) + 10;
    return [loca[0]+rnum1,loca[1]+rnum2];
}

function npcHP(level,race){
    var level = level;
    var race = race;
    if(race == "elf"){
        return 100+level*10;
    }
}
function npcMP(level,race){
    var level = level;
    var race = race;
    if(race == "elf"){
        return 100+level*10;
    }
}
function npcActive(race){
    var race = race;
    if(race == "elf"){
        return 0;
    }
}

function npcBuild(){
    var rnum = Math.random()*10;
    if(rnum > 7){console.log("r")
        for(var i = 0; i < 41; i++){
            var _myvarible = "npc"+i+"";
            _myvari = npc[_myvarible];
            if(_myvari == undefined){
                npc[_myvarible] = new npcNew();
                return 1;
            }
        }
    }
}

function reinforcement(){

}