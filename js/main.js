function enemy(race, level, position) {
  this.race = race;
  this.level = level;
  this.position = position;
}

function unit(race, level, name, mod, position) {
  this.race = race;
  this.level = level;
  this.name = name;
  this.mod = mod;
  this.position = position;
  this.weapon = function () {
    weapon[Math.floor(Math.random() * 10)];
  };
}

var loca = [0, 0],
  uuuu = [4, 0],
  uuul = [3, -1],
  uuu = [3, 0],
  uuur = [3, 1],
  uull = [2, -2],
  uul = [2, -1],
  uu = [2, 0],
  uur = [2, 1],
  uurr = [2, 2],
  ulll = [1, -3],
  ull = [1, -2],
  ul = [1, -1],
  u = [1, 0],
  ur = [1, 1],
  urr = [1, 2],
  urrr = [1, 3],
  llll = [0, -4],
  lll = [0, -3],
  ll = [0, -2],
  l = [0, -1],
  r = [0, 1],
  rr = [0, 2],
  rrr = [0, 3],
  rrrr = [0, 4],
  blll = [-1, -3],
  bll = [-1, -2],
  bl = [-1, -1],
  b = [-1, 0],
  br = [-1, 1],
  brr = [-1, 2],
  brrr = [-1, 3],
  bbll = [-2, -2],
  bbl = [-2, -1],
  bb = [-2, 0],
  bbr = [-2, 1],
  bbrr = [-2, 2],
  bbbl = [-3, -1],
  bbb = [-3, 0],
  bbbr = [-3, 1],
  bbbb = [-4, 0];
var addressarray = [
  loca,
  uuuu,
  uuul,
  uuu,
  uuur,
  uull,
  uul,
  uu,
  uur,
  uurr,
  ulll,
  ull,
  ul,
  u,
  ur,
  urr,
  urrr,
  llll,
  lll,
  ll,
  l,
  r,
  rr,
  rrr,
  rrrr,
  blll,
  bll,
  bl,
  b,
  br,
  brr,
  brrr,
  bbll,
  bbl,
  bb,
  bbr,
  bbrr,
  bbbl,
  bbb,
  bbbr,
  bbbb
];

var map = {
  /*map0_0 : {
        position : [0,0],
        ground : "grass"
    }*/
};

function ditu(point) {
  var point = point;
  $(".control").html("<div>(" + point + ")</div>");
  npcBuild();
  innerContent();
  background();
}

document.onkeydown = function (event) {
  var e = event || window.event || arguments.callee.caller.arguments[0];
  if (e && e.keyCode == 38) {
    // 按 上
    loca[0] = loca[0] + 1;
    address(1, 0);
    //ditu(loca);
    runtime();
  }
  if (e && e.keyCode == 40) {
    // 按 下
    loca[0] = loca[0] - 1;
    address(-1, 0);
    //ditu(loca);
    runtime();
  }
  if (e && e.keyCode == 37) {
    // 按 左
    loca[1] = loca[1] - 1;
    address(0, -1);
    //ditu(loca);
    runtime();
  }
  if (e && e.keyCode == 39) {
    // 按 右
    loca[1] = loca[1] + 1;
    address(0, 1);
    //ditu(loca);
    runtime();
  }
};

function background() {
  //console.log("background()")
  var td = document.getElementsByTagName("td");
  var po = [];
  for (var i in td) {
    if (
      td[i].className != undefined &&
      td[i].className !== "" &&
      td[i].className !== "control" &&
      td[i].className !== "status" &&
      td[i].className !== "player" &&
      td[i].className !== "excavations" //&&
      //td[i].className !== "loca"
    ) {
      po = eval(td[i].className);
      //console.log(td[i]);
      var _my = "map" + po[0] + "_" + po[1] + "";
      //console.log(_my)
      if (map[_my] == undefined) {
        map[_my] = {
          position: [po[0], po[1]],
          ground: randomground(po[0], po[1])
        };
        //console.log(po)
      }
      for (var j in map) {
        if (map[j].position != undefined) {
          if (map[j].position[0] == po[0] && map[j].position[1] == po[1]) {
            //console.log(po);
            if (map[j].ground == "grass") {
              td[i].style.background = "#43CD80";
            } else if (map[j].ground == "tree") {
              td[i].style.background = "#006400";
            } else if (map[j].ground == "rock") {
              td[i].style.background = "#B8B8B8";
            } else {
              td[i].style.background = "#000000";
            }
            if (map[j].npc != undefined) {
              console.log("elf");
              $(td[i]).text("" + map[j].npc.race + "");
            } else {
              $(td[i]).text("");
            }
          }
        }
      }
    }
  }
}

function address(x, y) {
  for (var i = 1; i < addressarray.length; i++) {
    addressarray[i][0] = addressarray[i][0] + x;
    addressarray[i][1] = addressarray[i][1] + y;
  }
}
function randomground(param0, param1) {
  var ground;
  var rnum = Math.random() * 10;
  if (rnum > 7 && rnum < 8) {
    ground = "rock";
  } else if (rnum > 5 && rnum < 6) {
    ground = "tree";
  } else {
    ground = "grass";
  }
  return ground;
}

ditu(loca);

function dituRecovery() {
  for (var i in map) {
    if (eyesContact(loca, map[i].position) > 20) {
      delete map[i];
    }
  }
}

var time = 1;

function runtime() {
  if (time < 1000) {
    dituRecovery();
    npcRecovery();
    time++;
    ditu(loca);
    console.log("1");
    //return 1;
  } else {
    alert("something happened");
    dituRecovery();
    npcRecovery();
    time = 0;
    ditu(loca);
    //return 0;
  }
}

// function innerContent() {
//     console.log("innerContent()")
//     var td = document.getElementsByTagName("td");
//     for (var i in td) {
//         if (td[i].className !== "" && td[i].className !== "control" && td[i].className !== "status" && td[i].className !== "player"/*&&td[i].className !== "loca"*/) {
//             var po = eval(td[i].className);
//             console.log(po);
//             for (var k in npc) {
//                 console.log("k")
//                 if (npc[k].position[0] == po[0] && npc[k].position[1] == po[1]) {
//                     $(td[i]).text("" + npc[k].race + ""); continue;
//                 } else {
//                     $(td[i]).text("");
//                 }
//             }
//         }
//     }
// }

function innerContent() {
  for (var i in npc) {
    if (npc[i] != undefined) {
      var npcPosition =
        "map" + npc[i].position[0] + "_" + npc[i].position[1] + "";
      console.log(npcPosition);
      if (map[npcPosition] == undefined) {
        map[npcPosition] = {
          position: [npc[i].position[0], npc[i].position[1]],
          ground: randomground(npc[i].position[0], npc[i].position[1]),
          npc: npc[i]
        };
      }
    }
  }
}

function contact() {
  for (var i in npc) {
    if (npc[i] != undefined) {
      //console.log("1");
      if (npc[i].position[0] == loca[0] && npc[i].position[1] == loca[1]) {
        console.log("contact");
      }
    }
  }
}
