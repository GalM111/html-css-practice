let email = localStorage.getItem("userEmail");
document.getElementById("currentValue").textContent = email;

function onDislick() {
    window.location.href = "./index.html";
}