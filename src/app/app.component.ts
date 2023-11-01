import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [
    new WishItem('An iPhone', true),
    new WishItem('A MacBook'),
    new WishItem('A Tesla')
  ];
  title = 'wishlist';
}
