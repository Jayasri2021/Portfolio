import { Component } from '@angular/core';

interface Project {
  title: string;
  useCase: string;
  bullets: string[];
  techStack: string[];
  image?: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Time-Series Forecasting & Backtesting Pipeline',
      useCase: 'Designed an end-to-end forecasting pipeline using historical fuel pricing data, engineering lag features, rolling-window statistics, trend features, and seasonality features to improve forecast reliability. Evaluated baseline models and XGBoost using MAE, RMSE, and SMAPE across backtesting windows.',
      bullets: [
        'Engineered lag, rolling-window, trend, and seasonality features.',
        'Evaluated baseline models and XGBoost through rolling backtests.',
        'Measured reliability using MAE, RMSE, and SMAPE.'
      ],
      techStack: ['Python', 'Pandas', 'XGBoost', 'Time Series'],
      image: '../../assets/lumendocs-pic.png',
      link: 'https://github.com/Jayasri2021/Forecasting_Backtesting_Pipeline'
    },
    {
      title: 'LumenDocs - RAG Document Assistant',
      useCase: 'Built a Retrieval-Augmented Generation (RAG) pipeline using LangChain, FAISS, and FastAPI to query large PDFs and web documents. Implemented document ingestion, semantic chunking, embedding generation, vector search, retrieval logic, and grounded answer generation. Tested retrieval workflows across 50+ sample document queries to evaluate answer relevance and source grounding.',
      bullets: [
        'Built document ingestion, semantic chunking, and embedding workflows.',
        'Implemented vector retrieval and grounded answer generation.',
        'Tested relevance and grounding across 50+ document queries.'
      ],
      techStack: ['Python', 'LangChain', 'FAISS', 'FastAPI', 'RAG'],
      image: '../../assets/lumendocs-pic.png',
      link: 'https://github.com/Jayasri2021/Document_QA_RAG'
    },
    {
      title: 'Gesture2Globe',
      useCase: 'Built a real-time computer vision system for ASL recognition and translation using MediaPipe hand-keypoint extraction and temporal modeling. Reduced inference latency by 50% through model and pipeline optimization, with backend inference workflows deployed via containerized architecture on Google Cloud Run.',
      bullets: [
        'Built real-time ASL recognition using MediaPipe keypoints.',
        'Reduced inference latency by 50% through pipeline optimization.',
        'Deployed containerized inference workflows on Google Cloud Run.'
      ],
      techStack: ['Python', 'OpenCV', 'MediaPipe', 'FastAPI', 'GCP'],
      image: '../../assets/gesture2globe-pic2.jpg',
      link: 'https://github.com/Jayasri2021/Gesture2Globe-ASL-Sign-Detection'
    },
    {
      title: 'MoodTunes',
      useCase: 'Built a mood-based music recommendation system using NLP-based emotion classification and Spotify playlist API integration. Classified free-text user input into multiple emotion categories and generated context-aware playlist recommendations, tested across 50+ sample user inputs.',
      bullets: [
        'Classified free-text input into emotion categories.',
        'Generated context-aware playlists through Spotify integration.',
        'Tested recommendations across 50+ sample inputs.'
      ],
      techStack: ['React', 'Node.js', 'NLP', 'PostgreSQL'],
      image: '../../assets/moodtunes-pic.jpg',
      link: 'https://github.com/Jayasri2021/Music-Playlist-Generation-model'
    },
    {
      title: 'Adaptive Learning Management System',
      useCase: 'Built a role-based LMS supporting 500+ users with authentication, quiz workflows, reporting, and analytics features. Optimized backend query retrieval time by 50% through database query and dashboard workflow improvements. Designed PostgreSQL-backed workflows to track users, courses, quiz outcomes, and performance metrics.',
      bullets: [
        'Built role-based learning workflows for 500+ users.',
        'Added authentication, quizzes, reporting, and analytics.',
        'Reduced backend query retrieval time by 50%.'
      ],
      techStack: ['React', 'Next.js', 'PostgreSQL', 'REST APIs'],
      image: '../../assets/adaptive-learning-pic2.jpg',
      link: 'https://github.com/Jayasri2021/lms_project'
    },
    {
      title: 'CampusCrew - Centralized Service Platform',
      useCase: 'Built a full-stack campus services platform using React, Flask, and Supabase, implementing service listings, discovery, and tutoring/event workflows with role-based access. Tested core workflows across 50+ sample users, listings, and service requests during development.',
      bullets: [
        'Built service discovery, tutoring, and event workflows.',
        'Implemented role-based access for campus users.',
        'Tested core flows across 50+ sample requests.'
      ],
      techStack: ['React', 'Flask', 'Supabase', 'Cypress', 'PyTest'],
      image: '../../assets/campuscrew-pic.gif',
      link: 'https://github.com/Jayasri2021/CampusCrew'
    },
    {
      title: 'Epileptic Seizure Classification',
      useCase: 'Built a CNN/LSTM-based seizure classification model using EEG signal data and 2D signal transformations, achieving 92% classification accuracy. Applied wavelet transform, t-SNE visualization, and TensorFlow/Keras modeling, with evaluation workflows designed for biomedical signal reliability.',
      bullets: [
        'Built CNN/LSTM models for transformed EEG signals.',
        'Applied wavelet transforms and t-SNE visualization.',
        'Achieved 92% seizure-classification accuracy.'
      ],
      techStack: ['Python', 'TensorFlow', 'CNN', 'LSTM', 'EEG'],
      image: '../../assets/seizure1-pic.jpg',
      link: 'https://github.com/Jayasri2021/Epileptic-Seizure-Classification'
    }
  ];

  viewOtherProj() {
    const url = 'https://github.com/Jayasri2021?tab=repositories';
    window.open(url, '_blank');
  }
}
