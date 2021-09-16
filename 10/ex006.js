var a = window.document.getElementById('area') 
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', saiu)
function clicar(){
    //var a = window.document.getElementById('area')
    a.innerText = 'Clicou'
    a.style.background = 'blue'
}
function entrar(){
    //var a = window.document.getElementById('area')
    a.innerText = 'Entrou'
}
function saiu(){
    //var a = window.document.getElementById('area')
    a.innerText = 'Saiu'
    a.style.background ='chartreuse'
}