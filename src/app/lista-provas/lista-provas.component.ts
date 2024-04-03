import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Prova, ResponsePageable } from '../models/Models';
import { ProvaService } from '../services/prova.service';

@Component({
  selector: 'app-lista-provas',
  templateUrl: './lista-provas.component.html',
  styleUrls: ['./lista-provas.component.scss']
})
export class ListaProvasComponent implements OnInit {


  idProva: number = 0;
  name: string = '';

  idProvaParaModal: number = 0;

  listaProvas: Prova[] = [];

  constructor(
    private router: Router,
    private provaService: ProvaService,
  ) { }

  ngOnInit() {

    // UsuarioService.verificaLogado(this.alertas, this.router);
    // this.usuario.id = this.idUsuario;
    // this.findByIdUsuario();
    // this.listaProvas = this.usuario.provas;
    // this.findProvasByCriadorId();

    this.findAllProvas()

  }

  findAllProvas(){
    this.provaService.getAllProvas().subscribe((provas: ResponsePageable) => {
      this.listaProvas = provas.content;
    })
  }

  pegaIdProvaParaModal(id: any) {
    this.idProvaParaModal = id;
  }

  // findByIdUsuario() {
  //   this.UsuarioService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
  //     this.usuario = usuarioResp;

  //   })
  // }

  quiz(id: number) {
    // this.router.navigate(['nav/quiz'], id)
    this.router.navigate(['nav/mural-provas/quiz', id]);
  }

  // findProvasByCriadorId() {
  //   this.provaService.getProvaByCriadorId(this.idUsuario).subscribe((listaProvasResp: Prova[]) => {
  //     this.listaProvas = listaProvasResp;
  //     // listaProvasResp.forEach(e => {
  //     //   console.log(e.nome);
  //     // })
  //   })
  // }

  // findProvasUsuario(){
  //   this.UsuarioService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
  //     this.listaProvas = usuarioResp.provas;
  //     this.listaProvas.forEach(p => {
  //       alert(p.nome);
  //     });
  //   })
  // }



  voltarPagina() {
    window.history.back();
  }



}
