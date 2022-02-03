import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FonteGrupo07Service {

  constructor() { }

  salvar(fonte: any) {
    let fontes = JSON.parse(localStorage.getItem('tbFontes'));
    if(fonte.id) {
      fontes[fonte.id] = fonte;
    } else {
      fontes.push(fonte);
    }
    localStorage.setItem('tbFontes', JSON.stringify(fontes));
  }

  excluir(fonte: any) {
    let fontes = JSON.parse(localStorage.getItem('tbFontes'));
    fontes = fontes.filter(c=> c.id != fonte.id);
    localStorage.setItem('tbFontes', JSON.stringify(fontes));
    if (fontes.filter(c=> c.id != fonte.id)) {
      return true;
    } else {
      return false;
    }
  }

  listar() {
    let fontes = JSON.parse(localStorage.getItem('tbFontes'));
    if(!fontes) {
      fontes = [];
      localStorage.setItem('tbFontes', JSON.stringify(fontes));
    }
    return fontes;
  }

  buscarPorId(id: number) {
    let fontes = JSON.parse(localStorage.getItem('tbFontes'));
    let fonte = fontes.find(c => c.id == id);
    console.log(fonte);
    return fonte;
  }
 
}
