import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit {
products:any[]=[];
message:string='';
constructor(private http:HttpClient,private router: Router){}

ngOnInit():void{
  this.fetchProducts();
}

fetchProducts(){
  this.http.get('http://localhost:3000/getProducts').subscribe((response:any)=>
    {this.products=response},(error)=>{console.error('error in getting the product',error);});
    }

deleteProduct(id : number){
  if (confirm('Are you sure to delete this product?')){
    this.http.delete('http://localhost:3000/deleteProduct/'+id).subscribe((response:any)=>
      {this.message=response.message;this.fetchProducts();},(error)=>{console.error('error in deleting the product',error);});
  }
}

goBack() {
  this.router.navigate(['/next-steps']);
}
}




