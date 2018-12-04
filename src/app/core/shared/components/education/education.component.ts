import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/core/services/education.service';
import { Education } from 'src/app/core/model/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations : Education[];

  constructor(private educationService: EducationService) { }

  ngOnInit() {
    this.getEducations();
  }

  getEducations():void{
    this.educationService.getJson().subscribe(data=>this.educations=data);
  }
}
