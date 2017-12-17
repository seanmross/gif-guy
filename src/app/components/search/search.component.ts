// Import libraries
import { Component, OnInit } from '@angular/core';
import { SearchGifsService } from './../../services/search-gifs.service';
import { Observable } from 'rxjs/Rx';
import { Gif } from './../../models/gif.interface';

/*
|--------------------------------------------------------------------------
| Search Component
|--------------------------------------------------------------------------
|    * Use searchResult property so 2-way data binding doesn't update on view
 */

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    public searchStr:string;
    public gifs:Gif[];
    public searchResult: string;

    constructor(
        private searchGifsService:SearchGifsService
    ){}

    searchGifs(){
        this.searchGifsService.searchGifs(this.searchStr)
            .subscribe( response => {
                this.gifs = response;
            });
            this.searchResult = this.searchStr;
    }

}