import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:53535/api";
readonly PhotoUrl = "http://localhost:53535/Photos/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Usuario');
  }

  addUsuario(val:any){
    return this.http.post(this.APIUrl+'/Usuario',val);
  }

  updateUsuario(val:any){
    return this.http.put(this.APIUrl+'/Usuario',val);
  }

  deleteUsuario(val:any){
    return this.http.delete(this.APIUrl+'/Usuario/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Usuario');
  }

  addUsuario(val:any){
    return this.http.post(this.APIUrl+'/Usuario',val);
  }

  updateUsuario(val:any){
    return this.http.put(this.APIUrl+'/Usuario',val);
  }

  deleteUsuario(val:any){
    return this.http.delete(this.APIUrl+'/Usuario/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Usuario/SaveFile',val);
  }

  getAllNomes():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Usuario/GetAllNomes');
  }

}
