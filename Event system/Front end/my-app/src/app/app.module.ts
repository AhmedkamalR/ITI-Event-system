import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpeakerAddComponent } from './speaker/speaker-add/speaker-add.component';
import { SpeakerEditComponent } from './speaker/speaker-edit/speaker-edit.component';
import { SpeakerDetailsComponent } from './speaker/speaker-details/speaker-details.component';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ImageModule} from 'primeng/image';
import { ArraySplicePipe } from './array-splice.pipe';
import { CheckboxModule } from 'primeng/checkbox';
import {RatingModule} from 'primeng/rating';
import { CoreModule } from './core/core.module';
import { HttpClientModule ,HTTP_INTERCEPTORS} from "@angular/common/http"
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { LoginComponent } from './login/login.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { RegisterComponent } from './register/register.component';
const routes:Routes=[

  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"speakers",component:SpeakerListComponent,children:
  [
    {path:"details/:id",component:SpeakerDetailsComponent},
    {path:"edit/:id",component:SpeakerEditComponent},

  ]},
  {path:"speakers/add",component:SpeakerAddComponent},
  
  {path:"students",component:StudentListComponent,children:
  [
    {path:"details/:id",component:StudentDetailsComponent},
    {path:"edit/:id",component:StudentEditComponent},

  ]},
  {path:"students/add",component:StudentAddComponent},

  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},


  {path:"**",component:ErrorComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    SpeakerAddComponent,
    SpeakerEditComponent,
    SpeakerDetailsComponent,
    SpeakerListComponent,
    StudentAddComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentListComponent,
    ArraySplicePipe,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    ImageModule,
    CheckboxModule,
    RatingModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers:
  [
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true},

    {provide:"baseUrl",useValue:"http://localhost:8080/"}
  ],
    bootstrap: [AppComponent]
})
export class AppModule {
  
 }
