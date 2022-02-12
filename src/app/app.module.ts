import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AddEmployeComponent } from './add-employe/add-employe.component';
import { HomeComponent } from './home/home.component';
// import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { EmployFormComponent } from './employe-form/employ-form/employ-form.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
// import { EmployeFormModule } from './employe-form/employe-form.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { employeReducer } from './ngrx-state/employe.reducer';
import { employeEffect } from './ngrx-state/employe.effects';

//routes array

@NgModule({
  declarations: [AppComponent, HomeComponent, DeletePopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ emp: employeReducer }),
    EffectsModule.forRoot([employeEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
