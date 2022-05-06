document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".navbarFloat").classList.toggle("show");
});

const products = document.querySelector(".products");

const btnM = document.querySelector(".btnM");
const camisasM = document.createElement("DIV");
camisasM.innerHTML += `
  <h2>CamisetasM</h2>
  <div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
  `;

camisasM.classList.add("pro");

const pro = document.querySelector(".pro");

btnM.addEventListener("click", () => {
  products.replaceChild(camisasM, pro);
  btnAtras.classList.add("active");
});

const btnL = document.querySelector(".btnL");
const camisasL = document.createElement("DIV");
camisasL.innerHTML += `
  <h2>CamisetasL</h2>
  <div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
  `;

camisasL.classList.add("pro");

btnL.addEventListener("click", () => {
  products.replaceChild(camisasL, pro);
  btnAtras.classList.add("active");
});

const btnXL = document.querySelector(".btnXL");
const camisasXL = document.createElement("DIV");
camisasXL.innerHTML += `
  <h2>CamisetasXL</h2>
  <div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
  `;

camisasXL.classList.add("pro");

btnXL.addEventListener("click", () => {
  products.replaceChild(camisasXL, pro);
  btnAtras.classList.add("active");
});

const btnXXL = document.querySelector(".btnXXL");
const camisasXXL = document.createElement("DIV");
camisasXXL.innerHTML += `
  <h2>CamisetasXXL</h2>
  <div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
  `;

camisasXXL.classList.add("pro");

btnXXL.addEventListener("click", () => {
  products.replaceChild(camisasXXL, pro);
  btnAtras.classList.add("active");
});

const btnG = document.querySelector(".btnG");
const gorras = document.createElement("DIV");
gorras.innerHTML += `
  <h2>GORRAS</h2>
  <div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
  `;

gorras.classList.add("pro");

btnG.addEventListener("click", () => {
  products.replaceChild(gorras, pro);
  btnAtras.classList.add("active");
});

const btnJ = document.querySelector(".btnJ");
const jeans = document.createElement("DIV");
jeans.innerHTML += `
  <h2>JEANS</h2>
  <div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
<div class="card" style="--i:url(/Majestic/images/buso1.jpg)">
  <div class="content" >
      <h1>Camisetas M</h1>
      <button class="btn btnM">Ver mas</button>
  </div>
</div>
  `;

jeans.classList.add("pro");

btnJ.addEventListener("click", () => {
  products.replaceChild(jeans, pro);
  btnAtras.classList.add("active");
});

const btnAtras = document.querySelector(".btnAtras");

btnAtras.addEventListener("click", () => {
  products.replaceChild(pro, camisasM);
  btnAtras.classList.remove("active");
});

btnAtras.addEventListener("click", () => {
  products.replaceChild(pro, camisasL);
  btnAtras.classList.remove("active");
});

btnAtras.addEventListener("click", () => {
  products.replaceChild(pro, camisasXL);
  btnAtras.classList.remove("active");
});

btnAtras.addEventListener("click", () => {
  products.replaceChild(pro, camisasXXL);
  btnAtras.classList.remove("active");
});

btnAtras.addEventListener("click", () => {
  products.replaceChild(pro, gorras);
  btnAtras.classList.remove("active");
});

btnAtras.addEventListener("click", () => {
  products.replaceChild(pro, jeans);
  btnAtras.classList.remove("active");
});
