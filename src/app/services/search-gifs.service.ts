// Import libraries
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { Gif } from './../models/gif.interface';
import 'rxjs/add/operator/map';

/*
|--------------------------------------------------------------------------
| Search GIFs Service
|--------------------------------------------------------------------------
|    * Implements phrase logic (replace spaces with '+') before API call
|    * Data binding would reveal '+' in the view if logic were in controller
 */

@Injectable()
export class SearchGifsService {
    private searchUrl:string;

    constructor(private http:Http){}
    
    searchGifs(searchStr:string, page:number):Observable<any>{
        if (searchStr.includes(' ')) {
            searchStr = searchStr.replace(/ /g, '+');
        }
        this.searchUrl = `http://api.giphy.com/v1/gifs/search?q=${searchStr}&offset=${page}&api_key=ues5dDLwsBAE8fH8tnzqyBzec472JcJD`;
        return this.http
                .get(this.searchUrl)
                .map((response: Response) => response.json());
    }

}