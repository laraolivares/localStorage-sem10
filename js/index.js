const boton = document.getElementById("buttonText");
const textoDatos = document.getElementById("inputText");

boton.addEventListener("click", () => {
    localStorage.setItem('datos', textoDatos.value.trim()) } );