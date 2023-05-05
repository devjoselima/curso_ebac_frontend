const alunos = [
    {nome: "Jose", nota: 10},
    {nome: "Duda", nota: 6},
    {nome: "João", nota: 5},
  ]
  
  function alunosAprovados(){
    const aprovados = alunos.filter(aluno => aluno.nota >= 6);
    return aprovados.map(aluno => aluno.nome);
  }
  
  console.log(alunosAprovados())
  
  
  
  
  