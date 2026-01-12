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
      description: 'Presented work on Computational Intelligence and Communication Networks - e Machine Learning and IoT to identify and address obstacles faced by visually impaired individuals.',
      category: 'certification',
      icon: '../../assets/walking-conf-certi.jpg',
      link: '../../assets/walking-conf-certi.jpg',
      linkLabel: 'View Certification'
    },
    {
      title: 'IEEE Explorer HelmetGuard',
      subtitle: 'Project Innovation',
      description: 'Developed a smart helmet using IoT to elevate safety standards in high-risk environments. Integrated algorithms for real-time safety monitoring.',
      category: 'certification',
      icon: '../../assets/helmet-conf-certi.png',
      link: 'https://ieeexplore.ieee.org/document/10396925',
      linkLabel: 'View Publication'
    }
  ];
}
