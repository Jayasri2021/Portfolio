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
      useCase: 'Developed a robust deep learning pipeline using CNN and LSTM architectures to automate the detection of epileptic seizures from raw EEG signals. The system processes complex brainwave data to identify abnormal patterns with high precision, providing clinicians with a rapid diagnostic tool that reduces manual analysis time.',
      techStack: 'Python, NumPy, SciPy, PyTorch, TensorFlow, CNN, LSTM, Signal Processing, EEG Data Analysis',
      image: '../../assets/seizure1-pic.jpg',
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
      useCase: 'Engineered a comprehensive full-stack service management portal aimed at streamlining campus operations. The platform facilitates digitized request workflows, automated approval cycles, and organized service listings with real-time tracking for administrators and students.',
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
      useCase: 'Designed an advanced NLP system utilizing Transformer models to identify political and contextual biases in news media. The system implements controlled text rewriting to mitigate bias while preserving factual integrity, leveraging explainable AI (SHAP, LIME) for transparency.',
      techStack: 'Python, Transformers, BERT, RoBERTa, T5/BART, NLP, Hugging Face, SHAP, LIME, Deep Learning',
      image: '../../assets/bias-pic2.jpg',
      link: 'https://github.com/Jayasri2021/EAI_News_Media_Bias'
    },
    {
      title: 'Adaptive Learning Management System',
      useCase: 'Created an intelligent LMS designed to personalize the educational journey by tracking student performance and engagement. The system dynamically adapts course content delivery and provide educators with actionable insights through a data-driven analytics dashboard.',
      techStack: 'React, Next.js, PostgreSQL, REST APIs, ORM',
      image: '../../assets/adaptive-learning-pic.jpg',
      link: 'https://github.com/Jayasri2021/lms_project'
    },
    {
      title: 'Mood Tunes',
      useCase: 'Developed an interactive web application that leverages machine learning to curate personalized music experiences. By analyzing user-inputted moods or emotional cues, the app recommends tracks that resonate with the user’s current state through smart recommendation algorithms.',
      techStack: 'React, Nest.js, REST APIs, Logistic Regression, PostgreSQL',
      image: '../../assets/moodtunes-pic.jpg',
      link: 'https://github.com/Jayasri2021/Music-Playlist-Generation-model'
    },
    {
      title: 'Gesture2Globe',
      useCase: 'Built a real-time computer vision system to bridge communication gaps for the hearing-impaired. Using OpenCV and MediaPipe, the application captures and translates American Sign Language (ASL) gestures into text with high accuracy under varying environmental conditions.',
      techStack: 'Python, OpenCV, MediaPipe, Deep Learning, Computer Vision, Gesture Recognition, React, Vue.js',
      image: '../../assets/gesture2globe-pic2.jpg',
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
