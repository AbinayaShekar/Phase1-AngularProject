import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'] // Corrected property name and added square brackets
})
export class AddProductComponent {
  id: number = 0;
  name: string = '';
  orderdate: string = '';
  ordertime: string = '';
  message: string = '';

  constructor(private http: HttpClient,private router: Router) {}

  addProduct() {
    const product = {
      id: this.id,
      name: this.name,
      orderdate: this.orderdate,
      ordertime: this.ordertime
    };

    this.http.post('http://localhost:3000/addProduct', product).subscribe(
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
