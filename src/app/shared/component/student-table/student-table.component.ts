import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from '../../model/student-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  constructor( private _snackbar:MatSnackBar,private _matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  @Output() emitEditObj = new EventEmitter<Istudent>()
  @Input() studentArr!:Istudent[]

   studentTrack(index :Number ,std:Istudent){
        return std.id;
   }

   onEdit(std:Istudent){
      this.emitEditObj.emit(std);
   }


   onRemove(id:Number){
         let  config = new MatDialogConfig();
               config.disableClose= true;
              config.width = '800px';
         let  matRef = this._matDialog.open(GetConfirmComponent,config);
          matRef.afterClosed().subscribe(flag=>{
            if(flag){
               let getIndex = this.studentArr.findIndex(ele=>ele.id===id);
                if(getIndex>-1){
                     this.studentArr.splice(getIndex,1);
                   this._snackbar.open('deleted successfully','close',{
                            duration:3000
                   })
                  }

                }
          })
   }
}
