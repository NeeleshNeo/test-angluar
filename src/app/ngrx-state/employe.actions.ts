import { createAction, props } from '@ngrx/store';

export const getEmployeAction = createAction('GET_EMPLOYE_DATA');

export const getEmployeActionSuccess = createAction(
  'GET_EMPLOYE_DATA_SUCESS',
  props<{ payload: any }>()
);

export const getEmployeActionFail = createAction(
  'GET_EMPLOYE_DATA_FAIL',
  props<{ payload: any }>()
);

export const addNewEmployeAction = createAction(
  'ADD_NEW_EMPLOYE',
  props<{ payload: any }>()
);

export const addNewEmployeActionSuccess = createAction(
  'ADD_NEW_EMPLOYE_SUCCESS',
  props<{ payload: any }>()
);

export const addNewEmployeActionFail = createAction(
  'ADD_NEW_EMPLOYE_FAIL',
  props<{ payload: any }>()
);
