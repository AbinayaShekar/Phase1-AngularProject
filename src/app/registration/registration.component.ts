import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  registrationError!: string;
  registrationSuccess: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email:['', [Validators.required]],
      phone:['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const userData = {
        username: this.registrationForm.value.username,
        email:this.registrationForm.value.email,
        phone:this.registrationForm.value.phone,
        password: this.registrationForm.value.password,
        address: this.registrationForm.value.address
      };

      this.http.post<any>('http://localhost:3000/register', userData).subscribe(
        (response) => {
          this.registrationSuccess = true;
          this.registrationError = '';
          this.router.navigate(['/next-steps']);
          // Redirect to add product route upon successful registration
          // this.router.navigateByUrl('/add');
        },
        (error) => {
          this.registrationError = "Registration failed. Please try again later.";
        }
      );
    }
  }
}
