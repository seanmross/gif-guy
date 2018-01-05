import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { RandomService } from './../../services/random.service';
import { Observable } from 'rxjs/Rx';
import { RandomGif } from '../../models/gif.interface';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../../../environments/environment';
import { MaterializeAction } from "angular2-materialize";
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { AuthService } from '../../services/auth.service';
import { TrendingService } from '../../services/trending.service';
import { Gif } from '../../models/gif.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public gif:RandomGif;
  public currentDay:string;
  public trendingGifs$:Observable<Gif[]>;
  
  // @ViewChild('authDialog') authDialog: AuthDialogComponent;
  // @Input('auth-mode') authMode: 'Sign in' | 'Sign up' = 'Sign in';
  
  constructor( 
    public _randomService: RandomService,
    public _authService: AuthService,
    public _tokenAuthService: Angular2TokenService,
    public _trendingService: TrendingService
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

  // presentAuthDialog(mode?: 'Sign in' | 'Sign up') {
  //   this.authDialog.openDialog(mode);
  // }

  // isLoginMode() { return this.authMode == 'Sign in' }
  // isRegisterMode() { return this.authMode == 'Sign up' }

}
