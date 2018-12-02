import { Injectable } from '@angular/core';
import { Experience } from './../model/experience';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) {
   }

  public getJSON(): Observable<Experience[]> {
    return this.http.get<Experience[]>("./assets/json/experiences.json");

  }
}
