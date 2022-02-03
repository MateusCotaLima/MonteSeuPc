import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Área do Usuário', url: '/principal', icon: 'people' },
    { title: 'Área do Funcionário', url: '/login', icon: 'person' }
  
  ];

}
