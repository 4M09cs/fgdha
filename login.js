// Admin Data //
// AndreasStavenhagen Andreas123 //

const benutzername_input = document.getElementById("usernameInput");
const password_input = document.getElementById("passwordInput");

const users = {
    "AndreasStavenhagen": {
        "name": "AndreasStavenhagen",
        "password": "Andreas123",
        "Geld": 100
    }
};


function autoLog(){
    if (localStorage.getItem("user") === null){
        return
    } else
        window.location.href = "/casino/home/home.html";
}



function check(){
    let username_input_value = document.getElementById("username-input").value;
    let password_input_value = document.getElementById("password-input").value;


    if (username_input_value === users.AndreasStavenhagen.name && password_input_value === users.AndreasStavenhagen.password) {
        
        localStorage.clear()   
        localStorage.setItem("user", users.AndreasStavenhagen.name)                   
        localStorage.setItem("signal", users.AndreasStavenhagen.Geld);
        window.location.href = "/casino/home/home.html";
       
       
       
    } else {
        benutzername_input.style.backgroundColor = "red";
        password_input.style.backgroundColor = "red";
        let error = document.getElementById("error");
        error.style.color = "red";
        error.textContent = "Benutzername oder Passwort falsch!";
        document.getElementById("password-input").value = "";
    }

}

document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        check();
    }
})

window.onload = autoLog();