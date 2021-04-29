function luizHf1(){
    var vidaHumano = 50

    alert(' o pai luizh. com fortes vínculos familiares, pratica  tiro ao alvo  todos os dias, não é um bom  com dialogo e tem um braço de ferro e brigar é seu forte,')
    alert('após se separar do seu filho e suea mulher luizh procura se abrigar em meio aos descombros,de algum tempo escondido luizh decide que é dada a hora de enfrentar seus medos e partir em busca de sua mulher e seu filho.guiado pelo ódio luizh sai caminhando em direção a uma sala.')
    alert('Você entrou na primeira sala, para percorrer o caminho até a saindo, neste momento você olha em volta e avista um humano que está correndo em sua direção.')
    
    for (;vidaZumbie >= 1 && vidaHumano >= 1;) {
        var acao = prompt('Você esta na primeira sala, você desaja:\n1- fugir \n2- atacar o humano')
        if(acao == 1){
            alert('Na primeira fase não se pode fugir, não tem para onde correr!!!')
        }else if(acao == 2){
            var danoZumbie = Math.floor(Math.random() * 50);
            var danoHumano = Math.floor(Math.random() * 50);
            vidaZumbie =  vidaZumbie - danoHumano
            vidaHumano = vidaHumano - danoZumbie
            alert(`Voce atacou o humano e o humano efetuou um ataque:\nDano Zumbie: ${danoZumbie}\nDano Humano: ${danoHumano}\nVocê está com ${vidaZumbie} de vida e o Humano está com: ${vidaHumano} de vida.`)
        }else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        alert('Game Over\nVoltara para o inicio do jogo')
        startGamer()
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        luizhAf2()
        
    }

}
function luizhAf2(){
    var vidaHumano = 50
    var fuga = 1
    alert('Você entrou na segunda sala , para percorrer o caminho até a saindo, neste momento você olha em volta e avista um humano que está correndo em sua direção.')
    
    while (vidaZumbie >= 1 && vidaHumano >= 1) {
        var acao = prompt('Você esta na segunda sala, você desaja:\n1- fugir \n2- atacar o humano')
        if(acao == 1){
            if(fuga > 0){
                vidaRecuperar = Math.floor(Math.random() * 30);
            vidaZumbie = vidaZumbie + vidaRecuperar
            alert(`{Você está voltando para recupera forças sua vida ira recuperar em: ${vidaRecuperar}`)
            alert('Voce voltou para sala anterior para recuperar um pouco de sua força, estará seguindo novamente para proxima sala!!!')
            fuga--
            }else{
                alert('voce já fugiu uma vez nesta sala, não é possível mais fugir')
            }
        }else if(acao == 2){
            var danoZumbie = Math.floor(Math.random() * 50);
            var danoHumano = Math.floor(Math.random() * 50);
            vidaZumbie =  vidaZumbie - danoHumano
            vidaHumano = vidaHumano - danoZumbie
            alert(`Voce atacou o humano e o humano efetuou um ataque:\nDano Zumbie: ${danoZumbie}\nDano Humano: ${danoHumano}\nVocê está com ${vidaZumbie} de vida e o Humano está com: ${vidaHumano} de vida.`)
        }else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        alert('Game Over\nVoltara para o inicio do jogo')
        startGamer()
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        luizhAf3()
    }

}

function luizhAf3(){
    var vidaHumano = 50
    alert('Você entrou na terceira sala , para percorrer o caminho até a saindo, neste momento você olha em volta e avista um humano que está correndo em sua direção.')
    
    while (vidaZumbie >= 1 && vidaHumano >= 1) {
        var acao = prompt('Você esta na segunda sala, você desaja:\n1- fugir \n2- atacar o humano')
        if(acao == 1){
            vidaRecuperar = Math.floor(Math.random() * 30);
            vidaZumbie = vidaZumbie + vidaRecuperar
            alert(`Você está voltando para recupera forças sua vida ira recuperar em: ${vidaRecuperar}`)
            alert('Voce voltou para sala anterior para recuperar um pouco de sua força, estará seguindo novamente para proxima sala!!!')
        }else if(acao == 2){
            var danoZumbie = Math.floor(Math.random() * 50);
            var danoHumano = Math.floor(Math.random() * 50);
            vidaZumbie =  vidaZumbie - danoHumano
            vidaHumano = vidaHumano - danoZumbie
            alert(`Voce atacou o humano e o humano efetuou um ataque:\nDano Zumbie: ${danoZumbie}\nDano Humano: ${danoHumano}\nVocê está com ${vidaZumbie} de vida e o Humano está com: ${vidaHumano} de vida.`)
        }else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        alert('Game Over\nVoltara para o inicio do jogo')
        startGamer()
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        alert('depois de muito apanhar mas ter vercido os zombies pelo cansaço luih sai correndo igual alguns atletas da época em busca de sua familia e enontra os dois comendo pizza e jogando convers fora...')
    }endGame()

}