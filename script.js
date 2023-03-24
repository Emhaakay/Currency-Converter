const apiKey =  'cd311ab4500e4bc145caa97d'
let button = document.querySelector(".currencyinputbut")
let input = document.getElementById("youri")
var span = document.getElementById("resultee")

button.addEventListener('click', convertCurrency)

function convertCurrency(){
    const amount = document.querySelector(".currencyinput").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    


    const myLink = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`;


    fetch(myLink)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        const convertedAmount = data.conversion_result.toFixed(3); 
        document.getElementById('resultee').innerHTML = ` ${convertedAmount} ${to}`;
    })
    .catch(err=>console.log(err))

    
}



let butto = document.getElementById("popinfobut")
let pop = document.getElementById("popinfo")

butto.addEventListener('click', ()=>{
    pop.style.display= "none"
})


let helpp = document.getElementById("help")
helpp.addEventListener('click', ()=>{
    pop.style.display= "block"
})

let clear = document.querySelector(".clearbut")

clear.addEventListener('click', () => {
   input.value = ""
    span.innerHTML = ""
})




