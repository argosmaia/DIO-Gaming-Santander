function calcularNivel() {
    var vit = parseInt(prompt("Digite a quantidade de vitórias:"));
    var der = parseInt(prompt("Digite a quantidade de derrotas:"));
    var saldo = vitorias - derrotas;
    var nivel;
  
    if (vit < 10) {
        nivel = "Ferro";
    } else if (vit >= 10 && vit <= 20) {
        nivel = "Bronze";
    } else if (vit >= 21 && vit <= 50) {
        nivel = "Prata";
    } else if (vit >= 51 && vit <= 80) {
        nivel = "Ouro";
    } else if (vit >= 81 && vit <= 90) {
        nivel = "Diamante";
    } else if (vit >= 91 && vit <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
  
    return "O Herói tem um saldo de " + saldo + " está no nível de " + nivel;
}

alert(calcularNivel());
