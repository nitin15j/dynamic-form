import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from 'src/app/shared/http/api-gateway.service';
import { MicroservicesService } from '../../microservices.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  config;
  services: Array<any>;
 
  constructor(private microService:MicroservicesService, private authService:AuthService) { }

  ngOnInit() {
    this.authService.loggedIn.next(true);
        // loading services.json
        this.microService.loadServiceConfig('assets/services.json').subscribe(data=>{
            this.microService.config = data;
            this.services = data.services;
        })
  }
}

