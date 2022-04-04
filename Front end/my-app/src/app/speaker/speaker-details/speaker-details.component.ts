import { Component, Input, OnInit ,OnChanges,SimpleChanges} from '@angular/core';
import { Speaker } from 'src/app/_models/speaker';
import { SpeakerService } from 'src/app/speaker.service';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {

  constructor(public speakerService:SpeakerService) { }
  @Input() id:number = -1;

  speaker:Speaker|null = new Speaker(0, '', '','' ,'', '',new Date(), 10, false, 5);

  ngOnInit(): void {
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  showSpeaker()
  {

    this.display = true;
    // this.display = true;
    // this.speaker = this.speakerService.getSpeakerById(this.id);
    this.speakerService.getSpeakerById(this.id).subscribe((data) => {
      this.speaker = data;
      // console.log("speaker",this.speaker)

    });
 // ngOnChanges(changes: SimpleChanges): void {
  //   if (!changes['id'].isFirstChange())
  //     this.speakerService.getSpeakerById(this.id).subscribe((data) => {
  //       this.speaker = data;
  //       console.log(data);
  //     });

  //   // console.log("speaker",this.speaker);
  // }
  }

}
