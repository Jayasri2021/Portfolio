import { Component, OnInit, OnDestroy } from '@angular/core';

interface Project {
  title: string;
  useCase: string;
  techStack: string;
  image?: string;
  link: string;
  types: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: Project[] = [
    {
      title: 'Time-Series Forecasting & Backtesting Pipeline',
      useCase: 'Built an end-to-end forecasting pipeline using historical fuel pricing data,feature engineering, model evaluation, and rolling-window backtesting.',
      techStack: 'Python, XGBoost, Scikit-Learn, Flask, ETL, PostgreSQL',
      image: '../../assets/lumendocs-pic.png',
      link: 'https://github.com/Jayasri2021/Forecasting_Backtesting_Pipeline',
      types: ['ML / AI']
    },
    {
      title: 'LumenDocs - RAG Document Assistant',
      useCase: 'Implemented a Retrieval-Augmented Generation (RAG) system that enhances document interaction through AI-driven question answering. By integrating vector databases and LLM, the assistant retrieves relevant information from large document sets to provide accurate and context-aware responses.',
      techStack: 'Python, LangChain, LLM, FAISS Vector Databases, RAG',
      image: '../../assets/lumendocs-pic.png',
      link: 'https://github.com/Jayasri2021/Document_QA_RAG',
      types: ['ML / AI']
    },
    {
      title: 'Gesture2Globe',
      useCase: 'Built a real-time computer vision system to bridge communication gaps for the hearing-impaired. Using OpenCV and MediaPipe, the application captures and translates American Sign Language (ASL) gestures into text with high accuracy under varying environmental conditions.',
      techStack: 'Python, Deep Learning, Computer Vision, Gesture Recognition, React',
      image: '../../assets/gesture2globe-pic2.jpg',
      link: 'https://github.com/Jayasri2021/Gesture2Globe-ASL-Sign-Detection',
      types: ['ML / AI']
    },
    {
      title: 'MoodTunes',
      useCase: 'Developed an interactive web application that leverages machine learning to curate personalized music experiences. By analyzing user-inputted moods or emotional cues, the app recommends tracks that resonate with the user’s current state through smart recommendation algorithms.',
      techStack: 'React, Nest.js, REST APIs, Logistic Regression, PostgreSQL',
      image: '../../assets/moodtunes-pic.jpg',
      link: 'https://github.com/Jayasri2021/Music-Playlist-Generation-model',
      types: ['ML / AI', 'Full-Stack']
    },
    {
      title: 'Adaptive Learning Management System',
      useCase: 'Created an intelligent LMS designed to personalize the educational journey by tracking student performance and engagement. The system dynamically adapts course content delivery and provide educators with actionable insights through a data-driven analytics dashboard.',
      techStack: 'React, Next.js, PostgreSQL, REST APIs, ORM',
      image: '../../assets/adaptive-learning-pic.jpg',
      link: 'https://github.com/Jayasri2021/lms_project',
      types: ['Full-Stack']
    },
    {
      title: 'AuctionEase - Online Auction Platform',
      useCase: 'Built a real-time auction platform for auction listing, live bidding, transactions, admin features and role-based access.',
      techStack: 'Sprint Boot, Java, MySQL, REST APIs, ETL, React.js',
      image: '../../assets/adaptive-learning-pic.jpg',
      link: 'https://github.com/Jayasri2021/Auction-Ease-Project',
      types: ['Full-Stack']
    },
    {
      title: 'CampusCrew – Centralized Service Platform',
      useCase: 'Engineered a comprehensive full-stack service management portal aimed at streamlining campus operations. The platform facilitates digitized request workflows, automated approval cycles, and organized service listings with real-time tracking for administrators and students.',
      techStack: 'React, REST APIs, Flask API, Supabase, Cypress, PyTest',
      image: '../../assets/campuscrew-pic.gif',
      link: 'https://github.com/Jayasri2021/CampusCrew',
      types: ['Full-Stack']
    },
    {
      title: 'Epileptic Seizure Classification',
      useCase: 'Developed a robust deep learning pipeline using CNN and LSTM architectures to automate the detection of epileptic seizures from raw EEG signals. The system processes complex brainwave data to identify abnormal patterns with high precision, providing clinicians with a rapid diagnostic tool that reduces manual analysis time.',
      techStack: 'Python, SciPy, PyTorch, TensorFlow, CNN, LSTM',
      image: '../../assets/seizure1-pic.jpg',
      link: 'https://github.com/Jayasri2021/Epileptic-Seizure-Classification',
      types: ['ML / AI']
    }
  ];

  filteredProjects: Project[] = [];
  currentFilter: string = 'All';
  filters: string[] = ['All', 'ML / AI', 'Full-Stack'];

  ngOnInit() {
    this.filteredProjects = this.projects;
  }

  ngOnDestroy() {
  }

  filterProjects(filter: string) {
    this.currentFilter = filter;
    if (filter === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => p.types.includes(filter));
    }
  }

  viewOtherProj() {
    const url = 'https://github.com/Jayasri2021?tab=repositories';
    window.open(url, '_blank');
  }
}


