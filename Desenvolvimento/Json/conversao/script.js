// Converter objeto JavaScript para JSON
const pessoa = { nome: "João", idade: 30 };
const jsonPessoa = JSON.stringify(pessoa);
console.log(jsonPessoa); // {"nome":"João","idade":30}
// Converter JSON para objeto JavaScript
const jsonString = '{"nome": "Maria", "idade": 25}';
const objetoPessoa = JSON.parse(jsonString);
console.log(objetoPessoa.nome); // Maria