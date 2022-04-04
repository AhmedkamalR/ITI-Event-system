import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  idCounter: number = 1;
  student = new Student(this.idCounter, '','','', '', '2020.jpg',new Date(),"", "");
  updateFlag: boolean = false;
  detailsFlag: boolean = false;
  updateIndex: number = -1;
  showImageFlag: boolean = true;

  add:boolean = false;

  file:any;

  onFileChange(s:any){
      this.file=s.target.files[0];
  }
  showAdd()
  {
    this.add = true ;
  }

  incrementId() {
    return this.idCounter++;
  }


  addStudent() {
    this.studentService.addStudent(this.student,this.file).subscribe(
      data=>console.log(data)) ; 
      this.router.navigate(['/students']);
  }


  constructor(public studentService:StudentService, public router: Router) { }


  ngOnInit(): void {
  }
  }


