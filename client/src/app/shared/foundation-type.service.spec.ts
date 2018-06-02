import { TestBed, inject } from '@angular/core/testing';

import { FoundationTypeService } from './foundation-type.service';

describe('FoundationTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoundationTypeService]
    });
  });

  it('should be created', inject([FoundationTypeService], (service: FoundationTypeService) => {
    expect(service).toBeTruthy();
  }));
});
