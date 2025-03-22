const rezepte = {
    american_style: { mehl: 128.27, wasser: 79.53, hefe: 0.27, salz: 1.93, oel: 0, zucker:0 },
    ny_style: { mehl: 154.0, wasser: 86.3, hefe: 0.2, salz: 2.7, oel: 10.8, zucker:6.2 },
    
};

function berechneZutaten() {
    const anzahl = document.getElementById('anzahl').value;
    const rezept = document.getElementById('rezept').value;
    const zutaten = rezepte[rezept];

    const mehl = zutaten.mehl * anzahl;
    const wasser = zutaten.wasser * anzahl;
    const hefe = zutaten.hefe * anzahl;
    const salz = zutaten.salz * anzahl;

    const zutatenText = `Für ${anzahl} Pizza(s) (${rezept}) benötigst du: 
    ${mehl}g Mehl, 
    ${wasser}ml Wasser, 
    ${hefe}g Hefe, 
    ${salz}g Salz.`;
    
    document.getElementById('zutaten').innerText = zutatenText;
}

function updateIngredients() {
    berechneZutaten();
}