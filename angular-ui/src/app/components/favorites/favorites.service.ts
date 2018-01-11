// Import libraries
import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class FavoritesService{
    favoritesUrl:string = 'api/favorites';

    constructor(
        private _tokenService:Angular2TokenService
    ){}

    saveToFavorites(giphy_id):Observable<Response>{
        return this._tokenService.post(this.favoritesUrl, giphy_id);
    }

    getFavorites():Observable<Response>{
        return this._tokenService.get(this.favoritesUrl);
    }
}