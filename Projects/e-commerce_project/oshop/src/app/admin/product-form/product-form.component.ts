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
  // product:Product;
  // product: Product;


  constructor(
    categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    this.categories$ = categoryService.getCategories();    // include valuechanges() in new Angular version

    let id = this.route.snapshot.paramMap.get('id');
    if (id)
      // this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe(p => this.product = p);  // when that one item is fetched using take, observable is complete
      this.productService.get(id).valueChanges().pipe(take(1)).subscribe(p => this.product = p);  // when that one item is fetched using take, observable is complete
    // console.log(this.product);
    // here 'take' helps you to quickly take something (only 1 value here) from an observable and you don't need to specify unsubscribe when using this
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
