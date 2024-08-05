// Passo 1: Armazenar o nome e a quantidade de experiência
const nome = "Cesar Yoshio";  // Substitua "HeroName" pelo nome real do herói
const xp = 58647;          // Substitua 7500 pela quantidade real de XP

// Passo 2: Determinar o nível do herói com switch
let nivel;

switch (true) {
    case (xp >= 10001):
        nivel = "Radiante";
        break;
    case (xp >= 9001 && xp <= 10000):
        nivel = "Imortal";
        break;
    case (xp >= 8001 && xp <= 9000):
        nivel = "Ascendente";
        break;
    case (xp >= 7001 && xp <= 8000):
        nivel = "Platina";
        break;
    case (xp >= 5001 && xp <= 7000):
        nivel = "Ouro";
        break;
    case (xp >= 2001 && xp <= 5000):
        nivel = "Prata";
        break;
    case (xp >= 1001 && xp <= 2000):
        nivel = "Bronze";
        break;
    case (xp <= 1000):
        nivel = "Ferro";
        break;
    default:
        nivel = "Desconhecido"; // Caso a XP não se enquadre em nenhum intervalo
}

// Passo 3: Exibir a mensagem formatada
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);