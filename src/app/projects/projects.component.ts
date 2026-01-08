import { Component, OnInit, OnDestroy } from '@angular/core';

interface Project {
  title: string;
  useCase: string;
  techStack: string;
  image?: string;
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
      useCase: 'Automates the detection and classification of epileptic seizures from EEG signals to assist clinicians in faster and more accurate diagnosis.',
      techStack: 'Python, NumPy, SciPy, PyTorch / TensorFlow, Deep Learning (CNN, LSTM), Signal Processing, EEG Data Analysis',
      image: '../../assets/seizure2-pic.jpg',
      link: 'https://github.com/Jayasri2021/Epileptic-Seizure-Classification'
    },
    // {
    //   title: 'Biometric Login System',
    //   useCase: 'Provides secure user authentication using fingerprint recognition, reducing reliance on traditional passwords.',
    //   techStack: 'Java, Java Swing, Fingerprint SDK (MFS100), MySQL, MVC Architecture, Biometric Algorithms',
    //   image: '../assets/Biometric-proj.jpg',
    //   link: 'https://github.com/Jayasri2021/Biometric-login-Omega-Binaries-Internship'
    // },
    {
      title: 'CampusCrew – Centralized Service Platform',
      useCase: 'A centralized web platform for managing campus services such as requests, approvals, and service listings.',
      techStack: 'React, REST APIs, Flask API, Supabase, Cypress, PyTest',
      image: '../../assets/campuscrew-pic.gif',
      link: 'https://github.com/Jayasri2021/CampusCrew'
    },
    // {
    //   title: 'Auction-Ease: Online Auction Platform',
    //   useCase: 'Enables real-time online auctions where users can list items, place bids, and track auction activity.',
    //   techStack: 'React, MySQL, REST APIs, Java, SpringBoot',
    //   image: '../assets/auctionease-pic1.jpg',
    //   link: 'https://github.com/Jayasri2021/Auction-Ease-Project'
    // },
    {
      title: 'Context-Aware Bias Detection and Controlled Text Rewriting for Fairer News Media',
      useCase: 'Detects political and contextual bias in news articles and rewrites biased content into more neutral versions.',
      techStack: 'Python, Transformers (BERT, RoBERTa, T5/BART), NLP, Hugging Face, SHAP, LIME, Deep Learning',
      image: '../../assets/bias-pic2.jpg',
      link: 'https://github.com/Jayasri2021/EAI_News_Media_Bias'
    },
    {
      title: 'Adaptive Learning Management System',
      useCase: 'A learning management system that tracks student progress, manages course content, and provides analytics to support adaptive learning.',
      techStack: 'React, Next.js, PostgreSQL, REST APIs, ORM',
      image:
        '../../assets/adaptive-learning-pic.jpg',
      link: 'https://github.com/Jayasri2021/lms_project'
    },
    {
      title: 'Mood Tunes',
      useCase: 'A web application that recommends music based on user mood and preferences.',
      techStack: 'React, Nest.js, REST APIs, Logistic Regression, PostgreSQL',
      image:
        '../../assets/moodtunes-pic.jpg',
      link: 'https://moodtunes-423d2.web.app/'
    },
    {
      title: 'Gesture2Globe',
      useCase: 'Recognizes American Sign Language (ASL) gestures using computer vision to assist communication for the hearing-impaired.',
      techStack: 'Python, OpenCV, MediaPipe, Deep Learning, Computer Vision, Gesture Recognition, React',
      image:
        '../../assets/gesture2globe-pic2.jpg',
      link: 'https://github.com/Jayasri2021/Gesture2Globe-ASL-Sign-Detection'
    }
  ];

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  viewOtherProj() {
    const url = 'https://github.com/Jayasri2021?tab=repositories';
    window.open(url, '_blank');
  }
}
