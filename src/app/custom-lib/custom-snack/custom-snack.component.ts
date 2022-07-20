import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snack',
  templateUrl: './custom-snack.component.html',
  styleUrls: ['./custom-snack.component.scss']
})
export class CustomSnackComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
   
  }

  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }


}
