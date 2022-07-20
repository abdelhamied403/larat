import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertDialogData } from 'src/app/model/alert-dialog-data';
import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-sucess-model',
  templateUrl: './sucess-model.component.html',
  styleUrls: ['./sucess-model.component.scss']
})
export class SucessModelComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<SucessModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlertDialogData) {
  }

  ngOnInit(): void {
  }
 
  closeModal(): void {
    this.dialogRef.close(false);
  }

  getAlertMessage(): string {
    return this.data.message;
  }

  getOkayButtonText(): string {
    return this.data.okay;
  }

  getTitle(): string {
    return this.data.title;
  }
}
