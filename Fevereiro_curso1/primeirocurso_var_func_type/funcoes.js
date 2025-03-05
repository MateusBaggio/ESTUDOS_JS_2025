// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

    function saudacao(nome){
        return console.log(`Olá, ${nome}`);
    }

    saudacao('Marcos');

// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

    function maioridade(idade){
        if(idade < 18){
            return console.log(`Você é MENOR de idade, pois tem ${idade}`);
        }
        else{
            return console.log(`Você é MAIOR de idade, pois tem ${idade}`);
        }
    }

    maioridade(18);
    maioridade(10);

// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). 
// Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

    function polindromo(palavra){
        const palavra_inversa = palavra.split('').reverse().join('');
        
        if(palavra === palavra_inversa){
            return console.log(`A palavra ${palavra} É um políndromo`);
        }
        else{
            return console.log(`A palavra ${palavra} NÃO é um políndromo`);
        }
    }

    polindromo('ana')
    polindromo('Mateus')


// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) 
// para comparar os valores e determinar o maior. Imprima o maior valor no console.

    function maior_valor(valorA, valorB, valorC){
        if(valorA > valorB && valorC){
            return console.log(`${valorA} é maior que ${valorB} e ${valorC}`);
        }
        else if (valorB > valorA && valorC){
            return console.log(`${valorB} é maior que ${valorA} e ${valorC}`);
        }
        else if (valorC > valorB && valorA){
            return console.log(`${valorC} é maior que ${valorA} e ${valorB}`);
         }
         else{
            return console.log('Nehnum valor é maior que o outro');
         }
    }

        maior_valor(1,2,3);
        maior_valor(1,1,2);
        maior_valor(1,1,1);
