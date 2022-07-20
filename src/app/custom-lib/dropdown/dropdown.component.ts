import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() options: any;
  @Input() selectedValue: string | any = undefined;
  @Input() label;
  @Input() isMandatory: boolean;
  @Output() selectValue: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    console.table(this.options);
  }
  emitSelection(evt) {
    console.log(evt.target.value);
  }
}
