import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent {
  projectId: number = 0;
  projectName: string = '';
  projectDescription: string = '';
  ExpectedDateOfDelivery: string = '';
  TeamOwned: string = '';
  message: string = '';

  constructor(private http: HttpClient,private router: Router) {}

  addProject() {
    const project = {
      projectId: this.projectId,
      projectName: this.projectName,
      projectDescription: this.projectDescription,
      ExpectedDateOfDelivery: this.ExpectedDateOfDelivery,
      TeamOwned: this.TeamOwned
    };

    this.http.post('http://localhost:3000/addProject', project).subscribe(
      (response: any) => {
        this.message = response.message;
      },
      (error) => {
        console.error('Error in adding the product', error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/next-steps']);
  }
}
