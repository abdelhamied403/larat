import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PropetiesRoutingModule} from './propeties-routing.module';
import {PropetiesComponent} from './property/propeties.component';
import {PropertiesCardListComponent} from './properties-card-list/properties-card-list.component';
import {AddPropertyComponent} from './add-property/add-property.component';
import {MaterialModule} from '../../share/material.module';
import {CustomComponentModule} from '../../share/custom.component';
import {AddPropertyHeaderComponent} from './add-property/add-property-header/add-property-header.component';
import {AddDetailsComponent} from './add-property/add-details/add-details.component';
import {AddPhotosComponent} from './add-property/add-photos/add-photos.component';
import {AddPropertyDetailsComponent} from './add-property/add-property-details/add-property-details.component';
import {AddPropertyReviewComponent} from './add-property/add-property-review/add-property-review.component';
import {PropertyDetailsComponent} from './property-detials/property-details.component';
import {SharedModule} from '../../share/shared.module';

@NgModule({
    declarations: [
        PropetiesComponent,
        AddPropertyComponent,
        AddPropertyHeaderComponent,
        AddDetailsComponent,
        AddPhotosComponent,
        AddPropertyDetailsComponent,
        AddPropertyReviewComponent,
        PropertyDetailsComponent
    ],
    imports: [
        CommonModule,
        PropetiesRoutingModule,
        MaterialModule,
        SharedModule,
        CustomComponentModule,
    ]
})
export class PropetiesModule {
}
