import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.scss']
})
export class ListChatComponent implements OnInit {

  constructor(private _MessagingService:MessagingService) { }
  ngOnInit(): void {
  }

  selectChat(e) {
    const liItem = document.querySelectorAll('.list-user .user')
    liItem.forEach((e) => {
      e.classList.remove("active")
    })
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active')
    } else {
      e.currentTarget.classList.add('active')
    }
  }

}
