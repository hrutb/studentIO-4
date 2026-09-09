import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { Istudent } from '../../model/student-model';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit ,OnChanges {

   @Input() getEditObj!:Istudent;


   IsInEditMode:boolean = false;
   editObj!:Istudent;

   @ViewChild("studentForm") studentForm!:NgForm;
   @Output() emitUpdateObj= new EventEmitter<Istudent>();

   @Output() eminewObj  = new EventEmitter<Istudent>();

  constructor(private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.editObj = changes['getEditObj']['currentValue'];
      if(this.editObj){
           this.IsInEditMode = true;
           this.studentForm.form.patchValue(this.editObj);
          }


   }


      addStudent(){
       let newObj= {
                 ...this.studentForm.form.value,
                 id:Date.now()
         }
             this.eminewObj.emit(newObj);
             this.studentForm.reset();
              this._snackbar.open('added successfully','close',{
                         duration:3000
              })
     }
 

  onUpdate(){
    let updateId =this.editObj.id ;

    let updateObj = {
         ...this.studentForm.form.value ,
         id:updateId
    }

     this.emitUpdateObj.emit(updateObj);
       this.studentForm.reset();
       this._snackbar.open('updated successfully','close',{
               duration:3000
       })
       this.IsInEditMode = false;
    }



}
