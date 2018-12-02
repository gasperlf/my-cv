import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/model/skill';
import { SkillService } from 'src/app/core/services/skill.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Skill[];

  constructor(private skillService: SkillService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills():void{
    this.skillService.getJSON().subscribe(data=>this.skills=data);
  }

  sanitize(style: string) {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

}
