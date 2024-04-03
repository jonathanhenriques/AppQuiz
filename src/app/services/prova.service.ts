import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Observable, take, tap, map } from 'rxjs';
import { ResponsePageable, Prova } from '../models/Models';
import { environment } from 'src/environments/environment.prod';

export type Content = {

}

@Injectable({
  providedIn: 'root'
})
export class ProvaService {


  constructor(
    private http: HttpClient
  ) { }


  // url: string = 'https://sprintquiz.herokuapp.com';
  // url: string = 'http://localhost:8081';
  url = '/provas';

  // getAllProvas(): Observable<any[]> {
  //   const response = this.http.get<any>(environment.url + this.url).pipe(
  //     tap((resp: any) => { // Aqui você precisa indicar que 'resp' é do tipo 'any'
  //       const content = resp.content;
  //       console.log('listaProva - ' + JSON.stringify(content, null, 2));
  //     }),
  //     map((resp: any) => resp.content)
  //   );
  // }



  getAllProvas(): Observable<ResponsePageable> {
    const response = this.http.get<ResponsePageable>(environment.url + this.url);
    // console.log(JSON.stringify(response, null, 2));
    return response;
  }



  getProvaById(id: number):Observable<Prova>{
    return this.http.get<Prova>(environment.url + this.url + `/${id}`);
  }

  getProvaByCriadorId(id: number):Observable<Prova[]>{
    // return this.http.get<Prova[]>(environment.url + this.url + `/criador/${id}`, this.token);
    return this.http.get<Prova[]>(environment.url + this.url + '/criador/1');
  }

  getProvaByNome(nome: string):Observable<Prova[]>{
    return this.http.get<Prova[]>(environment.url + this.url  + `/nome/${nome}`);
  }

  getProvaByDescricao(descricao: string):Observable<Prova[]>{
    return this.http.get<Prova[]>(environment.url + this.url  + `/${descricao}`);
  }

  postProva(prova: Prova):Observable<Prova>{
    return this.http.post<Prova>(environment.url + this.url , prova);
  }

  putProva(prova: Prova):Observable<Prova>{
    return this.http.put<Prova>(environment.url + this.url , prova);
  }

  deleteProva(id: number){
    return this.http.delete(environment.url + this.url  + `/${id}`);
  }
}


