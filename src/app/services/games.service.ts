import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  // Importando Observable e of do RxJS

@Injectable({
  providedIn: 'root',
})
export class GameService {

  getGames(): Observable<any[]> {  // Alterei para retornar um Observable de um array de objetos
    const games = [
      {
        gameCover: "../../assets/images/control.png",
        gameLabel: "DIGITAL",
        gameType: "DIGITAL | PS4",
        gamePrice: "R$ 129,99"
      },
      {
        gameCover: "../../assets/images/control-blue.png",
        gameLabel: "EXCLUSIVE",
        gameType: "DISC | PS5",
        gamePrice: "R$ 229,99"
      },
      {
        gameCover: "../../assets/images/glasses.png",
        gameLabel: "BEST",
        gameType: "DIGITAL | PS5",
        gamePrice: "R$ 229,99"
      },
      {
        gameCover: "../../assets/images/acessorie.png",
        gameLabel: "NEW",
        gameType: "DIGITAL | PS3",
        gamePrice: "R$ 369,99"
      }
    ];

    return of(games);  // Retorna um Observable que emite a lista de jogos
  }
}
