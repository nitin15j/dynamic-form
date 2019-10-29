import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ControlConfig } from '../../contorl.config';

@Component({
  selector: "app-input",
  template: `
<mat-form-field class="demo-full-width" [formGroup]="group">
<input matInput [formControlName]="control.name" [placeholder]="control.label" [type]="control.inputType">
<ng-container *ngFor="let validation of control.validations;" ngProjectAs="mat-error">
<mat-error *ngIf="group.get(control.name).hasError(validation.name)">{{validation.message}}</mat-error>
</ng-container>
</mat-form-field>
`,
  styles: []
})
export class InputComponent implements OnInit {
  control: ControlConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
