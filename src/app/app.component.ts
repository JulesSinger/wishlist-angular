import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => item.isComplete,
  (item : WishItem) => !item.isComplete,
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('New Laptop'),
    new WishItem('Trip to Hawaii'),
    new WishItem('New Car')


  ];
  newWishText : string = '';
  listFilter: any = '0';
  title = 'wishlist';

  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }
  

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
