function contar(){
    let inic = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pass = window.document.getElementById('txtp')
    let res = document.getElementById('res')
    if(inic.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('ERRO, Preencha os campos abaixo')
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0){
            alert('Passo inválido, considerando passo como 1')
            p = 1
        }
        if (i < f){
            // Contagem crescente
            for (let c = i; c<=f; c+= p){
                res.innerHTML += `${c} \u{1F449}`
        }
                    
        }else{
            for(let c = i; c >= f; c-= 1)
            // contagem decrescente
                res.innerHTML += `${c} \u{1F449}`
        }
    } res.innerHTML += `\u{1f3c1}`
}