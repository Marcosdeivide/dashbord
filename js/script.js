const body = document.querySelector("body");
const botaoTema = document.querySelector("#btn-tema");
const producaoElemento = document.querySelector("#producao");
const botaomais = document.querySelector("#mais");
const botaomenos = document.querySelector("#menos");

let producao = 2;
let clique = 0;

botaoTema.addEventListener("click", function () {
  body.classList.toggle("dark");
  console.log(body.classList.contains("dark"));

  clique = clique + 1;
  console.log(clique);

  if (body.classList.contains("dark")) {
    botaoTema.textContent = "☀️ Modo Claro";
  } else {
    botaoTema.textContent = "🌙 Modo Escuro";
  }
});
botaomais.addEventListener("click", function () {
   producao = producao + 1 ;
   console.log(producao);

   producaoElemento.textContent = producao + "un"

});
botaomenos.addEventListener("click", function () {
   if (producao > 0){
    producao = producao - 1;
    
   console.log(producao);

   producaoElemento.textContent = producao + "un"
    
   }
   

  

});
