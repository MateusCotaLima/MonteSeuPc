import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacaMaeGrupo07Service {

  constructor() { }

    salvar(placaMae: any) {
    let placasMae = JSON.parse(localStorage.getItem('tbPlacasMae'));
    if(placaMae.id) {
      placasMae[placaMae.id] = placaMae;
    } else {
      placasMae.push(placaMae);
    }
    localStorage.setItem('tbPlacasMae', JSON.stringify(placasMae));
  }

  excluir(placaMae: any) {
    let placasMae = JSON.parse(localStorage.getItem('tbPlacasMae'));
    placasMae = placasMae.filter(c=> c.id != placaMae.id);
    localStorage.setItem('tbPlacasMae', JSON.stringify(placasMae));
    if (placasMae.filter(c=> c.id != placaMae.id)) {
      return true;
    } else {
      return false;
    }
  }

  listar() {
    let placasMae = JSON.parse(localStorage.getItem('tbPlacasMae'));
    if(!placasMae) {
      placasMae = [];
      localStorage.setItem('tbPlacasMae', JSON.stringify(placasMae));
    }
    return placasMae;
  }

  buscarPorId(id: number) {
    let placasMae = JSON.parse(localStorage.getItem('tbPlacasMae'));
    let placaMae = placasMae.find(c => c.id == id);
    console.log(placaMae);
    return placaMae;
  }
}
