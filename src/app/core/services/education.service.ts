import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from './../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient) { }

  public getJson():Observable<Education[]>{
    return this.http.get<Education[]>("./assets/json/educations.json");
  }
}
