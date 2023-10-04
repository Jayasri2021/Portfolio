import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    }
  };

  projects = [
    {
      name: 'Project 1',
      description: 'This is the first project',
      image: 'path-to-image-1.jpg'
    },
    {
      name: 'Project 2',
      description: 'This is the second project',
      image: 'path-to-image-2.jpg'
    },
    // Add more projects as needed
  ];
}
