import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {

    constructor( @Inject(MAT_DIALOG_DATA) msg:string ,private _matDialogRef:MatDialogRef<GetConfirmComponent>) {
       this.removeMsg = msg
     }

    removeMsg!:string;
    ngOnInit(): void {

    }

    onClose(flag:boolean){
            this._matDialogRef.close(flag);
    }

  }
