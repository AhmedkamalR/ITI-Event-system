import { Component, OnInit,Input, OnChanges,  SimpleChanges } from '@angular/core';
import { Student } from 'src/app/_models/student'
import { StudentService } from 'src/app/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit,OnChanges {
  updateFlag: boolean = false;
  updateIndex: number = -1;
  @Input() id:number = -1;

  Student:Student = new Student(0, '','', '', '', '',new Date(),"","");
  display: boolean = false;
  // file:any;

  ngOnChanges(changes: SimpleChanges): void {

  }
  // onFileChange(s:any){
  //     this.file=s.target.files[0];
  // }
  editStudent()
  {
    this.display = true;
    this.StudentService.getStudentById(this.id).subscribe((data) => {
      this.Student = data;
    });}

  updateStudent()
  {
    console.log(this.Student);
    this.StudentService.setStudentById(this.id,this.Student).subscribe(data=>console.log(data));
    this.display = false;
    }
  cancelUpdate() {
    this.updateFlag = false;
    this.Student = {
      _id: 1,
      fullname: '',
      email:'@gmail.com',
      image: 'new',
      birthDate: new Date(),
      address: 'mansoura',
      age:'',
      department:'',
      GBA: "",
    };
  }
  constructor(public StudentService:StudentService, public acroute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.acroute.params.subscribe((data) => {
    //   this.StudentService.getStudentById(data['id']).subscribe((dataa) => {
    //     this.Student = dataa;
    //   });
    // });
  }

}
