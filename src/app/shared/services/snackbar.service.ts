import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _sanckbarService:MatSnackBar) { }

   snackbar(msg:string){
             this._sanckbarService.open(msg,'close',{
                           duration:3000,
                           data:msg
                  })
          }

}
