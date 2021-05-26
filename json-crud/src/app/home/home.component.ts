import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { Product } from '../product';


import {​​​​​​​​ HttpClientModule }​​​​​​​​ from'@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(public crudService: CrudServiceService,
    private router: Router) { }

  ngOnInit() {
    console.log("hi");
    this.crudService.getAll().subscribe((data: Product[])=>{
        this.products = data;
    })  
  }

 
  
  delete(productId)
  {
    this.crudService.delete(productId).subscribe(res => 
    {
      console.log('Product Removed!'),
      this.router.navigateByUrl('/viewproducts')
    });
  }
  


}
