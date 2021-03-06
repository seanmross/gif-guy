// Import libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { GifDetailsComponent } from './components/gif-details/gif-details.component';

// Create a constant of type Routes to define routes
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    { 
        path: 'search',
        component: SearchComponent,
    },
    { 
        path: 'favorites',
        component: FavoritesComponent,
    },
    {
        path: 'gifs/:id',
        component: GifDetailsComponent
    }
]

// AppRoutingModule metadata
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }