/*
EXERCICIO: Criar sistema simples separar os alunos por turma, idade e esportes
as turmas são 101, 102, 103, 104 e 105 | as idades estão entre 16 a 18 anos | os esportes são vôlei, basquete e futebol | ao todo são 50 alunos, 10 pra cada turma
// Definir as turmas, idades e esportes disponíveis
// Definir uma classe para representar cada aluno
// Criar um array para armazenar todos os alunos
// Adicionar 50 alunos aleatórios ao array
// Separar os alunos por turma
// Separar os alunos por idade
// Separar os alunos por esporte
// Exibir os alunos por turma, idade e esporte
*/

const turmas = ["101", "102", "103", "104", "105"];
const idades = [16, 17, 18];
const esportes = ["vôlei", "basquete", "futebol"];

class Aluno {
  constructor(nome, turma, idade, esporte) {
    this.nome = nome;
    this.turma = turma;
    this.idade = idade;
    this.esporte = esporte;
  }
}

let alunos = [];

for (let i = 0; i < 50; i++) {
  let nome = "Aluno " + (i + 1);
  let turma = turmas[Math.floor(Math.random() * turmas.length)];
  let idade = idades[Math.floor(Math.random() * idades.length)];
  let esporte = esportes[Math.floor(Math.random() * esportes.length)];
  alunos.push(new Aluno(nome, turma, idade, esporte));
}

let alunosPorTurma = {};
turmas.forEach(function(turma) {
  alunosPorTurma[turma] = [];
  alunos.forEach(function(aluno) {
    if (aluno.turma === turma) {
      alunosPorTurma[turma].push(aluno);
    }
  });
});

let alunosPorIdade = {};
idades.forEach(function(idade) {
  alunosPorIdade[idade] = [];
  alunos.forEach(function(aluno) {
    if (aluno.idade === idade) {
      alunosPorIdade[idade].push(aluno);
    }
  });
});

let alunosPorEsporte = {};
esportes.forEach(function(esporte) {
  alunosPorEsporte[esporte] = [];
  alunos.forEach(function(aluno) {
    if (aluno.esporte === esporte) {
      alunosPorEsporte[esporte].push(aluno);
    }
  });
});
