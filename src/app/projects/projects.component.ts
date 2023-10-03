import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  totalProjects = 3;  // Total projects in your dataset
  projectsPerPage = 1;  // Projects to display per page
  currentPage = 1;
  totalPages: number = 0; // Initialize to a default value
  pagedProjects: string[] = []; // 

  constructor() {
    this.calculateTotalPages();
    this.loadPage(this.currentPage);
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalProjects / this.projectsPerPage);
  }
  loadPage(page: number): void {
    // Replace with your data loading logic based on the page number
    // Example: Load data from a service using an HTTP request
    this.pagedProjects = [];  // Replace with your actual data
    for (let i = (page - 1) * this.projectsPerPage; i < page * this.projectsPerPage; i++) {
      if (i < this.totalProjects) {
        this.pagedProjects.push(`Project ${i + 1}`);
      }
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPage(this.currentPage);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPage(this.currentPage);
    }
  }

}
