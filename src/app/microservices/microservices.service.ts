import { Injectable } from '@angular/core';
import { ApiGatewayService } from '../shared/http/api-gateway.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MicroservicesService { 

  config;

  constructor(private apiGateway:ApiGatewayService) { }

  loadServiceConfig(url):Observable<any>
  {
    this.apiGateway.baseApiUrl ="/";
    
    // loading services.json
    return this.apiGateway.get(url);
        

  }

}
