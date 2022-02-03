import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-grupo07',
  templateUrl: './inicio-grupo07.page.html',
  styleUrls: ['./inicio-grupo07.page.scss'],
})
export class InicioPage implements OnInit {
  public appPages = [
    { title: 'GerenciarProdutos', url: '../home', icon: 'folder-open', color:"dark" },
    { title: 'Dados do funcionario', url: '../funcionario', icon: 'person', color:"dark" },
    { title: 'Sair', url: '/login', icon: 'log-out', color:"danger"  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
