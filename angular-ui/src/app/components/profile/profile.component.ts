import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { Angular2TokenService } from "angular2-token";
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public gravatarUserEmailHash;
  public gravatarLink;
  public userEmail;

  constructor(
    public authTokenService: Angular2TokenService,
    public authService: AuthService,
    private router: Router
  ){ }

  logOut() {
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  generateGravatarLink(){
    this.userEmail = this.authTokenService.currentUserData.email;
    if (this.userEmail){
      this.gravatarUserEmailHash = Md5.hashStr(this.userEmail);
      this.gravatarLink = `https://www.gravatar.com/avatar/${this.gravatarUserEmailHash}`;
      if (this.gravatarUserEmailHash !== '1aedb8d9dc4751e229a335e371db8058'){
        return this.gravatarLink;
      }
    }
    return false;
  }

}