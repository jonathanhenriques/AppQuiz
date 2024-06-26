import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { ListaProvasComponent } from './lista-provas/lista-provas.component';
import { HttpClientModule } from '@angular/common/http';
import { ProvaComponent } from './prova/prova.component';
import { QuestaoComponent } from './questao/questao.component';
import { ChangeBgDirective } from './change-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoasVindasComponent,
    ListaProvasComponent,
    ProvaComponent,
    QuestaoComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
