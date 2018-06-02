import { TestBed, inject } from '@angular/core/testing';

import { ClientCreationDialogService } from './client-creation-dialog.service';

describe('ClientCreationDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientCreationDialogService]
    });
  });

    it('should be created', inject([ClientCreationDialogService], (service: ClientCreationDialogService) => {
    expect(service).toBeTruthy();
  }));
});
