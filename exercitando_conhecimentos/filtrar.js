const clientes = require("./clientes.json");

function filtrarApartamentosSemComplemento(clientes){
    return clientes.filter((cliente) =>{
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
};

const filtrados = filtrarApartamentosSemComplemento(clientes);

console.log(filtrados);

//TESTE PESSOAL PARA TESTAR APRENDIZADO

//function validarApartamento(clientes){
//    return clientes.filter((cliente) => {
//        return (
//            cliente.endereco.apartamento === true
//        );
//    });
//};
//const clientesMoradoresDeApartamento = validarApartamento(clientes);

//console.log(clientesMoradoresDeApartamento);
