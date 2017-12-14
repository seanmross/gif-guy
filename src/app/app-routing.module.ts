// Import libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// Create a constant of type Routes to define routes
const routes: Routes = [
    { path: '', component: HomeComponent }
]

// AppRoutingModule metadata
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }