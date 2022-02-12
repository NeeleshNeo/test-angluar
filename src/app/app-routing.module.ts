import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmployeFormModule } from './employe-form/employe-form.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: 'create', component: EmployFormComponent },
  // { path: 'edit/:id', component: EmployFormComponent },

  // {
  //   path: '',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'employe-form',
  //       loadChildren: () =>
  //         import('./employe-form/employe-form.module').then(
  //           (m) => m.EmployeFormModule
  //         ),
  //     },
  //   ],
  // },
  { path: '', component: HomeComponent },
  {
    path: 'employe-form',

    loadChildren: () =>
      import('./employe-form/employe-form.module').then(
        (m) => m.EmployeFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
