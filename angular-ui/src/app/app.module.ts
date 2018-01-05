import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2TokenService } from 'angular2-token';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './components/auth/auth.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NavbarComponent } from './components/navigation/navbar.component';

import { RandomService } from './services/random.service';
import { SearchService } from './components/search/search.service';
import { TrendingService } from './services/trending.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    AuthModule,
    SharedModule
  ],
  providers: [
    RandomService,
    SearchService,
    Angular2TokenService,
    TrendingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
