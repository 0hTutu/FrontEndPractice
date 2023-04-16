let n1 = parseFloat(prompt("Entre com o primeiro numero"));
let n2 = parseFloat(prompt("Entre com outro numero"));
let n3 = prompt('entre com "+,-,/,*,**"');
let resultado;

if(n3 == "+") {resultado = n1 + n2;} 
if(n3 == "-") {resultado = n1 - n2;}
if(n3 == "/") {resultado = n1 / n2;}
if(n3 == "*") {resultado = n1 * n2;}
if(n3 == "**") {resultado = n1 ** n2;}
        
alert(resultado);
