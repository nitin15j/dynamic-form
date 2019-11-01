import { Component, OnInit } from '@angular/core';
import { ApiGatewayService } from 'src/app/shared/http/api-gateway.service';
import { MicroservicesService } from '../../microservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  controls: Array<any>;
  service:Object;
  constructor(private route:ActivatedRoute, private microService:MicroservicesService) { }


  ngOnInit() {
  
   const selectedServiceIndex = this.route.snapshot.paramMap.get("id");

   this.service = this.microService.config.services[selectedServiceIndex];
  }
}

