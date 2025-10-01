import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Wikipedia } from '../../services/wikipedia';
import { Router } from '@angular/router';
import { WikipediaResponse, WikipediaSearchResult } from '../../models/wikipedia.model';

@Component({
  selector: 'app-type-ahead',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './type-ahead.html',
  styleUrl: './type-ahead.scss',
  standalone: true,
})
export class TypeAhead {
  searchInput = new FormControl('');
  searchResults$!: Observable<any[]>;
  isLoading = false;

  private wikipediaService = inject(Wikipedia);
  private router = inject(Router);

  constructor() {
    this.searchResults$ = this.searchInput.valueChanges.pipe(
      debounceTime(300),
      tap(() => (this.isLoading = true)),
      distinctUntilChanged(),
      switchMap((term: any) => {
        if (!term || term.trim() === '') {
          return of([]);
        }

        return this.wikipediaService.search(term).pipe(
          catchError((error) => {
            console.error('Error fetching data', error);
            return of([]);
          })
        );
      }),

      tap(() => (this.isLoading = false))
    );
  }

  redirect(selectedArticle: WikipediaSearchResult) {
    window.open(`http://en.wikipedia.org/wiki?curid=${selectedArticle.pageid}`, '_blank');
  }
}
