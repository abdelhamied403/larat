import { AddDetailsPropertyModel } from '../model/property/add.detail.property';
import { AddPropertyDetailsActions, ADD_DETAILS_PROPERTY, REMOVE_DETAILS_PROPERTY} from './propertydetails.actions';

export interface State {
    addPropertyDetails: AddDetailsPropertyModel

}

const initialState: State = {
    addPropertyDetails: Object.assign({}),
};


export function addPropertyDetailsReducer(state = initialState, action: AddPropertyDetailsActions) {

    switch (action.type) {
        case ADD_DETAILS_PROPERTY:
            return {
                ...state,
                addPropertyDetails: action.payload
            };
        case REMOVE_DETAILS_PROPERTY:
            return {
                ...state,
                addPropertyDetails: initialState.addPropertyDetails
            };
        default: {
            return state;
        }
    }
}

export const addPropertyDetails = (state: State) => state.addPropertyDetails;
