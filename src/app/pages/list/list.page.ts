// Definir la interfaz
interface MenuItem {
  icon: string;
  text: string;
  href: string;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  constructor() {}

  //declaramos el Array haciendo uso de la estructura definida en la interfaz
  menuItems: MenuItem[] = [
    { icon: 'aperture', text: 'Action-sheet', href: '/action-sheet' },
    { icon: 'analytics', text: 'Alert', href: '/alert' },
  ];
}
