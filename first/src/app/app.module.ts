import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import { TwoWayBindingDemoComponent } from './two-way-binding-demo/two-way-binding-demo.component';
import { from } from 'rxjs';
import { StructDerivComponent } from './struct-deriv/struct-deriv.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { BothsideCompInteracComponent } from './bothside-comp-interac/bothside-comp-interac.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FormComponent,
    TwoWayBindingDemoComponent,
    StructDerivComponent,
    NgswitchComponent,
    NgforComponent,
    PipesDemoComponent,
    InputDemoComponent,
    OutputDemoComponent,
    BothsideCompInteracComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
