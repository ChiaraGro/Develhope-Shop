import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './modules/core/container/container.component';
import { CardsComponent } from './modules/core/components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
