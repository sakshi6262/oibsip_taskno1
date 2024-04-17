function pick(val) {
    document.getElementById("a").value += val;
};

function solve() {
    let x = document.getElementById("a").value;
    let y = eval(x);
    document.getElementById("a").value = y;
};

function clr() {
    document.getElementById("a").value = " ";
};
function slice() {
    let q = document.getElementById("a").value.toString().slice(0, -1);
    document.getElementById("a").value = q;

};