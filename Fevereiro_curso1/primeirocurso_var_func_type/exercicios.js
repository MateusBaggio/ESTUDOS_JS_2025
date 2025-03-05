//ex1

function ex1(){

let nome = 'Mateus';
let idade = 15;
let vive = true;

console.log(typeof(nome), typeof(idade), typeof(vive));

}

//ex2

function ex2(){

    let firstName = 'Mateus';
    let lastName = 'Baggio';
    let nomeCompleto = firstName.concat(lastName);

    console.log(firstName.concat(lastName));
    console.log(firstName + lastName);
    console.log(`meu nome é : ${nomeCompleto}`)
}

//ex3

function ex3(){

    let nome = 'Mateus';
    let idade = 16;
    let juncao = `meu nome é ${nome} e eu tenho ${idade} anos`;

    console.log(juncao);
}

//ex4

function ex4(){
    let homem = 1;

    console.log(homem);

    homem = 2;

    console.log(homem);
}

function ex5(){

    let chuva = true;

    if (chuva = true){
        console.log('leve guarda chuvas')
    }else{
        console.log('vai tranquilo')
    }
}

