import { Component, OnInit,Input, OnChanges,  SimpleChanges} from '@angular/core';
import { Speaker } from 'src/app/_models/speaker';
import { SpeakerService } from 'src/app/speaker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.css']
})
export class SpeakerEditComponent implements OnInit,OnChanges {
  updateFlag: boolean = false;
  updateIndex: number = -1;
  @Input() id:number = -1;

  speaker:Speaker = new Speaker(0, '','', '', '', '',new Date(), 10, false, 5);
  display: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    // if (!changes['Id'].isFirstChange()) {
    //   this.speakerService.getSpeakerById(this.id).subscribe((data) => {
    //     this.speaker = data;
    //   });
    // }
  }

  editSpeaker()
  {
    this.display = true;
    this.speakerService.getSpeakerById(this.id).subscribe((data) => {
      this.speaker = data;
    });  }

  updateSpeaker()
  {
    console.log(this.speaker);
    this.speakerService.setSpeakerById(this.id,this.speaker).subscribe(data=>console.log(data));
    this.display = false;
    }
  cancelUpdate() {
    this.updateFlag = false;
    this.speaker = {
      _id: 1,
      fullname: '',
      email:'@gmail.com',
      isMarried: false,
      hourRate: 10,
      image: 'new',
      birthDate: new Date(),
      address: 'mansoura',
      age:'',
      rating: 4,
    };
  }
  constructor(public speakerService:SpeakerService, public acroute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.acroute.params.subscribe((data) => {
    //   this.speakerService.getSpeakerById(data['id']).subscribe((dataa) => {
    //     this.speaker = dataa;
    //   });
    // });
  }

}
