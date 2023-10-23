import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  viewOtherProj() {
    const resumeUrl = 'https://github.com/Jayasri2021?tab=repositories';
      window.open(resumeUrl, '_blank');
    }
  
}
