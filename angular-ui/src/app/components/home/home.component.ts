import { Component, OnInit } from '@angular/core';
import { RandomGifService } from './../../services/random-gif.service';
import { Observable } from 'rxjs/Rx';
import { RandomGif } from '../../models/gif.interface';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../../../environments/environment';
import { MaterializeAction } from "angular2-materialize";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public gif:RandomGif;
  public currentDay:string;

  constructor( 
    private randomGifService:RandomGifService,
    private tokenService: Angular2TokenService
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

}
