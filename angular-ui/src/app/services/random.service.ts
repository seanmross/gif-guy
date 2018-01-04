// Import libraries
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RandomGif } from './../models/gif.interface';
import 'rxjs/add/operator/map';

// Define service
@Injectable()
export class RandomService {
    private randomGifUrl:string;

    constructor(private http:Http){}
    
    getRandomGif(day:string):Observable<RandomGif> {
        this.randomGifUrl = `http://api.giphy.com/v1/gifs/random?tag=${day}&api_key=ues5dDLwsBAE8fH8tnzqyBzec472JcJD`;
    
        return this.http
                .get(this.randomGifUrl)
                .map((response: Response) => <RandomGif>response.json().data);
    }


}