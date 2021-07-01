import { Turma } from './turma';

export interface Aluno {

  id?: string;
  cpf?: string;
  nome?: string;
  codigo?: number;
  foto?: string;
  email?: string;
  pai?: boolean;
  mae?: string;
  mensagem?: string;
  rg?: string;
  dataNascimento?: string;
  idade?: string;
  nomeResp?: string;
  telResp?: string;
  celResp?: string;
  religiao?: string;
  nomeEmerg?: string;
  celEmerg?: string;
  telEmerg?: string;
  temConvenio?: string;
  nomeConvenio?: string;
  alergia?: boolean;
  nomeAlergia?: string;
  deficiencia?: boolean;
  nomeDeficiencia?: string;
  tipoSanguinio?: string;
  genero?: string;
  escola?: string;
  serie?: string;
  turma?: Turma;
  periodo?: string;
  userId?: string;
  cerateAdt?: number;
  ocorrencia?: string;
}
