// Import libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProfileComponent } from './components/profile/profile.component';

// Create a constant of type Routes to define routes
const routes: Routes = [
    { 
        path: '',
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
        path: 'profile',
        component: ProfileComponent
    }
]

// AppRoutingModule metadata
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }