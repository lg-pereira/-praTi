/* Variáveis Globais */
const prompt = require('prompt-sync')();
let program;
console.log("Bem vindo, aqui estão os 50 algoritmos criados para o Teste 2 do módulo 1.");

do {
    program = parseInt(prompt("Digite entre 1 e 50 para abrir um algoritmo, ou 404 para sair: "));

    switch(program){
        case 1:
            console.log("Esse algoritmo irá calcular a redução do tempo de vida de um fumante." );
            let cig_day = parseInt(prompt("Informe quantos cigarros consome por dia: "));
            let cig_year = parseInt(prompt("Informe há quantos anos você fuma: "));
            let days_lost = Math.round((cig_day*cig_year*365*10)/(60*24));
            console.log(`Você perderá ${days_lost} dias de vida.`);

        case 2:
            console.log("O programa irá informar se você foi multado e o valor de uma multa.");
            let speed = parseInt(prompt("Digite a velocidade do carro: "));
            let fine = speed > 80 ? `Sua multa é de R$ ${(speed-80)*5}` : "Parabéns por ser um bom condutor!";
            console.log(fine);

        case 3:
            console.log("Este algoritmo calculará o valor da viagem de acordo com a distância a ser percorrida.");
            let distance = parseFloat(prompt("Informe a distância de sua viagem em KM: "));
            let ticket = distance <= 200 ? 0.5 * distance : 0.45 * distance;
            console.log(`O valor da sua viagem é de R$ ${ticket.toFixed(2)}`);
        
        case 4:
            console.log("Esse algoritmo vai ler o tamanho de três segmentos de reta e dizer se é possível formar um triângulo.");
            let line01 = parseInt(prompt("Informe o valor da linha 1: "));
            let line02 = parseInt(prompt("Informe o valor da linha 2: "));
            let line03 = parseInt(prompt("Informe o valor da linha 3: "));
            console.log(Make_triangle (line01,line02,line03));
        
        case 5:
            console.log("Vamos jogar JoKenPo!");
            JoKenPo();

    }

} while (program !== 404);

function Make_triangle (...array){
    for (let i = 0; i <=3; i++){
        let c1 = array[0];
        if (c1 > array[1]+array[2]){
            return `Não é possível formar um triângulo`
        } else {
            array[0] = array[1];
            array[1] = array[2];
            array[2] = c1;
        }
    }
    return `É possível formar um triângulo`
}

function JoKenPo () {
    console.log("Seja bem vindo ao nosso game 'JoKenPo'");
    
    const Player = {
        name: "",
        score: 0,
        play: () => {
                return prompt(`${Player.name} faça sua jogada! Digite 'pedra', 'papel' ou 'tesoura': `).toLowerCase();
        },
        replay: () => {
            return prompt(`${Player.name}, gostaria de jogar novamente? (S/N) `).toUpperCase();
        }
    }
    
    const Bot = {
        name: "Jack Pô",
        score: 0,
        play: function () {
            const plays_p = ["pedra","papel","tesoura"];
            let random_p = Math.floor(Math.random()*3)
            return plays_p[random_p]
        }
    }

    const Game =  [
        {play: "pedra",     pedra:"Empate", papel:false,    tesoura:true},
        {play: "papel",     pedra: true,    papel:"Empate", tesoura:false}, 
        {play: "tesoura",   pedra: false,   papel:true,     tesoura:"Empate"},
        {score: function () {
            console.log(`O placar está: ${Player.name} ${Player.score} x ${Bot.score} ${Bot.name} \n `)
        }}    
    ]
    
    Player.name = prompt("Digite seu nome: ");
    console.log(`Você está jogando contra o Bot ${Bot.name}. \n`);
    
    do {
        let play1 = Player.play();
        let play2 = Bot.play();
        if (play1 === "pedra" || play1 === "papel" || play1 === "tesoura") {
            for (line of Game) {
                if (line.play === play1) {
                    if (line[play2] === true ){
                        console.log(`Você ganhou, ${Bot.name} jogou ${play2}`)
                        Player.score++
                    } else if (line[play2] === false){
                        console.log(`Você perdeu, ${Bot.name} jogou ${play2}`)
                        Bot.score++
                    } else {
                        console.log(line[play2])
                    }
                } 
            }
        } else {
            console.log (`Jogada inválida.`)
        }    
        
        Game[3].score();

    } while (Player.replay() !== "N")
}
