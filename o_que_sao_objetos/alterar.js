const pessoa = {
    nome: "Alexya",
    profissao: "engenheira"
}

console.log(pessoa.nome);

                  //nao foi declarada ---> UNDEFINED
console.log(pessoa.telefone);


pessoa.telefone = "351 932 239 857";
console.log(pessoa.telefone);


pessoa.nome = "Alexya Mayara";

console.log(pessoa);

const novaPessoa = {
    nome: "Anny",
}

//nao podemos reatribuir a const, mas podemos mexer nos valores internos
pessoa = novaPessoa