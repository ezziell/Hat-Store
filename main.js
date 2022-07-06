
const API = 'http://localhost:3000/api/v1/products';
const titulo = document.getElementById("tituloUno");
const imagen = document.getElementById("imagenUno");

(async ()=> {
  const response = await fetch(API);
  const data = await response.json();
  console.log(data);
  const nombre = data[1].name;
  console.log(nombre);
  titulo.innerHTML = nombre
  imagen.src = data[1].image;
  const img = document.createElement('img');
  img.src = data[1].image;
})();



