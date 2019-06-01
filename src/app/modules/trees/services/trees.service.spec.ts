import { TestBed } from '@angular/core/testing';

import { TreesService } from './trees.service';

describe('TreesRegistratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreesService = TestBed.get(TreesService);
    expect(service).toBeTruthy();
  });
});
