const boton = document.getElementById("btn")


boton.addEventListener("click", () => {
    alert("click en el botón")
})

//He usado .on("click, function()") porque .click esta deprecated
$(() => {
    $("#jquery").on("click", () => {
        console.log("Hola, estoy utilizando jQuery")
    })
})