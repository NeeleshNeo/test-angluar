import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addNewEmployeAction } from 'src/app/ngrx-state/employe.actions';
import { EmployeService } from '../../employe.service';

@Component({
  selector: 'app-employ-form',
  templateUrl: './employ-form.component.html',
  styleUrls: ['./employ-form.component.css'],
})
export class EmployFormComponent implements OnInit {
  routeId: string = '';

  employeForm = new FormGroup({
    name: new FormControl(''),
    salary: new FormControl(''),
    age: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private emp: EmployeService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.routeId = this.route.snapshot.paramMap.get('id') as string;
    this.routeId &&
      this.emp.getEmpDetails(parseInt(this.routeId)).subscribe((data: any) => {
        console.error('edit emp details', data);
        let empDetails = data.data;
        this.employeForm.patchValue({
          name: empDetails.employee_name,
          salary: empDetails.employee_salary,
          age: empDetails.employee_age,
        });
      });
  }

  onSubmit() {
    const empFormData = {
      name: this.employeForm.value.name,
      salary: this.employeForm.value.salary,
      age: this.employeForm.value.age,
    };
    this.store.dispatch(addNewEmployeAction({ payload: empFormData }));
  }
}
