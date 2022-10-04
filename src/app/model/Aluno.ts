import { Pessoa } from './Pessoa';
export class Aluno extends Pessoa {
  aluno: Array<Pessoa>;
  constructor(nome: string, idade: number, aluno: Array<Pessoa>) {
    super(nome, idade);
    this.aluno = aluno;
  }


}
