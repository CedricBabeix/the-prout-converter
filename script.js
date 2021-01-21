// 1 Prout = 1,85 × 10^5 eV

function proutConverter(valNum) {
    document.getElementById("eV").value = valNum * 1.85 * Math.pow(10, 5);
} 

function eVConverter(valNum) {
    document.getElementById("Prout").value = valNum / (1.85 * Math.pow(10, 5));
}
