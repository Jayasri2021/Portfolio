import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeSection: string = 'home';
  scrollProgress = 0;
  isDark = false;
  isMenuOpen = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.isDark = theme === 'dark';
    });
    this.updateScrollState();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateScrollState();
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.updateScrollState();
  }

  private updateScrollState() {
    const sections = ['home', 'journey', 'projects', 'skills', 'experience', 'contact'];
    const threshold = 120;
    const sectionElements = sections
      .map(id => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    const scrollPosition = window.scrollY + threshold;

    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      this.activeSection = 'contact';
      this.scrollProgress = 100;
      return;
    }

    let activeIndex = 0;
    for (let index = 0; index < sectionElements.length; index++) {
      if (scrollPosition >= sectionElements[index].offsetTop) {
        activeIndex = index;
        this.activeSection = sections[index];
      }
    }

    const segmentCount = Math.max(sectionElements.length - 1, 1);
    if (activeIndex >= sectionElements.length - 1) {
      this.scrollProgress = 100;
      return;
    }

    const sectionStart = sectionElements[activeIndex].offsetTop;
    const sectionEnd = sectionElements[activeIndex + 1].offsetTop;
    const sectionHeight = Math.max(sectionEnd - sectionStart, 1);
    const localProgress = Math.min(
      Math.max((scrollPosition - sectionStart) / sectionHeight, 0),
      1
    );

    this.scrollProgress = ((activeIndex + localProgress) / segmentCount) * 100;
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
