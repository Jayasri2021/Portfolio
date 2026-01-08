import { Component } from '@angular/core';

interface Certification {
  title: string;
  provider: string;
  link: string;
  color: string;
}

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {
  certifications: Certification[] = [
    {
      title: 'AI & Machine Learning',
      provider: 'Professional Certification',
      link: '../../assets/certificate-aiml.jpg',
      color: '#4f46e5' // Indigo
    },
    {
      title: 'Python Programming',
      provider: 'Kaggle',
      link: '../../assets/Python_course_certificate_Jayasri.png',
      color: '#f59e0b' // Amber
    },
    {
      title: 'Intro to Machine Learning',
      provider: 'Kaggle',
      link: '../../assets/Intro_to_Machine_Learning_Jayasri.png',
      color: '#10b981' // Emerald
    },
    {
      title: 'Intermediate ML',
      provider: 'Kaggle',
      link: '../../assets/Intermediate_Machine_Learning_Jayasri.png',
      color: '#3b82f6' // Blue
    },
    {
      title: 'Database Management',
      provider: 'Professional Course',
      link: '../../assets/certificate-database.jpg',
      color: '#8b5cf6' // Violet
    },
    {
      title: 'Django Web Development',
      provider: 'Professional Course',
      link: '../../assets/certificate-django.jpg',
      color: '#ef4444' // Red
    },
    {
      title: 'Firebase & Cloud',
      provider: 'Professional Course',
      link: '../../assets/certificate-firebase.jpg',
      color: '#ec4899' // Pink
    },
    {
      title: 'Java Programming',
      provider: 'Professional Course',
      link: '../../assets/certificate-java.jpg',
      color: '#06b6d4' // Cyan
    }
  ];
}