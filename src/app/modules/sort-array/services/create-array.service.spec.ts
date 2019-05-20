import { TestBed } from '@angular/core/testing';

import { CreateArrayService } from './create-array.service';

describe('CreateArrayRegistratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateArrayService = TestBed.get(CreateArrayService);
    expect(service).toBeTruthy();
  });
});
