import { Turma } from './turma';

export interface Professores {
  id?: string;
  cpf?: string;
  nome?: string;
  qtdeTurmas?: string;
  turmas?: Turma[];
}
