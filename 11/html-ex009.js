function averiguação(){
    var txt = window.document.getElementById('nacio')
    var nac = String(txt.value)
    var res = window.document.getElementById('res')
    res.innerHTML = `Nascido no ${nac} `
    if (nac!='BRASIL' && nac!= 'brasil'){
        res.innerHTML += 'Você é Estrangeiro'
    } else{
        res.innerHTML += 'Você é Brasileiro'
    }
}