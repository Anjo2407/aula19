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
class Honda {
   modelo: string
    freio_ABS: boolean;
   vidros_eletricos: boolean;
    tracao4x4: boolean;


    constructor (modelo: string, freio_ABS: boolean, vidros_eletricos: boolean,tracao4x4: boolean){
        this.modelo = modelo;
        this.freio_ABS = freio_ABS;
        this.vidros_eletricos = vidros_eletricos;
        this.tracao4x4 = tracao4x4;
        

    }

   poderes(): void{
        console.log(`Qual o nome do modelo?  ${this.modelo}
        Este modelo de carro tem freio ABS? ${this.freio_ABS}. Apresenta vidros elétricos? ${this.vidros_eletricos}. O carro tem tração nas 4 rodas? ${this.tracao4x4}`);
    }
}

let carro = new Honda ("Civic", true, true, true);
carro.poderes()

