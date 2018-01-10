import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifByIdService } from '../../services/gif-by-id.service';
import { Gif } from '../../models/gif.interface';

@Component({
    selector: 'gif-details',
    templateUrl: './gif-details.component.html',
    styleUrls: ['./gif-details.component.scss']
})
export class GifDetailsComponent implements OnInit{
    private sub:any;
    public id:string;
    public gif:Gif;
    public title:string;

    constructor(
        private route:ActivatedRoute,
        private _gifById:GifByIdService
    ){}
    
    // Set id property from route params
    // Call gifById service to set gif property

    ngOnInit(){
        this.sub = this.route.params.subscribe(
            params => {
                this.id = params['id'];
                this._gifById.getGifById(this.id).subscribe(
                    res => {
                        this.gif = res;
                        console.log(res);
                        this.title = this.gif.title;
                    },
                    err => {
                        console.log(err);
                    }
                )
            },
            err => {
                console.log(err);
            }
        )
    }    
}