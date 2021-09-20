function carregar(){
    var msg = window.document.querySelector("div#msg")
    var img = window.document.querySelector("img#imagem")
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas`
    if (horas >= 0 && horas < 12) {
        // Bom dia
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#ddac35'
    }else if (horas >= 12 && horas < 18) {
        // Boa tarde
        img.src = 'imagens/entardecer.png'
        document.body.style.background = "#ff8732"
    }else{
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#183e6f'
    }
}