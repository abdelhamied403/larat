import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {NzIconModule} from 'ng-zorro-antd/icon';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NzInputModule} from 'ng-zorro-antd/input';

import {RouterModule} from '@angular/router';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzMessageModule} from 'ng-zorro-antd/message';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CollapseModule.forRoot(),
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        NzInputModule,
        FormsModule,
        ReactiveFormsModule,
        NzIconModule,
        NzMessageModule,
    ],
    declarations: [
        NavbarComponent,
        SidebarComponent,
    ],
    exports: [
        NavbarComponent,
        SidebarComponent,
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class ComponentsModule {
}
