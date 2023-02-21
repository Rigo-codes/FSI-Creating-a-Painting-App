

let bluePallete = document.querySelector("#blue")
bluePallete.addEventListener("click", function () {
    selectedColor = 'blue'

})

let redPallete = document.querySelector("#red")
redPallete.addEventListener("click", function () {
    selectedColor = 'red'

})

let yellowPallete = document.querySelector("#yellow")
yellowPallete.addEventListener("click", function () {
    selectedColor = 'yellow'

})

let greenPallete = document.querySelector("#green")
greenPallete.addEventListener("click", function () {
    selectedColor = 'green'

})

let painting = document.querySelector(".painting")
painting.addEventListener("click", function (e) {
    console.log(e.target)
    e.target.style.backgroundColor = selectedColor
})