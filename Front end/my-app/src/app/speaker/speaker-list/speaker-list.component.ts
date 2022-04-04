import { Component, OnInit, OnDestroy } from '@angular/core';
import { Speaker } from 'src/app/_models/speaker';
import { SpeakerService } from 'src/app/speaker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css'],
})
export class SpeakerListComponent implements OnInit{
  query: string = '';
  showAndHideImage: boolean = true;

  constructor(public speakerService: SpeakerService) {}
  // ngOnDestroy(): void {
    // console.log("speaker destroyed");
    // this.sub?.unsubscribe();
  // }
  speakers:Speaker[] | null = null ;
  sub:Subscription|null=null;
  speakerDetails = 0;
  speakeredit = 0;
  
  ngOnInit(): void {
  this.load();
}

load(){
  this.speakerService.getAllSpeakers().subscribe(speakers => this.speakers = speakers);
  console.log(this.speakers);
}
deleteSpeaker(id: number) {
  this.speakerService.deleteSpeaker(id).subscribe(data => console.log(data)) ; 
  this.load();
}

  toggleImage(target: any) {
    target.textContent = this.showAndHideImage ? 'Show Image' : 'Hide Image';
    this.showAndHideImage = !this.showAndHideImage;
  }
}
