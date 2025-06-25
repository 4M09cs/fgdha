let start = document.getElementById("start");
let Guthaben = parseFloat(localStorage.getItem("signal"));
let guthabenCounter = document.getElementById("guthaben");
let moneyWin = document.getElementById("moneyWin");

let win = 0;
let playerValue = 0;
let bot1value = 0;
let bot2value = 0;
let bot3value = 0;

let picture1 = "";
let picture2 = "";
let picture3 = "";
let picture4 = "";

let picture1src = document.getElementById("player1");
let picture2src = document.getElementById("player2");
let picture3src = document.getElementById("player3");
let picture4src = document.getElementById("player4");

async function game() {
    if (Guthaben > 5) {
        wait();
        Guthaben -= 5;
        localStorage.setItem("signal", Guthaben);
        guthabenCounter.textContent = user + ": " + Guthaben.toFixed(2).replace(".", ",") + "€";

        function player() {
            let random = Math.floor(Math.random() * 100) + 1;
            if (random <= 30) {
                playerValue = 1;
                picture1 = "1.png";
            } else if (random <= 55) {
                playerValue = 5;
                picture1 = "5.png";
            } else if (random <= 70) {
                playerValue = 10;
                picture1 = "10.png";
            } else if (random <= 80) {
                playerValue = 20;
                picture1 = "20.png";
            } else if (random <= 88) {
                playerValue = 30;
                picture1 = "30.png";
            } else if (random <= 93) {
                playerValue = 40;
                picture1 = "40.png";
            } else if (random <= 97) {
                playerValue = 50;
                picture1 = "50.png";
            } else {
                playerValue = 100;
                picture1 = "100.png";
            }
        }

        function bot1() {
            let random = Math.floor(Math.random() * 100) + 1;
            if (random <= 30) {
                bot1value = 1;
                picture2 = "1.png";
            } else if (random <= 55) {
                bot1value = 5;
                picture2 = "5.png";
            } else if (random <= 70) {
                bot1value = 10;
                picture2 = "10.png";
            } else if (random <= 80) {
                bot1value = 20;
                picture2 = "20.png";
            } else if (random <= 88) {
                bot1value = 30;
                picture2 = "30.png";
            } else if (random <= 93) {
                bot1value = 40;
                picture2 = "40.png";
            } else if (random <= 97) {
                bot1value = 50;
                picture2 = "50.png";
            } else {
                bot1value = 100;
                picture2 = "100.png";
            }
        }

        function bot2() {
            let random = Math.floor(Math.random() * 100) + 1;
            if (random <= 30) {
                bot2value = 1;
                picture3 = "1.png";
            } else if (random <= 55) {
                bot2value = 5;
                picture3 = "5.png";
            } else if (random <= 70) {
                bot2value = 10;
                picture3 = "10.png";
            } else if (random <= 80) {
                bot2value = 20;
                picture3 = "20.png";
            } else if (random <= 88) {
                bot2value = 30;
                picture3 = "30.png";
            } else if (random <= 93) {
                bot2value = 40;
                picture3 = "40.png";
            } else if (random <= 97) {
                bot2value = 50;
                picture3 = "50.png";
            } else {
                bot2value = 100;
                picture3 = "100.png";
            }
        }

        function bot3() {
            let random = Math.floor(Math.random() * 100) + 1;
            if (random <= 30) {
                bot3value = 1;
                picture4 = "1.png";
            } else if (random <= 55) {
                bot3value = 5;
                picture4 = "5.png";
            } else if (random <= 70) {
                bot3value = 10;
                picture4 = "10.png";
            } else if (random <= 80) {
                bot3value = 20;
                picture4 = "20.png";
            } else if (random <= 88) {
                bot3value = 30;
                picture4 = "30.png";
            } else if (random <= 93) {
                bot3value = 40;
                picture4 = "40.png";
            } else if (random <= 97) {
                bot3value = 50;
                picture4 = "50.png";
            } else {
                bot3value = 100;
                picture4 = "100.png";
            }
        }

        player();
        bot1();
        bot2();
        bot3();

        for (let i = 0; i < 3; i++) {
            for (let val of ["1", "5", "10", "20", "30", "40", "50", "100"]) {
                picture1src.src = "../case/pics/" + val + ".png";
                picture2src.src = "../case/pics/" + val + ".png";
                picture3src.src = "../case/pics/" + val + ".png";
                picture4src.src = "../case/pics/" + val + ".png";
                await Sleep(0.07);
            }
        }

        picture1src.src = "../case/pics/" + picture1;
        picture2src.src = "../case/pics/" + picture2;
        picture3src.src = "../case/pics/" + picture3;
        picture4src.src = "../case/pics/" + picture4;

        if (playerValue > bot1value && playerValue > bot2value && playerValue > bot3value) {
            win = playerValue + bot1value + bot2value + bot3value;
            Guthaben += win;
            moneyWin.textContent = "Geld gewonnen: " + win + "€";
            localStorage.setItem("signal", Guthaben);
            guthabenCounter.textContent = user + ": " + Guthaben.toFixed(2).replace(".", ",") + "€";
        } else {
            moneyWin.textContent = "";
        }
    } else {
        error.textContent = "Nicht genügend Guthaben!"
        error.style.color = "red"
    }
    
}

async function wait() {
    start.onclick = null;
    await Sleep(3);
    start.onclick = game;
}

function Sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

start.onclick = game;
