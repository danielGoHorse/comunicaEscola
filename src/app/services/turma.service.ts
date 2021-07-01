/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
// import { turma } from '../model/turma';
import { map } from 'rxjs/operators';
import { Turma } from '../interfaces/turma';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  private turmaCollections: AngularFirestoreCollection<Turma>;


  constructor(private afs: AngularFirestore) {

    this.turmaCollections = this.afs.collection<Turma>('Turma');
  }

  // getturmas() {
  //   return this.turmasCollections.snapshotChanges().subscribe(res => {
  //     const data = res;
  //   });
  // }

  getTurmas() {
    return this.turmaCollections.snapshotChanges().pipe(
      map(act =>{
        return act.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        });
      })
    );
  }

  addTurmas(turma: Turma) {
    return this.turmaCollections.add(turma);
  }

  getTurma(id: string) {
    return this.turmaCollections.doc<Turma>(id).valueChanges();
  }

  updateTurma(id: string, turma: Turma) {
    return this.turmaCollections.doc<Turma>(id).update(turma);
  }

  deleteTurma(id: string) {
    return this.turmaCollections.doc(id).delete();
  }




  // getProducts() {
  //   return this.turmasCollections.snapshotChanges().pipe(
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
