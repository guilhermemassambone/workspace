const convertButton = document.querySelector(".convert-button")
const optionsMoney = document.querySelector(".optionsMoney")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const real = document.querySelector(".real")
    const moedaExtran = document.querySelector(".moedaExtran")

    const dolarToday = 4.93
    const euroToday = 5.28

    if(optionsMoney.value == "dolar"){
        moedaExtran.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }

    if(optionsMoney.value == "euro"){
        moedaExtran.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }

    real.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function convertFlags(){
    const languageCurrency = document.querySelector(".languageCurrency")
    const imgFinal = document.querySelector(".logofinal")

    if (optionsMoney.value == "dolar"){
        languageCurrency.innerHTML = "Dolar Americano"
        imgFinal.src = "./assets/estados unidos.png"
    }

    if (optionsMoney.value == "euro"){
        languageCurrency.innerHTML = "Euro"
        imgFinal.src = "./assets/euro.png"
    }
    convertValues()
}

convertButton.addEventListener("click", convertValues)
optionsMoney.addEventListener("change", convertFlags)

