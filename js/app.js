var x, y, suma, resta, multi,divic;

const nombre = prompt("Cual es tu nombre?");
document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JavaScript Moderno`;

x = prompt("Digite primer numero")
y = prompt("Digite segundo numero")

suma = (parseInt(x)+parseInt(y));
resta = (parseInt(x)-parseInt(y));
multi = (parseInt(x)*parseInt(y));
divic = (parseInt(x)/parseInt(y));

alert ("Suma es : "+suma + "\nResta es :  "+resta +"\nMultipliacion es :"+multi +"\nDivic es : "+divic);

console.log('Suma', suma);
console.log('Resta', resta);
console.log('Multiplicación', multi);
console.log('División', divic);
