function Pessoa(nome, age){
    this.name;
    this.age;
    this.sayHello = function(){
        console.log(this.name + " diz olá")
    }
}

function Programador(cargo, salario, linguagem){
    this.cargo = cargo;
    this.salario = salario;
    this.linguagem = linguagem;

    Pessoa.call(this, nome, age);
}

function Designer(cargo, salario, ferramentas){
    this.cargo = cargo;
    this.salario = salario;
    this.ferramentas = ferramentas;

    Pessoa.call(this, nome, age);
}

const programador1 = new Programador('Pedro', 20, 'dev front-end', 3000, 'Html,css e js');
const programador2 = new Programador('José', 19, 'dev full-stack', 5000, 'Html,css,js,node,phyton');
const designer = new Designer('José', 25, 'designer grafico', 5000, 'Photoshop');