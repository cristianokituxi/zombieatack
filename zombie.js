var vidaZumbie = 150

function startGamer() {
 while (true) {
        var qualPersonagem = prompt('Escolha um personagem: \n1- Lucas A.\n2- Ana B.\n3- Luiz H.')
        if (qualPersonagem == 1) {
            alert('Lucas A. escolhido')
            lucasAf1()
           
           
            break;
        } else if (qualPersonagem == 2) {
            alert('Ana B. escolhido')
           
            anaBF1()
            break;
        } else if (qualPersonagem == 3) {
            alert('Luiz H.. escolhido')
            luizHf1()
            break;
        } else {
            alert('Personagem invalido')
        }
    }
}

function endGame(){
    alert("Jogo finalizado")
    vidaZumbie = 150;
    document.getElementById('faseButton').innerHTML = '<button onclick="startGamer()">Iniciar a aventura</button>'
}
