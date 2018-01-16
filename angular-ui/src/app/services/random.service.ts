// Import libraries
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RandomGif } from './../models/gif.interface';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

// Define service
@Injectable()
export class RandomService {
    private randomGifUrl:string;

    constructor(private _http:Http){}
    
    getRandomGif(day:string):Observable<RandomGif> {
        this.randomGifUrl = `http://api.giphy.com/v1/gifs/random?tag=${day}&api_key=${environment.api_key}`;
    
        return this._http
                .get(this.randomGifUrl)
                .map((response: Response) => <RandomGif>response.json().data);
    }


}