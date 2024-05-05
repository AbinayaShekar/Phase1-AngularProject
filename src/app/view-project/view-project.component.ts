import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrl: './view-project.component.css'
})
export class ViewProjectComponent {
  projects:any[]=[];
  message:string='';
  constructor(private http:HttpClient,private router: Router){}
  
  ngOnInit():void{
    this.fetchProducts();
  }
  
  fetchProducts(){
    this.http.get('http://localhost:3000/getProject').subscribe((response:any)=>
      {this.projects=response},(error)=>{console.error('error in getting the product',error);});
      }
  
  goBack() {
    this.router.navigate(['/next-steps']);
  }
}
