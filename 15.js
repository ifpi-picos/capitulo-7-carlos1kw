const listaDeFilmes = [
   "Homem de Ferro", 
   "Sonic", 
   "Hulk", 
   "Moana", 
   "Hostis",
  ];
function buscarFilmeNaLista(titulo) {

    if (listaDeFilmes.includes(titulo)) {
        return `O filme '${titulo}' foi encontrado na lista!`;
    }else{
    return `O filme '${titulo}' não foi encontrado na lista!`
    }
}
const tituloFilme = prompt("Digite o título do filme que deseja buscar:");
const resultado = buscarFilmeNaLista(tituloFilme);
console.log(resultado);


