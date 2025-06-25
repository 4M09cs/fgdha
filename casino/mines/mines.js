let Guthaben = parseFloat(localStorage.getItem("signal"));
let multiplierText = document.getElementById("multiplier");
let guthabenCounter = document.getElementById("guthaben");

let startwert = 0;
let moneyMultiplier = 0;
let looseChance = 0;
let win = 0;
let bet = 0;

function checkDiffBet() {
    const difficulty = document.getElementById("difficulty").value;
    bet = parseFloat(document.getElementById("bet").value);
    win = bet * 0.5;
    const mindesteinsatz = document.getElementById("mindesteinsatz");

    if (Guthaben >= bet) {
        if (bet >= 5) {
            switch (difficulty) {
                case "Einfach":
                    moneyMultiplier = 1.25;
                    looseChance = 70;
                    break;
                case "Mittel":
                    moneyMultiplier = 1.5;
                    looseChance = 45;
                    break;
                case "Schwer":
                    moneyMultiplier = 1.75;
                    looseChance = 25;
                    break;
            }

            document.getElementById("gallery-box").removeAttribute("hidden");
            document.getElementById("game-box").setAttribute("hidden", true);
            document.getElementById("cashout").removeAttribute("hidden");

            Guthaben -= bet;
            localStorage.setItem("signal", Guthaben);
            guthabenCounter.textContent = user + ": " + Guthaben.toFixed(2).replace(".", ",") + "€";
        } else {
            mindesteinsatz.textContent = "Der Mindesteinsatz beträgt mindestens 5€!";
            mindesteinsatz.style.color = "red";
        }
    } else {
        mindesteinsatz.textContent = "Nicht ausreichendes Guthaben!";
        mindesteinsatz.style.color = "red";
    }
}

function game(clickedImg) {
    const zufall = Math.floor(Math.random() * 100) + 1;
    clickedImg.onclick = null;
    const liveWin = document.getElementById("liveWin");

    if (zufall > looseChance) {
        clickedImg.src = "../mines/pics/no2.png";
        document.getElementById("play-again").removeAttribute("hidden");
        document.querySelectorAll(".grid-container img").forEach(img => img.onclick = null);
        document.getElementById("moneyLost").textContent = `Geld verloren: ${bet}€`;
        document.getElementById("cashout").setAttribute("hidden", true);
        guthabenCounter.textContent = user + ": " + Guthaben.toFixed(2).replace(".", ",") + "€";
        localStorage.setItem("signal", Guthaben);
    } else {
        clickedImg.src = "../mines/pics/yes2.jpg";
        win *= moneyMultiplier;
        liveWin.textContent = `Win: ${win.toFixed(2).replace(".", ",")}€`;
    }
}

function cashout() {
    document.getElementById("play-again").removeAttribute("hidden");
    document.getElementById("losthead").textContent = "Cashout!";
    document.querySelectorAll(".grid-container img").forEach(img => img.onclick = null);
    document.getElementById("moneyLost").textContent = `Geld gewonnen: ${win.toFixed(2).replace(".", ",")}€`;
    Guthaben += win;
    localStorage.setItem("signal", Guthaben);
    document.getElementById("cashout").setAttribute("hidden", true);
    guthabenCounter.textContent = user + ": " + Guthaben.toFixed(2).replace(".", ",") + "€";
}

function multiplierChange() {
    const difficulty = document.getElementById("difficulty").value;
    let value = "1.25x";

    switch (difficulty) {
        case "Mittel":
            value = "1.5x";
            break;
        case "Schwer":
            value = "1.75x";
            break;
    }

    multiplierText.textContent = value;
}

function playAgain() {
    location.reload();
}

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        checkDiffBet();
    }
});
