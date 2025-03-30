import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnDestroy {
  @Input() gameCover: string = '';
  @Input() gameLabel: string = '';
  @Input() gameType: string = '';
  @Input() gamePrice: string = '';

  // Exemplo de recursos a serem limpos
  private someResource: any; // Pode ser algum serviço ou observador

  constructor() {
    // Inicialização de recursos, se houver
    this.someResource = null; // Exemplo de atribuição de recursos.
  }

  // ngOnDestroy para limpar recursos e evitar vazamentos de memória
  ngOnDestroy(): void {

    // Se você tivesse algum recurso que precisasse ser cancelado ou desconectado,
    if (this.someResource) {
      this.someResource = null; // Limpando o recurso
    }

    // Adicionalmente, poderia limpar observables, event listeners, etc.
  }
}
