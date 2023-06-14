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

const dolarToday = 4.85
const euroToday = 5.26
const libraToday = 6.16

function convert(){
    const valorInput = document.querySelector(".valorDoInput").value

    if(moedasde.value == "realde"){
        moedaOrigem.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"    
        }).format(valorInput)
        if(moedaspara.value == "dolar"){
            moedaFinal.innerHTML = new Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD"    
            }).format(valorInput / dolarToday)
        } else if(moedaspara.value == "euro"){
            moedaFinal.innerHTML = new Intl.NumberFormat("de-DE",{
                style: "currency",
                currency: "EUR"    
            }).format(valorInput / euroToday)
        } else if(moedaspara.value == "libra"){
            moedaFinal.innerHTML = new Intl.NumberFormat("en-UK",{
                style: "currency",
                currency: "GBP"    
            }).format(valorInput / libraToday)
        } else if(moedaspara.value == "real"){
            moedaFinal.innerHTML = new Intl.NumberFormat("pt-BR",{
                style: "currency",
                currency: "BLR"    
            }).format(valorInput)
        }
    }
    
    if(moedasde.value == "dolarde"){
        moedaOrigem.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"    
        }).format(valorInput)
        if(moedaspara.value == "real"){
            moedaFinal.innerHTML = new Intl.NumberFormat("pt-BR",{
                style: "currency",
                currency: "BLR"    
            }).format(valorInput * dolarToday)
        } else if(moedaspara.value == "euro"){
            moedaFinal.innerHTML = new Intl.NumberFormat("de-DE",{
                style: "currency",
                currency: "EUR"    
            }).format(valorInput * 0.92)
        } else if(moedaspara.value == "libra"){
            moedaFinal.innerHTML = new Intl.NumberFormat("en-UK",{
                style: "currency",
                currency: "GBP"    
            }).format(valorInput * 0.79)
        } else if(moedaspara.value == "dolar"){
            moedaFinal.innerHTML = new Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD"    
            }).format(valorInput)
        }
    }

    if(moedasde.value == "eurode"){
        moedaOrigem.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"    
        }).format(valorInput)
        if(moedaspara.value == "real"){
            moedaFinal.innerHTML = new Intl.NumberFormat("pt-BR",{
                style: "currency",
                currency: "BLR"    
            }).format(valorInput * euroToday)
        } else if(moedaspara.value == "dolar"){
            moedaFinal.innerHTML = new Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD"    
            }).format(valorInput * 1.08)
        } else if(moedaspara.value == "libra"){
            moedaFinal.innerHTML = new Intl.NumberFormat("en-UK",{
                style: "currency",
                currency: "GBP"    
            }).format(valorInput * 0.85)
        } else if(moedaspara.value == "euro"){
            moedaFinal.innerHTML = new Intl.NumberFormat("de-DE",{
                style: "currency",
                currency: "EUR"    
            }).format(valorInput)
        }
    }

    if(moedasde.value == "librade"){
        moedaOrigem.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"    
        }).format(valorInput)
        if(moedaspara.value == "real"){
            moedaFinal.innerHTML = new Intl.NumberFormat("pt-BR",{
                style: "currency",
                currency: "BLR"    
            }).format(valorInput * libraToday)
        } else if(moedaspara.value == "euro"){
            moedaFinal.innerHTML = new Intl.NumberFormat("de-DE",{
                style: "currency",
                currency: "EUR"    
            }).format(valorInput * 1.17)
        } else if(moedaspara.value == "dolar"){
            moedaFinal.innerHTML = new Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD"    
            }).format(valorInput * 1.27)
        } else if(moedaspara.value == "real"){
            moedaFinal.innerHTML = new Intl.NumberFormat("pt-BR",{
                style: "currency",
                currency: "BLR"    
            }).format(valorInput)
        } else if(moedaspara.value == "libra"){
            moedaFinal.innerHTML = new Intl.NumberFormat("en-UK",{
                style: "currency",
                currency: "GBP"    
            }).format(valorInput)
        }
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
        convert()
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