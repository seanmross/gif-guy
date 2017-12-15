import { Component } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: './search.component.html'
})
export class SearchComponent {

    searchStr:string;

    searchGifs(){
        //service call
        console.log(this.searchStr);
    }

}