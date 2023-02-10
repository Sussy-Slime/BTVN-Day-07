console.log('ax +b = 0')
const ans = 0;
var x = 0;
function equation (x) {
    let a = 5
    let b = 8
    var x = ans - b / a;
    return x
}
console.log("x=",equation(x))

var ch = 0;
var đgCao = 0;
var g1 = 0;
var g2 = 0;
function measureStr() {
    const c1 = 6;
    const c2 = 8;
    var ch = c1* c1 + c2* c2;
    ch += '=> cạnh huyền =' + Math.sqrt(ch)
    var đgCao = c1* c2/ 10;
    var g1 = "Sin(" + c2 / 10 + ")"
    var g2 = "Sin(" + c1 / 10 + ")"
    return g2
}
console.log(measureStr())