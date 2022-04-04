import { Component, Input, OnInit ,OnChanges,SimpleChanges} from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/student.service';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(public StudentService:StudentService) { }
  @Input() id:number = -1;

  Student:Student|null = new Student(0, '', '','' ,'', '',new Date(), "","");

  ngOnInit(): void {
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  showStudent()
  {
    this.display = true;
    // this.display = true;
    // this.Student = this.StudentService.getStudentById(this.id);
    this.StudentService.getStudentById(this.id).subscribe((data) => {
      this.Student = data;
    });
 // ngOnChanges(changes: SimpleChanges): void {
  //   if (!changes['id'].isFirstChange())
  //     this.StudentService.getStudentById(this.id).subscribe((data) => {
  //       this.Student = data;
  //       console.log(data);
  //     });

  //   // console.log("Student",this.Student);
  // }
  }

}
