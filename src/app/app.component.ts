import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wishlist';

  items : WishItem[] = [
    new WishItem('New Laptop'),
    new WishItem('Trip to Hawaii'),
    new WishItem('New Car')
  ];

  filter : any = () => {};




}
