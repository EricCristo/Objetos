const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550",  "1144444440"],

};

cliente.enderecos = [
    {
    rua: "cor leite",
    numero: 116,
    apartamento: true,
    complemento: "R/C esq"
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
};

ligaParaCliente(...cliente.telefone);

const envio = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(envio);