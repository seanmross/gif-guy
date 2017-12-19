// Import libraries
import { Component, OnInit } from '@angular/core';
import { SearchGifsService } from './../../services/search-gifs.service';
import { Observable } from 'rxjs/Rx';
import { Gif } from './../../models/gif.interface';
import { Pagination } from './../../models/pagination.interface';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/*
|--------------------------------------------------------------------------
| Search Component
|--------------------------------------------------------------------------
|    * Use searchResult property so 2-way data binding doesn't update view
 */

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    // Declare search query param properties & set default values
    public searchStr: string;
    public currentPage: number = 1;
    public limit: number = 20;
    public offset: number;
    // Declare data properties & response types
    public gifs: Gif[];                
    public paginationData: Pagination;    
    // Declare properties for view purposes only
    public searchResult: string;         
    
    // Inject services
    constructor(
        private searchGifsService:SearchGifsService
    ){}
    
    // Search GIFs for a word or phrase
    searchGifs(){
        // Calculate offset
        this.offset = (this.currentPage - 1) * this.limit;
        // Call API & save response data
        this.searchGifsService.searchGifs(this.searchStr, this.offset, this.limit)
            .subscribe( response => {
                this.gifs = response.data;
                this.paginationData = response.pagination;
            });
        // Save search string
        this.searchResult = this.searchStr;
    }

    setPageSize(pageSize:number){
        this.limit = pageSize;
        this.searchGifs();
    }

}