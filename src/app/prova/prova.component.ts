import { Component, OnInit } from '@angular/core';
import { Prova } from '../models/Models';
import { ActivatedRoute } from '@angular/router';
import { ProvaService } from '../services/prova.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements OnInit {

  public prova: Prova;
  public idProva: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private provaService: ProvaService
  ) { }

  ngOnInit(): void {
    this.idProva = this.activatedRoute.snapshot.params['id'];
    this.getProvaById(this.idProva);
    // this.buscaListaQuestoes(this.listaIdsQuestoes);
  }

  getProvaById(id: number) {
    this.provaService.getProvaById(id).subscribe((prova: Prova) => {
      this.prova = prova;
      console.log(JSON.stringify(prova, null, 2));

      // this.buscarQuestoesDeProva();
    });
  }

}
