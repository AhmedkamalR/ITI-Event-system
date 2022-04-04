import {Inject, Injectable } from "@angular/core";
import { Speaker } from "./_models/speaker";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class SpeakerService {
  
  // baseurl:string = "http://127.0.0.1:8080/speakers/";


  addSpeaker(speaker:Speaker,file:File){
    let form:FormData=new FormData();//setting enctype : multipart/formdata
    form.append("_id",speaker._id.toString());
    form.append("fullname",speaker.fullname);
    form.append("email",speaker.email);
    form.append("address",speaker.address);
    form.append("age",speaker.age);
    form.append("image",file,file.name);
    form.append("birthDate",speaker.birthDate.toString());
    form.append("hourRate",speaker.hourRate.toString());
    form.append("isMarried",speaker.isMarried.toString());
    form.append("rating",speaker.rating.toString());
    return this.http.post<Speaker>(this.baseURL,form);

  }

  getAllSpeakers(){
    console.log("get speakers")
    return this.http.get<Speaker[]>(this.baseURL);
  }

  deleteSpeaker(_id:number)
  {
    // return this.http.delete(this.baseurl,{_id});
    return this.http.request('delete', this.baseURL, { body: {_id} })
  }
  getSpeakerById(id: number) {
    return this.http.get<Speaker>(this.baseURL+id);
 
  }

  setSpeakerById(id:number,speaker:Speaker)
  {
    return this.http.put<Speaker>(this.baseURL,speaker);
  }
  
  constructor(public http:HttpClient,@Inject('baseUrl') public baseURL:string) {
    this.baseURL+="speakers/"

   }
}
