const random = require('random');

/**
 * O metodo deve receber dois inteiros que representam o inicio e o fim de 
 * um intervalo e retornar umnumero aleatorio que se encontra dentro do 
 * intervalo estabelecido, ou seja, [inicio, fim]. Caso o inicio do 
 * intervalo ou o fim do intervalo sejam menor que zero, o metodo deve 
 * retornar -1. Ometodo tambem retorna -1 quando o inteiro representando o 
 * inicio do intervalo for maior ou igual aointeiro representando o fim do
 * intervalo. 
 * **/
function gerarNumeroAleatorio(inicio, fim) {
    
    const resp = {};

    if(fim < 0){
        resp.correto = -1;
        return resp;
    }
    else if (inicio >= fim){
        resp.correto = -2;
        return resp;
    }
    if(!Number. isInteger(inicio) || !Number. isInteger(fim)){
        resp.correto= -3; 
        return resp;   
    }
    else{
        resp.numero = Math.random() * (fim - inicio) + inicio;
        resp.correto = 1;
        return resp;
    }

}

/** 
 * O metodo recebe como entrada um inteiro positivo no intervalo entre 1 e 20, 
 * uma cadeia de caracteres desse comprimento, e um caracter. Caso o comprimento 
 * seja invalido ou o tamanho da cadeia não seja igual ao tamanho passado 
 * como parametro, retornar uma mensagem de erro. Se todos os dados forem válidos,
 *  o metodo deve retornar a posição na cadeia em que o caracter é encontrado pela 
 * primeira vez ou uma mensagem indicando que o caracter não está presente na 
 * cadeia.
 * **/

function acharCaracter(tamanho, cadeia, caracter) {

    const resp = {};

    if (tamanho < 1 || tamanho > 20){
        return "comprimento invalido";
    }
    if (cadeia.length !== tamanho){
        return "comprimento fornecido diferente do comprimento real";
    }
    for (let i = 0; i < cadeia.length; i++){
        const c = caracter;
        if (c === cadeia.charAt(i)){
            resp.localizacao = i;
            resp.encontrado = "caracter encontrado";
            return resp;
        }
    }

    
}

module.exports = { gerarNumeroAleatorio, acharCaracter };