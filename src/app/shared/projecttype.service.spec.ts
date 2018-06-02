import { TestBed, inject } from '@angular/core/testing';

import { ProjecttypeService } from './projecttype.service';

describe('ProjecttypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjecttypeService]
    });
  });

  it('should be created', inject([ProjecttypeService], (service: ProjecttypeService) => {
    expect(service).toBeTruthy();
  }));
});
