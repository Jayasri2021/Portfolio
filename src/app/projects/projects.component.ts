import { Component, OnInit, OnDestroy } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image?: string;
  video?: string; // Path to video file or gif
  images?: string[]; // Array of images for slideshow
  currentImageIndex?: number;
  prevImageIndex?: number;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {


  projects: Project[] = [
    {
      title: 'Epileptic Seizure Classification',
      description: 'Classification of epileptic seizures using EEG signals and deep learning model pipeline.',
      images: [
        // '../../assets/seizure1-pic.jpg',
        '../../assets/seizure2-pic.jpg',
        '../../assets/seizure3-pic.jpg',
        '../../assets/seizure4-pic.jpg'
      ],
      link: 'https://github.com/Jayasri2021/Epileptic-Seizure-Classification'
    },
    {
      title: 'Biometric Login System',
      description: 'Biometric Login System using Fingerprint Recognition.',
      images: [
        '../assets/Biometric-proj.jpg',
        '../assets/Biometric-proj2.jpg'
      ],
      link: 'https://github.com/Jayasri2021/Biometric-login-Omega-Binaries-Internshipn'
    },
    {
      title: 'News Aggregation System with NER and Summarization',
      description: 'A geography-aware news aggregation system to classify news articles by geographic regions and generate region-specific summaries.',
      images: [
        '../assets/news-proj.jpg',
        '../assets/news-proj2.jpg'
      ],
      link: 'https://github.com/Jayasri2021/News-Summarization-NLP'
    },
    {
      title: 'CampusCrew-Centralized Service Platform',
      description: 'A centralized platform for campus services built with modern web technologies.',
      images: ['../../assets/campuscrew-pic.gif',
        '../assets/campuscrew2-pic.jpg'
      ],
      link: 'https://github.com/Jayasri2021/CampusCrew'
    },
    {
      title: 'Auction-Ease: Online Auction Platform',
      description: 'A modern, real-time online auction platform for transactions between bidders and sellers.',
      images: ['../assets/auctionease-pic1.jpg',
        '../assets/auctionease2-pic.jpg'
      ],
      link: 'https://github.com/Jayasri2021/Auction-Ease-Project'
    },
    {
      title: 'Context-Aware Bias Detection and Controlled Text Rewriting for Fairer News Media',
      description: 'A transformer-based system for detecting and mitigating political bias in news media.',
      images: [
        '../../assets/bias-pic.jpg',
        '../../assets/bias-pic2.jpg',
        '../../assets/bias-pic3.jpg'

      ],
      link: 'https://github.com/Jayasri2021/EAI_News_Media_Bias'
    },
    {
      title: 'Adaptive Learning Management System',
      description: 'A modern Learning Management System (LMS) with progress tracking and analytics for a Database Systems class project.',
      images: [
        '../../assets/adaptive-learning-pic.jpg',
        '../../assets/adaptive-learning-pic2.jpg'
      ],
      link: 'https://github.com/Jayasri2021/lms_project'
    },
    {
      title: 'Mood tunes',
      description: 'A web application for managing adaptive learning resources.',
      images: [
        '../../assets/moodtunes-pic.jpg',
        '../../assets/moodtunes-pic2.jpg'
      ],
      link: 'https://moodtunes-423d2.web.app/'
    },
    {
      title: 'Gesture2Globe',
      description: 'ASL Sign Detection using Gesture Recognition and Computer Vision.',
      images: [
        '../../assets/gesture2globe-pic.jpg',
        '../../assets/gesture2globe-pic2.jpg'
      ],
      link: 'https://github.com/Jayasri2021/Gesture2Globe-ASL-Sign-Detection'
    }
  ];

  private intervals: any[] = [];

  ngOnInit() {
    this.staggerSlideshows();
  }

  ngOnDestroy() {
    this.intervals.forEach(id => clearInterval(id));
  }

  staggerSlideshows() {
    this.projects.forEach((proj, index) => {
      // Initialize after a delay to create staggered "one after another" effect
      setTimeout(() => {
        proj.currentImageIndex = 0;

        if (proj.images && proj.images.length > 1) {
          const intervalId = setInterval(() => {
            proj.prevImageIndex = proj.currentImageIndex;
            proj.currentImageIndex = (proj.currentImageIndex! + 1) % proj.images!.length;
          }, 3000 + (index * 200)); // Varied timing so they don't stay in sync
          this.intervals.push(intervalId);
        }
      }, index * 400); // 400ms delay between each card's start
    });
  }

  viewOtherProj() {
    const url = 'https://github.com/Jayasri2021?tab=repositories';
    window.open(url, '_blank');
  }
}
