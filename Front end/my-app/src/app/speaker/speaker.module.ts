import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerAddComponent } from './speaker-add/speaker-add.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';


@NgModule({
  declarations: [
    SpeakerListComponent,
    SpeakerAddComponent,
    SpeakerDetailsComponent,
    SpeakerEditComponent,
  ],
  exports: [
    SpeakerListComponent,
    SpeakerAddComponent,
    SpeakerDetailsComponent,
    SpeakerEditComponent,
  ],
  imports: [
    CommonModule,FormsModule
   
  ]
})
export class SpeakerModule { }
