import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Angular2TokenService, UserData } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    redirectUrl:string;
    
    constructor(
        private _tokenService:Angular2TokenService,
        private router:Router
    ){}

    login(email: string, password: string):Observable<Response>{
        return this._tokenService.signIn({
            email: email,
            password: password
        });
    }

    signup(email: string, password: string):Observable<Response>{
        return this._tokenService.registerAccount({
            email: email,
            password: password,
            passwordConfirmation: password
        });
    }

    logout():void{
        this.redirectUrl = undefined;
        this._tokenService.signOut();
        this.router.navigate(['/']);
    }

    isLoggedIn():boolean{
        return this._tokenService.userSignedIn();
    }

    validateToken():Observable<Response>{
        return this._tokenService.validateToken();
    }

    getCurrentUserData():UserData{
        return this._tokenService.currentUserData;
    }

}