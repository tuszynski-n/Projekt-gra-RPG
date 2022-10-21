var hero = {
    "level": 1,
    "hp": 100,
    "pancerz":50,
    "stamina": 100,
    "mana": 100,
    "exp": 0,
    "srebrniki": 0,
    "stats": [
        { "name": "Siła", "value": 3, },
        { "name": "Kondycja", "value": 3 },
        { "name": "Czary", "value": 3},
        { "name": "Obrażenia od srebra", "value": 1},
        { "name": "Zbroja", "value": 1},
    ],
    "eq": [

        /*SIŁA*/

        { "name": "Łyżka", "stats": [
            { "name": "Siła", "value": 1 }
        ]},
        { "name": "Nożyk", "stats": [
            { "name": "Siła", "value": 2 }
        ]},
        { "name": "Młotek", "stats": [
            { "name": "Siła", "value": 3 }
        ]},
        { "name": "Sztylet", "stats": [
            { "name": "Siła", "value": 4 }
        ]},
        { "name": "Miecz", "stats": [
            { "name": "Siła", "value": 5 }
        ]},
        { "name": "Mikstura leczenia", "stats": [
            { "name": "hp", "value": +50 }
        ]},
        { "name": "Duża mikstura leczenia", "stats": [
            { "name": "hp", "value": +100 }
        ]},

        /*CZARY*/

        { "name": "Magiczna książka", "stats": [
            { "name": "Czary", "value": 1 }
        ]},
        { "name": "Różdżka", "stats": [
            { "name": "Czary", "value": 2 }
        ]},
        { "name": "Zaczarowana różdżka", "stats": [
            { "name": "Czary", "value": 3 }
        ]},
        { "name": "Tatuaż od Szamana", "stats": [
            { "name": "Czary", "value": 4 }
        ]},
        { "name": "Tatuaż od Szamana polany krwią", "stats": [
            { "name": "Czary", "value": 5 }
        ]},
        /*SREBRO*/

        { "name": "Srebrny łańcuszek", "stats": [
            { "name": "Obrażenia od srebra", "value": 1 }
        ]},
        { "name": "Posrebrzany sztylet", "stats": [
            { "name": "Obrażenia od srebra", "value": 2 }
        ]},
        { "name": "Zwykły srebrny miecz", "stats": [
            { "name": "Obrażenia od srebra", "value": 3 }
        ]},
        { "name": "Ulepszony srebrny miecz", "stats": [
            { "name": "Obrażenia od srebra", "value": 4 }
        ]},
        { "name": "Ulepszony srebrny miecz z olejem na potwory", "stats": [
            { "name": "Obrażenia od srebra", "value": 5 }
        ]},


        /*KONDYCJA*/

        { "name": "Pelerynka", "stats": [
            { "name": "Kondycja", "value": 1 }
        ]},
        { "name": "Skórzane buty", "stats": [
            { "name": "Kondycja", "value": 2 }
        ]},
        { "name": "Kute buty", "stats": [
            { "name": "Kondycja", "value": 3 }
        ]},

        /*ZBROJA*/

        { "name": "Skórzana tunika", "stats": [
            { "name": "Zbroja", "value": 1 }
        ]},
        { "name": "Metalowa tunika", "stats": [
            { "name": "Zbroja", "value": 2 }
        ]},
        { "name": "Pancerna tunika", "stats": [
            { "name": "Zbroja", "value": 3 }
        ]},


    ],




}

var env = {
 
    "ludzie": [

        { "name": "Karczmarz", "value": 0},
        { "name": "Szaman", "value": 0},
        { "name": "Znachor", "value": 0},
        { "name": "Sprzedawca", "value": 0},

    ],

    "budynki": [

        { "name": "Karczma", "value": 0},
        { "name": "Namiot szamana", "value": 0},
        { "name": "Chatka znachora", "value": 0},
        { "name": "Sklep", "value": 0},
        { "name": "Tablica z zadaniami", "value": 0},

    ],

    "Obrażenia": [
        { "name": "Łyżka", "value": 5},
        { "name": "Nożyk", "value": 8},
        { "name": "Młotek", "value": 15},
        { "name": "Sztylet", "value": 25},
        { "name": "Miecz", "value": 50},
    ],

    "Wyposażenie": [
        { "name": "Karczma", "stats": [
            { "name": "Piwo", "value": 0 }
        ]},
        { "name": "Karczma", "stats": [
            { "name": "Stek", "value": 0 }
        ]},
        { "name": "Karczma", "stats": [
            { "name": "Schabowy", "value": 0 }
        ]},
        { "name": "Karczma", "stats": [
            { "name": "zupa", "value": 0 },
        ]},
    ]
},