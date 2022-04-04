import { Component, OnInit } from '@angular/core';
import { Speaker } from 'src/app/_models/speaker';
import { SpeakerService } from 'src/app/speaker.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css']
})
export class SpeakerAddComponent implements OnInit {
  idCounter: number = 1;
  speaker = new Speaker(this.idCounter, '','','', '', '2020.jpg',new Date(), 10, false, 5);

  updateFlag: boolean = false;
  detailsFlag: boolean = false;
  updateIndex: number = -1;
  showImageFlag: boolean = true;
  rating: number = 5 ;
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


  addSpeaker() {
    // this.speaker._id = this.incrementId();
    // this.speakerService.addSpeaker(Object.assign({}, this.speaker)).subscribe(
    //   a=>console.log(a)
    this.speakerService.addSpeaker(this.speaker,this.file).subscribe(
      data=>console.log(data)) ; 
      this.router.navigate(['/speakers']);
     ; 
  }


  constructor(public speakerService:SpeakerService, public router: Router) { }


  ngOnInit(): void {
  }

}
