import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationComponent } from './certification/certification.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'skills', component: SkillsComponent},
      { path: 'certification', component:CertificationComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: 'contact', component:ContactComponent},
      { path: 'resume', component:ResumeComponent},
      { path: '**', redirectTo: 'home' },]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
