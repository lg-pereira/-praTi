/* Variáveis Globais */
const prompt = require('prompt-sync')();
let program;
console.log("Bem vindo, aqui estão os 50 algoritmos criados para o Teste 2 do módulo 1.");

do {
    program = parseInt(prompt("Digite entre 1 e 50 para abrir um algoritmo, ou 404 para sair: "));

    switch(program){
        case 1:
            console.log("Esse algoritmo irá calcular a redução do tempo de vida de um fumante." );
            lostLife();
            break;

        case 2:
            console.log("O programa irá informar se você foi multado e o valor de uma multa.");
            let speed = parseInt(prompt("Digite a velocidade do carro: "));
            let fine = speed > 80 ? `Sua multa é de R$ ${(speed-80)*5}` : "Parabéns por ser um bom condutor!";
            console.log(fine);
            break;

        case 3:
            console.log("Este algoritmo calculará o valor da viagem de acordo com a distância a ser percorrida.");
            let distance = parseFloat(prompt("Informe a distância de sua viagem em KM: "));
            let ticket = distance <= 200 ? 0.5 * distance : 0.45 * distance;
            console.log(`O valor da sua viagem é de R$ ${ticket.toFixed(2)}`);
            break;

        case 4:
            console.log("Esse algoritmo vai ler o tamanho de três segmentos de reta e dizer se é possível formar um triângulo.");
            let line01 = parseInt(prompt("Informe o valor da linha 1: "));
            let line02 = parseInt(prompt("Informe o valor da linha 2: "));
            let line03 = parseInt(prompt("Informe o valor da linha 3: "));
            console.log(makeTriangle (line01,line02,line03));
            break;

        case 5:
            console.log("Vamos jogar JoKenPo!");
            playJoKenPo();
            break;
        
        case 6:
            console.log("O algoritmo vai gerar um número de 1 a 5 que você terá que acertar");
            guessNumber();
            break;

        case 7:
            console.log("Conheça o programa de aluguel de carros.")
            carRent();
            break;

        case 8:
            console.log("Veja o algoritmo para Vida Saudável.")
            
    }

} while (program !== 404);

function lostLife (){
    let cig_day = parseInt(prompt("Informe quantos cigarros consome por dia: "));
    let cig_year = parseInt(prompt("Informe há quantos anos você fuma: "));
    let days_lost = Math.round((cig_day*cig_year*365*10)/(60*24));
    console.log(`Você perderá ${days_lost} dias de vida.`);
}

function makeTriangle (...array){
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

function playJoKenPo () {
    console.log("Seja bem vindo ao nosso game 'playJoKenPo'");
    
    const Player1 = {
        name: "",
        score: 0,
        play: () => {
                return prompt(`${this.name} faça sua jogada! Digite 'pedra', 'papel' ou 'tesoura': `).toLowerCase();
        },
        
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

    const Game =  {
        pedra:{
            pedra:0, papel:false,    tesoura:true},

        papel:{
            pedra: true,    papel:0, tesoura:false},
        
        tesoura:{
            pedra: false,   papel:true,     tesoura:0},
        score: function () {
            console.log(`O placar está: ${Player1.name} ${Player1.score} x ${Bot.score} ${Bot.name} \n `)
        },
        play:  function () {
            while (Game.over())  {
                let play1 = Player1.play();
                let play2 = Bot.play();

                if (play1 === "pedra" || play1 === "papel" || play1 === "tesoura") {
                    if (Game[play1][play2] === 0){
                        console.log(`Deu empate, ambos jogaram ${play1}`)
                    } else if (Game[play1][play2]){
                        console.log(`Você ganhou, ${Bot.name} jogou ${play2}`)
                        Player1.score++
                    } else {
                        console.log(`Você perdeu, ${Bot.name} jogou ${play2}`)
                        Bot.score++
                    }
                } else {
                    console.log (`Jogada inválida.`)
                }    
                
                Game.score();
            }
            if (!Game.over && Player1.score > Bot.score) {
                console.log(`Parabéns você venceu!`)
            } else {
                console.log(`Não foi dessa vez, mas você pode tentar de novo!`)
            }
        },
        replay: function () {
            let answer = prompt(`${Player1.name}, gostaria de jogar novamente? (S/N) `).toUpperCase();
            if (answer !== "N") {
                Bot.score = 0;
                Player1.score =0;
                return true;
            } else {
                return false
            }
        },
        over: function () {
            if (Bot.score <= 2 && Player1.score <= 2) {
                return true
            } else {
                return false
            }
        }
    }

    Player1.name = prompt("Digite seu nome: ");
    console.log(`Você está jogando contra o Bot ${Bot.name}. \n Será uma partida de melhor de três.`);
   
    do {
        Game.play();
    } while(Game.replay())
            
}

function guessNumber () {
    let random_6 = Math.floor(Math.random()*5)+1;
    let tip = -1;
    function tip_giver () {
        tip = parseInt(prompt("Digite seu palpite: "));
        if (tip > random_6) {
            console.log("O palpite está muito alto");
            tip_giver();
        } else if (tip < random_6) {
            console.log("O palpite está muito baixo");
            tip_giver();
        } else {
            console.log(`Parabéns você acertou, o número era ${random_6}`)
        }
    }
    tip_giver();   
}

function carRent () {
    const garage = {
       popular:{
           days: 0,
           day_value: 90,
           km: 0,
           km_value: function () {
               if (this.km <= 100) {
                   return 0.2
               } else {
                   return 0.1
               }
           },
           total_cost: function () {
               return (this.days * this.day_value) + (this.km * this.km_value())
           }
       },
       
       luxo:{
           days: 0,
           day_value: 150,
           km: 0,
           km_value: function () {
               if (this.km <= 200) {
                   return 0.30
               } else {
                   return 0.25
               }
           },
           total_cost: function () {
               return (this.days * this.day_value) + (this.km * this.km_value())
           }
       }
    }
       console.log(`Qual carro você alugou? \n 1. Popular 2.Luxo `)
       let car_type = parseInt(prompt("Sua resposta: "));
       let car = car_type === 1 ? 'popular' : 'luxo';
       garage[car].days = parseInt(prompt(`Por quantos dias? `));
       garage[car].km = parseInt(prompt(`Qual a km percorrida? `));

       console.log(`O custo do seu aluguel foi de R$${garage[car].total_cost().toFixed(2)}`);
}
