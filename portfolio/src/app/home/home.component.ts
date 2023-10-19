import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  viewResume() {
  const resumeUrl = '../../assets/Resume.pdf';
    
    window.open(resumeUrl, '_blank');
  }
}
