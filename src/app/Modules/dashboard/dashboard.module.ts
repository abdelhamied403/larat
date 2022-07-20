import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {SharedModule} from '../../share/shared.module';
import {CustomComponentModule} from '../../share/custom.component';
import {PropetiesModule} from '../propeties/propeties.module';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        CustomComponentModule,
        DashboardRoutingModule,
        PropetiesModule
    ]
})
export class DashboardModule {
}
