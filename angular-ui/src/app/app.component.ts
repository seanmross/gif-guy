import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private tokenAuthService: Angular2TokenService) {
    this.tokenAuthService.init(environment.token_auth_config);
  }

}