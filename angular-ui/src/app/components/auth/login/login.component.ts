import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    submitted:boolean;
    loginForm:FormGroup;

    constructor(
        private _authService: AuthService,
        private formBuilder: FormBuilder
    ){}

    ngOnInit(){
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    submit(value: any) {
        this.submitted = true;
        if (!this.loginForm.valid) { return; }

        this._authService.login(value.email, value.password).subscribe(
            this._authService.redirectAfterLogin.bind(this._authService),
            this.afterFailedLogin.bind(this)
        );
    }

    afterFailedLogin(errors: any){
        //JSON.parse(errors_body).errors;
        let parsed_errors = JSON.parse(errors._body).errors;
        for (let attribute in this.loginForm.controls) {
            if (parsed_errors[attribute]) {
                this.loginForm.controls[attribute].setErrors(parsed_errors[attribute]);
            }
        }
        this.loginForm.setErrors(parsed_errors);
    }
}

