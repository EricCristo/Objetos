const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
  }

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "email", "jelphey4@wikipedia.org");

console.log(encontrado);
console.log(encontrado2);

//teste pessoal
//function encontrarApt(lista, chave, valor) {
//    return lista.find((apt) => apt[chave].includes(valor));
//  }

//const listaMoradoresApartamento = encontrarApt(endereco, "apartamento", true);

//console.log(listaMoradoresApartamento);