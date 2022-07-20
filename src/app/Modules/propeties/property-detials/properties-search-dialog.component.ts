import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PropertySearchI} from '../../../interfaces/property.interface';

@Component({
    selector: 'app-properties-search-dialog',
    templateUrl: 'properties-search-dialog.component.html',
})
export class PropertiesSearchDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<PropertiesSearchDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: PropertySearchI,
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}