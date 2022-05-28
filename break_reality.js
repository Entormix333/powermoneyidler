let output = "";
let translated = 0;
let tpc = 1;
let view = 0;

// spend from this math formula.
// Plus: 6+2 = 8
// Mulitipler: 3*4 = 12
// Two Of Power: 2^11 = 2048
// Power: 10^23 = e23
// Power Power of Two: 10^2^10 = e1024
// Power Power: 10^10^19 = (e^2)19
// Power Power Power: 10^10^10^27 = (e^3)27
// Tertate: 10^^16 = (e^16)10
// Tertate Of Set = (10^^21)^66 = (e^22)66
// Tertatre Power = 10^^10^399 = (e^e399)10
// Divide = 10 / 5 = 2
// Sqrt = sqrt(16384) = 128

function Plus(plus, plus2) {
    output = plus + plus2;
    if (plus > 1e21) {
        output = "e" + Math.log10(plus)
    }
}

function Mulit(mulit, mulit2) {
    output = mulit * mulit2
    if (mulit > 1e21) {
        output = "e" + Math.log10(mulit2)
    }
}

function TwoPower(pow) {
    output = 2 ** pow
}

function Power(pow2) {
    output = 10 ** pow2
    if (pow2 > 21) {
        output = "e" + pow2
    }
}

function PowerOfPowerTwo(pow3) {
    output = "e" + 2 ** pow3
}

function PowerOfPower(pow4) {
    output = "e" + 10 ** pow4
    if (pow4 > 21) {
        output = "(e^2)" + pow4
    }
}

function PowerOfPowerOfPower(pow5) {
    output = "(e^2)" + 10 ** pow5
    if (pow5 > 21) {
        output = "(e^3)" + pow5
    }
}

function TertateSet(ter1, ter2) {
    output = "(e^" + ter1 + ")" + ter2
    if (ter1 > 1e21) {
        output = "(e^e" + Math.log10(ter1) + ")" + ter2
    }
}

function Tertate(tertate) {
    output = "(e^" + tertate + ")10"
    if (tertate > 1e21) {
        output = "(e^e" + Math.log10(tertate) + ")10"
    }
}

function TertatePower(tertatepow) {
    output = "(e^e" + tertatepow + ")10"
}

function Divide(a, b) {
    output = a / b
}

function Sqrt(sqrt) {
    output = Math.sqrt(sqrt)
}

document.getElementById('click').onclick = () => {
    translated = translated + tpc;
    Power(translated);
    document.getElementById('powermoney').innerText = "You Have " + output + " Powermoney."
    document.getElementById('powmoneypowerpower').innerText = "You Have Approx 10^10^" + Math.log10(translated) + " Powermoney."
}

document.getElementById('cost1').onclick = () => {
    if (translated > 100) {
        translated = translated - 100;
        tpc = tpc + 1;
    }
}