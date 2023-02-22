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
        var roundedAmount = Number(amount.toFixed(3))
        span.innerHTML = "$" + roundedAmount
    } else if (to.value === "NGN" && from.value === "USD") {
        var amount = (input.value * 700)
        var roundedAmount = Number(amount.toFixed(3))
        span.innerHTML = "N" + roundedAmount
    } else if (from.value === "NGN" && to.value === "EUR") {
        var amount = (input.value * 250)
        var roundedAmount = Number(amount.toFixed(3))
        span.innerHTML = "Eu" + roundedAmount
    } else if (to.value === "NGN" && from.value === "EUR") {
        var amount = (input.value / 250)
        var roundedAmount = Number(amount.toFixed(3))
        span.innerHTML = "N" + roundedAmount
    } else if (from.value === "USD" && to.value === "EUR") {
        var amount = (input.value * 25)
        var roundedAmount = Number(amount.toFixed(3))
        span.innerHTML = "Eu" + roundedAmount
    } else if (to.value === "USD" && from.value === "EUR") {
        var amount = (input.value / 25)
        var roundedAmount = Number(amount.toFixed(3))
        span.innerHTML = "$" + roundedAmount
    }

})


let clear = document.querySelector(".clearbut")

clear.addEventListener('click', () => {
    input.value = ""
    span.innerHTML = ""
})


let butto = document.getElementById("popinfobut")
let pop = document.getElementById("popinfo")

butto.addEventListener('click', ()=>{
    pop.style.display= "none"
})


let helpp = document.getElementById("help")
helpp.addEventListener('click', ()=>{
    pop.style.display= "block"
})
