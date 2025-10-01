import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Wikipedia } from './services/wikipedia';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('type-ahead-search');

  constructor(private wikipediaService: Wikipedia) {
    this.wikipediaService.search('Angular').subscribe((results) => {
      console.log(results);
    });
  }
}
