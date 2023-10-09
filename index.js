// const numeros = [1,2,5,10,22,18,77,100,920,1235]
// const result = numeros.filter((numeros) => numeros % 2 === 0)
// const pegar = document.querySelector("#resultado")
// pegar.innerHTML = result

const convidado = document.getElementById("convidado");
const btnSend = document.getElementById("btnSend");
const lista = document.getElementById("lista");
const filter = document.getElementById("filter");
const convidados = [];

function renderList(array){
    const resultado = lista.innerHTML = array
    .map((convidado) => {
      return `<li>${convidado}</li>`;
    })
    .join("");

    return resultado
}
function renderConvidados(){
    convidados.push(convidado.value);
      renderList(convidados)
      convidado.value = ''

}
btnSend.addEventListener("click", renderConvidados);
filter.addEventListener("input", () => {
  const convidadosFiltrados = convidados.filter((convidado) =>
    convidado.toLowerCase().includes(filter.value)
    );
    renderList(convidadosFiltrados)
});
