import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from '../../services/games.service';
import { IGame } from '../../models/igame';
import { Subscription } from 'rxjs';  // Importando Subscription para gerenciar a inscrição

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  games: IGame[] = [];  // Array de jogos
  private gamesSubscription: Subscription = new Subscription();  // Para gerenciar a inscrição

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    // Inscrevendo-se no Observable retornado pelo GameService
    this.gamesSubscription = this.gameService.getGames().subscribe({
      next: (games: IGame[]) => {
        this.games = games;  // Atribuindo a lista de jogos ao array 'games'
      },
      error: (err) => {
        console.error('Erro ao carregar jogos', err);  // Tratamento de erro
      }
    });
  }

  ngOnDestroy(): void {
    // Limpa a inscrição quando o componente for destruído
    if (this.gamesSubscription) {
      this.gamesSubscription.unsubscribe();
    }
  }
}
