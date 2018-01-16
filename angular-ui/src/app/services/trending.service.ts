import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Gif } from '../models/gif.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class TrendingService{
    public trendingEndpoint:string;

    constructor(public _http:Http){}

    getTrending():Observable<Gif[]>{
        this.trendingEndpoint = `https://api.giphy.com/v1/gifs/trending?&limit=16&api_key=${environment.api_key}`;
        return this._http.get(this.trendingEndpoint).map(
            (res:Response) => res.json().data);
    }
}
