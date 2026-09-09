import { Component, OnInit } from '@angular/core';
import { students } from '../../const/studentArr';
import { Istudent } from '../../model/student-model';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor() { }
    editStdObj!:Istudent;
  ngOnInit(): void {
  }

  studentArr: Istudent[] = students;


   getAdd(std:Istudent){
         this.studentArr.unshift(std);
         
   }

   getEdit(StdObj:Istudent){
      this.editStdObj=StdObj;
   }

    getUpdate(std:Istudent){
       let getIndex = this.studentArr.findIndex(ele=>ele.id===std.id);
         this.studentArr[getIndex]= std;

    }
}
