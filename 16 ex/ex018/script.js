let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
function adicionar(){
    if(isNumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function isNumero(n){
    if(Number(n)>= 1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
function finalizar(){
    if(valores.length == 0){
        alert('Primeiramente adicione valores na lista')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] < menor){
                menor = valores[pos]
            }
            if(valores[pos] > maior){
                maior = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} valores cadastrados</p>`
        res.innerHTML += `<p>O maior valor infromado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor infromado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}