import { MessagingService } from './../../services/messaging.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-messaging-layout',
  templateUrl: './messaging-layout.component.html',
  styleUrls: ['./messaging-layout.component.scss']
})
export class MessagingLayoutComponent implements OnInit {


  constructor(private _MessagingService:MessagingService) { }
  ngOnInit(): void {
  }
}
