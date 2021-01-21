// 1 Prout = 1,85 × 10^5 eV
// 1 Prout = 2,9638 x 10^-14 J
// 1 Joule = 6,24 × 10^18 eV

function proutsConverter(valNum) {
    var resultEV = valNum * 1.85 * Math.pow(10, 5);
    resultEV = expo(resultEV, 3);
    document.getElementById("eV").value = resultEV;

    var resultJoules = valNum * 2.9638 * Math.pow(10, -14);
    resultJoules = expo(resultJoules, 3);
    document.getElementById("Joules").value = resultJoules;

    return true;
} 

function eVConverter(valNum) {
    var resultProuts = valNum / (1.85 * Math.pow(10, 5));
    resultProuts = expo(resultProuts, 3);
    document.getElementById("Prouts").value = resultProuts;

    var resultJoules = valNum / (6.24 * Math.pow(10, 18));
    resultJoules = expo(resultJoules, 3);
    document.getElementById("Joules").value = resultJoules;

    return true;
}

function joulesConverter(valNum) {
    var resultProuts = valNum / (2.9638 * Math.pow(10, -14));
    resultProuts = expo(resultProuts, 3);
    document.getElementById("Prouts").value = resultProuts;

    var resultEV = valNum * 6.24 * Math.pow(10, 18);
    resultEV = expo(resultEV, 3);
    document.getElementById("eV").value = resultEV;

    return true;
} 

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}
