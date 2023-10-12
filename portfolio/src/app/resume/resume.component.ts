import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  viewResume() {
    // Replace 'path/to/your/resume.pdf' with the actual path or URL to your resume PDF file
    const resumeUrl = '../../assets/Resume.pdf';
    
    window.open(resumeUrl, '_blank');
  }
}
