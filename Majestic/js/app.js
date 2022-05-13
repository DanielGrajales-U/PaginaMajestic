document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".navbarFloat").classList.toggle("show");
});

const products = document.querySelector(".products");

const btnM = document.querySelector(".btnM");
const camisasM = document.createElement("DIV");
camisasM.innerHTML += `
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

camisasM.classList.add("cards");
camisasM.setAttribute("data-aos", "fade-left");
camisasM.setAttribute("data-aos-duration", "800");

const pro = document.querySelector(".pro");

btnM.addEventListener("click", () => {
  products.replaceChild(camisasM, pro);
  btnAtras.classList.add("active");
});

const btnL = document.querySelector(".btnL");
const camisasL = document.createElement("DIV");
camisasL.innerHTML += `
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

camisasL.classList.add("cards");
camisasL.setAttribute("data-aos", "fade-left");
camisasL.setAttribute("data-aos-duration", "800");

btnL.addEventListener("click", () => {
  products.replaceChild(camisasL, pro);
  btnAtras.classList.add("active");
});

const btnXL = document.querySelector(".btnXL");
const camisasXL = document.createElement("DIV");
camisasXL.innerHTML += `
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

camisasXL.classList.add("cards");
camisasXL.setAttribute("data-aos", "fade-left");
camisasXL.setAttribute("data-aos-duration", "800");

btnXL.addEventListener("click", () => {
  products.replaceChild(camisasXL, pro);
  btnAtras.classList.add("active");
});

const btnXXL = document.querySelector(".btnXXL");
const camisasXXL = document.createElement("DIV");
camisasXXL.innerHTML += `
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

camisasXXL.classList.add("cards");
camisasXXL.setAttribute("data-aos", "fade-left");
camisasXXL.setAttribute("data-aos-duration", "800");

btnXXL.addEventListener("click", () => {
  products.replaceChild(camisasXXL, pro);
  btnAtras.classList.add("active");
});

const btnG = document.querySelector(".btnG");
const gorras = document.createElement("DIV");
gorras.innerHTML += `
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

gorras.classList.add("cards");
gorras.setAttribute("data-aos", "fade-left");
gorras.setAttribute("data-aos-duration", "800");

btnG.addEventListener("click", () => {
  products.replaceChild(gorras, pro);
  btnAtras.classList.add("active");
});

const btnJ = document.querySelector(".btnJ");
const jeans = document.createElement("DIV");
jeans.innerHTML += `
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

jeans.classList.add("cards");
jeans.setAttribute("data-aos", "fade-left");
jeans.setAttribute("data-aos-duration", "800");

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
