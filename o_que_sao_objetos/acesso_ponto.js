const cliente = {
    nome: "andre",
    idade: 32,
    cpf: "11223311111",
    email: "andre@dominio.com",
}
                                    //chamar apenas uma propriedade
console.log(`O nome do Cliente é "${cliente.nome}" e ele tem "${cliente.idade}"`);

                                                            //pegar parte da string
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
                                                                    //inicio ,  final