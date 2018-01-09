import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

    user:FormGroup;
    loginErrors:any;

    constructor(
        private _authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router
    ){}

    ngOnInit(){
        this.user = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    onSubmit(){
        this._authService.login(this.user.get('email').value, this.user.get('password').value).subscribe(
            res => {
                this.router.navigate(['/']);
            },
            err => {
                this.loginErrors = JSON.parse(err._body).errors;
                console.log(this.loginErrors);
            }
        )
    }


}

