import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAddProperty from './share/propertyadd.reducer';
import * as fromPhotoGaphy from './share/property.photography.reducer';
import * as fromAddPropertyDetails  from './share/propertydetails.reducer';

export interface State {
  addProperty: fromAddProperty.State;
  addPhotoGraphy: fromPhotoGaphy.State;
  addDetailsProperty: fromAddPropertyDetails.State;
}

export const reducers: ActionReducerMap<State> = {
  addProperty: fromAddProperty.addPropertyActionsReducer,
  addPhotoGraphy: fromPhotoGaphy.addPhotographyActions,
  addDetailsProperty: fromAddPropertyDetails.addPropertyDetailsReducer
};




export const getAddPropertyState = createFeatureSelector<fromAddProperty.State>('addProperty');
export const addDetails = createSelector(getAddPropertyState, fromAddProperty.addDetails);

export const getAddPhotoGaphyState = createFeatureSelector<fromPhotoGaphy.State>('addPhotoGraphy');
export const addPhoto = createSelector(getAddPhotoGaphyState, fromPhotoGaphy.addPhoto);


export const getPropertyDetailsState = createFeatureSelector<fromAddPropertyDetails.State>('addDetailsProperty');
export const addPropertyDetails = createSelector(getPropertyDetailsState, fromAddPropertyDetails.addPropertyDetails);