import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap, catchError } from 'rxjs/operators';
import {
  getEmployeAction,
  getEmployeActionFail,
  getEmployeActionSuccess,
  addNewEmployeAction,
  addNewEmployeActionFail,
  addNewEmployeActionSuccess,
} from './employe.actions';
import { EmployeService } from '../employe.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class employeEffect {
  getEmployeEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEmployeAction),
      concatMap(() => {
        console.error('emp effect');

        return this.empServices.getEmpData().pipe(
          map((data: any) => {
            console.error('emp effect data', data);
            return getEmployeActionSuccess({ payload: data });
          }),
          catchError((error: any) => {
            return of(getEmployeActionFail(error));
          })
        );
      })
    )
  );

  addEmployeEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addNewEmployeAction),
      concatMap((data: any) => {
        console.error('add new emp effect payload', data.payload);
        return this.empServices.createEmp(data).pipe(
          map(() => {
            return addNewEmployeActionSuccess(data.payload);
          })
        );
      }),
      catchError((error: any) => {
        return of(addNewEmployeActionFail(error));
      })
    )
  );

  addEmployeSuccessEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addNewEmployeActionSuccess),
        map((data) => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private empServices: EmployeService,
    private router: Router
  ) {}
}
