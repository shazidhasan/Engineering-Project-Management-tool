import { TestBed, inject } from '@angular/core/testing';

import { ProjectpriorityService } from './projectpriority.service';

describe('ProjectpriorityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectpriorityService]
    });
  });

  it('should be created', inject([ProjectpriorityService], (service: ProjectpriorityService) => {
    expect(service).toBeTruthy();
  }));
});
