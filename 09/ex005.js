var p1 = window.document.getElementsByTagName('p')[0] /* O zero indica o primeiro item da lista*/
var d = window.document.getElementById('msg')
d.style.background = 'green'
p1.style.color = 'black'
window.document.write('O paragráfo selecionado está escrito: ' + p1.innerText)
var d1 = window.document.querySelector('div#msg')
d1.style.color = 'red'