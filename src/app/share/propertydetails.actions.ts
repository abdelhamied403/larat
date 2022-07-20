import { Action } from '@ngrx/store';
import { AddDetailsPropertyModel } from '../model/property/add.detail.property';

export const ADD_DETAILS_PROPERTY = '[PROPERTY] ADD DETAILS PROPERTY DETAILS';
export const REMOVE_DETAILS_PROPERTY = '[PROPERTY] REMOVE DETAILS PROPERTY DETAILS';


export class AddDetailsProperty implements Action {
    readonly type = ADD_DETAILS_PROPERTY;
    constructor(public payload: AddDetailsPropertyModel) { }
}

export class RemoveDetailsProperty implements Action {
    readonly type = REMOVE_DETAILS_PROPERTY;
}



export type AddPropertyDetailsActions = RemoveDetailsProperty | AddDetailsProperty