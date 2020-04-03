import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'simple-nice-menu',
  templateUrl: './simple-nice-menu.component.html',
  styleUrls: ['./simple-nice-menu.component.scss']
})
export class SimpleNiceMenuComponent implements OnInit {

  @Input('items') items: MenuItem[] = [
    { url: '/', text: 'Tus canciones personalizadas' },
    { url: '/website/availables', text: 'Lista de nombres' },
    { url: '/website/our-history', text: 'Nuestra historia' },
    { url: 'http://www.poronponpon.com', text: 'Blog', externalUrl: true },
  ];
  
  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
