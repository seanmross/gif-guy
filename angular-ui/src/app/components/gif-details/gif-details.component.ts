import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifByIdService } from '../../services/gif-by-id.service';
import { Gif } from '../../models/gif.interface';
import { FavoritesService } from '../favorites/favorites.service';
import { FlashMessagesService } from 'angular2-flash-messages';

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
        private _gifById:GifByIdService,
        private _favorites:FavoritesService,
        private _flashMessages:FlashMessagesService
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
        );
    }
    
    onFavorite(){
        //import favorites service
        this._favorites.saveToFavorites({"giphy_id": this.id}).subscribe(
            res => {
                if (res.status == 200){
                    console.log('saved to favorites!');
                    this._flashMessages.show('Saved to favorites!', { cssClass: 'alert-success', timeout: 3000 });
                }
            },
            err => {
                console.log(err);
                this._flashMessages.show('Already saved to favorites', { cssClass: 'alert-danger', timeout: 3000 });
            }
        );
    }

}