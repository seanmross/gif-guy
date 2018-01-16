import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifByIdService } from '../../services/gif-by-id.service';
import { Gif } from '../../models/gif.interface';
import { FavoritesService } from '../favorites/favorites.service';
import { MatDialog } from '@angular/material';
import { CopyLinkDialogComponent } from './dialog/copy-link-dialog.component';

@Component({
    selector: 'gif-details',
    templateUrl: './gif-details.component.html',
    styleUrls: ['./gif-details.component.scss']
})
export class GifDetailsComponent implements OnInit, OnDestroy {
    id:string;
    gif:Gif;
    title:string;
    textToCopy:string;
    favoriteErrors:any;
    flashSuccessRes:string;
    flashFailureRes:string;
    flashSuccess:boolean = false;
    flashFailure:boolean = false;
    
    getGifsSub;
    favoriteSub;

    constructor(
        private _gifById:GifByIdService,
        private _favorites:FavoritesService,
        private route:ActivatedRoute,
        public dialog: MatDialog
    ){}
    
    // Set id property from route params
    // Call gifById service to set gif property
    ngOnInit(){
        this.getGifsSub = this.route.params.subscribe(
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
    
    // Call favorites service
    onFavorite(){
        this.favoriteSub = this._favorites.saveToFavorites({"giphy_id": this.id}).subscribe(
            res => {
                if (res.status == 200){
                    this.flashSuccess = true;
                    this.flashSuccessRes = 'Saved to Favorites!';
                    setTimeout(() => {
                        this.flashSuccess = false;
                    }, 3000);
                }
            },
            err => {
                this.flashFailure = true;
                this.flashFailureRes = err._body;
                setTimeout(() => {
                    this.flashFailure = false;
                }, 3000);
            }
        );
    }
    
    // Open GIF links dialog
    openDialog():void{
        let dialogRef = this.dialog.open(CopyLinkDialogComponent, {
            width: '600px',
            data: {
                url: this.gif.url,
                bitly_url: this.gif.bitly_url,
                embed_url: this.gif.embed_url
            }
        });
    }

    ngOnDestroy(){
    }
    
}
