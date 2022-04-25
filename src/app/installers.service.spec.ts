import { TestBed } from '@angular/core/testing';

import { InstallersService } from './installers.service';

describe('InstallersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstallersService = TestBed.get(InstallersService);
    expect(service).toBeTruthy();
  });
});
