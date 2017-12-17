import { Component, OnInit } from '@angular/core';
import { RandomGifService } from './../../services/random-gif.service';
import { Observable } from 'rxjs/Rx';
import { RandomGif } from '../../models/gif.interface';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public gif:RandomGif;
  public currentDay:string;

  constructor( private randomGifService:RandomGifService ){}
  
  ngOnInit(){
    this.getRandomGif();
  }

  getCurrentDay(){
    let date = new Date();
    let currentDayIndex:number = date.getDay() - 1;
    const days:string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
