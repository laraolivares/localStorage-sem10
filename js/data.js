const data = document.getElementById("data");

document.addEventListener("DOMContentLoaded", () => {
    data.innerHTML = localStorage.getItem('datos')})