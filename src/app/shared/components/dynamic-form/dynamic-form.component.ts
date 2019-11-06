import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ControlConfig } from '../../contorl.config';
import { ApiGatewayService } from '../../http/api-gateway.service';
import { HttpParams } from '@angular/common/http';
import { NotificationBarComponent } from '../notification-bar/notification-bar.component';

@Component({
  selector: "app-dynamicform",
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input()service;
  group: FormGroup;
  result;

  constructor(private apiGateway: ApiGatewayService, private notificationBar: NotificationBarComponent) {}
  ngOnInit() {

    this.result = "Result will come here";
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
    let endPoint = this.service.path
    let params = new HttpParams();
    
    this.result = "Result will come here";

    this.service.input.forEach(control => {
      if(control.in === "path")
      {
        endPoint = endPoint + this.group.value[control.key];
       // params = params.set(control.key, this.group.value[control.key]);
      }
    });
    // let params = new HttpParams({fromString: 'page=' + PageNo + '&sort=' + SortOn});
    //let params = new HttpParams().set('role', "admin").set('userId', "01");
    //this.result = this.service;
    this.apiGateway.get(endPoint, params).subscribe(response => {
      if(response === null){
        this.notificationBar.show("Not able to found with Id ", 'Close', 'red-snackbar');

        //alert("Account Id not found");
      }
      else
      {
        this.result = (response);
        this.notificationBar.show("Found successfully", 'Close', 'blue-snackbar');
      }
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
    
    this.result = "Result will come here";

    this.apiGateway.post(endPoint, data).subscribe(response =>{
        this.result = JSON.parse(response.body);
        this.notificationBar.show("Created successfully", 'Close', 'blue-snackbar');
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

    this.result = "Result will come here";
    
    this.apiGateway.put(endPoint, data).subscribe(response => {
        this.result = JSON.parse(response.body);
        this.notificationBar.show("Updated successfully", 'Close', 'blue-snackbar');
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
    let params = new HttpParams();
    this.result = "Result will come here";
    this.service.input.forEach(control => {
      if(control.in === "query")
      {
        //endPoint = endPoint + this.group.value[control.key];
        params = params.set(control.key, this.group.value[control.key]);
      }
    });
    
     this.apiGateway.delete(endPoint,params).subscribe(
      response => {
        this.notificationBar.show("Deleted successfully", 'Close', 'blue-snackbar');
        this.result = JSON.stringify(response);
      },
      error => {
        this.notificationBar.show("Id not found", 'Close', 'red-snackbar');
        const data: any = JSON.parse(error);
            }
    );
  }

  renderResult(data)
  {
    //if( typeof(data))
  }
}
