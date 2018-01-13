import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'copy-link-dialog',
    templateUrl: 'copy-link-dialog.component.html',
    styleUrls: ['./copy-link-dialog.component.css']
})
export class CopyLinkDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<CopyLinkDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data:any,
        private _flashMessages:FlashMessagesService
    ) { }

    onClose(): void {
        this.dialogRef.close();
    }

    copyGiphyLink():void {
        this.onCopySuccess();
    }
    copyShortLink():void {
        this.onCopySuccess();
    }
    copyEmbedLink():void {
        this.onCopySuccess();
    }

    onCopySuccess():void {
        this._flashMessages.show('Copied to clipboard!', { cssClass: 'alert-success', timeout: 3000 });
    }


}