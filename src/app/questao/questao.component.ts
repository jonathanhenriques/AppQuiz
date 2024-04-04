import { Component, Input, OnInit } from '@angular/core';
import { Prova, Questao, ResponsePageable } from '../models/Models';
import { QuestaoService } from '../services/questao.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent implements OnInit {

  @Input() prova: Prova;

  public listaQuestoes: Questao[];
  public questaoAtual: number = 0;
  alternativaCorreta: number = 0;
  listaIdsQuestoes: number[] = [];

  constructor(
    private questaoService: QuestaoService
  ) { }

  ngOnInit(): void {
    this.getAllQuestoes();
  }


  getAllQuestoes() {
    this.questaoService.getAllQuestao().subscribe((questoes: any) => {
      this.listaQuestoes = questoes.content;
      console.log(JSON.stringify(questoes, null, 2))
    })
  }

  // getProvaById(id: number) {
  //   this.provaService.getProvaById(id).subscribe((prova: Prova) => {
  //     this.prova = prova;
  //     console.log(JSON.stringify(prova, null, 2));

  //     // this.buscarQuestoesDeProva();
  //   });
  // }


  // buscaListaQuestoes(questoes: number[]){
  //   for(let j = 0; j < questoes.length; j++){
  //     const questao = this.buscaQuestaoPorId(questoes[j]).subscribe((questao: Questao) => {
  //       console.log('questap***' + JSON.stringify(questao, null, 2))
  //     this.listaQuestoes.push(questao)
  //     console.log('buscaListaQuestoes++++++')
  //     console.log(JSON.stringify(this.listaQuestoes[j], null, 2))
  //     })

  //     // console.log(JSON.stringify(this.listaQuestoes[j].texto))
  //   }

  // }

  buscarQuestoesDeProva() {
    if (this.prova.questoes != null) {
        for (let j = 0; j < this.prova.questoes.length; j++) {
            const questao = this.prova.questoes[j];
            if (questao && questao.id !== undefined) {
                this.listaIdsQuestoes.push(questao.id);
                console.log(questao.id);
            }
        }
        this.buscaListaQuestoes(this.listaIdsQuestoes);
    }
}


  buscaQuestaoPorId(id: number): Observable<Questao>{
    return this.questaoService.getByIdQuestao(id)
    //  .subscribe((questao: Questao) => {
    //   console.log('chamou')
    //   console.log(JSON.stringify(questao, null, 2))
    //   return questao;
    // })
  }

  buscaListaQuestoes(idQuestoes: number[]){
    for(let j = 0; j < idQuestoes.length; j++){
      const questao = this.buscaQuestaoPorId(idQuestoes[j]).subscribe((questao: Questao) => {
        console.log('questap***' + JSON.stringify(questao, null, 2))
      this.listaQuestoes.push(questao)
      console.log('buscaListaQuestoes++++++')
      console.log(JSON.stringify(this.listaQuestoes[j], null, 2))
      })

      // console.log(JSON.stringify(this.listaQuestoes[j].texto))
    }

  }

  montaProvaComQuestoes(){
    this.prova.questoes = [];
    this.prova.questoes = this.listaQuestoes;
  }

}
