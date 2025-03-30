import { Component, HostListener, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header-menu',
  standalone: false,
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
  isScreenLarge: boolean = false; // Verifica se a tela é grande (>= 495px)
  isMenuOpen: boolean = false;  // Controla o estado de abertura do menu (iniciado como aberto)

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Verifica se estamos no navegador antes de acessar o window
    if (isPlatformBrowser(this.platformId)) {
      this.isScreenLarge = window.innerWidth >= 495;
      this.isMenuOpen = window.innerWidth > 494; // Menu aberto se a largura for maior que 495px
    }
  }

  // Monitorar o redimensionamento da janela
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      const width = event.target.innerWidth;

      // Atualiza a largura da tela
      this.isScreenLarge = width >= 495;

      // Atualiza o estado do menu com base na largura
      this.isMenuOpen = width > 494; // O menu será aberto se a largura for maior que 495px
    }
  }

  // Alternar o estado do menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
