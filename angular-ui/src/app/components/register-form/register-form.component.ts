import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(public authService: AuthService) { }

  onSignUpSubmit() {
    this.authService.registerUser(this.signUpUser).subscribe(
      (res) => {

        if (res.status == 200) {
          this.onFormResult.emit({ signedUp: true, res })
        }

      },

      (err) => {
        console.log(err.json())
        this.onFormResult.emit({ signedUp: false, err })
      }
    );
  }
}