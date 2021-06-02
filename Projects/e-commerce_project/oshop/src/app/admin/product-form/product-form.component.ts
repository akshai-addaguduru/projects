import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;    // $ indicates that this is an observable

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();    // include valuechanges() in new Angular version
  }

  save(product) {
    console.log(product);
  }

  ngOnInit(): void {
  }

}
