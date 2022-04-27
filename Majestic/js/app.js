document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".navbarFloat").classList.toggle("show");
});

const products = document.getElementById("products");

const btnM = document.querySelector(".btnM");
const camisasM = document.createElement("SECTION");
camisasM.innerHTML += `<div>
  <h1>CamisetasM</h1>
  <button class=btnAtras>atras</button>
  <div class="pro">
  <div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
  </div>
</div>`;

camisasM.classList.add("products");
camisasM.classList.add("about");

const body = document.querySelector(".body");

btnM.addEventListener("click", () => {
  body.replaceChild(camisasM, products);
});

const btnL = document.querySelector(".btnL");
const camisasL = document.createElement("SECTION");
camisasL.innerHTML += `<div>
  <h1>CamisetasL</h1>
  <div class="pro">
  <div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
  </div>
</div>`;

camisasL.classList.add("products");
camisasL.classList.add("about");

btnL.addEventListener("click", () => {
  body.replaceChild(camisasL, products);
});

const btnXL = document.querySelector(".btnXL");
const camisasXL = document.createElement("SECTION");
camisasXL.innerHTML += `<div>
  <h1>CamisetasXL</h1>
  <div class="pro">
  <div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
  </div>
</div>`;

camisasXL.classList.add("products");
camisasXL.classList.add("about");

btnXL.addEventListener("click", () => {
  body.replaceChild(camisasXL, products);
});

const btnXXL = document.querySelector(".btnXXL");
const camisasXXL = document.createElement("SECTION");
camisasXXL.innerHTML += `<div>
  <h1>CamisetasXXL</h1>
  <div class="pro">
  <div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
  </div>
</div>`;

camisasXXL.classList.add("products");
camisasXXL.classList.add("about");

btnXXL.addEventListener("click", () => {
  body.replaceChild(camisasXXL, products);
});

const btnG = document.querySelector(".btnG");
const gorras = document.createElement("SECTION");
gorras.innerHTML += `<div>
  <h1>Gorras</h1>
  <div class="pro">
  <div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
  </div>
</div>`;

gorras.classList.add("products");
gorras.classList.add("about");

btnG.addEventListener("click", () => {
  body.replaceChild(gorras, products);
});

const btnJ = document.querySelector(".btnJ");
const Jeans = document.createElement("SECTION");
Jeans.innerHTML += `<div>
  <h1>Jeans</h1>
  <div class="pro">
  <div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h2>Camisetas M</h2>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
  </div>
</div>`;

Jeans.classList.add("products");
Jeans.classList.add("about");

btnJ.addEventListener("click", () => {
  body.replaceChild(Jeans, products);
});

const btnAtras = document.querySelector(".btnAtras");
console.log(btnAtras);

btnAtras.addEventListener("click", () => {
  body.replaceChild(products, camisasM);
});
