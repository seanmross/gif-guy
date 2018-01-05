import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { RandomService } from './../../services/random.service';
import { Observable } from 'rxjs/Rx';
import { RandomGif } from '../../models/gif.interface';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../../../environments/environment';
import { TrendingService } from '../../services/trending.service';
import { Gif } from '../../models/gif.interface';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public gif:RandomGif;
  public currentDay:string;
  public trendingGifs$:Observable<Gif[]>;
  
  constructor( 
    public _randomService: RandomService,
    public _tokenAuthService: Angular2TokenService,
    public _trendingService: TrendingService,
    private _authService:AuthService
  ){}

  ngOnInit(){
    this.getRandomGif();
    this.getTrendingGifs();
  }

  getCurrentDay(){
    let date = new Date();
    let currentDayIndex:number = date.getDay();
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.currentDay = days[currentDayIndex];
    return this.currentDay;
  }
  
  getRandomGif(){
    this._randomService.getRandomGif(this.getCurrentDay()).subscribe(
      res => {
        this.gif = res;
      })
  }

  getTrendingGifs(){
    this.trendingGifs$ = this._trendingService.getTrending();
  }

  //new login logic
  isLoggedIn(): boolean {
    return this._authService.isLoggedIn();
  }
  isLoggedOut(): boolean {
    return !this._authService.isLoggedIn();
  }
  logOut(): void {
    this._authService.logout();
  }

}
