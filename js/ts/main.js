"use strict";
var empresa;
(function (empresa) {
    let p = new empresa.Pessoa();
    p.nome = "Daniele";
    p.anoNasc = 2008;
    document.getElementById("nome").textContent = p.nome;
    document.getElementById("ano").textContent = p.anoNasc.toString();
    document.getElementById("idade").textContent = p.calcularidade(2025).toString();
})(empresa || (empresa = {}));
