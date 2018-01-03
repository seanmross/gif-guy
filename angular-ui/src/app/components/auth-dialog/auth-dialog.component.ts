import { Component, Input, EventEmitter } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent {
  constructor() {}

  @Input('auth-mode') authMode: 'Sign in' | 'Sign up' = 'Sign in';
  modalActions = new EventEmitter<string | MaterializeAction>();

  onLoginFormResult(e) {
    if (e.signedIn)
      this.closeDialog();
    else {
      alert(e.err.json().errors[0]);
    }
  }

  onRegisterFormResult(e) {
    if (e.signedUp)
      this.closeDialog();
    else {
      alert(e.err.json().errors.full_messages[0]);
    }
  }

  openDialog(mode: 'Sign in' | 'Sign up' = 'Sign in') {
    this.authMode = mode;
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }

  closeDialog() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

  isLoginMode() { return this.authMode == 'Sign in' }
  isRegisterMode() { return this.authMode == 'Sign up' }

}
