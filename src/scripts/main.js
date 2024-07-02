AOS.init();

dataDoEvento = new Date('Sep 13, 2024 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date ();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaForMs = 1000 * 60 * 60 * 24;
    const horaForMs = 1000 * 60 * 60;
    const minutoForMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaForMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diaForMs / horaForMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaForMs / minutoForMs);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutoForMs / 1000);

    /*console.log(diasAteOEvento);
console.log(horasAteOEvento);
console.log(minutosAteOEvento);
console.log(segundosAteOEvento);
*/

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);