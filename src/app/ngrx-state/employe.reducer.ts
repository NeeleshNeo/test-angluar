import { Action, createReducer, on } from '@ngrx/store';
import * as employeActions from './employe.actions';

export const employeFeatureKey = 'emp';

export interface employStore {
  employe: any[] | null;
  errorMsg: string | null;
  isLoaded: boolean;
  newEmployeDetails: any | null;
}

export const initialState: employStore = {
  employe: null,
  errorMsg: null,
  isLoaded: false,
  newEmployeDetails: null,
};

export const employeReducer = createReducer(
  initialState,
  on(employeActions.getEmployeAction, (state) => ({
    ...state,
  })),
  on(employeActions.getEmployeActionSuccess, (state, { payload }) => ({
    ...state,
    employe: payload,
    isLoaded: true,
  })),
  on(employeActions.getEmployeActionFail, (state, { payload }) => ({
    ...state,
    errorMsg: payload,
    isLoaded: false,
  })),
  on(employeActions.addNewEmployeAction, (state, { payload }) => ({
    ...state,
  })),
  on(employeActions.addNewEmployeActionSuccess, (state, { payload }) => ({
    ...state,
    employe: [{ ...state.employe }],
  })),
  on(employeActions.addNewEmployeActionFail, (state, { payload }) => ({
    ...state,
  }))
);

export const getEmployList = (state: employStore) => state.employe;
export const getNewEmployDetail = (state: employStore) =>
  state.newEmployeDetails;
