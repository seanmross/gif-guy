import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'copy-link-dialog',
    templateUrl: 'copy-link-dialog.component.html',
    styleUrls: ['./copy-link-dialog.component.css']
})
export class CopyLinkDialogComponent {
    flashResponse: string;
    flash: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<CopyLinkDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data:any
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
        this.flash = true;
        this.flashResponse = 'Copied to clipboard!';
        setTimeout(() => {
            this.flash = false;
        }, 3000);
    }


}