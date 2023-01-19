/*

EXERCICÍOS SOBRE PROGRAMAÇÃO ORIENTADA A OBJETOS

EXERCÍCIO 1 - CRIAR UMA ESTRUTURA COM:

* UMA CLASSE DE MARCA DE CARROS ( DE SUA ESCOLHA )
* UMA SUBCLASSE DE MODELOS DE SUA ESCOLHA
* ATRIBUTOS DE VIDROS ELÉTRICOS, FREIOS ABS,
* E TRAÇÃO NAS QUATRO RODAS
* MÉTODOS DE ATIVAÇÃO NA TRAÇÃO
* MUDANÇA DE COMBUSTÍVEL (GÁS/GASOLINA - TRUE OR FALSE)
* MÉTODO ATIVAÇÃO DO FREIO ABS

EXERCÍCIO 2 - CRIAR UMA ESTRUTURA COM :

* UMA CLASSE DE SHOPPING DO RJ (DE SUA ESCOLHA)
* UMA SUBCLASSE TIPOS DE LOJAS DE SUA ESCOLHA(POR EXEMPLO. "ALIMENTAÇÃO", "VESTUÁRIO", "BRINQUEDOS")
* UMA SUBCLASSE DE LOJAS DE SUA ESCOLHA , (POR EXEMPLO, "MCDONALD'S", "RENNER", "RIHAPPY")

* A SUBCLASSE DE LOJAS TERÁ OS SEGUINTES ATRIBUTOS:
    * TAMANHO  DA LOJA, PRODUTO MAIS VENDIDO, ABERTO24HS
* MÉTODO: EXIBIR OS ATRIBUTOS DA LOJA
*/
var Honda = /** @class */ (function () {
    function Honda(modelo, freio_ABS, vidros_eletricos, tracao4x4) {
        this.modelo = modelo;
        this.freio_ABS = freio_ABS;
        this.vidros_eletricos = vidros_eletricos;
        this.tracao4x4 = tracao4x4;
    }
    Honda.prototype.poderes = function () {
        console.log("Qual o nome do modelo?  ".concat(this.modelo, "\n        Este modelo de carro tem freio ABS? ").concat(this.freio_ABS, ". Apresenta vidros el\u00E9tricos? ").concat(this.vidros_eletricos, ". O carro tem tra\u00E7\u00E3o nas 4 rodas? ").concat(this.tracao4x4));
    };
    return Honda;
}());
var carro = new Honda("Civic", true, true, true);
carro.poderes();
