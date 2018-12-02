import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from './../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) {
   }

  public getJSON(): Observable<Skill[]> {
    return this.http.get<Skill[]>("./assets/json/skills.json");

  }
}
