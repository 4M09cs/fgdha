let user = localStorage.getItem("user")
let guthabenCount = document.getElementById("guthaben");
let guthaben = parseFloat(localStorage.getItem("signal"));
let logoutButton = document.getElementById("Logout")
let dateiname = window.location.pathname.split("/").pop();

function GuthabenChange(){
  if (user === null){
    guthabenCount.textContent = "Login";
    document.getElementById("guthaben").setAttribute("onclick", "window.location.href='../../index.html'");
    
  } else {
    document.getElementById("Logout").removeAttribute("hidden");
    guthabenCount.textContent = user + ": " + guthaben.toFixed(2).replace(".", ",") + "€"
  }
  
}
window.onload = GuthabenChange;

function logout(){
  if (dateiname === "guthaben.html"){
    localStorage.clear()
    location.reload();
    window.location.href = "../login/login.html";
} else{
    guthabenCount.textContent = "Login";
    document.getElementById("guthaben").setAttribute("onclick", "window.location.href='../../index.html'");
    document.getElementById("Logout").getAttribute("hidden")
    localStorage.clear()
    location.reload();
}
}
