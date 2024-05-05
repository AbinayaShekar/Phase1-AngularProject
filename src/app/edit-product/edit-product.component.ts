import { Component } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  id:number=0;
  name:string='';
  orderdate:string='';
  ordertime:string='';
  message:string='';

  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router){}

  updateProduct(){
  const product={
    id:this.id,
    name:this.name,
    orderdate:this.orderdate,
    ordertime:this.ordertime
  };
  this.http.put('http://localhost:3000/updateProduct',product).subscribe((response:any)=>
    {this.message=response.message;this.router.navigate(['/view'])},(error)=>{console.error('error in updating the product',error);});
}

fetchProducts(){
  this.http.get('http://localhost:3000/getProduct'+ this.id).subscribe((response:any)=>{
     const product=response[0];
     this.name=product.name;
     this.orderdate=product.orderdate;
     this.ordertime=product.ordertime;
    },
    (error)=>{console.error('error in fetching the product',error);});
    }

ngOnInit():void{
  this.route.paramMap.subscribe(params=>{
    const idParm=params.get('id');
    if(idParm!=null){
      this.id=+idParm;
      this.fetchProducts();
    }
    else{
      console.error('Id is missing or null');
    }
  })
}
}
