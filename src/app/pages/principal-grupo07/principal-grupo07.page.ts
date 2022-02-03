import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-grupo07',
  templateUrl: './principal-grupo07.page.html',
  styleUrls: ['./principal-grupo07.page.scss'],
})
export class PrincipalGrupo07Page implements OnInit {

  escolhas = {
    escolhaProcessador : null,
    escolhaPlacaMae: null,
    escolhaMemoria: null,
    escolhaPlacaDeVideo: null,
    escolhaArmazenamento: null,
    escolhaFonte: null,
    escolhaGabinete: null,
  }
  nomeProcessador = null;
  nomePlacaMae = null;
  nomeMemoria = null;
  nomePlacaDeVideo = null;
  nomeArmazenamento = null;
  nomeFonte = null;
  nomeGabinete = null;


  constructor() { }

  ngOnInit() {
    this.escolhas = JSON.parse(localStorage.getItem('escolhas'));
    if(this.escolhas.escolhaProcessador != null){
      this.nomeProcessador = this.escolhas.escolhaProcessador.nome;
    }
    if(this.escolhas.escolhaPlacaMae != null){
      this.nomePlacaMae = this.escolhas.escolhaPlacaMae.nome;
    }
    if(this.escolhas.escolhaMemoria != null){
      this.nomeMemoria = this.escolhas.escolhaMemoria.nome;
    }
    if(this.escolhas.escolhaPlacaDeVideo != null){
      this.nomePlacaDeVideo = this.escolhas.escolhaPlacaDeVideo.nome;
    }
    if(this.escolhas.escolhaArmazenamento != null){
      this.nomeArmazenamento = this.escolhas.escolhaArmazenamento.nome;
    }
    if(this.escolhas.escolhaFonte != null){
      this.nomeFonte = this.escolhas.escolhaFonte.nome;
    }
    if(this.escolhas.escolhaGabinete != null){
      this.nomeGabinete = this.escolhas.escolhaGabinete.nome;
    }
  }

}
