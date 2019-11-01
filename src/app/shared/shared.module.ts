import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTableModule
} from "@angular/material";
import { CustomcardComponent } from './components/custom-card/customcard.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/header/navbar.component';
import { RouterModule } from '@angular/router';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

  ],
  exports: [
    CdkTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    CustomcardComponent,
    DynamicFormComponent,
    NavbarComponent,
    DynamicTableComponent
  ],
  declarations: [CustomcardComponent,DynamicFormComponent,NavbarComponent,DynamicTableComponent]
})
export class SharedModule {}



