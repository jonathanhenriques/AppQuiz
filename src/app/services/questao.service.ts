import { Content } from './prova.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Questao, ResponsePageable } from '../models/Models';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  constructor(
    private http: HttpClient
  ) { }




  // url: string = 'https://sprintquiz.herokuapp.com';
  // url: string = 'http://localhost:8081';
  url = '/questoes';

  getByIdQuestao(id: number):Observable<Questao>{
    return this.http.get<Questao>(environment.url + this.url + `/${id}`);
  }

  getAllQuestao():Observable<ResponsePageable[]>{
    const response = this.http.get<ResponsePageable[]>(environment.url + this.url);
    return response;
  }


  getByTextoQuestao(texto: string):Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url + `/texto/${texto}`);
  }

  getByInstituicaoQuestao(instituicao: string):Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url + `/instituicao/${instituicao}`);
  }

  getByAnoQuestao(ano: Date):Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url + `/ano/${ano}`);
  }

  getByAnoEntreInicialFinalQuestao(anoInicial: Date, anoFinal: Date):Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url + `/ano/${anoInicial}/${anoFinal}`);
  }

  getByAnoAnteriorQuestao(ano: Date):Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url + `/ano/${ano}`);
  }


  getQuestoesByCriadorId(id: number):Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url + `/criador/${id}`);
  }

  postQuestao(questao: Questao):Observable<Questao>{
    return this.http.post<Questao>(environment.url + this.url, questao);
  }

  putQuestao(questao: Questao):Observable<Questao>{
    return this.http.put<Questao>(environment.url + this.url, questao);
  }

  putQuestaoComAlternativa(questao: Questao):Observable<Questao>{
    return this.http.put<Questao>(environment.url + this.url + '/questaoComAlternativas', questao);
  }

  deleteQuestao(id: number){
    return this.http.delete<Questao>(environment.url + this.url + `/${id}`);
  }
}
