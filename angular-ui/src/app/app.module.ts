import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2TokenService } from 'angular2-token';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './components/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ClipboardModule } from 'ngx-clipboard';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NavbarComponent } from './components/navigation/navbar.component';
import { GifDetailsComponent } from './components/gif-details/gif-details.component';
import { CopyLinkDialogComponent } from './components/gif-details/dialog/copy-link-dialog.component';

import { RandomService } from './services/random.service';
import { SearchService } from './components/search/search.service';
import { TrendingService } from './services/trending.service';
import { GifByIdService } from './services/gif-by-id.service';
import { FavoritesService } from './components/favorites/favorites.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
    NavbarComponent,
    GifDetailsComponent,
    CopyLinkDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    AuthModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    ClipboardModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    RandomService,
    SearchService,
    Angular2TokenService,
    TrendingService,
    GifByIdService,
    FavoritesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CopyLinkDialogComponent]
})
export class AppModule { }
