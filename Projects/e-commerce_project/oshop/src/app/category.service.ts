import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    // return this.db.list('/categories', ref => (ref.orderByChild('name')));    // ref is used in newer angular...cant use query way anymore...orderbychild here sorts by name in the dropdown
    return this.db.list('/categories').snapshotChanges().pipe(
      map((categories: any[]) => categories.map(prod => {
      const payload = prod.payload.val();                                       // these snapshotchanges and pipe(map) should be added like this for new angular versions
      const key = prod.key;
      return <any>{ key, ...payload };
    })));
  }

}