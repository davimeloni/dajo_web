import { TestBed, inject } from '@angular/core/testing';

import { ManageitensService } from './manageitens.service';

describe('ManageitensService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageitensService]
    });
  });

  it('should be created', inject([ManageitensService], (service: ManageitensService) => {
    expect(service).toBeTruthy();
  }));
});
