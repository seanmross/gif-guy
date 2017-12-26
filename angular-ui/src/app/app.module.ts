import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

import { AppRoutingModule } from './app-routing.module';
import { RandomGifService } from './services/random-gif.service';
import { SearchGifsService } from './services/search-gifs.service';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
    AuthDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    MaterializeModule
  ],
  providers: [
    RandomGifService,
    SearchGifsService,
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
