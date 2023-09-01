document.addEventListener("DOMContentLoaded", function() {

const evento = document.getElementById("elDiv")

evento.addEventListener("click", function(event) {
    if (event.target.matches("#alertas")){
        alert("Hola!")
    } else {
        alert("Hola! Soy el div")
    }  
})
});