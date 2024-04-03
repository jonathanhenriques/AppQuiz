import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { ListaProvasComponent } from './lista-provas/lista-provas.component';
import { ProvaComponent } from './prova/prova.component';

const routes: Routes = [
  { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },
  { path: 'boas-vindas', component: BoasVindasComponent},
  { path: 'lista-provas', component: ListaProvasComponent},
  { path: 'prova/:id', component: ProvaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
