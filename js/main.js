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
    }
}

var loca = [0, 0];
var uuuu = [4, 0],
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
    bbbl = [-3, 1],
    bbb = [-3, 0],
    bbbr = [-3, 1],
    bbbb = [-4, 0];
var addressarray = [uuuu, uuul, uuu, uuur, uull, uul, uu, uur, uurr, ulll, ull, ul, u, ur, urr, urrr, llll, lll, ll, l, r, rr, rrr, rrrr, blll, bll, bl, b, br, brr, brrr, bbll, bbl, bb, bbr, bbrr, bbbl, bbb, bbbr, bbbb];

function ditu(point) {
    var point = point;
    $('.control').html("<div>(" + point + ")</div>");
    $('.pp').html("pp").css("background", background());
}

document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 38) { // 按 上 
        loca[0] = loca[0] + 1;
        address(1,0);
        ditu(loca);
    }
    if (e && e.keyCode == 40) { // 按 下 
        loca[0] = loca[0] - 1;
        address(-1,0);
        ditu(loca);
    }
    if (e && e.keyCode == 37) { // 按 左
        loca[1] = loca[1] - 1;
        address(0,-1);
        ditu(loca);
    }
    if (e && e.keyCode == 39) { // 按 右
        loca[1] = loca[1] + 1;
        address(0,1);
        ditu(loca);
    }
};

function background(point) {
    //   var ground = ground;
    //  if (ground == 'grass') {
    return "#43CD80";
    //  }
}

function address(x,y){
    for(var i = 0; i < addressarray.length; i++){
        addressarray[i][0] = addressarray[i][0] + x;
        addressarray[i][1] = addressarray[i][1] + y;
    }
}

function randomMap() {
    
}

/*
function address(point) {
    var pp = point;
    for (var i = 0; i < addressarray.length; i++) {
        var row = $('.' + addressarray[i] + '').parent().index() - 4; // 行位置
        var col = $('.' + addressarray[i] + '').index() - 4; // 列位置
        addressarray[i][0] = pp[0] + row;
        addressarray[i][1] = pp[1] + col;
    }
}
function addresscalculate(param) {
    var row = $('.' + param + '').parent().index() - 4; // 行位置
    var col = $('.' + param + '').index() - 4; // 列位置
    param[0] = point[0] + row;
    param[1] = point[1] + col;
}
function arrayaddresscal(arg) {
    var arg = arg;
    var rtn = [];
    rtn = arg.split(",");
    return rtn;
}
*/