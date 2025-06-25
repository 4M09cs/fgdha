let multiplierCounter = document.getElementById("multiplier")
let multiplierIndicator = 0
let multiplierTrans = 0.3
let Limit = 0
let bet = 0
let aussteigen = document.getElementById("aussteigen")
let betStopped_indicator = false
let win_indicator = document.getElementById("win_indicator")
let Guthaben = parseFloat(localStorage.getItem("signal"));
let guthabenCounter = document.getElementById("guthaben");

function betStopper(outButton){
    outButton.onclick = null
    betStopped_indicator = true
    let win = bet * multiplierIndicator
    win_indicator.textContent = "Gewonnen: " + win.toFixed(2).replace(".", ",") + "€"
    Guthaben += win
    localStorage.setItem("signal", Guthaben);
    guthabenCounter.textContent = user + ": " + Guthaben.toFixed(2).replace(".", ",") + "€";
}

function limitSetter(betbutton){
    bet = parseFloat(document.getElementById("bet").value)

    if (isNaN(bet) || bet <= 0) {
        document.getElementById("unsufficiantFund").textContent = "Ungültiger Einsatz!"
        return;
    }

    if (Guthaben >= bet) {
        let zufall1 = Math.random();
        let zufall2 = Math.random();           
        let zufall3 = Math.random();
        let gewichtet = zufall1 * zufall2 * zufall3;   
        Limit  = Number((gewichtet * 100).toFixed(2));
        betbutton.onclick = null
        Guthaben -= bet
        guthabenCounter.textContent = user + ": " + Guthaben.toFixed(2).replace(".", ",") + "€";
        localStorage.setItem("signal", Guthaben);
        crashCounter();
    } else {
        document.getElementById("unsufficiantFund").textContent = "Nicht ausreichend Guthaben!"
        document.getElementById("unsufficiantFund").removeAttribute("hidden")
    }
}

async function crashCounter() {
    if (multiplierTrans > 0.01){
        multiplierTrans -= 0.01;
    }
    if (multiplierIndicator < Limit){
        multiplierIndicator += 0.01
        multiplier.textContent = multiplierIndicator.toFixed(2)
        await Sleep(multiplierTrans)
        crashCounter()
    } else if (betStopped_indicator === false) {
        let multiplierDiv = document.getElementById("multiplierDiv");
        multiplierDiv.style.borderColor = "red";
        win_indicator.textContent = "Verloren: " + bet.toFixed(2).replace(".", ",") + "€";
        win_indicator.style.color = "red";
        aussteigen.onclick = null;
    }
}

function Sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
