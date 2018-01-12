import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    logoutErrors:any;

    constructor(
        private _authService: AuthService,
        private router:Router
    ) {}

    isLoggedIn(): boolean {
        return this._authService.isLoggedIn();
    }
    isLoggedOut(): boolean {
        return !this._authService.isLoggedIn();
    }
    logOut(): void {
        this._authService.logout().subscribe(
            res => {
                this.router.navigate(['/']);
            },
            err => {
                this.logoutErrors = JSON.parse(err._body).errors;
                console.log(this.logoutErrors);
            }
        )

        
    }

}