import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        SharedModule
    ],
    providers: []
})
export class AuthModule { }