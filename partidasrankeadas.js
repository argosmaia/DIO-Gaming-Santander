function calcularNivel() {
    var vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
    var derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));
    var saldoVitorias = vitorias - derrotas;
    var nivel;
  
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
  
    return "O Herói tem um saldo de " + saldoVitorias + " está no nível de " + nivel;
}

alert(calcularNivel());