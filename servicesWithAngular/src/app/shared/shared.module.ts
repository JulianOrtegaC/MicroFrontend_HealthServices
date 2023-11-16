import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';










@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatPaginatorModule,
    MatNativeDateModule ,
    MatIconModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [ CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatPaginatorModule,
    MatNativeDateModule ,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,

  ],
})
export class SharedModule { }
