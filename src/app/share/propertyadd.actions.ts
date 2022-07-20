import { Action } from '@ngrx/store';
import { AddPropertyModel } from '../model/property/add.property.model';

export const ADD_PROPERTY = '[PROPERTY] ADD PROPERTY';
export const REMOVE_PROPERTY = '[PROPERTY] REMOVE PROPERTY';


export class AddProperty implements Action {
    readonly type = ADD_PROPERTY;
    constructor(public payload: AddPropertyModel) { }
}

export class RemoveProperty implements Action {
    readonly type = REMOVE_PROPERTY;
}

export type AddPropertyActions = AddProperty | RemoveProperty ;
