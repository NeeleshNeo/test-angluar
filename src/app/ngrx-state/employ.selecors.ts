import { createFeatureSelector, createSelector } from '@ngrx/store';
import { employStore } from './employe.reducer';
import * as employe from './employe.reducer';

export const employFeatureState = createFeatureSelector<employStore>('emp');
export const employeList = createSelector(
  employFeatureState,
  employe.getEmployList
);
export const newEmployeDetails = createSelector(
  employFeatureState,
  employe.getNewEmployDetail
);
