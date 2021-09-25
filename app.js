'use strict';

const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

function cepInvalido(){
    alert(`O CEP Informado é Invalido`)
}

const pesquisaCep = async () => {
    const cep = document.getElementById('cep').value ;

    // Pre requisitos 
    if(isNaN(cep)){
        return cepInvalido()
    }

    const url = `http://viacep.com.br/ws/${cep}/json/`
    const dados = await fetch(url)
    const endereco = await dados.json()
    if(endereco.hasOwnProperty('erro')){
       return cepInvalido()
    } else {
        preencherFormulario(endereco)
    }
 

 }
function informarNumero(){
    alert(`Por favor informe o numero do endereco`)
}


const limparFormulario = (endereco) =>{
    const todosInputs = document.querySelectorAll(".inputbox > input");

    const inputs = Array.from(todosInputs); // 
    const checarInputs = inputs.every((input) => input.value); // função every ele vai percorrer o array, se tiver alguma input vazia ele retorna false, e se tiver tudo ok ele vai limpar
  
    if (checarInputs) {
      console.log("OLA");
      inputs.forEach((input) => (input.value = ""));
      console.log(inputs[0].value, "<<<<<");
      alert("Enviado com sucesso");
    } else {
        alert('Preencha todos os dados')
        }
}


 document.getElementById('salvar').addEventListener('click', limparFormulario)

    


document.getElementById('cep')
    .addEventListener('focusout', pesquisaCep);
