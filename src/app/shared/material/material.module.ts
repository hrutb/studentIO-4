import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import  { MatIconModule } from "@angular/material/icon"
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
@NgModule({
  declarations: [],
  imports: [
     MatIconModule ,
    MatSnackBarModule ,
    MatDialogModule ,
    MatButtonModule,
    CommonModule
  ] ,
   exports: [
         MatIconModule ,
         MatSnackBarModule ,
         MatDialogModule ,
    MatButtonModule,


    ]
})
export class MaterialModule { }
