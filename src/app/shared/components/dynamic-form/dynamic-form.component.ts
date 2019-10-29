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
    this.apiGateway.baseApiUrl = '/';

    let group: any = {};
    this.service.input.forEach(control => {
      group[control.key] = new FormControl(control.value || '');
    });
    this.group =  new FormGroup(group);
  }

  getData()
  {
    alert("in Get");
    const endPoint = '/rest/api/get';
    let params = new HttpParams();
    
    this.service.input.forEach(control => {
      if(control.in === "path")
      {
        params = params.set(control.key, this.group.value[control.key]);
      }
    });
    // let params = new HttpParams({fromString: 'page=' + PageNo + '&sort=' + SortOn});
    //let params = new HttpParams().set('role', "admin").set('userId', "01");
    
    // Sending API get request to fetch dashboard data point
    return this.apiGateway.get(endPoint, params);
  }

  postData()
  {
    alert("in Post");
    const endPoint = '/rest/api/post';
     // Sending API Post request with HCP Create form values to Craete an HCP
     const doctorData = {
      //role: this.group.role.value,
      //firstname: this.group.doctorFirstname.value,
      //lastname: this.group.doctorLastname.value,
     // staffPractice: [{ staffpracticeid: this.group.practice.value }],
      staffType:"Doctor"
    };
     return this.apiGateway.post(endPoint, doctorData).subscribe(
      response => {
          let a;
      },
      error => {
        const data: any = JSON.parse(error);
            }
    );
  }
  putData()
  {
    alert("in Put");
    const endPoint = '/rest/api/put';
    const doctorData = {
     // staffId: form.id.value,
      //role: form.role.value,
      //firstname: form.firstname.value,
      staffType:"Doctor"
    };
    return this.apiGateway.put(endPoint, doctorData).subscribe(
      response => {
        /**
         * passed the error response to the toast/message service for notifying the user
         */
        const data: any = JSON.parse(response.body);
       },
      error => {
        const data: any = JSON.parse(error);
      }
    );
  }
  deleteData()
  {
    alert("in Delete");
  }
}
