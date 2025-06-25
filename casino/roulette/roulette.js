let guthabenCounter = document.getElementById("guthaben");
let redButton = document.getElementById("rotButton");
let greenButton = document.getElementById("grünButton");
let schwarzButton = document.getElementById("schwarzButton");
let picturesrc = document.getElementById("rouletteBild");
let Guthaben = parseFloat(localStorage.getItem("signal"));
let startButton = document.getElementById("start");
let error = document.getElementById("error");

let picture = ""
let rightColor = ""
let multiplier = 0

async function start(pressedButton){
    let bet = parseFloat(document.getElementById("bet").value);
    
    if (bet <= 0 || isNaN(bet)){
        error.textContent = "Ungültiger Einsatz!";
        return;
    } else if (bet > Guthaben) {
        error.textContent = "Nicht ausreichend Guthaben!";
        return;
    }
    let randomzahl = Math.floor(Math.random() * 37) + 1;
    pressedButton.disabled = true;
    

    Guthaben -= bet;
    localStorage.setItem("signal", Guthaben);
    guthabenCounter.textContent = user + ": " + Guthaben.toFixed(2).replace(".", ",") + "€";

    if (randomzahl <= 18){
        picture = "rot.png";
        multiplier = 2;
        rightColor = "rotButton";
    } else if (randomzahl >= 18 && randomzahl !== 37){
        picture = "schwarz.png";
        multiplier = 2;
        rightColor = "schwarzButton";
    } else if (randomzahl === 37){
        picture = "grün.png";
        multiplier = 37;
        rightColor = "grünButton";
    }
    
    for (let i = 0; i < 12; i++) {
            for (let val of ["rot.png", "schwarz.png", "grün.png"]) {
                picturesrc.src = "../roulette/pics/" + val
                await Sleep(0.07);
            }
    }

    picturesrc.src = "../roulette/pics/" + picture;

    if (pressedButton.id === rightColor){
        Guthaben += bet * multiplier;
        localStorage.setItem("signal", Guthaben);
        guthabenCounter.textContent = user + ": " + Guthaben.toFixed(2).replace(".", ",") + "€";
        
    }
    await Sleep(1)
    pressedButton.disabled = false;
}


    
    




function Sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
