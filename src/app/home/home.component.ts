import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeService } from '../employe.service';
import { employeList } from '../ngrx-state/employ.selecors';
import { getEmployeAction } from '../ngrx-state/employe.actions';

interface employe {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  employes: employe[] = [];
  deleteEmpDetails: employe | null = null;
  deletePopup: boolean = false;

  constructor(private emp: EmployeService, private store: Store) {}

  onEdit(emp: any) {
    console.error('edit function', emp);
    // emp.employee_name = 'edited name';
    this.emp.updateEmp(emp).subscribe((data) => {
      console.error('on edit', data);
    });
  }

  onDelete() {
    this.deletePopup = false;
  }

  addEmp() {
    console.error('add emp function');
    this.emp
      .createEmp({ name: 'EchoNew', salary: '123', age: '23' })
      .subscribe((data) => {
        console.error('emp added', data);
      });
  }

  showPopup(emp: employe) {
    this.deleteEmpDetails = emp;
    this.deletePopup = true;
  }

  ngOnInit(): void {
    this.store.dispatch(getEmployeAction());
    this.store.select(employeList).subscribe((data: any) => {
      console.log('init', data);
      if (data) {
        this.employes = data.data;
      }
    });
  }
}
