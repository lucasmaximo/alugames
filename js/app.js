let jogosalugados = 1;

mostrarQuantidadeDeJogosAlugados();

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`); //seleciona a tag li
    let imagem = gameClicado.querySelector('.dashboard__item__img'); //seleciona a tag div
    let botao = gameClicado.querySelector('.dashboard__item__button'); //seleciona a tag a

    if (imagem.classList.contains('dashboard__item__img--rented')){ //se a lista de classes da tag a contém a classe X...
        if(confirm("Vcê realmente quer devolver o jogo?")){
            imagem.classList.remove('dashboard__item__img--rented'); //tag div remove a classe Y
            botao.classList.remove('dashboard__item__button--return'); // tag a remove a classe Z
            botao.textContent = 'Alugar'; //tag a muda seu conteúdo
            jogosalugados--;
        mostrarQuantidadeDeJogosAlugados();
        }
    }
    else {
        imagem.classList.add('dashboard__item__img--rented'); //tag div passa a ter uma nova classe Y
        botao.classList.add('dashboard__item__button--return'); //tag a passa a ter uma nova classe Z
        botao.textContent = "Devolver"; //tag a munda seu conteúdo
        jogosalugados++;
        mostrarQuantidadeDeJogosAlugados();
    }
}

function mostrarQuantidadeDeJogosAlugados(){
    let palavraJogosAlugados = jogosalugados == 1 ? 'jogo alugado' : 'jogos alugados';
    console.log(`Há ${jogosalugados} ${palavraJogosAlugados}!`)
}