const dataFim = new Date("2024-12-20T00:00:00");

function atualizarCronometro() {
    const agora = new Date();
    const tempoRestante = dataFim - agora; 

    if (tempoRestante <= 0) {
        document.getElementById("tempo").innerHTML = "Feliz 5 Meses, meu amor! 💖";
        clearInterval(intervalo);
        return;
    }

    const diasRestantes = Math.floor(tempoRestante / (1000 * 60 * 60 * 24)); // Dias restantes
    const horasRestantes = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas restantes
    const minutosRestantes = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60)); // Minutos restantes
    const segundosRestantes = Math.floor((tempoRestante % (1000 * 60)) / 1000); // Segundos restantes

    document.getElementById("tempo").innerHTML = `${diasRestantes} dias, ${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos`;
}

const intervalo = setInterval(atualizarCronometro, 1000);