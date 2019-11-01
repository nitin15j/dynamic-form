import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ControlConfig } from '../../contorl.config';
import { ApiGatewayService } from '../../http/api-gateway.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: "app-dynamicform",
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input()service;
  group: FormGroup;
  result;

  constructor(private apiGateway: ApiGatewayService) {}
  ngOnInit() {

    this.result = " This is result";
    //setting the api base path, this will hold true for all the api endpoints
    this.apiGateway.baseApiUrl = '';

    let group: any = {};
    this.service.input.forEach(control => {
      group[control.key] = new FormControl(control.value || '');
    });
    this.group =  new FormGroup(group);
  }

  getData()
  {
    alert("in Get");
    let endPoint = this.service.path
    let params = new HttpParams();
    
    this.service.input.forEach(control => {
      if(control.in === "path")
      {
        endPoint = endPoint + this.group.value[control.key];
       // params = params.set(control.key, this.group.value[control.key]);
      }
    });
    // let params = new HttpParams({fromString: 'page=' + PageNo + '&sort=' + SortOn});
    //let params = new HttpParams().set('role', "admin").set('userId', "01");
    
    this.apiGateway.get(endPoint, params).subscribe(response => {
      this.result = JSON.stringify(response);
    });
  }

  postData()
  {
    const endPoint = this.service.path;
    let data = {}; 
    this.service.input.forEach(control => {
      if(control.in === "body"){
        data[control.key] = this.group.value[control.key];
      }
    });
    
    this.apiGateway.post(endPoint, data).subscribe(response =>{
        this.result = JSON.stringify(response);
      },
      error => {
        const data: any = JSON.parse(error);
            }
    );
  }
  putData()
  {
    const endPoint = this.service.path;
    let data = {}; 
    this.service.input.forEach(control => {
      if(control.in === "body"){
        data[control.key] = this.group.value[control.key];
      }
    });
    
    this.apiGateway.put(endPoint, data).subscribe(response => {
        this.result = JSON.stringify(response);
      },
      error => {
        const data: any = JSON.parse(error);
            }
    );
  }

  deleteData()
  {
    let endPoint = this.service.path;
    let data = {}; 

    this.service.input.forEach(control => {
      if(control.in === "body"){
        endPoint = endPoint + this.group.value[control.key];
      }
    });
    
     this.apiGateway.delete(endPoint).subscribe(
      response => {
        this.result = JSON.stringify(response);
      },
      error => {
        const data: any = JSON.parse(error);
            }
    );
  }

  renderResult(data)
  {
    //if( typeof(data))
  }
}
