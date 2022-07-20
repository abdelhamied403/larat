import { AddPropertyModel } from '../model/property/add.property.model';
import { AddPropertyActions, ADD_PROPERTY, REMOVE_PROPERTY } from './propertyadd.actions';

export interface State {
    addDetails: AddPropertyModel;
}

const initialState: State = {
    addDetails: Object.assign({}),
};


export function addPropertyActionsReducer(state = initialState, action: AddPropertyActions) {

    switch (action.type) {
        case ADD_PROPERTY:
            return {
                ...state,
                addDetails: action.payload
            };
        case REMOVE_PROPERTY:
            return {
                ...state,
                addDetails: initialState.addDetails
            };
     
        default: {
            return state;
        }
    }
}

export const addDetails = (state: State) => state.addDetails;
