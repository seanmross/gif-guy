import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {

  @Input('auth-mode') authMode: 'Sign in' | 'Sign up' = 'Sign in';
  modalActions = new EventEmitter<string | MaterializeAction>();

  constructor() {}

  openDialog(mode: 'Sign in' | 'Sign up' = 'Sign in') {
    this.authMode = mode;
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }

  ngOnInit() {
  }

  isLoginMode() { return this.authMode == 'Sign in' }
  isRegisterMode() { return this.authMode == 'Sign up' }

}
