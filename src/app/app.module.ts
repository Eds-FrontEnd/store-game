import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { CardTitleComponent } from './components/card/card-title/card-title.component';
import { CardPriceComponent } from './components/card/card-price/card-price.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HomeComponent } from './pages/home/home.component';

// Icones
import { MatIconModule } from '@angular/material/icon';
import { TagPipe } from './pipes/tag.pipe';
import { NewsComponent } from './pages/news/news.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CardTitleComponent,
    CardPriceComponent,
    HeaderMenuComponent,
    HeaderLogoComponent,
    HomeComponent,
    TagPipe,
    NewsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
