
const API = 'http://localhost:3000/api/v1/products';
const imagen0 = document.getElementById("imagen0");
const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const imagen3 = document.getElementById("imagen3");
const imagen4 = document.getElementById("imagen4");
const imagen5 = document.getElementById("imagen5");
const imagen6 = document.getElementById("imagen6");
const imagen7 = document.getElementById("imagen7");
const imagen8 = document.getElementById("imagen8");
const imagen9 = document.getElementById("imagen9");

const todasImagenes = [imagen0, imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9];

(async ()=> {
  const response = await fetch(API);
  const data = await response.json();
  console.log(data);
  todasImagenes[0].src = data[0].image;
  todasImagenes[1].src = data[1].image;
  todasImagenes[2].src = data[2].image;
  todasImagenes[3].src = data[3].image;
  todasImagenes[4].src = data[4].image;
  todasImagenes[5].src = data[5].image;
  todasImagenes[6].src = data[6].image;
  todasImagenes[7].src = data[7].image;
})();
