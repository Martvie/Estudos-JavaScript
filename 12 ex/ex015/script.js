function verificar(){
    var data = new Date()
    var atual = data.getFullYear()
    var ano = window.document.querySelector("input#txtano")
    var res = document.querySelector('div#res')
    if (ano.value.length == 0 || ano.value > atual) {
        window.alert("Verifique os Dados Inseridos")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = atual - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero ='homem'
            if (idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebehomem.png')
            } else if (idade < 45){
                //adulto
                img.setAttribute('src', 'imagens/jovemhomem.png')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/idosohomem.png')
            }
        }else{
            genero = "mulher"
            if (idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebemulher.png')
            } else if (idade < 45){
                //adulta
                img.setAttribute('src', 'imagens/jovemmulher.png')
            } else{
                //idosa
                img.setAttribute('src', 'imagens/idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}