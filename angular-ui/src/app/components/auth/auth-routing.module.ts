import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthService ]
})
export class AuthRoutingModule { }