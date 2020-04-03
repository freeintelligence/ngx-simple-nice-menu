import { NgModule } from '@angular/core';
import { SimpleNiceMenuComponent } from './components/simple-nice-menu/simple-nice-menu.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SimpleNiceMenuComponent],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
  ],
  exports: [SimpleNiceMenuComponent]
})
export class SimpleNiceMenuModule { }
