import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropetiesComponent } from './property/propeties.component';
import {PropertyDetailsComponent} from './property-detials/property-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Property'
    },
    children: [
      {
        path: '',
        redirectTo: 'properties'
      },
      {
        path: 'properties',
        component: PropetiesComponent,
        data: {
          title: 'properties'
        }
      },
      {
        path: 'add-property',
        component: AddPropertyComponent,
        data: {
          title: 'add properties'
        }
      },
      {path: ':id',
        component: PropertyDetailsComponent,
        data: {
        title: 'property details'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropetiesRoutingModule { }
