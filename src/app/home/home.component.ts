import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('avatar', { static: false }) avatarRef!: ElementRef;
  displayedRole = '';
  roleColorClass = 'role-blue';

  private readonly roles = [
    { text: 'Software Engineer', colorClass: 'role-blue' },
    { text: 'Applied AI/ML Engineer', colorClass: 'role-cyan' },
    { text: 'Data Engineer', colorClass: 'role-indigo' }
  ];
  private roleIndex = 0;
  private characterIndex = 0;
  private isDeleting = false;
  private typingTimer?: ReturnType<typeof setTimeout>;

  constructor() { }

  ngOnInit(): void {
    this.runTypingAnimation();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }

  private runTypingAnimation(): void {
    const role = this.roles[this.roleIndex];
    this.roleColorClass = role.colorClass;

    if (!this.isDeleting) {
      this.characterIndex++;
      this.displayedRole = role.text.slice(0, this.characterIndex);

      if (this.characterIndex === role.text.length) {
        this.isDeleting = true;
        this.typingTimer = setTimeout(() => this.runTypingAnimation(), 1500);
        return;
      }
    } else {
      this.characterIndex--;
      this.displayedRole = role.text.slice(0, this.characterIndex);

      if (this.characterIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.typingTimer = setTimeout(() => this.runTypingAnimation(), 350);
        return;
      }
    }

    this.typingTimer = setTimeout(() => this.runTypingAnimation(), this.isDeleting ? 45 : 85);
  }

  viewResume1() {
    const resumeUrl = '../../assets/resume-papers/Jayasri_Suresh_Vani_Resume.pdf';
    window.open(resumeUrl, '_blank');
  }

  viewLinkedIn() {
    const linkedInUrl = 'https://www.linkedin.com/in/jayasri-suresh-vani-897879296';
    window.open(linkedInUrl, '_blank');
  }
}
