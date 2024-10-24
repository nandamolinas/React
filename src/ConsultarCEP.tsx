import { Console } from "console";
import { useEffect } from "react";

function ConsultarCEP(){
    useEffect(( ) =>{
        //Método utilizado para executar qualquer código enquanto 
        //o componente está sendo aberto ou renderizado
        //Biblioteca de requisições  - AXIOS
        fetch("https://viacep.com.br/ws/01001000/json/")
            .then(resposta => {
                return resposta.json();
            }) 
       .then(cep => {
        console.log(cep);
       });
    }
    );

    return(
        <div> 
        <h1>Consultar CEP</h1>
        </div>
       
    );

}

export default ConsultarCEP;

//Exercicios 
// 1 Exibir os dados do cep no html 
// 2 Realizar a adquisicao para sua api
// 3 Resolver o problema de CORS na api
// Exibir a lista de produtos no HTML