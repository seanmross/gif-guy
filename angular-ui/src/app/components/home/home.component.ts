import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { RandomService } from './../../services/random.service';
import { Observable } from 'rxjs/Rx';
import { RandomGif } from '../../models/gif.interface';
import { Angular2TokenService } from 'angular2-token';
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
  public randomGif:RandomGif;
  public currentDay:string;
  public trendingGifs$:Observable<Gif[]>;
  public date = new Date();
  public validToken:boolean;
  public gif:Gif;
  public title:string;
  public id:string;
  
  constructor( 
    public _randomService: RandomService,
    public _tokenAuthService: Angular2TokenService,
    public _trendingService: TrendingService,
    private _authService:AuthService,
    public _gifByIdService:GifByIdService
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
      })
  }

  getTrendingGifs(){
    this.trendingGifs$ = this._trendingService.getTrending();
  }

  // Login logic
  isLoggedIn(): boolean {
    return this._authService.isLoggedIn();
  }
  isLoggedOut(): boolean {
    return !this._authService.isLoggedIn();
  }
  logOut(): void {
    this._authService.logout();
  }

  // Must validate token to access currentUserData api 
  validateToken() {
    this._tokenAuthService.validateToken().subscribe(
      res => {
        this.validToken = true;
      },
      err => {
        this.validToken = false;
      }
    )
  }

}
