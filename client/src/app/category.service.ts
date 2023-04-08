import { Injectable } from '@angular/core';
import { Category } from '../../../common/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    new Category(<Category>{ 'id': 1, 'name': 'Pop' }),
    new Category(<Category>{ 'id': 2, 'name': 'Rock' }),
    new Category(<Category>{ 'id': 3, 'name': 'Electronic' }),
    new Category(<Category>{ 'id': 4, 'name': 'Hip-Hop' }),
    new Category(<Category>{ 'id': 5, 'name': 'KPop' }),
    new Category(<Category>{ 'id': 6, 'name': 'Indie' })
  ];

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategorybyId(id: number): Category | null {
    let category = this.categories.find(c => c.id === id);
    if (!category) {
      return null;
    } else
      return category;
  }
}
