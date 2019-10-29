import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ControlConfig } from '../../contorl.config';

@Component({
  selector: "app-button",
  template: `
<div class="demo-full-width margin-top" [formGroup]="group">
<button type="submit" mat-raised-button color="primary">{{control.label}}</button>
</div>
`,
  styles: []
})
export class ButtonComponent implements OnInit {
  control: ControlConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
