import {Component, Input, OnInit} from '@angular/core';
import {PropertyButtonI} from '../../../interfaces/property.interface';

@Component({
  selector: 'app-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.scss']
})
export class ButtonWithIconComponent implements OnInit {

  constructor() { }

  @Input() button: PropertyButtonI;

  ngOnInit(): void {
  }

}
