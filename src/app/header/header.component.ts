import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeSection: string = 'home';
  isDark = false;
  isMenuOpen = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.isDark = theme === 'dark';
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'projects', 'journey', 'skills', 'experience', 'certifications'];
    const threshold = 120; // Increased threshold for earlier detection

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        // If the top of the section is within the top portion of the viewport
        if (rect.top <= threshold && rect.bottom > threshold) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId; // Immediate highlight
      this.isMenuOpen = false; // Close menu on mobile after click
    }
  }
}
