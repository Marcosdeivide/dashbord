const body = document.querySelector("body")
const botaoTema = document.querySelector("#bolinha")


botaoTema.addEventListener("click", function () {
 body.classList.toggle("dark")
 console.log(body.classList.contains("dark"))
 botaoTema.textContent = "ola marcos"
})