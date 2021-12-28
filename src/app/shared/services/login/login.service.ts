import { Injectable } from '@angular/core';
import { Usuarios } from '../../interfaces/usuarios.interface';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public firestore: AngularFirestore) {
  }
  getiduser(user:string){
    return this.firestore.collection<Usuarios>('Usuarios', ref => ref.where('correo', '==', user)).valueChanges();
  }
  verificarAuth():Observable<boolean>{
    if(!localStorage.getItem('data')){
      return of(false) 
    }else{
      return of(true)
    }
  }
}
