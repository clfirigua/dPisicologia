import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Roles } from '../../interfaces/roles.interface';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  roleCollection:AngularFirestoreCollection<Roles> ;
  rol:Observable<Roles[]>;

  constructor(public db:AngularFirestore) {
    this.roleCollection= this.db.collection('Usuarios', ref => ref.where('estado', '==', 'Activo'));
    this.rol = this.roleCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(
        a=>{
          const data = a.payload.doc.data() as Roles;
          data.id = a.payload.doc.id;
          return data
        }
      )
    }))
   }
   
  getRoles(){
    
  }

}
