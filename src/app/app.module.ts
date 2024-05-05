import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';

const routes: Routes = [
 // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'view', component: ViewProductComponent },
  { path: 'add', component: AddProductComponent },
  { path: '', component: RegistrationComponent },
  { path: 'edit/:id', component: EditProductComponent },
  { path: 'next-steps', component: NextStepsComponent },
  { path: 'addProject', component: AddProjectComponent },
  { path: 'viewProject', component: ViewProjectComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewProductComponent,
    EditProductComponent,
    RegistrationComponent,
    NextStepsComponent,
    AddProjectComponent,
    ViewProjectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, // Import FormsModule
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
