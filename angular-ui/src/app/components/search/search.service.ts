// Import libraries
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

/*
|--------------------------------------------------------------------------
| Search Service
|--------------------------------------------------------------------------
|    * Implements phrase logic (replace spaces with '+') before API call
|    * Data binding would reveal '+' in the view if logic were in controller
 */

@Injectable()
export class SearchService {
    private searchUrl:string;

    constructor(private http:Http){}
    
    search(searchStr:string, page:number, perPage:number):Observable<any>{
        if (searchStr.includes(' ')) {
            searchStr = searchStr.replace(/ /g, '+');
        }
        this.searchUrl = `http://api.giphy.com/v1/gifs/search?q=${searchStr}&offset=${page}&limit=${perPage}&api_key=${environment.api_key}`;
        return this.http
                .get(this.searchUrl)
                .map((response: Response) => response.json());
    }

}