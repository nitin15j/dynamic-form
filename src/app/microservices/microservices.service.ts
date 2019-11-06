import { Injectable } from '@angular/core';
import { ApiGatewayService } from '../shared/http/api-gateway.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MicroservicesService { 

  config;
  public serviceConfig = new BehaviorSubject<object>({});
  serviceConfig$ = this.serviceConfig.asObservable();

  constructor(private apiGateway:ApiGatewayService) { }

  loadServiceConfig(url):Observable<any>
  {
    this.apiGateway.baseApiUrl ="/";
    
    // loading services.json
    return this.apiGateway.get(url);
        

  }

}
