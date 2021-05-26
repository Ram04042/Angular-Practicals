import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  //For Default Routing
  {path:'',component:HomeComponent},

  {path:'Home', component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Login',component:LoginComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
