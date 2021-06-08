import { Product } from './../../models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {
  categories$;    // $ indicates that this is an observable
  product: any;
  id: any;


  constructor(
    categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    this.categories$ = categoryService.getCategories();    // include valuechanges() in new Angular version

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id)
      // this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe(p => this.product = p);  // when that one item is fetched using take, observable is complete
      this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe(p => this.product = p);  // when that one item is fetched using take, observable is complete
    // console.log(this.product);
    // here 'take' helps you to quickly take something (only 1 value here) from an observable and you don't need to specify unsubscribe when using this
  }

  save(product) {       // we save our products to firebase from here and the service 'ProductService'
    // console.log(product);
    if (this.id && this.id!= 'new') {   // have to put this condition as 'new' key word is being used as firebase instance ID
      // console.log(this.id);
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);  // check create product code in the service of 'product.service'
    }
    this.router.navigate(['/admin/products']);
    // importing router in const() to route user to a list of products after clicking save button on adding a product...we add route manually <check above line>

  }
  

  delete() {
    if (!confirm('Are you sure to delete this product?')) return; //not confirm, return..else delete
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit(): void {
  }

}