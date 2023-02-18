let button = document.querySelector(".currencyinputbut")
let input = document.getElementById("youri")
var span = document.getElementById("resultee")
let from = document.getElementById("from")
let to = document.getElementById("to")

button.addEventListener('click', () => {
    // var akay = input.value;
    // span.innerHTML = akay

    if (from.value === to.value) {
        var james = input.value
        span.innerHTML = james
    } else if (from.value === "NGN" && to.value === "USD") {
        var james = (input.value / 700)
        span.innerHTML = "$" + james
    } else if (to.value === "NGN" && from.value === "USD") {
        var james = (input.value * 700)
        span.innerHTML = "N" + james
    } else if (from.value === "NGN" && to.value === "EUR") {
        var james = (input.value * 250)
        span.innerHTML = "Eu" + james
    } else if (to.value === "NGN" && from.value === "EUR") {
        var james = (input.value / 250)
        span.innerHTML = "N" + james
    }else if(from.value==="USD"&& to.value==="EUR"){
        var james = (input.value*25)
        span.innerHTML = "Eu" + james
    }else if(to.value==="USD"&& from.value==="EUR"){
        var james =(input.value/25)
        span.innerHTML = "$" + james
    }

})


let clear = document.querySelector(".clearbut")

clear.addEventListener('click', ()=>{
    input.value = ""
    span.innerHTML = ""
})
