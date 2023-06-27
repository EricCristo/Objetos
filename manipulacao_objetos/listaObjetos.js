const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550",  "1144444440"],

};

cliente.enderecos = [{
    rua: "cor leite",
    numero: 116,
    apartamento: true,
    complemento: "R/C esq"
},
];

cliente.enderecos.push({
    rua: "são pedro",
    numero: 599,
    apartamento: false,
    complemento: ""
})

const listaApenasApartamentos = cliente.enderecos.filter(
    (teste) => teste.apartamento === true
);


console.log (listaApenasApartamentos);