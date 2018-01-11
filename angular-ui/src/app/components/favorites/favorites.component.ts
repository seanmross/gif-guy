import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from '../auth/auth.service';
import { FavoritesService } from './favorites.service';
import { GifByIdService } from '../../services/gif-by-id.service';
import { Gif } from '../../models/gif.interface';
import { Favorite } from './favorite.interface';

@Component({
    selector: 'favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
    authToken:boolean;
    favorites:Favorite[];
    favoriteGifs:Gif[] = [];

    constructor(
        private _tokenService:Angular2TokenService,
        private _authService:AuthService,
        private _favorites:FavoritesService,
        private _gifById:GifByIdService
    ){
        this.validateToken();
        this.getFavorites();
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

    getFavorites(){
        this._favorites.getFavorites().map(res => res.json()).subscribe(
            res => {
                this.favorites = res;
                this.favorites.forEach(favorite => {
                    this._gifById.getGifById(favorite.giphy_id).subscribe(res => {
                        this.favoriteGifs.push(res);
                    })
                });
            },
            err => {
                console.log(err);
            }
        )
    }
    

}