const pontuacao = 1000;

if (pontuacao >= 1000) {
    console.log("Você é um jogador de alto nível!");
} else if (pontuacao >= 500) {
    console.log("Você é um jogador intermediário!");
} else {
    console.log("Você é um jogador iniciante!");
}

const pontos = 1000;
// (condicao) ? valorSeVerdadeiro : valorSeFalso
const nivel = pontos >= 1000 ? "alto" : pontos >= 500 ? "intermediário" : "iniciante";
console.log(`Você é um jogador de nível ${nivel}!`);