//variáveis
/*
let characterAge = 48;
console.log(characterAge);
let characterHeight = 1.75;
console.log(characterHeight);
let characterName = 'David';
console.log(characterName);
let ill = true;
console.log('Ill?: ' + ill);

//constantes
const Pi = 3.14159;
console.log(Pi);

//tipos primitivos
let palavra = 'Porta';
let numero = 32.5;
let aprovado = true;
let erros = undefined;
let acertos = null;
console.log(palavra);
console.log(numero);
console.log(aprovado);
console.log(erros);
console.log(acertos);

//tipagem dinâmica
console.log(typeof palavra);
console.log(typeof numero);
console.log(typeof aprovado);
console.log(typeof erros);
console.log(typeof acertos);

//objetos
let cor = {
	azul: 180,
	verde: 200,
	vermelho: 50,
	nome: 'azul celeste',
	tom: 'azulado'
};
console.log(cor);

//arrays
let triangulo = [28, 62, 90];
console.log(triangulo);

//functions
//verbo + substantivo
let numA = 45;
function somaNumero(num) {
	return num + 45;
}
console.log(somaNumero(numA));

//função simples
function mensagem(){
	console.log('Hello world!');
}

//função com retorno
function nomearCompleto(nomeA)
{
	return nomeA + ' Jacksonville';
}
console.log(nomearCompleto(cor.nome));

//operadores aritméticos
let numB = 6;
console.log(numero + numero);
console.log(numero - numero);
console.log(numero * numero);
console.log(numero / numero);
console.log(2 ** numB);
console.log(numero % 2);

//operadores de atribuição
numero += numA;
console.log(numero);
numero -= numB;
console.log(numero);
numero *= numB;
console.log(numero);
numero /= numA;
console.log(numero);
*/

//operadores de igualdade
console.log(2 === 3);
console.log('1' == 1);

//operador ternário
let valor = 500;
let salario = valor > 1045 ? 'minimo' : 'menor';
console.log(salario);

//operadores lógicos 
console.log('true && true: ', true && true);
console.log('true || false: ', true || false);
console.log('Not true', !true);

//comparações de não booleanos
//falsy
//undefined
//null
//0
//false
//''
//NaN - Not a number

//Truthy
//qualquer outro dado exceto os valores falsy
let corNula = '';
let minhaCor = 'Azul';
console.log(corNula || minhaCor);