import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoriaRamGrupo07Service {

  constructor() { }

  salvar(memoriaRam: any) {
    let memoriasRam = JSON.parse(localStorage.getItem('tbMemoriasRam'));
    if(memoriaRam.id) {
      memoriasRam[memoriaRam.id] = memoriaRam;
    } else {
      memoriasRam.push(memoriaRam);
    }
    localStorage.setItem('tbMemoriasRam', JSON.stringify(memoriasRam));
  }

  excluir(memoriaRam: any) {
    let memoriasRam = JSON.parse(localStorage.getItem('tbMemoriasRam'));
    memoriasRam = memoriasRam.filter(c=> c.id != memoriaRam.id);
    localStorage.setItem('tbMemoriasRam', JSON.stringify(memoriasRam));
    if (memoriasRam.filter(c=> c.id != memoriaRam.id)) {
      return true;
    } else {
      return false;
    }
  }

  listar() {
    let memoriasRam = JSON.parse(localStorage.getItem('tbMemoriasRam'));
    if(!memoriasRam) {
      memoriasRam = [];
      localStorage.setItem('tbMemoriasRam', JSON.stringify(memoriasRam));
    }
    return memoriasRam;
  }

  buscarPorId(id: number) {
    let memoriasRam = JSON.parse(localStorage.getItem('tbMemoriasRam'));
    let memoriaRam = memoriasRam.find(c => c.id == id);
    console.log(memoriaRam);
    return memoriaRam;
  }
}
