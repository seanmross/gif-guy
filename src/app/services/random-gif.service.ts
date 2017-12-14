// Import libraries
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Gif } from './../models/gif.interface';
import 'rxjs/add/operator/map';

// Define service
@Injectable()
export class RandomGifService {
    private url:string;

    constructor(private http:Http) { }
    
    getRandomGif(day:string):Observable<Gif> {
        this.url = `http://api.giphy.com/v1/gifs/random?api_key=ues5dDLwsBAE8fH8tnzqyBzec472JcJD&tag=${day}`;
    
        return this.http
                .get(this.url)
                .map((response:Response) => response.json());
    }


}