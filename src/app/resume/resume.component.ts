import { Component } from '@angular/core';

interface TimelineItem {
  title: string;
  subtitle: string;
  duration?: string;
  description: string;
  icon?: string; // path to image or icon class
  category: 'education' | 'experience' | 'certification';
  link?: string;
  linkLabel?: string;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  timelineData: TimelineItem[] = [
    {
      title: 'Conference Presentation',
      subtitle: 'Recognition of Impediments using IoT and ML for Purblind People',
      description: 'Presented work on Computational Intelligence and Communication Networks - eICCICN 2023 on Machine Learning and IoT to identify and address obstacles faced by visually impaired individuals.',
      category: 'certification',
      icon: '../../assets/resume-papers/walking-conf-certi.jpg',
      link: '../../assets/resume-papers/walking-conf-certi.jpg',
      linkLabel: 'View Certification'
    },
    {
      title: 'IEEE Explorer HelmetGuard',
      subtitle: 'HelmetGuard: IoT-Enabled Smart Helmet for Enhanced Safety',
      description: 'Developed a smart helmet using IoT to elevate safety standards in high-risk environments. Integrated algorithms for real-time safety monitoring.',
      category: 'certification',
      icon: '../../assets/resume-papers/helmet-conf-certi.png',
      link: 'https://ieeexplore.ieee.org/document/10396925',
      linkLabel: 'View Publication'
    },
    {
      title: 'Natural Language Processing',
      subtitle: 'NEWS Aggregation System Leveraging NER and Classifiers: Summarization',
      description: 'A geography-aware news aggregation system that classifies news articles by geographic regions and generates region-specific summaries.',
      category: 'certification',
      icon: '../../assets/resume-papers/NLP.jpg',
      link: '../../assets/resume-papers/ACL_FORMATTED_NEWS_AGGREGATION_PAPER.pdf',
      linkLabel: 'View Paper'
    },
    {
      title: 'Ethical Artificial Intelligence',
      subtitle: 'Context-Aware Bias Detection and Controlled Text Rewriting for Fairer News Media',
      description: 'NLP system utilizing Transformer models to identify political and contextual biases in news media.',
      category: 'experience',
      icon: '../../assets/resume-papers/eai.jpg',
      link: '../../assets/resume-papers/News_Media_Bias_FinalPaper.pdf',
      linkLabel: 'View Paper'
    }
  ];
}
