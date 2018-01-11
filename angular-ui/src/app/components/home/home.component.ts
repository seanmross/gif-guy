import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { RandomService } from './../../services/random.service';
import { Observable } from 'rxjs/Rx';
import { RandomGif } from '../../models/gif.interface';
import { environment } from '../../../environments/environment';
import { TrendingService } from '../../services/trending.service';
import { Gif } from '../../models/gif.interface';
import { AuthService } from '../auth/auth.service';
import { GifByIdService } from '../../services/gif-by-id.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  randomGif:RandomGif;
  currentDay:string;
  trendingGifs:Gif[];
  date = new Date();
  authToken:boolean;
  gif:Gif;
  title:string;
  id:string;
  
  constructor( 
    private _randomService: RandomService,
    private _trendingService: TrendingService,
    private _authService:AuthService,
    private _gifByIdService:GifByIdService
  ){}

  ngOnInit(){
    this.getRandomGif();
    this.getTrendingGifs();
    this.validateToken();
  }

  getCurrentDay(){
    let currentDayIndex:number = this.date.getDay();
    const days: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    this.currentDay = days[currentDayIndex];
    return this.currentDay;
  }
  
  getRandomGif(){
    this._randomService.getRandomGif(this.getCurrentDay()).subscribe(
      res => {
        this.randomGif = res;
        this.id = this.randomGif.id;
        this._gifByIdService.getGifById(this.id).subscribe(
          res => {
            this.gif = res;
            this.title = this.gif.title;
            this.id = this.randomGif.id;
            if (this.title.includes(' ')) {
              this.title = this.title.replace(/ /g, '-');
            }
          }
        )
      });
  }

  getTrendingGifs(){
    this._trendingService.getTrending().subscribe(
      res => {
        this.trendingGifs = res;
        this.trendingGifs.forEach( gif => {
          if (gif.title.includes(' ')) {
            gif.title = gif.title.replace(/ /g, '-');
          }
        })
      },
      err => {
        console.log(err);
      }
    );
  }

  // Login logic
  isLoggedIn(): boolean {
    return this._authService.isLoggedIn();
  }
  isLoggedOut(): boolean {
    return !this._authService.isLoggedIn();
  }

  // Token validation logic
  validateToken():void{
    this._authService.validateToken().subscribe(
      res => {
        this.authToken = true;
      },
      err => {
        this.authToken = false;
      }
    );
  }
  
  // Get current user email
  getCurrentUserEmail():string{
    return this._authService.getCurrentUserData().email;
  }

}
