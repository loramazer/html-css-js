let livro =[{
    titulo: "livro1",
    autor: "autor1",
    ano: 2020,
},
{titulo: "livro2", autor: "autor2", ano: 2022},
{titulo: "livro3", autor: "autor3", ano: 2017},
]    

livro.forEach(function(livro) {
console.log(livro.titulo + " escrito por " + livro.autor + " em "+livro.ano);
});

let pessoa ={
    nome: "Thiago",
    profissao: "estudante",
    idade: 20,
    cidade: "Ponta Grossa",
}  

console.log("Olá "+pessoa.nome+" idade "+pessoa.idade+" profissao "+pessoa.profissao+" cidade "+pessoa.cidade);
