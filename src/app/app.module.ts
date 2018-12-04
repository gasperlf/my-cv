import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './core/shared/components/skills/skills.component';
import { ExperienceComponent } from './core/shared/components/experience/experience.component';
import { EducationComponent } from './core/shared/components/education/education.component';
import { HomeComponent } from './core/shared/components/home/home.component';
import { WorkComponent } from './core/shared/components/work/work.component';
import { ContactComponent } from './core/shared/components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    HomeComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
