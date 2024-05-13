/* Variáveis Globais */
const prompt = require('prompt-sync')();
let program;
console.log("Bem vindo, aqui estão os 50 algoritmos criados para o Teste 2 do módulo 1.");

do {
    program = parseInt(prompt("Digite entre 1 e 50 para abrir um algoritmo, ou 404 para sair: "));

    switch(program){
        case 1:
            console.log("Esse algoritmo irá calcular a redução do tempo de vida de um fumante." );
            _1_lostLife();
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
            console.log(_4_makeTriangle (line01,line02,line03));
            break;

        case 5:
            console.log("Vamos jogar JoKenPo!");
            _5_playJoKenPo();
            break;
        
        case 6:
            console.log("O algoritmo vai gerar um número de 1 a 5 que você terá que acertar");
            _6_guessNumber();
            break;

        case 7:
            console.log("Conheça o programa de aluguel de carros.");
            _7_carRent();
            break;

        case 8:
            console.log("Veja o algoritmo para Vida Saudável.");
            _8_healtRewards();
            break;
        
        case 9:
            console.log("O algoritmo lerá o salário e sexo de vários funcionários e vai apresentar o total pago dividido por sexo");
            _9_paymentFM();
            break;
        
        case 10:
            console.log("Digite números e obtenha ao final a média, soma, menor valor digitado e quantos são pares");
            _10_listNumbers();
            break;

        case 11:
            console.log("Esse programa vai ler um número inicial e uma razão de PA e depois apresentar os 10 primeiros elementos e a soma total deles.");
            let start = parseFloat(prompt("Número inicial: "));
            let razao = parseFloat(prompt("Razão: "));
            _11_PA(start, razao);
            break;
        
        case 12:
            console.log("O algoritmo vai imprimir os 10 primeiros elementos da sequência de Fibonacci.")
            for (let i = 0; i < 10; i++){
                console.log(_fibonacci(i));
            }
            break;
            
        case 13:
            console.log("Esse programa vai gerar um vetor com os 15 primeiros elementos da sequência de Fibonacci.")
            let list_fibonacci = [];
            let counter = 0;
            while (list_fibonacci.length <= 15){
                list_fibonacci.push(_fibonacci(counter))
                counter++;
            };
            console.log(`Vetor Fibonacci: ${list_fibonacci}`);
            break;
        
        case 14:
            console.log("O algoritmo vai ler 7 nomes e apresentá-los na ordem inversa.");
            _14_names();
            break;
        }

} while (program !== 404);

function _1_lostLife (){
    let cig_day = parseInt(prompt("Informe quantos cigarros consome por dia: "));
    let cig_year = parseInt(prompt("Informe há quantos anos você fuma: "));
    let days_lost = Math.round((cig_day*cig_year*365*10)/(60*24));
    console.log(`Você perderá ${days_lost} dias de vida.`);
}

function _4_makeTriangle (...array){
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

function _5_playJoKenPo () {
    console.log("Seja bem vindo ao nosso game...");
    
    const Player1 = {
        name: "",
        score: 0,

        introduction: function () {
            Player1.name = prompt("Digite seu nome: ");
            console.log(`Você está jogando contra o Bot ${Bot.name}. \n Será uma partida de melhor de três.`);
        },

        play: () => {
                return prompt(`${Player1.name} faça sua jogada! Digite 'pedra', 'papel' ou 'tesoura': `).toLowerCase();
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

    Player1.introduction();
   
    do {
        Game.play();
    } while(Game.replay())
            
}

function _6_guessNumber () {
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

function _7_carRent () {
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

function _8_healtRewards () {
    const Employee = {
        name:"",
        activity_time: 0,
        points: function () {
            if (this.activity_time <= 10) {
                return 2 * this.activity_time;
            } else if (this.activity_time > 20){
                return 10 * this.activity_time;
            } else {
                return 5 * this.activity_time;
            }
        },
        money: function () {
            return console.log(`Parabéns ${this.name}! \n Você fez ${this.points()} pontos e ganhou R$ ${this.points() * 0.05}`)
        }
    }
     Employee.name = prompt("Digite seu nome: ");
     Employee.activity_time = parseInt(prompt("Quantas horas de atividade física você fez no mês? "));
     Employee.money()
   }

function _9_paymentFM () {
    let answer = "S";
    let pay_F = 0;
    let pay_M = 0;

    do {
        let pay = parseFloat(prompt("Salário: "));
        let sex = prompt("Sexo (M/F): ").toUpperCase();
        if ( sex === "M" && !Number.isNaN(pay)){
            pay_M +=pay
        } else if (sex === "F" && !Number.isNaN(pay)){
            pay_F +=pay
        }
        answer = prompt("Quer continuar? (S/N) ").toUpperCase()
    } while (answer !== "N")

    console.log(`O total pago às mulheres é de $ ${pay_F.toFixed(2)}`)
    console.log(`O total pago aos homens é de $ ${pay_M.toFixed(2)}`)
}

function _10_listNumbers () {
    let answer = "S";
    let sum = 0;
    let value_m = null;
    let media = 0;
    let par = 0;
    let i = 0;

do {
    i++;
    let num = parseFloat(prompt("Digite um número: "));
    sum +=num
    if (value_m === null) {
        value_m = num;
    } else if (num < value_m) {
        value_m = num
    }
    media = (sum/i).toFixed(2)
    par = num % 2 == 0 ? par+=1 : par+=0;
    answer = prompt("Quer continuar? (S/N) ").toUpperCase()
    } while (answer !== "N")
    
    console.log(`Somatória: ${sum}`);
    console.log(`Menor valor: ${value_m}`);
    console.log(`Média: ${media}`);
    console.log(`Pares: ${par}`);

}

function _11_PA (p, pa) {
    let sum = 0;
    let pa_list = [p]
    let num = p
    for (let i = 0; i < 9; i++){
        num+=pa
        pa_list.push(num)
    }
    pa_list.forEach((value, index) => {
        console.log(`Elemento ${index+1}: ${value}`);
        sum+=value
    })
    console.log(`Soma: ${sum}`)
}

function _fibonacci (n) {
    if ( n === 0) {
        return 0;
    } else if (n === 1){
        return 1;
    } else {
        return _fibonacci (n - 2) + _fibonacci (n - 1)
    }
}

function _14_names () {
    let names = [];
    while (names.length < 7){
        names.unshift(prompt("Digite um nome: "));
    }
    for (let i = 0; i < names.length; i++){
        console.log(`Nome ${i+1}: ${names[i]}`)
    }
}
