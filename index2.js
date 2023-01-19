var Shopping = /** @class */ (function () {
    function Shopping(nome, alimentacao, vestuario, brinquedos) {
        this.nome = nome;
        this.alimentacao = alimentacao;
        this.vestuario = vestuario;
        this.brinquedos = brinquedos;
    }
    Shopping.prototype.poderes = function () {
        console.log("Qual o nome do shopping? ' ".concat(this.nome, "\n        O shopping tem pra\u00E7a de alimenta\u00E7\u00E3o? ").concat(this.alimentacao, ". Tem vestu\u00E1rio? ").concat(this.vestuario, ". Tem brinquedos? ").concat(this.brinquedos));
    };
    return Shopping;
}());
var loja = new Shopping("Iguatemi", true, true, true);
loja.poderes();
