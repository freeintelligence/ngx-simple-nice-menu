import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNiceMenuComponent } from './simple-nice-menu.component';

describe('SimpleNiceMenuComponent', () => {
  let component: SimpleNiceMenuComponent;
  let fixture: ComponentFixture<SimpleNiceMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleNiceMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNiceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
