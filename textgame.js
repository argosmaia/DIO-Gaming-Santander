let nomeHeroi = prompt("Digite o nome do herói:");
let xpHeroi = parseInt(prompt("Digite a quantidade de experiência do herói:"));

let ferro = xpHeroi <= 1000;
let bronze = xpHeroi > 1000 && xpHeroi <= 2000;
let prataOuro = xpHeroi > 2000 && xpHeroi <= 5000;
let platinaDiamante = xpHeroi > 5000 && xpHeroi <= 8000;
let ascendente = xpHeroi > 8000 && xpHeroi <= 9000;
let imortal = xpHeroi > 9000 && xpHeroi <= 10000;
let radiante = xpHeroi >= 10001;

// Determinar o nível do herói com base nas variáveis
let nivelHeroi = "";
if (ferro) {
    nivelHeroi = "ferro";
} else if (bronze) {
    nivelHeroi = "bronze";
} else if (prataOuro) {
    nivelHeroi = "prata ouro";
} else if (platinaDiamante) {
    nivelHeroi = "platina diamante";
} else if (ascendente) {
    nivelHeroi = "ascendente";
} else if (imortal) {
    nivelHeroi = "imortal";
} else if (radiante) {
    nivelHeroi = "radiante";
}

// Exibir o resultado
console.log(`O Herói de nome ${nomeHeroi} está no nível ${nivelHeroi}.`);
