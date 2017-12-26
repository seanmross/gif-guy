import { Component, ViewChild } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../environments/environment';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(private tokenAuthService: Angular2TokenService) {
    this.tokenAuthService.init(environment.token_auth_config);
  }

  presentAuthDialog(mode?: 'Sign in' | 'Sign up') {
    this.authDialog.openDialog(mode);
  }
}