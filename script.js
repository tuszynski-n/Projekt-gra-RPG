var HERO = JSON.stringify(hero);
var HERO_JSON = JSON.parse(HERO);




let nazwa = prompt("Podaj nazwę bohatera");

HERO_JSON.nazwa = nazwa;

var zapisane_dane = localStorage.getItem("villageLocalStorage")

if (zapisane_dane != undefined){
    var odczytane_dane = zapisane_dane;
} else{
    var HERO = JSON.stringify(hero);
}




localStorage.setItem("heroLocalStorage", HERO);
var zapisane_dane = localStorage.getItem("heroLocalStorage");


console.log(HERO);
console.log(HERO_JSON);
//console.log(zapisane_dane.nazwa)




//console.log(HERO_JSON);



// #ALGORYTM GRY
//
// 0. SPRAWDZ CZY W PAMIECI PRZEGLADARKI  (localStorage)
//    ISTNIEJA JUZ ZAPISANE DANE 
//
//    if(localStorage.getItem("nazwaNaszychDanych") != undefined){
//      JEZELI FUNKCJA WARUNKOWA JEST ROWNA 'TRUE' TO ZNACZY
//      ZE W PAMIECI PRZEGLADARKI SA JUZ TAKIE DANE
//
//      TERAZ NALEZY DANE TE POBRAC I WYPELNIC NIMI GRE
//  } else{
//       JEZELI FUNKCJA WARUNKOWA JEST ROWNA 'FALSE' TO ZNACZY
//       ZE TAKIE DANE NIE ISTNIEJA W PAMIECI PRZEGLADARKI
//
//       TERAZ NALEZY UTWORZYC TE DANE
//
//}
//
//
//
// 
//
// I. GRACZ UZUPELNIA PUSTE POLA (PRZY POMOCY OBIEKTU JAVASCRIPT)
// np. var nazwa = prompt("Podaj nazwę bohatera");
//     village.name = nazwa
//
//
// II. GAMEPLAY
//
//
//
// III. ZAPISZ DANE GRY
//      Najpierw uzywa metody JSON.strinfify(NASZ_OBIEKT_JS)
//      aby zmienic dane obiektu na tekst     
//
//      var village = JSON.stringify(NASZ_OBIEKT_JS)
//  
//      Następnie zapiszemy nasz tekst w pamięci przeglądarki
//
//      localStorage.setItem

//
//
//
//
//
//