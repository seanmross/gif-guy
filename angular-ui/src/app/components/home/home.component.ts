import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { RandomGifService } from './../../services/random-gif.service';
import { Observable } from 'rxjs/Rx';
import { RandomGif } from '../../models/gif.interface';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../../../environments/environment';
import { MaterializeAction } from "angular2-materialize";
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public gif:RandomGif;
  public currentDay:string;
  
  @ViewChild('authDialog') authDialog: AuthDialogComponent;
  @Input('auth-mode') authMode: 'Sign in' | 'Sign up' = 'Sign in';
  
  constructor( 
    public randomGifService: RandomGifService,
    public tokenAuthService: Angular2TokenService,
    public authService: AuthService
  ){}

  ngOnInit(){
    this.getRandomGif();
  }

  getCurrentDay(){
    let date = new Date();
    let currentDayIndex:number = date.getDay();
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.currentDay = days[currentDayIndex];
    return this.currentDay;
  }
  
  getRandomGif(){
    this.randomGifService.getRandomGif(this.getCurrentDay())
      .subscribe((result) => {
        this.gif = result;
      })
  }

  presentAuthDialog(mode?: 'Sign in' | 'Sign up') {
    this.authDialog.openDialog(mode);
  }

  isLoginMode() { return this.authMode == 'Sign in' }
  isRegisterMode() { return this.authMode == 'Sign up' }

}
