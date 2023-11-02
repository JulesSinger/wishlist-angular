import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
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
  listFilter: string = '0';
  title = 'wishlist';
  visibleItems: WishItem[] = this.items;
  

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  filterChanged(value: string) {
    this.listFilter = value;

    if(value === '0') {
      this.visibleItems = this.items;
    }
    else if(value === '2') {
      this.visibleItems = this.items.filter(item => !item.isComplete);
    }
    else {
      this.visibleItems = this.items.filter(item => item.isComplete);
    }
  }
}
