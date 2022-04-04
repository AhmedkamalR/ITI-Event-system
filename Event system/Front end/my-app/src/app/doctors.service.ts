import {Inject, Injectable } from '@angular/core';
import { Doctor } from './_models/doctor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  // baseurl:string = "http://127.0.0.1:8080/speakers/";


  addDoctor(doctor:Doctor,file:File){
    let form:FormData=new FormData();//setting enctype : multipart/formdata
    form.append("_id",doctor._id.toString());
    form.append("name",doctor.name);
    form.append("phone",doctor.phone);
    form.append("spec",doctor.spec);
    form.append("age",doctor.age);
    form.append("image",file,file.name);
    return this.http.post<Doctor>(this.baseURL,form);

  }

  getAllDoctors(){
    console.log("get doctors")
    return this.http.get<Doctor[]>(this.baseURL);
  }

  deleteDoctor(_id:number)
  {
    // return this.http.delete(this.baseurl,{_id});
    return this.http.request('delete', this.baseURL, { body: {_id} })
  }
  getDoctorById(id: number) {
    return this.http.get<Doctor>(this.baseURL+id);

  }

  setDoctorById(id:number,doctor:Doctor)
  {
    return this.http.put<Doctor>(this.baseURL,doctor);
  }

  constructor(public http:HttpClient,@Inject('baseUrl') public baseURL:string) {
    this.baseURL+="doctors/"

   }
}
