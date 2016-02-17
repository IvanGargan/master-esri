'use strict';

// Almacenar en una variable el resultado de sumar 1 y 2
var a = 1 + 2;
console.log(a);
// alert(a); // Esto muestra una ventana emergente
alert(a);

// Almacenar en una variable el resultado de dividir 6 entre 2
var div = 6/2;
console.log('Division: ' + div);

// Almacenar en una variable el precio de un artículo de 20€ aplicándole el 21% de IVA .
var precio = 20 ;
var iva = precio * 21/100 ;
var precioiva = precio + iva;
console.log('Precio con IVA: ' + precioiva);
// Definir una variable con el valor 4 y utilizar el operador (```++```) para incrementar en uno su valor.
var cuatro = 4;
cuatro++;
console.log('4++: ' + cuatro);

// Definir una variable que almacene la concatenación de dos cadenas de texto.
var text1 = 'Hey!';
var text2 = 'whats up?!';
console.log(text1 + ' ' + text2);

// Definir una variable ```price``` con el valor ```19.99```y aplicar la abreviación ```/=``` para dividirlo entre ```1.21``` para obtener el precio sin IVA.
var price = 19.99;
var pricenoiva = price /= 1.21;
console.log('Precio sin IVA: ' + pricenoiva);

// Asignar a dos variables valores booleanos y hacer al menos una operación combinando un operador lógico: **AND** (```&&```) o **OR** (```||```)
var x = false;
var y = false;
console.log('AND: ') + console.log(x && y);
console.log('OR: ' + x || y);

// Realizar 4 expresiones que utilicen operadores relacionales (```<```, ```==```, ```!=``` y ```===```) y almacenen los valores en tres variables distintas.
var even = 2;
var odd = 7;
var odd2 = 7;
console.log(odd < even);
console.log(odd == odd2);
console.log(even != odd);
console.log(odd === odd2);