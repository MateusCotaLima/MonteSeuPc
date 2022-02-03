import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacaDeVideoGrupo07Service {

  constructor() { }

    salvar(placaDeVideo: any) {
    let placasDeVideo = JSON.parse(localStorage.getItem('tbPlacasDeVideo'));
    if(placaDeVideo.id) {
      placasDeVideo[placaDeVideo.id] = placaDeVideo;
    } else {
      placasDeVideo.push(placaDeVideo);
    }
    localStorage.setItem('tbPlacasDeVideo', JSON.stringify(placasDeVideo));
  }

  excluir(placaDeVideo: any) {
    let placasDeVideo = JSON.parse(localStorage.getItem('tbPlacasDeVideo'));
    placasDeVideo = placasDeVideo.filter(c=> c.id != placaDeVideo.id);
    localStorage.setItem('tbPlacasDeVideo', JSON.stringify(placasDeVideo));
    if (placasDeVideo.filter(c=> c.id != placaDeVideo.id)) {
      return true;
    } else {
      return false;
    }
  }

  listar() {
    let placasDeVideo = JSON.parse(localStorage.getItem('tbPlacasDeVideo'));
    if(!placasDeVideo) {
      placasDeVideo = [];
      localStorage.setItem('tbPlacasDeVideo', JSON.stringify(placasDeVideo));
    }
    return placasDeVideo;
  }

  buscarPorId(id: number) {
    let placasDeVideo = JSON.parse(localStorage.getItem('tbPlacasDeVideo'));
    let placaDeVideo = placasDeVideo.find(c => c.id == id);
    console.log(placaDeVideo);
    return placaDeVideo;
  }
}