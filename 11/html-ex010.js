function calcular(){
    var txtv = window.document.getElementById('velo')
    var vel = Number(txtv.value)  
    var res = window.document.querySelector('div#res')
    res.innerHTML = `<p>Sua velocidade Atual é de <strong>${vel}Km/h</strong></p>`
    if (vel > 60){
        res.innerHTML += `<p>Você está acima da Velocidade permitida, portanto foi MULTADO!</p>`
    }
    res.innerHTML += `<p>Dirija sempre com segurança</p>`
}