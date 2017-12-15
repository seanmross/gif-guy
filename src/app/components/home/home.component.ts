import { Component, OnInit } from '@angular/core';
import { RandomGifService } from './../../services/random-gif.service';
import { Observable } from 'rxjs/Rx';
import { Gif } from './../../models/gif.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  randomGif:Observable<Gif>;
  
  date = new Date();
  current_day_index:number = this.date.getDay()-1;
  days:string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  current_day:string = this.days[this.current_day_index];

  constructor(
    private randomGifService:RandomGifService
  ){}
  
  ngOnInit(){
    this.getRandomGif();
  }
  
  getRandomGif(){
    this.randomGif = this.randomGifService.getRandomGif(this.current_day);
  }

}
