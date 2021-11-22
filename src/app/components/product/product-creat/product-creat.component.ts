import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {


  product: Product = {
    name: '',
    price:0
    
  }

  constructor(private productService: ProductService, private router: Router ) { }


  ngOnInit(): void {
    
  }
  
  creatProduct(): void{
    this.productService.creat(this.product).subscribe(() =>{
      this.productService.showMessage('Produto Criado')

      this.router.navigate(['products'])

    })

  }

  cancel(): void{
    this.router.navigate(['products'])
  }
  
}
