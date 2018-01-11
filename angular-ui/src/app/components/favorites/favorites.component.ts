import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
    authToken:boolean;
    favorites:string[];

    constructor(
        private _tokenService:Angular2TokenService,
        private _authService:AuthService
    ){
        this.validateToken();
    }
    // Login logic
    isLoggedIn(): boolean {
        return this._authService.isLoggedIn();
    }
    isLoggedOut(): boolean {
        return !this._authService.isLoggedIn();
    }
    // Token validation logic - must validate token to access currentUserData property
    validateToken(): void {
        this._authService.validateToken().subscribe(
            res => {
                this.authToken = true;
            },
            err => {
                this.authToken = false;
            }
        );
    }
    

}