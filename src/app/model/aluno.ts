import { Ocorrencia } from "./ocorrencia";

export class Aluno {

    public id: string;
    public cpf: string;
    public nome: string;
    public codigo: number;
    public email: string;
    public pai: boolean;
    public mae: string;
    public mensagem: string;
    public ocorrencia: Ocorrencia;

}
