function lucasAf1(){
    var vidaHumano = 50
    alert('O filho chamado Lucas A.possui uma grande furtividade e possui um pet que o assistência durante os combate, Lucas pode controlar qualquer humanos apos tranformalo em zumbi.')
    alert('após se separar do seu pai e sua mãe lucas procura se abrigar em meio aos descombros,de algum tempo escondido lucas decide que é dada a hora de enfrentar seus medos e partir em busca de seus pais.guiado pelo ódio lucas sai caminhando em direção a uma sala.')
    alert('Você entrou na primeira sala, para percorrer o caminho até a saindo, neste momento você olha em volta e avista um humano que está correndo em sua direção.')
    console.log("vidazombie "+ vidaZumbie)
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
        lucasAf2()
    }

}
function lucasAf2(){
    var vidaHumano = 50
    var fuga = 1
    alert('Você entrou na segunda sala , para percorrer o caminho até a saindo, neste momento você olha em volta e avista um humano que está correndo em sua direção.')
    
    while (vidaZumbie >= 1 && vidaHumano >= 1) {
        var acao = prompt('Você esta na segunda sala, você desaja:\n1- fugir \n2- atacar o humano')
        if(acao == 1){
            if(fuga > 0){
                vidaRecuperar = Math.floor(Math.random() * 30);
            vidaZumbie = vidaZumbie + vidaRecuperar
            alert(`Você está voltando para recupera forças sua vida ira recuperar em: ${vidaRecuperar}`)
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
        lucasAf3()
    }

}

function lucasAf3(){
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
        alert('lucas após uma derradeira luta com zombies vence e segue em direção a um lugar sombriu onde avista sua mãe eles se abraçam choram e deois comem juntos uma pizza que de onde veio também não sei kkkk ')
    }endGame()
}
