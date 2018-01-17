import { TestBed, inject } from '@angular/core/testing';

import { ManageaccountsService } from './manageaccounts.service';

describe('ManageaccountsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageaccountsService]
    });
  });

  it('should be created', inject([ManageaccountsService], (service: ManageaccountsService) => {
    expect(service).toBeTruthy();
  }));
});
