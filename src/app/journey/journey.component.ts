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
      title: 'Generative AI Specialist',
      subtitle: 'CDF - Community Dreams Foundation',
      duration: 'Jul 2026 - Present',
      description: 'Contribute to BetterSnapAI’s full-stack product development by building admin-dashboard workflows and AI image-generation features using Azure, Python, Supabase, and LoRA models, with a focus on operational analytics and GPU-cost optimization.',
      category: 'experience'
    },
    {
      title: 'AI/ML Research & Developer Engineer',
      subtitle: 'Raven AI',
      duration: 'Jul 2025 - May 2026 (11 Months)',
      description: 'Built Python-based evaluation pipelines that transformed 250+ unstructured medical-training dialogues into structured behavioral scores, automating LLM benchmarking across GPT-4o, Qwen3, and Llama using MAE, MSE, and R² to support model-selection and prompt-optimization decisions.',
      category: 'experience'
    },
    {
      title: 'Technical Support Engineer -> Lead Technical Support Engineer',
      subtitle: 'Purdue University',
      duration: 'Dec 2024 - Apr 2026 (1 Year 4 Months)',
      description: ' Supported 500+ daily users by troubleshooting campus IT systems, standardizing 100+ workstations, and documenting repeatable technical fixes.',
      category: 'experience'
    },
    {
      title: 'M.S., Computer Science',
      subtitle: 'Purdue University',
      duration: 'Aug 2024 - May 2026',
      description: 'GPA: 3.9/4.0',
      category: 'education'
    },
    {
      title: 'Software Engineer',
      subtitle: 'Omega Binaries',
      duration: 'Dec 2023 - May 2024 (6 Months)',
      description: 'Built a Java Swing biometric authentication system using MySQL, MVC architecture, and the MFS100 fingerprint SDK, with secure login, encrypted credentials, and role-based access control.',
      category: 'experience'
    },
    {
      title: 'Data Analyst -> Machine Learning Engineer',
      subtitle: 'TechVolt Software Pvt. Ltd.',
      duration: 'Feb 2023 - Nov 2023 (10 Months)',
      description: 'Cleaned and analyzed 10,000+ records, optimized SQL reporting workflows by 45%, built stakeholder dashboards, and developed validated machine-learning models achieving 85%+ predictive accuracy.',
      category: 'experience'
    },
    {
      title: 'Applied Programming Facilitator',
      subtitle: 'CMS Online Academy', 
      duration: 'Jan 2022 - June 2024 (2 Years 6 Months)',
      description: 'Taught Python, algorithms, debugging, and MySQL fundamentals to 100+ learners through hands-on coding exercises and project-based mentoring.',
      category: 'experience'
    },
    {
      title: 'B.Tech., Information Technology',
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

  getWorkBullets(title: string): string[] {
    const bullets: Record<string, string[]> = {
      'Generative AI Specialist': [
        'Build BetterSnapAI admin-dashboard workflows.',
        'Develop AI image-generation features with Azure, Python, Supabase, and LoRA.',
        'Improve operational analytics and GPU-cost efficiency.'
      ],
      'AI/ML Research & Developer Engineer': [
        'Converted 250+ medical-training dialogues into behavioral scores.',
        'Benchmarked GPT-4o, Qwen3, and Llama using MAE, MSE, and R².',
        'Supported model selection and prompt optimization.'
      ],
      'Technical Support Engineer -> Lead Technical Support Engineer': [
        'Supported 500+ daily users across campus IT systems.',
        'Standardized more than 100 workstations.',
        'Documented repeatable troubleshooting procedures.'
      ],
      'Software Engineer': [
        'Built a biometric authentication system with Java Swing and MySQL.',
        'Integrated the MFS100 fingerprint SDK using MVC architecture.',
        'Implemented encrypted credentials and role-based access.'
      ],
      'Data Analyst -> Machine Learning Engineer': [
        'Cleaned and analyzed more than 10,000 records.',
        'Reduced SQL reporting time by 45% and built dashboards.',
        'Developed ML models with 85%+ predictive accuracy.'
      ],
      'Applied Programming Facilitator': [
        'Taught Python, algorithms, debugging, and MySQL to 100+ learners.',
        'Led hands-on exercises and project-based mentoring.'
      ]
    };

    return bullets[title] ?? [];
  }
}
