import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('avatar', { static: false }) avatarRef!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Smooth scrolling logic (kept from previous code)
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

    // Intersection Observer for Avatar Animation
    this.setupAvatarObserver();
  }

  setupAvatarObserver() {
    // We'll use a MutationObserver or wait for view init, but mostly IntersectionObserver works on elements.
    // Since ElementRef might not be available in ngOnInit immediately if it's conditioned or just to be safe:
    setTimeout(() => {
      if (!this.avatarRef) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('animate-reveal'); // Reset
            void (entry.target as HTMLElement).offsetWidth; // Trigger reflow
            entry.target.classList.add('animate-reveal');
          }
        });
      }, { threshold: 0.1 }); // Trigger when 10% visible

      observer.observe(this.avatarRef.nativeElement);
    }, 100);
  }

  viewResume() {
    const resumeUrl = '../../assets/Resume.pdf';
    window.open(resumeUrl, '_blank');
  }

  viewLinkedIn() {
    const linkedInUrl = 'https://www.linkedin.com/in/jayasri-suresh-vani-897879296';
    window.open(linkedInUrl, '_blank');
  }
}
