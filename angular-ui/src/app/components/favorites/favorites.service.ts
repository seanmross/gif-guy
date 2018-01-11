// Import libraries
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Gif } from '../../models/gif.interface';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FavoritesService{
    url:string = 'api/favorites';

    constructor(
        private _http:HttpClient,
        private _tokenService:Angular2TokenService
    ){}

    saveToFavorites(values) {
        return this._tokenService.post(this.url, values);
    }
}