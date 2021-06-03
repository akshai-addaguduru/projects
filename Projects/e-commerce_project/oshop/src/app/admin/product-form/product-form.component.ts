import { Router } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;    // $ indicates that this is an observable

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router) {
    this.categories$ = categoryService.getCategories();    // include valuechanges() in new Angular version
  }

  save(product) {       // we save our products to firebase from here and the service 'ProductService'
    // console.log(product);
    this.productService.create(product);  // check create product code in the service of 'product.service'
    this.router.navigate(['/admin/products']);  
    // importing router in const() to route user to a list of products after clicking save button on adding a product...we add route manually <check above line>

  }

  ngOnInit(): void {
  }

}
