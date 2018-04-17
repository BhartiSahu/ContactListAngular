import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FormTableComponent } from './form-table/form-table.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes =  [ 
  { path: '', redirectTo: 'form',pathMatch: 'full'},
  { path: 'form', component: ContactFormComponent},
  // { path: 'formDetails/:formData', component: FormTableComponent},
  // { path: 'new', component: FormTableComponent}
 
];
@NgModule({
  declarations: [
    AppComponent,
    FormTableComponent,ContactFormComponent
  ],
  imports: [
    BrowserModule,RouterModule,  FormsModule ,ReactiveFormsModule, 
    RouterModule.forRoot(routes,{useHash: true}) ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
