function onSubClick() {
    const email = document.getElementById('inputData').value;
    localStorage.setItem("userEmail", email);
    window.location.href = "./msgPage.html";
}
