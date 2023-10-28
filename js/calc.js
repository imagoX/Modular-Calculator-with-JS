function add(value) {
    document.getElementById("result").value += value;
}

function final() {
    document.getElementById("result").value = eval(document.getElementById("result").value);
}

function reset() {
    document.getElementById("result").value = '';
}

function Mathcalc(mathFunc) {
    console.log(mathFunc);
    let val = document.getElementById("result").value;
    document.getElementById("result").value = Math[mathFunc](val);
}

  