import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoodsComponent } from './components/goods/goods.component';


@Component({
  standalone: true,
  imports: [RouterModule, GoodsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-goods-collection';
}
