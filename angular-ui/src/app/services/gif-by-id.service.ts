// Import libraries
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Gif } from './../models/gif.interface';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

// Define service
@Injectable()
export class GifByIdService {
    private searchUrl: string;

    constructor(private _http: Http) { }

    getGifById(id: string): Observable<Gif> {
        this.searchUrl = `http://api.giphy.com/v1/gifs/${id}?api_key=${environment.api_key}`;

        return this._http
            .get(this.searchUrl)
            .map((response: Response) => <Gif>response.json().data);
    }


}