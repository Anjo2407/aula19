class Shopping {
    nome: string
    alimentacao: boolean;
    vestuario: boolean;
    brinquedos: boolean;
    

    constructor (nome: string, alimentacao: boolean, vestuario: boolean, brinquedos: boolean){
        this.nome = nome;
        this.alimentacao = alimentacao;
        this.vestuario = vestuario;
        this.brinquedos = brinquedos;

    }

   poderes(): void{
        console.log(`Qual o nome do shopping? ' ${this.nome}
        O shopping tem praça de alimentação? ${this.alimentacao}. Tem vestuário? ${this.vestuario}. Tem brinquedos? ${this.brinquedos}`);
    }
}

let loja = new Shopping( "Iguatemi", true, true,true);
loja.poderes()