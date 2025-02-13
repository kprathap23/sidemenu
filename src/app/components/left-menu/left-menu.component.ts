import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  imports: [CommonModule],
  styleUrls: ['./left-menu.component.css'],
})
export class LeftMenuComponent implements OnInit {
  categories: any[] = [];
  @Input() selectedCategory: string = '';
  @Output() categorySelected = new EventEmitter<string>();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCategories().subscribe((data) => {
      this.categories = data;

      // Select the first category by default
      if (this.categories.length > 0) {
        this.selectedCategory = this.categories[0].name;
        this.categorySelected.emit(this.selectedCategory);
      }
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
