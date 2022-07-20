import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingRoutingModule } from './messaging-routing.module';
import { MessagingLayoutComponent } from './pages/messaging-layout/messaging-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ListChatComponent } from './components/list-chat/list-chat.component';
import { ScreenChatComponent } from './components/screen-chat/screen-chat.component';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    MessagingLayoutComponent,
    ListChatComponent,
    ScreenChatComponent
  ],
  imports: [
    CommonModule,
    MessagingRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    FormsModule,
    PerfectScrollbarModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class MessagingModule { }
