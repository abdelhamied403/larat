import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NzResultModule} from 'ng-zorro-antd/result';
import {CustomSnackComponent} from '../custom-lib/custom-snack/custom-snack.component';
import {DigitOnlyDirective} from '../custom-lib/directive/digit-only.directive';
import {DropdownComponent} from '../custom-lib/dropdown/dropdown.component';
import {InputElementComponent} from '../custom-lib/input-element/input-element.component';
import {LoaderComponent} from '../custom-lib/loader/loader.component';
import {SucessModelComponent} from '../custom-lib/sucess-model/sucess-model.component';
import {SharedModule} from './shared.module';
import {ButtonWithIconComponent} from './components/button-with-icon/button-with-icon.component';
import {PropertiesSearchDialogComponent} from '../Modules/propeties/property-detials/properties-search-dialog.component';
import {PropertiesCardListComponent} from '../Modules/propeties/properties-card-list/properties-card-list.component';
import {AppIconComponent} from './components/app-icon/app-icon.component';
import {AngularSvgIconModule} from 'angular-svg-icon';

@NgModule({
    imports: [
        CommonModule,
        NzResultModule,
        SharedModule,
        AngularSvgIconModule,
    ],
    declarations: [InputElementComponent,
        CustomSnackComponent,
        DropdownComponent,
        DigitOnlyDirective,
        SucessModelComponent,
        LoaderComponent,
        ButtonWithIconComponent,
        PropertiesSearchDialogComponent,
        PropertiesCardListComponent,
        AppIconComponent
    ],
    exports: [InputElementComponent,
        DropdownComponent,
        DigitOnlyDirective,
        SucessModelComponent,
        LoaderComponent,
        CustomSnackComponent,
        ButtonWithIconComponent,
        PropertiesSearchDialogComponent,
        PropertiesCardListComponent,
        AppIconComponent
    ]
})
export class CustomComponentModule {
}