import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './../../../services/experience.service';
import { Experience } from 'src/app/core/model/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences : Experience[];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.getExperiences();
  }

  getExperiences() : void{
    this.experienceService.getJSON().subscribe(data=>this.experiences=data);
  }

}
