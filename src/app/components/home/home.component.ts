import { Component, OnInit } from '@angular/core';
import { RandomGifService } from './../../services/random-gif.service';
import { Observable } from 'rxjs/Rx';
import { Gif } from './../../models/gif';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public gif:Observable<Gif>;

  constructor(private randomGifService:RandomGifService) { }
  
  ngOnInit(){
    this.getRandomGif();
  }
  
  getRandomGif(){
    this.gif = this.randomGifService.getRandomGif();
  }

}
