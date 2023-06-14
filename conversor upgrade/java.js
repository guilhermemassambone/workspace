const buttonConvert = document.querySelector(".button-convert")
const moedaOrigem = document.querySelector(".moedaorigem")
const moedaFinal = document.querySelector(".moedafinal")
const moedaspara = document.querySelector(".moedaspara")
const moedasde = document.querySelector(".moedasde")
const flagfinal = document.querySelector(".flagfinal")
const flagorigem = document.querySelector(".flagorigem")
const textMoedaFinal = document.querySelector(".textmoedafinal")
const textMoedaOrigem = document.querySelector(".textmoedaorigem")
buttonConvert.addEventListener("click", convert)
moedaspara.addEventListener("change", changeSettingsPara)
moedasde.addEventListener("change", changeSettingsDe)

const dolarToday = 4.90
const euroToday = 5.80
const libraToday = 6.20

function convert(){
    const valorInput = document.querySelector(".valorDoInput").value

    if(moedaspara.value == "dolar"){
        moedaOrigem.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"    
        }).format(valorInput)
        moedaFinal.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"    
        }).format(valorInput / dolarToday)
    }

    if(moedaspara.value == "euro"){
        moedaOrigem.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"    
        }).format(valorInput)
        moedaFinal.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"    
        }).format(valorInput / euroToday)
    }

    if(moedaspara.value == "libra"){
        moedaOrigem.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"    
        }).format(valorInput)
        moedaFinal.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"    
        }).format(valorInput / libraToday)
    }
    
    
}

function changeSettingsPara(){
    if(moedaspara.value == "dolar"){
        flagfinal.src = "./assets/usa.png"
        textMoedaFinal.innerHTML = "Dólar Americano"
        convert()
    }

    if(moedaspara.value == "euro"){
        flagfinal.src = "./assets/euro.png"
        textMoedaFinal.innerHTML = "Euro"
        convert()
    }

    if(moedaspara.value == "libra"){
        flagfinal.src = "./assets/libra.png"
        textMoedaFinal.innerHTML = "Libra"
        convert()
    }

    if(moedaspara.value == "real"){
        flagfinal.src = "./assets/brasil.png"
        textMoedaFinal.innerHTML = "Real"
    }

}

function changeSettingsDe(){
    if(moedasde.value == "dolarde"){
        flagorigem.src = "./assets/usa.png"
        textMoedaOrigem.innerHTML = "Dólar Americano"
        convert()
    }

    if(moedasde.value == "eurode"){
        flagorigem.src = "./assets/euro.png"
        textMoedaOrigem.innerHTML = "Euro"
        convert()
    }

    if(moedasde.value == "librade"){
        flagorigem.src = "./assets/libra.png"
        textMoedaOrigem.innerHTML = "Libra"
        convert()
    }

    if(moedasde.value == "realde"){
        flagorigem.src = "./assets/brasil.png"
        textMoedaOrigem.innerHTML = "Real"
    }

}