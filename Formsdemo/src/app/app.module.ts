import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TdfDemoComponent } from './tdf-demo/tdf-demo.component';
import { TdfValidationComponent } from './tdf-validation/tdf-validation.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfDemoComponent,
    ReactiveFormComponent,
    TdfValidationComponent,
    ReactiveFormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
