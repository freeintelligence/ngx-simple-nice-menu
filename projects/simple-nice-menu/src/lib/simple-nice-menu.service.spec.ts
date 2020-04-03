import { TestBed } from '@angular/core/testing';

import { SimpleNiceMenuService } from './simple-nice-menu.service';

describe('SimpleNiceMenuService', () => {
  let service: SimpleNiceMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleNiceMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
