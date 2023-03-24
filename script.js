const apiKey =  'cd311ab4500e4bc145caa97d'
let button = document.querySelector(".currencyinputbut")  //This is the OK button
const amount = document.querySelector(".currencyinput")   //This is the input box
var span = document.getElementById("resultee")            //This is where the result will be shown





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
        span.innerHTML = ` ${convertedAmount} ${to}`;
    })
    .catch(err=>console.log(err))

    
}


/* WHEN I CLICK THE `OK` BUTTON */
button.addEventListener('click', convertCurrency)


/* WHEN I CLICK THE BANNER "X" BUTTON */
let butto = document.getElementById("popinfobut")
let pop = document.getElementById("popinfo")

butto.addEventListener('click', ()=>{
    pop.style.display= "none"
})



/* WHEN I CLICK THE HELP BUTTON */
let helpp = document.getElementById("help")
helpp.addEventListener('click', ()=>{
    pop.style.display= "block"
})

/* WHEN I CLICK THE CLEAR BUTTON */
let clear = document.querySelector(".clearbut")

clear.addEventListener('click', () => {
   amount.value = ""
    span.innerHTML = ""
   
})





