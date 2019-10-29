import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ServiceListComponent } from './microservices/pages/service-list/service-list.component';
import { ServiceDetailComponent } from './microservices/pages/service-detail/service-detail.component';


const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"services",
    component:ServiceListComponent
  },
  {
    path:"services-detail",
    component:ServiceDetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
