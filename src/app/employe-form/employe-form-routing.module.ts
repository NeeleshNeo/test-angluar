import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployFormComponent } from './employ-form/employ-form.component';

const routes: Routes = [
  { path: 'create', component: EmployFormComponent },
  { path: 'edit/:id', component: EmployFormComponent },
  { path: '', component: EmployFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeFormRoutingModule {}
