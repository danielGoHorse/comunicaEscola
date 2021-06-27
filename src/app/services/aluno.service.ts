import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
import { Aluno } from '../model/aluno';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private alunosCollections: AngularFirestoreCollection<Aluno>;


  constructor(private afs: AngularFirestore) {
    this.alunosCollections = this.afs.collection<Aluno>('Alunos');
  }

  getAlunos() {
    return this.alunosCollections.snapshotChanges().subscribe(res => {
      const data = res;
    });
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
