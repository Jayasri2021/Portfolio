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
      subtitle: 'Raven AI — New York, NY',
      duration: 'Jul 2025 - May 2026 (11 Months)',
      description: 'Built Python-based evaluation pipelines transforming unstructured medical training dialogue into structured behavioral scores across 250+ conversational datasets. Benchmarked GPT-4o, Qwen3, and Llama using MAE, MSE, and R² metrics. Automated scoring and preprocessing workflows to reduce manual evaluation effort and improve iteration speed for prompt experimentation.',
      category: 'experience'
    },
    {
      title: 'Lead Technical Support Engineer',
      subtitle: 'Purdue University - Fort Wayne',
      duration: 'Dec 2025 - May 2026 (5 Months)',
      description: '',
      category: 'experience'
    },
    {
      title: 'Technical Support Engineer',
      subtitle: 'Purdue University — Fort Wayne',
      duration: 'Dec 2024 - Dec 2025 (1 Year)',
      description: 'Resolved technical issues across OS, networking, authentication, hardware, and AV systems for 500+ daily users across classroom and lab environments. Re-imaged and configured 100+ systems, standardizing workstation setups. Documented 20+ recurring fixes and troubleshooting workflows to improve repeatability.',
      category: 'experience'
    },
    {
      title: 'Master of Science in Computer Science',
      subtitle: 'Purdue University',
      duration: 'Aug 2024 - May 2026',
      description: 'GPA: 3.9/4.0',
      category: 'education'
    },
    {
      title: 'Software Developer Intern',
      subtitle: 'Omega Binaries — Chennai',
      duration: 'Apr 2023 - May 2023 (2 Months)',
      description: 'Developed a biometric authentication system using Java Swing, MySQL, and MVC architecture with MFS100 fingerprint SDK integration. Implemented secure registration/login workflows with encrypted credential storage and role-based access control.',
      category: 'experience'
    },
    {
      title: 'Machine Learning Intern',
      subtitle: 'TechVolt Software — Coimbatore',
      duration: 'Jun 2023 - Nov 2023 (6 Months)',
      description: 'Engineered features and trained classical ML models (Logistic Regression, Naive Bayes, Decision Trees), achieving 85%+ predictive accuracy. Compared multiple models and selected the best-performing approach using cross-validation and hyperparameter tuning.',
      category: 'experience'
    },
    {
      title: 'Data Analyst Intern',
      subtitle: 'TechVolt Software — Coimbatore',
      duration: 'Feb 2023 - Jun 2023 (5 Months)',
      description: 'Performed exploratory data analysis and data cleaning on 10,000+ records, improving data quality for downstream modeling. Optimized SQL queries and reporting workflows, reducing reporting latency by 45%. Built dashboards and structured summaries for stakeholder-facing analysis.',
      category: 'experience'
    },
    {
      title: 'Applied Programming Facilitator',
      subtitle: 'CMS Online Academy', 
      duration: 'Jan 2022 - June 2025 (3 Years)',
      description: 'Taught Python, algorithms, debugging, and MySQL fundamentals to 100+ learners across programming sessions and project-based exercises. Mentored students through 30+ coding exercises and mini-projects. Created 25+ technical explanations and learning materials for beginner programming concepts.',
      category: 'experience'
    },
    {
      title: 'Bachelor of Technology in Information Technology',
      subtitle: 'Anna University — Easwari Engineering College',
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
