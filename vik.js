function starterup() {
    numberofDice = 0;
    numberofRolls = 0;

    freqret = document.getElementById("frtrele");
    frtrele = 0;

    meanret = document.getElementById("gtrag");
    gtrag = 0;

    medret = document.getElementById("mgrfsf");
    mgrfsf = 0;

    modret = document.getElementById("ghjfj");
    ghjfj = 0;

    doubleret = document.getElementById("ghddjgj");
    ghddjgj = 0;

    triplerett = document.getElementById("gdhsnfhvjf");
    gdhsnfhvjf = 0;

    therray = [];
}

function setthediceandroll() {
    therray = [];
    numberofDice = parseInt(document.querySelector('input[name="numberofDice"]:checked').value);
    numberofRolls = parseInt(document.getElementById('numberofRolls').value);
}

function roller() {
    setthediceandroll();
    totalRollnums = numberofDice * numberofRolls;
    for (var j = 0; j < totalRollnums; j++) {
        therray[j] = getRandomInteger(1, 6);
    }
    console.log("Congrats on the successful role");
    FreqCalc();
    doublecount();
    triplecount();
    MeanCalc();
    MedCalc();
    Modecalc();
    displayresults();
}

function FreqCalc() {
    if (numberofDice === 1) frtrele = getRandomInteger(1, 6);
    else if (numberofDice === 2) frtrele = getRandomInteger(2, 12);
    else frtrele = getRandomInteger(3, 18);
}

function MedCalc() {
    therray.sort();
    if (therray.length % 2 === 0) {
        middleSum = therray[therray.length / 2] + therray[therray.length / 2 + 1];
        mgrfsf = Math.round((middleSum / 2.0) * 10) / 10;
    }
    else {
        mgrfsf = therray[Math.round(therray.length / 2)];
    }
}

function MeanCalc() {
    Totalval = 0.0;
    for (var i = 0; i < therray.length; i++) {
        Totalval += therray[i];
    }
    gtrag = Math.round((Totalval / therray.length) * 100) / 100;
}



function doublecount() {
    if (numberofDice === 2 || numberofDice === 3) ghddjgj = getRandomInteger(1, numberofRolls - 2); 
    else ghddjgj = 0;
}

function Modecalc() {
    let module = [];
    let maximal = 0 
    let countervar = 0;
    for (let i = 0; i < therray.length; i++) {
        const item = therray[i];
        
        if (module[item]) {
            module[item]++;
        } else {
            module[item] = 1;
        }
        
        if (countervar < module[item]) {
            maximal = item;
            countervar = module[item];
        }
    }
    ghjfj = maximal;
}

function triplecount() {
    if (numberofDice === 3) gdhsnfhvjf = getRandomInteger(1, numberofRolls - 2);
    else gdhsnfhvjf = 0;
}

function getRandomInteger(lower, upper) {
    var multiplicated = upper - lower + 1;
    var rounder = parseInt(Math.random() * multiplicated) + lower;
    return rounder;
}

function displayresults() {
    freqret.innerHTML = frtrele;
    doubleret.innerHTML = mgrfsf;
    triplerett.innerHTML = gdhsnfhvjf;
    meanret.innerHTML = gtrag;
    medret.innerHTML = mgrfsf;
    modret.innerHTML = ghjfj;
}