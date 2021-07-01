/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
// import { endereco } from '../model/endereco';
import { map } from 'rxjs/operators';
import { Endereco } from '../interfaces/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private enderecoCollections: AngularFirestoreCollection<Endereco>;


  constructor(private afs: AngularFirestore) {
    this.enderecoCollections = this.afs.collection<Endereco>('Endereco');

  }

  // getendereco() {
  //   return this.enderecoCollections.snapshotChanges().subscribe(res => {
  //     const data = res;
  //   });
  // }

  getEnderecos() {
    return this.enderecoCollections.snapshotChanges().pipe(
      map(act =>{
        return act.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        });
      })
    );
  }

  addEndereco(endereco: Endereco) {
    return this.enderecoCollections.add(endereco);
  }

  getEndereco(id: string) {
    return this.enderecoCollections.doc<Endereco>(id).valueChanges();
  }

  updateEndereco(id: string, endereco: Endereco) {
    return this.enderecoCollections.doc<Endereco>(id).update(endereco);
  }

  deleteEndereco(id: string) {
    return this.enderecoCollections.doc(id).delete();
  }




  // getProducts() {
  //   return this.enderecoCollections.snapshotChanges().pipe(
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
