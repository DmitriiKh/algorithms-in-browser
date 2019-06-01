import { TestBed } from '@angular/core/testing';

import { CreateTreeService } from './create-tree.service';

describe('CreateArrayRegistratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTreeService = TestBed.get(CreateTreeService);
    expect(service).toBeTruthy();
  });
});
