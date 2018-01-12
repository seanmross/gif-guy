import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

    user: FormGroup;
    signUpErrors:any;

    constructor(
        public _authService: AuthService,
        private formBuilder: FormBuilder,
        private router:Router
    ) { }

    ngOnInit() {
        this.user = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            passwordConfirmation: ['', Validators.required]
        },{
            validator: this.confirmPassword('password', 'passwordConfirmation')
        })
    }

    confirmPassword(password:string, passwordConfirmation:string){
        return (group:FormGroup) => {
            let pwInput = group.controls[password];
            let pwConfirmationInput = group.controls[passwordConfirmation];

            if (pwInput.value !== pwConfirmationInput.value){
                return pwConfirmationInput.setErrors({ notEqual:true });
            } else {
                return pwConfirmationInput.setErrors(null);
            }
        }
    }

    onSubmit(){
        this._authService.signup(this.user.get('email').value, this.user.get('password').value).subscribe(
            res => {
                this.router.navigate(['/']);
            },
            err => {
                this.signUpErrors = JSON.parse(err._body).errors.full_messages;
                console.log(this.signUpErrors);
            }
        )
    }


}