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

var npcGroup = {
    elf : {
        race : "elf",
        firstName : ["Darvlin"],
        secondName : ["Windtalker"],
        weapon : ["sword"],
        hp : 100,
        mp : 200,
        active : 0,
    },
    darkElf : {
        race : "darkElf",
        firstName : ["Youchor"],
        secondName : ["fog"],
        weapon : ["sword"],
        hp : 500,
        mp : 80,
        active : 1,
    },
}

var npc = {}

var npcNew = function(){
    this.race = npcRace();
    this.position = npcPosition();
    this.npcName = npcName(this.race);
    this.level = npcLevel(this.position);
    this.weapon = npcWeapon(this.race);
    this.hp = npcHP(this.level,this.race);
    this.mp = npcMP(this.level,this.race);
    this.active = npcActive(this.race);
}

function npcRace(){
    return "elf";
}

function npcLevel(point){
    var point = point;
    var _mycalculation = point[0]*point[0] + point[1]*point[1];
    _mycalculation = Math.floor(Math.sqrt(_mycalculation)/10+1);
    return _mycalculation;
}

function npcName(race){
    var rnum1 = Math.floor(Math.random()*100);
    var rnum2 = Math.floor(Math.random()*100);
    var race = race;
    var firstName, secondName, rtnName;
    if(rnum1 < 200){
        firstName = npcGroup[race].firstName[0];
    }
    if(rnum2 < 200){
        secondName = npcGroup[race].secondName[0];
    }
    rtnName = ""+firstName+"·"+secondName+"";
    return rtnName;
}

function npcWeapon(race){
    var race = race;
    var rnum1 = 0//Math.floor(Math.random()*10);
    var rtn;
    rtn = npcGroup[race].weapon[rnum1];
    return rtn;
}

function npcHP(level,race){
    var level = level;
    var race = race;
    return npcGroup[race].hp + level*10;
}
function npcMP(level,race){
    var level = level;
    var race = race;
    return npcGroup[race].mp + level*10;
}
function npcActive(race){
    var race = race;
    if(race == "elf"){
        return 0;
    }
}

function npcBuild(point){
    var rnum = Math.random()*10;
    if(rnum > 7){
        for(var i = 0; i < 41; i++){
            var _myvarible = "npc"+i+"";
            _myvari = npc[_myvarible];
            if(_myvari == undefined){
                npc[_myvarible] = new npcNew();
                console.log("build an elf")
                return 1;
            }
        }
    }
}

function reinforcemence(){

}

function npcPosition(){
    var rnum1 = Math.floor(Math.random()*10) - 5;
    var rnum2 = Math.floor(Math.random()*10) - 5;
    var y;
    if(rnum1 >= -4){
        y = 4 - Math.floor(Math.sqrt(rnum1*rnum1));
        if(rnum2 <= 0){
            y = -y;
        }
    }else{
        return [loca[0]+0,loca[1]+4];
    }
    return [loca[0]+rnum1,loca[1]+y];
}

function eyesContact(pointM,pointS){
    var x = pointM[0] - pointS[0];
    var y = pointM[1] - pointS[1];
    return Math.floor(Math.sqrt(x*x+y*y))
}

function npcRecovery(){
    for(var i in npc){
        if(eyesContact(loca,npc[i].position) > 20){
            delete npc[i];
        }
    }
}