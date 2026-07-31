import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';

interface TimelineItem {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  category: 'education' | 'experience';
}

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit, AfterViewInit, OnDestroy {
  educationData: TimelineItem[] = [
    {
      title: 'AI/ML Research & Developer Intern',
      subtitle: 'Raven AI - New York',
      duration: 'Jul 2025 - May 2026 (11 Months)',
      description: 'Built and deployed NLP-driven behavioral scoring systems using LLMs to evaluate medical communication at scale, improving alignment with expert assessments and enabling more empathetic clinical training.',
      category: 'experience'
    },
    {
      title: ' Lead Technical Support Engineer',
      subtitle: 'Purdue University - Fort Wayne',
      duration: 'Dec 2024 - May 2026 (1.5 Years)',
      description: 'Provided hands-on IT support for classroom and campus systems, including device configuration, network setup, and real-time troubleshooting to ensure uninterrupted academic operations.',
      category: 'experience'
    },
    {
      title: 'Masters of Science in CS',
      subtitle: 'Purdue University',
      duration: 'Aug 2024 - May 2026',
      description: 'GPA: 3.9/4.0',
      category: 'education'
    },
    {
      title: 'Software Developer Intern',
      subtitle: 'Omega Binaries - Chennai',
      duration: 'Apr 2023 - May 2023 (2 Months)',
      description: 'Built a secure biometric authentication system using Java Swing and backend database integration, enabling fingerprint-based user registration and login workflows.',
      category: 'experience'
    },
    {
      title: 'Machine Learning Intern',
      subtitle: 'TechVolt Software - Coimbatore',
      duration: 'Jun 2023 - Nov 2023 (6 Months)',
      description: 'Applied end-to-end machine learning workflows—data preprocessing, model development, tuning, and evaluation—across diverse real-world datasets to deliver reliable predictive insights.',
      category: 'experience'
    },
    {
      title: 'Data Analyst Intern',
      subtitle: 'Techvolt Software - Coimbatore',
      duration: 'Feb 2023 - Jun 2023 (5 Months)',
      description: 'Worked with real-world datasets to perform data cleaning, exploratory analysis, and statistical visualization using Python, translating raw data into actionable insights.',
      category: 'experience'
    },
    {
      title: 'Applied Programming Facilitator',
      subtitle: 'CMS Online Academy',
      duration: 'Jan 2022 - June 2025 (3 Years)',
      description: 'Taught Python, algorithms, debugging, and MySQL/database fundamentals to 100+ learners across programming sessions and project-based exercises.',
      category: 'experience'
    },
    {
      title: 'Bachelore of Technology in IT',
      subtitle: 'Anna University - Easwari Engineering College',
      duration: 'Oct 2020 - May 2024',
      description: 'GPA: 4.0/4.0',
      category: 'education'
    }
  ];

  activeIndex = -1;
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;
  visibleItems: Set<number> = new Set();
  private observer: IntersectionObserver | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
    // Initial scroll check for progress line
    setTimeout(() => this.checkScroll(), 100);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger slightly before the item is fully in view
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          this.visibleItems.add(index);
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    this.timelineItems.forEach((item, index) => {
      item.nativeElement.setAttribute('data-index', index.toString());
      this.observer?.observe(item.nativeElement);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkScroll();
  }

  checkScroll() {
    if (!this.timelineItems) return;

    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.6;

    this.timelineItems.forEach((item, index) => {
      const rect = item.nativeElement.getBoundingClientRect();
      if (rect.top < triggerPoint) {
        this.activeIndex = index;
      }
    });
  }

  isVisible(index: number): boolean {
    return this.visibleItems.has(index);
  }
}
