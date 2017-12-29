import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();
  constructor(public authService: AuthService) { }

  onSignInSubmit() {
    this.authService.logInUser(this.signInUser).subscribe(
      result => {
        if (result.status == 200) {
          this.onFormResult.emit({ signedIn: true, result });
        }
      },
      error => {
        console.log('error:', error);
        this.onFormResult.emit({ signedIn: false, error });
      }
    );
  }
}