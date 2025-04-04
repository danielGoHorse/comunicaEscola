/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
// import { Aluno } from '../model/aluno';
import { map } from 'rxjs/operators';
import { Aluno } from '../interfaces/aluno';
import { Endereco } from '../interfaces/endereco';
import { Turma } from '../interfaces/turma';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private alunosCollections: AngularFirestoreCollection<Aluno>;
  private enderecoCollections: AngularFirestoreCollection<Endereco>;
  private turmaCollections: AngularFirestoreCollection<Turma>;


  constructor(private afs: AngularFirestore) {
    this.alunosCollections = this.afs.collection<Aluno>('Alunos');
    this.enderecoCollections = this.afs.collection<Endereco>('Endereco');
    this.turmaCollections = this.afs.collection<Turma>('Turma');
  }

  // getAlunos() {
  //   return this.alunosCollections.snapshotChanges().subscribe(res => {
  //     const data = res;
  //   });
  // }

  getAlunos() {
    return this.alunosCollections.snapshotChanges().pipe(
      map(act =>{
        return act.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        });
      })
    );
  }

  addAlunos(aluno: Aluno) {
    return this.alunosCollections.add(aluno);
  }

  getAluno(id: string) {
    return this.alunosCollections.doc<Aluno>(id).valueChanges();
  }

  updateAluno(id: string, aluno: Aluno) {
    return this.alunosCollections.doc<Aluno>(id).update(aluno);
  }

  deleteAluno(id: string) {
    return this.alunosCollections.doc(id).delete();
  }




  // getProducts() {
  //   return this.alunosCollections.snapshotChanges().pipe(
  //     return actions.mapmap(actions => {
  //       (a => {
  //         const data = a.payload.doc.data();
  //         const id = a.payload.doc.id;

  //         return { id, ...data };
  //       });
  //     })
  //   );
  // }


}
