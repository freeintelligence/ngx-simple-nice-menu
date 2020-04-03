import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'simple-nice-menu',
  templateUrl: './simple-nice-menu.component.html',
  styleUrls: ['./simple-nice-menu.component.scss']
})
export class SimpleNiceMenuComponent implements OnInit {

  @Input('items') items: MenuItem[] = [];
  @Input('opened') opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hidden(item: MenuItem) {
    return item && typeof item.hidden === 'function' ? item.hidden() : false;
  }

  handle(item: MenuItem) {
    this.opened = false;
    return item && typeof item.handle === 'function' ? item.handle() : undefined;
  }

}
