// 1 Prout = 1,85 × 10^5 eV

function proutConverter(valNum) {
    var result = valNum * 1.85 * Math.pow(10, 5);
    result = expo(result, 3);
    document.getElementById("eV").value = result;
} 

function eVConverter(valNum) {
    var result = valNum / (1.85 * Math.pow(10, 5));
    result = expo(result, 3);
    document.getElementById("Prout").value = result;
}

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}
