import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface createEmp {
  name: string;
  salary: string;
  age: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  baseUrl = 'http://dummy.restapiexample.com/api/v1';

  constructor(private http: HttpClient) {}

  getEmpData() {
    console.error('get emp services');

    let url = this.baseUrl + '/employees';
    return this.http.get(url);
  }

  createEmp(emp: any) {
    let createUrl = this.baseUrl + '/create';
    // return this.http.post(createUrl, emp);
    return of({
      status: 'success',
      data: {
        name: emp.employee_name,
        salary: emp.employee_salary,
        age: emp.employee_age,
        id: Math.floor(Math.random() * 100 + 1),
      },
    });
  }

  updateEmp(emp: any) {
    let updateUrl = this.baseUrl + '/update/' + emp.id;
    return this.http.post(updateUrl, emp);
  }

  deleteEmp(id: number) {
    let deleteUrl = this.baseUrl + '/delete/' + id;
    return this.http.delete(deleteUrl);
  }

  getEmpDetails(id: number) {
    let editUrl = this.baseUrl + '/employee/' + id;
    return this.http.get(editUrl);
  }
}
