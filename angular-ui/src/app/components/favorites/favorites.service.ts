// Import libraries
import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class FavoritesService{
    url:string = 'api/favorites';

    constructor(
        private _tokenService:Angular2TokenService
    ){}

    saveToFavorites(values) {
        return this._tokenService.post(this.url, values);
    }
}