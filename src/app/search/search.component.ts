import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  searchDecks(): void {
    // Ajoutez votre logique de recherche ici
    console.log('Recherche de decks avec la requête :', this.searchQuery);
  }
}
