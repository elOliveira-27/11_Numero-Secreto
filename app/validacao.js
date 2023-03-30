function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoFalado.innerHTML += '<div>Só vale número jumento(a).</div>'
        return
    }

    if (chutePermitido(numero)) {
        elementoFalado.innerHTML += `
        <div>Esse valor não pode jumento(a). 
        <br> O número secreto está entre ${menorValor} e ${maiorValor}.
        </div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2> Parabéns, você acertou o valor!</h2>
        <h4>O número secreto era ${numeroSecreto}.</h4>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
            elementoFalado.innerHTML += `
            <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down-long"></i>
            </div>
            `
        } else {
            elementoFalado.innerHTML += `
            <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up-long"></i></div>
            `
        }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function chutePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
