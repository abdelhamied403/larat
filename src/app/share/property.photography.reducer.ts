import { AddPhotosGraphyModel } from '../model/property/add.photography.model';
import { AddPhotographyActions,  ADD_LARAT_PHOTOGRAPHY, REMOVE_LARAT_PHOTOGRAPHY } from './property.photography.action';

export interface State {
    addPhoto: AddPhotosGraphyModel;

}

const initialState: State = {
    addPhoto: Object.assign({})
};


export function addPhotographyActions(state = initialState, action: AddPhotographyActions) {

    switch (action.type) {

        case ADD_LARAT_PHOTOGRAPHY:
            return {
                ...state,
                addPhoto: action.payload
            };
        case REMOVE_LARAT_PHOTOGRAPHY:
            return {
                ...state,
                addPhoto: initialState.addPhoto
            };
        default: {
            return state;
        }
    }
}

export const addPhoto = (state: State) => state.addPhoto;
