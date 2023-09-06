import { TestBed } from '@angular/core/testing';

import { FoundedItemService } from './founded-item.service';

describe('FoundedItemService', () => {
  let service: FoundedItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoundedItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
