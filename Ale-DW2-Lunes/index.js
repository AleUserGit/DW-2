const precios = {
    "BMW": 100,
    "Samsung": 300,
    "Heladera": 500,
    "Fiat": 700,
    "Lavarropas": 200
};

let cantidadBMW = prompt("¿Cuántos BMW X2 deseas comprar?", "0");
let cantidadSamsung = prompt("¿Cuántos Samsung S23 Ultra deseas comprar?", "0");
let cantidadHeladera = prompt("¿Cuántas Heladeras LG deseas comprar?", "0");
let cantidadFiat = prompt("¿Cuántos Fiat Cronos deseas comprar?", "0");
let cantidadLavarropas = prompt("¿Cuántos Lavarropas deseas comprar?", "0");


let total = (cantidadBMW * precios["BMW"]) +
            (cantidadSamsung * precios["Samsung"]) +
            (cantidadHeladera * precios["Heladera"]) +
            (cantidadFiat * precios["Fiat"]) +
            (cantidadLavarropas * precios["Lavarropas"]);

alert("El valor total de tu compra es: $" + total);

console.log("Valor total de la compra: $" + total);

