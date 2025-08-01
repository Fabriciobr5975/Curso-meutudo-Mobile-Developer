import prompt from "prompt-sync";

const ler = prompt();

// Vetor de objetos com todos os personagens jogaveis personagens
const players = [{
    id: 1,
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0,
}, {
    id: 2,
    nome: "Peach",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2,
    pontos: 0,
}, {
    id: 3,
    nome: "Yoshi",
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3,
    pontos: 0,
}, {
    id: 4,
    nome: "Bowser",
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0,
}, {
    id: 5,
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0,
}, {
    id: 6,
    nome: "Donkey Kong",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0,
}];

// Personagens jogaveis
const player1 = {
    nome: "",
    velocidade: 0,
    manobrabilidade: 0,
    poder: 0,
    pontos: 0,
};

const player2 = {
    nome: "",
    velocidade: 0,
    manobrabilidade: 0,
    poder: 0,
    pontos: 0,
};

/**
 * Função para escolher os jogadores, a partir da entrada do usuário via console. Ela solicita que o primeiro
 * jogador escolha um personagem, e depois o segundo jogador escolha outro personagem
 */
async function choosePlayer() {
    try {
        console.log(`Player1: Digite o id do personagem que deseja jogar ${players.map((item) => `\nid: ${item.id} - nome: ${item.nome}`)}`);
        let idPlayer1 = Number(ler());

        while (idPlayer1 < 0 || idPlayer1 >= players.length) {
            console.log("Player1: Esse personagem não existe, por favor digite novamente!");
            idPlayer1 = Number(ler());
        }

        console.log("-------------------------------\n");

        console.log(`Player2: Digite o id do personagem que deseja jogar ${players.map((item) => `\nid: ${item.id} - nome: ${item.nome}`)}`);
        let idPlayer2 = Number(ler());

        while (idPlayer2 < 0 || idPlayer2 >= players.length || idPlayer1 === idPlayer2) {
            console.log("Player2: Esse personagem não existe, ou já foi escolhid, por favor digite novamente!");
            idPlayer2 = Number(ler());
        }

        await playerBuild(player1, idPlayer1);
        await playerBuild(player2, idPlayer2);
    } catch (error) {
        console.error("Você não pode colocar um valor que não seja um number")
    }
}

/**
 * Função para construir um jogador a partir do id do personagem escolhido.
 * 
 * @param {Object} player O personagem escolhido pelo usuário, seja ele o primeiro ou o segundo
 * @param {number} idPlayer O id do personagem escolhido pelo usuário, que será usado para buscar as informações do personagem no vetor de jogadores
 */
async function playerBuild(player, idPlayer) {
    player.nome = players[idPlayer - 1].nome;
    player.velocidade = players[idPlayer - 1].velocidade;
    player.manobrabilidade = players[idPlayer - 1].manobrabilidade;
    player.poder = players[idPlayer - 1].poder;
}

/**
 * Função para rolar um dado de 6 lados, retornando um número aleatório entre 1 e 6.
 *
 * @returns {number} Um número aleatório entre 1 e 6.
 */
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

/**
 * Função para obter um bloco aleatório para a corrida, que pode ser "RETA", "CURVA" ou "CONFRONTO".
 *
 * @returns {string} O bloco aleatório escolhido.
 */
async function getRandomBlock() {
    let random = Math.random();
    let result = "";

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;

        case random < 0.66:
            result = "CURVA";
            break;

        default:
            result = "CONFRONTO"
    }

    return result;
}

/**
 * Função para registrar o resultado da rolagem do dado.
 *
 * @param {string} characterName Nome do personagem que rolou o dado
 * @param {string} block Tipo de bloco (RETA, CURVA, CONFRONTO)
 * @param {number} diceResult Resultado da rolagem do dado
 * @param {number} attribute Atributo do personagem utilizado na rolagem
 */
async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(
        `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`
    );
}

/**
 * Função que executa toda a lógica do jogo, gerenciando as rodadas da corrida entre dois personagens. Essa função é
 * responsável por sortear blocos, rolar dados, calcular resultados e determinar o vencedor da corrida.
 * 
 * @param {Object} character1 Primeiro personagem da corrida
 * @param {Object} character2 Segundo personagem da corrida
 */
async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        // Sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        // Rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // Teste de habilidade
        let totalTesteSkill1 = 0;
        let totalTesteSkill2 = 0;

        if (block === "RETA") {
            totalTesteSkill1 = diceResult1 + character1.velocidade;
            totalTesteSkill2 = diceResult2 + character2.velocidade;

            await logRollResult(
                character1.nome,
                "velocidade",
                diceResult1,
                character1.velocidade
            );

            await logRollResult(
                character2.nome,
                "velocidade",
                diceResult2,
                character2.velocidade
            );

        } else if (block === "CURVA") {
            totalTesteSkill1 = diceResult1 + character1.manobrabilidade;
            totalTesteSkill2 = diceResult2 + character2.manobrabilidade;

            await logRollResult(
                character1.nome,
                "manobrabilidade",
                diceResult1,
                character1.manobrabilidade
            );

            await logRollResult(
                character2.nome,
                "manobrabilidade",
                diceResult2,
                character2.manobrabilidade
            );

        } else {
            let powerResult1 = diceResult1 + character1.poder;
            let powerResult2 = diceResult2 + character2.poder;

            console.log(`${character1.nome} confrontou com ${character2.nome}! 🥊`);

            await logRollResult(
                character1.nome,
                "poder",
                diceResult1,
                character1.poder
            );

            await logRollResult(
                character2.nome,
                "poder",
                diceResult2,
                character2.poder
            );

            if (powerResult1 > powerResult2 && character2.pontos > 0) {
                console.log(`${character1.nome} venceu o confronto! ${character2.nome} perdeu 1 ponto 🐢`);
                character2.pontos--;
            }

            if (powerResult2 > powerResult1 && character1.pontos > 0) {
                console.log(`${character2.nome} venceu o confronto! ${character1.nome} perdeu 1 ponto 🐢`);
                character1.pontos--;
            }
        }

        // Verificando o vencedor
        if (totalTesteSkill1 > totalTesteSkill2) {
            console.log(`${character1.nome} marcou um ponto`);
            character1.pontos++;

        } else if (totalTesteSkill2 > totalTesteSkill1) {
            console.log(`${character2.nome} marcou um ponto`);
            character2.pontos++;
        }

        console.log("-------------------------------");
    }

    await declareWinner(character1, character2);
}

/**
 * Função que declara o vencedor da corrida com base nos pontos acumulados pelos personagens.
 * 
 * @param {Object} character1 Primeiro personagem da corrida
 * @param {Object} character2 Segundo personagem da corrida
 */
async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.nome}: ${character1.pontos}`);
    console.log(`${character2.nome}: ${character2.pontos}`);

    if (character1.pontos > character2.pontos)
        console.log(`\n${character1.nome}: venceu a corrida! Parabéns! 🏆`);

    else if (character2.pontos > character1.pontos)
        console.log(`\n${character2.nome}: venceu a corrida! Parabéns! 🏆`);

    else
        console.log(`\nA corrida terminou em empate!`);
}

/**
 * Função principal que inicia o jogo, chamando a função de escolha de jogadores e iniciando a corrida. 
 */
(async function main() {
    await choosePlayer();

    console.log(
        `🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} começando...\n`
    );

    await playRaceEngine(player1, player2);
})();