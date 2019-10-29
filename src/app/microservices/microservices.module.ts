import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './pages/service-list/service-list.component';
import { SharedModule } from '../shared/shared.module';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';



@NgModule({
  declarations: [ServiceListComponent,ServiceDetailComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MicroservicesModule { }
