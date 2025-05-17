const dataInicio = new Date('2025-04-07T16:20:00');
let intervalo;

function calcularTempo() {
    const agora = new Date();
    const diffMs = agora - dataInicio;

    const segundosTotais = Math.floor(diffMs / 1000);

    const dias = Math.floor(segundosTotais / (60 * 60 * 24));
    const horas = Math.floor((segundosTotais % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
    const segundos = segundosTotais % 60;

    return { dias, horas, minutos, segundos };
}

function responder(ehSim) {
    clearInterval(intervalo);

    const mensagem = document.getElementById("mensagem");

    function atualizarMensagem() {
        const { dias, horas, minutos, segundos } = calcularTempo();
        const tempoFormatado = `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;

        if (ehSim) {
            mensagem.textContent = `Vou dizer denovo, eu te amo há ${tempoFormatado} 💖`;
        } else {
            mensagem.textContent = `Então agora você sabe, eu te amo há ${tempoFormatado} 💖`;
        }
    }

    atualizarMensagem();
    intervalo = setInterval(atualizarMensagem, 1000);
}
