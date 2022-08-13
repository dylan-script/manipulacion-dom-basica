/*console.log('Hello World');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const par = document.querySelector('.par');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

//console.log(input.value);

console.log({
  h1,
  p,
  par,
  pid,
  input
});

h1.innerHTML = 'Patito<br>Feo';
console.log(h1.getAttribute('pantalla'));
//console.log(h1.getAttribute('verde'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('Rojo');
h1.classList.remove('Rojo');
h1.classList.toggle('Verde');
h1.classList.contains('Verde');

input.value = '456';
//Se crea una imagen
const img = document.createElement('img');
//Se le agregan los atributos
img.setAttribute('src', 'https://ww1.prweb.com/prfiles/2010/06/17/4161594/2_Getty04.jpg');
console.log(img);
//Se agrega la imagen al elemento html. (En este caso, un elemento con ID)
pid.innerHTML = " ";
pid.append(img);*/

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#formulario');

btn.addEventListener('submit', sum);

function sum(event){
  console.log({event});
  event.preventDefault();
  console.log('Escuchando evento');
  const sum = parseInt(input1.value) + parseInt(input2.value);
  result.innerHTML = sum;
}