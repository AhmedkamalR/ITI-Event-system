import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject,  Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {



// baseurl:string = "http://127.0.0.1:8080/speakers/";


  addStudent(student:Student,file:File){

    let form:FormData=new FormData();//setting enctype : multipart/formdata
    form.append("_id",student._id.toString());
    form.append("fullname",student.fullname);
    form.append("email",student.email);
    form.append("address",student.address);
    form.append("age",student.age);
    form.append("image",file,file.name);
    form.append("department",student.department);
    form.append("GBA",student.GBA);
    return this.http.post<Student>(this.baseURL,form);

  }
  myfun(){
    let h:HttpHeaders=new HttpHeaders();
    h=h.append("Content-Type","multipart/form-data");
    h=h.append("Authorization","hhh")

     let p:HttpParams=new HttpParams();//query string
     p=p.append("name","aly");
     p=p.append("age",30);



    return this.http.get(this.baseURL,{params:p,headers:h});
  }
  getAllStudents(){
    console.log("get Students")
    return this.http.get<Student[]>(this.baseURL);
  }


  deleteStudent(_id:number)
  {
    // return this.http.delete(this.baseurl,{_id});
    return this.http.request('delete', this.baseURL, { body: {_id} })
  }

  getStudentById(id: number) {
    return this.http.get<Student>(this.baseURL+id);
  }

  setStudentById(id:number,student:Student)
  {
    return this.http.put<Student>(this.baseURL,student);
  }
  
  constructor(public http:HttpClient,@Inject('baseUrl') public baseURL:string) { 
    this.baseURL+="students/"

  }
}
