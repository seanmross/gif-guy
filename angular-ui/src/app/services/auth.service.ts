import { Injectable, Output, EventEmitter } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  userSignedIn$: Subject<boolean> = new Subject();

  constructor(
    public tokenAuthService: Angular2TokenService
  ) {
    this.tokenAuthService.validateToken().subscribe(
      res => {
        if (res.status == 200) {
          this.userSignedIn$.next(true);
        }
      },
      err => {
        this.userSignedIn$.next(false);
        console.log(err.statusText);
      }
    );
  }

  logOutUser(): Observable<Response> {
    return this.tokenAuthService.signOut().map(
      res => {
        this.userSignedIn$.next(false);
        return res;
      }
    );
  }

  registerUser(signUpData: { email: string, password: string, passwordConfirmation: string }): Observable<Response> {
    return this.tokenAuthService.registerAccount(signUpData).map(
      res => {
        this.userSignedIn$.next(true);
        return res;
      }
    );
  }

  logInUser(signInData: { email: string, password: string }): Observable<Response> {
    return this.tokenAuthService.signIn(signInData).map(
      res => {
        this.userSignedIn$.next(true);
        return res;
      }
    );
  }

}