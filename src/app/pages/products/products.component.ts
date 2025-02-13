import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LeftMenuComponent } from '../../components/left-menu/left-menu.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';

@Component({
  selector: 'app-products',
  imports: [LeftMenuComponent, ProductGridComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  isLoading: boolean = false;

  products: any[] = [];
  selectedCategory: string = '';

  constructor(private apiService: ApiService) {}

  onCategorySelected(category: string) {
    this.selectedCategory = category;
    this.isLoading = true; // Start loading
    this.products = []; // Clear products during loading

    this.apiService.getProductsByCategory(category).subscribe(
      (data) => {
        this.products = data.products;

        console.log('====================================');
        console.log(this.products);
        console.log('====================================');

        this.isLoading = false; // Stop loading
      },
      (error) => {
        console.error('Error loading products', error);
        this.isLoading = false;
      }
    );
  }
}
