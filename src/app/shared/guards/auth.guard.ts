import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private login:LoginService, private router: Router ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.login.verificarAuth().pipe(
      tap(estado =>{
        if(!estado){
          console.log(estado)
          this.router.navigate(['./'])
        }
      })
    )
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      console.log('canload')
      return this.login.verificarAuth().pipe(
        tap(estado =>{
          if(!estado){
            console.log(estado)
            this.router.navigate(['./'])
          }
        })
      )
  }
}
