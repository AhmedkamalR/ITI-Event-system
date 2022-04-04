import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  query: string = '';
  showAndHideImage: boolean = true;

  constructor(public StudentService: StudentService) {}
  // ngOnDestroy(): void {
  //   console.log("student destroyed");
  //   this.sub?.unsubscribe();
  // }
  Students:Student[] | null = null ;
  sub:Subscription|null=null;
  speakerDetails = 0;
  speakeredit = 0;

  ngOnInit(): void {
    this.load();
  }
  
  load(){
    this.StudentService.getAllStudents().subscribe(Students => this.Students = Students);
    console.log(this.Students);
  }

  deleteStudent(id: number) {
    this.StudentService.deleteStudent(id).subscribe(data => console.log(data)) ; 
 
  }
  toggleImage(target: any) {
    target.textContent = this.showAndHideImage ? 'Show Image' : 'Hide Image';
    this.showAndHideImage = !this.showAndHideImage;
  }
}
