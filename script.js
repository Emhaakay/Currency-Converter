let button = document.querySelector(".currencyinputbut")
let input = document.getElementById("youri")
var span = document.getElementById("resultee")
let from = document.getElementById("from")
let to = document.getElementById("to")

button.addEventListener('click', () => {
    if (from.value === to.value) {
        var amount = input.value
        span.innerHTML = amount
    } else if (from.value === "NGN" && to.value === "USD") {
        var amount = (input.value / 700)
        span.innerHTML = "$" + amount
    } else if (to.value === "NGN" && from.value === "USD") {
        var amount = (input.value * 700)
        span.innerHTML = "N" + amount
    } else if (from.value === "NGN" && to.value === "EUR") {
        var amount = (input.value * 250)
        span.innerHTML = "Eu" + amount
    } else if (to.value === "NGN" && from.value === "EUR") {
        var amount = (input.value / 250)
        span.innerHTML = "N" + amount
    } else if (from.value === "USD" && to.value === "EUR") {
        var amount = (input.value * 25)
        span.innerHTML = "Eu" + amount
    } else if (to.value === "USD" && from.value === "EUR") {
        var amount = (input.value / 25)
        span.innerHTML = "$" + amount
    }

})


let clear = document.querySelector(".clearbut")

clear.addEventListener('click', () => {
    input.value = ""
    span.innerHTML = ""
})
