import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { NavbarComponent } from './components/navigation/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';

import { RandomGifService } from './services/random-gif.service';
import { SearchGifsService } from './services/search-gifs.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavbarComponent,
    ProfileComponent
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
    Angular2TokenService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
