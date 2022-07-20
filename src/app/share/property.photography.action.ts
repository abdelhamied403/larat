import { Action } from '@ngrx/store';
import { AddPhotosGraphyModel } from '../model/property/add.photography.model';

export const ADD_LARAT_PHOTOGRAPHY = '[PROPERTY] ADD LARAT Photography';
export const REMOVE_LARAT_PHOTOGRAPHY = '[PROPERTY] REMOVE LARAT Photography';



export class AddLaratPhotography implements Action {
    readonly type = ADD_LARAT_PHOTOGRAPHY;
    constructor(public payload: AddPhotosGraphyModel) { }
}

export class RemoveLaratPhotography implements Action {
    readonly type = REMOVE_LARAT_PHOTOGRAPHY;
}
export type AddPhotographyActions = AddLaratPhotography | RemoveLaratPhotography;
