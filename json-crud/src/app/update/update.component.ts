import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  

  productForm=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    description:new FormControl(''),
    price:new FormControl(''),
    quantity:new FormControl('')
  })
  constructor(private service:CrudServiceService,
    private router:ActivatedRoute,
    private routernav:Router) { }

 ngOnInit(): void {
    //console.log(this.router.snapshot.params['productid']) 
    
    this.service.getById(this.router.snapshot.params['productid']).subscribe((data)=>
    this.productForm=new FormGroup({
      id:new FormControl(data["id"]),
      name:new FormControl(data["name"]),
      description:new FormControl(data["description"]),
      price:new FormControl(data["price"]),
      quantity:new FormControl(data["quantity"])
    })
  )
  }

  submitForm(){
    this.service.update(this.router.snapshot.params['productid'],this.productForm.value).subscribe((data)=>
    {
      console.log(data,"Product Updated Successfully")
      this.routernav.navigateByUrl('/viewproducts')
    });
  }

}
