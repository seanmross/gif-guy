import { Component, ViewChild } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  presentAuthDialog(mode?: 'Sign in' | 'Sign up') {
    this.authDialog.openDialog(mode);
  }
}
