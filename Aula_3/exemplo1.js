let arrayEscolas = [{
    nome: "Escola Happy Code",
    numMatriculados: 100,
},
{
    nome: "Facens",
    numMatriculados: 3000,
},
{
    nome: "ETEC",
    numMatriculados: 500,
},
{
    nome: "Fatec",
    numMatriculados: 1000,
},
{
    nome: "USP",
    numMatriculados: 99,
}];

let escolasFiltradas = arrayEscolas.filter((x) => x.numMatriculados >= 100);

escolasFiltradas.forEach(y => console.log(y.nome));