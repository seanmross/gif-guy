import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    constructor(
        private _authService: AuthService
    ) {}

    isLoggedIn(): boolean {
        return this._authService.isLoggedIn();
    }
    isLoggedOut(): boolean {
        return !this._authService.isLoggedIn();
    }
    logOut(): void {
        this._authService.logout();
    }

}