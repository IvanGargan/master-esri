'use strict';

/*Accede al elemento h1 y modifica el color #f00
var h1 = document.getElementsByTagName('h1');
console.log('h1 = ' + h1);
h1[0].style = 'color : #f00';
*/

/*Accede al elemento con id 'header' y cambia el color de fondo a #ccc 
  En la consola:
document.getElementById('header').style = 'background-color : #ccc';
*7

/*Accede al elemento con clase 'map' y establece el ancho a tamaño 500px ('width 500px')
  En la consola:
document.getElementsByClassName('map')[0].style = 'width:500px';
*/

/* Ejemplo de como cambiar varios elementos, en este caso la clase bold
se cambia de negrita a normal
var elements = document.getElementsByClassName("bold");
var i = 0;
for(i ; i < elements.length ; i++){
  elements[i].style = 'font-weight : normal'
}
*/