import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('avatar', { static: false }) avatarRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  viewResume1() {
    const resumeUrl = '../../assets/Software_Engineer_Resume.pdf';
    window.open(resumeUrl, '_blank');
  }

  viewResume2() {
    const resumeUrl = '../../assets/AI_ML_Engineer_Resume.pdf';
    window.open(resumeUrl, '_blank');
  }

  viewLinkedIn() {
    const linkedInUrl = 'https://www.linkedin.com/in/jayasri-suresh-vani-897879296';
    window.open(linkedInUrl, '_blank');
  }
}
