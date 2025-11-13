function mudarParaEsquerda() {

    let fundo = document.getElementsByClassName('container');
    let setaEsquerda = document.getElementsByClassName('esquerda');
    let setaDireita = document.getElementsByClassName('direita');
    let saibaMais = document.getElementsByClassName('saiba-mais');

    if (fundo[0].classList.contains('container-4')) {

        fundo[0].classList.remove('container-4');
        fundo[0].classList.remove('container-2');
        fundo[0].classList.remove('container-1');

        setaEsquerda[0].classList.remove('seta-opaca');
        setaDireita[0].classList.remove('seta-opaca');

        saibaMais[0].classList.remove('saiba-mais-4')
        saibaMais[0].classList.remove('saiba-mais-2')
        saibaMais[0].classList.remove('saiba-mais-1')


        fundo[0].classList.add('container-3');
        saibaMais[0].classList.add('saiba-mais-3')
    }

    else if (fundo[0].classList.contains('container-3')) {

        fundo[0].classList.remove('container-4');
        fundo[0].classList.remove('container-3');
        fundo[0].classList.remove('container-1');

        setaEsquerda[0].classList.remove('seta-opaca');
        setaDireita[0].classList.remove('seta-opaca');

        saibaMais[0].classList.remove('saiba-mais-3')
        saibaMais[0].classList.remove('saiba-mais-4')
        saibaMais[0].classList.remove('saiba-mais-1')

        fundo[0].classList.add('container-2');
        saibaMais[0].classList.add('saiba-mais-2')
    }

    else if (fundo[0].classList.contains('container-2')) {

        fundo[0].classList.remove('container-4');
        fundo[0].classList.remove('container-3');
        fundo[0].classList.remove('container-2');

        saibaMais[0].classList.remove('saiba-mais-4')
        saibaMais[0].classList.remove('saiba-mais-3')
        saibaMais[0].classList.remove('saiba-mais-2')

        fundo[0].classList.add('container-1')
        setaEsquerda[0].classList.add('seta-opaca');
        saibaMais[0].classList.add('saiba-mais-1')
    }

}





function mudarParaDireita() {

    let fundo = document.getElementsByClassName('container');
    let setaEsquerda = document.getElementsByClassName('esquerda');
    let setaDireita = document.getElementsByClassName('direita');
    let saibaMais = document.getElementsByClassName('saiba-mais');


    if (fundo[0].classList.contains('container-1')) {

        fundo[0].classList.remove('container-1');
        fundo[0].classList.remove('container-3');
        fundo[0].classList.remove('container-4');

        setaEsquerda[0].classList.remove('seta-opaca');
        setaDireita[0].classList.remove('seta-opaca');

        saibaMais[0].classList.remove('saiba-mais-1')
        saibaMais[0].classList.remove('saiba-mais-3')
        saibaMais[0].classList.remove('saiba-mais-4')

        fundo[0].classList.add('container-2');
        saibaMais[0].classList.add('saiba-mais-2')
    }

    else if (fundo[0].classList.contains('container-2')) {

        fundo[0].classList.remove('container-1');
        fundo[0].classList.remove('container-2');
        fundo[0].classList.remove('container-4');

        setaEsquerda[0].classList.remove('seta-opaca');
        setaDireita[0].classList.remove('seta-opaca');

        saibaMais[0].classList.remove('saiba-mais-1')
        saibaMais[0].classList.remove('saiba-mais-2')
        saibaMais[0].classList.remove('saiba-mais-4')

        fundo[0].classList.add('container-3')
        saibaMais[0].classList.add('saiba-mais-3')
    }

    else if (fundo[0].classList.contains('container-3')) {
        fundo[0].classList.remove('container-3')
        fundo[0].classList.remove('container-2')
        fundo[0].classList.remove('container-1')

        setaEsquerda[0].classList.remove('seta-opaca');

        saibaMais[0].classList.remove('saiba-mais-3')
        saibaMais[0].classList.remove('saiba-mais-2')
        saibaMais[0].classList.remove('saiba-mais-1')

        fundo[0].classList.add('container-4')
        setaDireita[0].classList.add('seta-opaca');
        saibaMais[0].classList.add('saiba-mais-4')
    }




}

