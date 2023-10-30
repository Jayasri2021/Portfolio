import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  viewResume() {
  const resumeUrl = '../../assets/resume.pdf';
    window.open(resumeUrl, '_blank');
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Smooth scrolling function
    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const scrollToComponent = (component: string) => {
      this.router.navigate([component]);
      setTimeout(() => {
        scrollToSection(component);
      }, 200);
    };

    document.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.textContent?.toLowerCase();
        if (targetId) {
          scrollToComponent(targetId);
        }
      });
    });
  }
}
