import {ComponentsModule} from '../Core/components/components.module';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {LayoutsRoutingModule} from './layouts-routing.module';
import {FullContentLayoutComponent} from './full-content-layout/full-content-layout.component';
import {FooterComponent} from '../footer/footer.component';
import {MaterialModule} from '../share/material.module';
import {SharedModule} from '../share/shared.module';
import {CustomComponentModule} from '../share/custom.component';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        FullContentLayoutComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        LayoutsRoutingModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        ComponentsModule,
        MaterialModule,
        SharedModule,
        CustomComponentModule],
    exports: [FullContentLayoutComponent, AdminLayoutComponent]
})
export class LayoutsModule {
}
