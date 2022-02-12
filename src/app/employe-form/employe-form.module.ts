import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeFormRoutingModule } from './employe-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployFormComponent } from './employ-form/employ-form.component';

@NgModule({
  declarations: [EmployFormComponent],
  imports: [
    CommonModule,
    EmployeFormRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
})
export class EmployeFormModule {}
