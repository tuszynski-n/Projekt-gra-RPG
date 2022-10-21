function pokaz_div() {
    var panel = document.getElementById("panel-lewy")
    if(panel.style.display == "none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
}
function pokaz_okienko_budynku(budynek) {
    var okienko = document.getElementById("okienko")
    okienko.showModal()
    if(budynek == "Karczma") {
        document.getElementById("nazwa-budynku").innerHTML = "Karczma"
    }
    if(budynek == "Namiot") {
        document.getElementById("nazwa-budynku").innerHTML = "Namiot Szamana"
    }
    if(budynek == "Chatka") {
        document.getElementById("nazwa-budynku").innerHTML = "Chatka Znachora"
    }
    if(budynek == "Sklep") {
        document.getElementById("nazwa-budynku").innerHTML = "Sklep"
    }
    if(budynek == "Tablica") {
        document.getElementById("nazwa-budynku").innerHTML = "Tablica z zadaniami"
    }

    
    console.log(budynek)
}