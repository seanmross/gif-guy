import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthDialogComponent } from "../auth-dialog/auth-dialog.component";
import { AuthService } from "./../../services/auth.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    @ViewChild('authDialog') authDialog: AuthDialogComponent;

    constructor(
        public _authService: AuthService,
        private router: Router
    ) {}

    logOut() {
        this._authService.logOutUser().subscribe(() => this.router.navigate(['/']));
    }

    presentAuthDialog(mode?: 'Sign in' | 'Sign up') {
        this.authDialog.openDialog(mode);
    }

}